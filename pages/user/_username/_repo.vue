<script>
import { getContributorsForRepo as getGitHubContributorsForRepo } from '~/utils/github';

export default {
  asyncData ({ params: { username = '', repo = '' } = {}, error }) {
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
            contributors: data.map (
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
};
</script>

<template>
  <div>
    This is a repo!
  </div>
</template>
