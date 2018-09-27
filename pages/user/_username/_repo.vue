<script>
import 'chartist/dist/chartist.css';
import { getContributorsForRepo as getGitHubContributorsForRepo } from '~/utils/github';


export default {
  data () {
    return {
      chartInstance: null,
      chartOptions: {
        axisX: {
          onlyInteger: true,
        },
        axisY: {
          offset: 100,
        },
        reverseData: true,
        horizontalBars: true,
      },
    };
  },
  computed: {
    chartData () {
      return {
        labels: this.contributors.map (
          contributor => contributor.name
        ),
        series: [
          this.contributors.map (
            contributor => contributor.contributions
          ),
        ],
      };
    },
  },
  watch: {
    chartData (newChartData) {
      if (!this.chartInstance) {
        return;
      }

      this.chartInstance.update (newChartData);
    },
  },
  asyncData ({ params: { username = '', repo = '' } = {}, error }) {
    if (!repo) {
      return {};
    }

    return getGitHubContributorsForRepo ({
      username,
      repo,
    })
      .promise ()
      .then (
        ({ data, status }) => {
          if (status === 404) {
            return error ({ statusCode: 404, message: 'Could not find this repository' });
          }

          if (status !== 200) {
            return error ({ statusCode: status, message: 'Could not load data for this repository' });
          }

          return {
            contributors: data.slice (0, 10).map (
              item => ({
                name: item.login,
                contributions: item.contributions,
              })
            ),
          };
        }
      )
      .catch (() => {
        error ({ statusCode: 503, message: 'Could not load data for this repository' });
      });
  },
  mounted () {
    this.initializeChart ();
  },
  methods: {
    initializeChart: async function initializeChart () {
      const { default: Chartist } = await import ('chartist');

      this.chartInstance = new Chartist.Bar (
        this.$refs.contributorsChart,
        this.chartData,
        this.chartOptions,
      );
    },
  },
};
</script>

<template>
  <div class="UserPage-repo">
    <p>
      Contributors statistics for the repository:
    </p>
    <no-ssr placeholder="Loading the chart...">
      <div
      ref="contributorsChart"
      class="ct-chart ct-square"
      />
    </no-ssr>
    <p>
      <nuxt-link to="/search">
        Back to search
      </nuxt-link>
    </p>
  </div>
</template>

<style lang="scss">
.UserPage-repo .ct-series-a .ct-bar {
  stroke: $primary-color;
}

.UserPage-repo .ct-perfect-fourth::before {
  padding-bottom: 100%;
}
</style>
