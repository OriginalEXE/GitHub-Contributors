<script>
import throttle from 'lodash.throttle';
import { searchUsers as searchGitHubUsers, searchRepos as searchGitHubRepos } from '~/utils/github';

let cancelSearchUsers = () => {};
let cancelSearchRepos = () => {};

export default {
  props: {
    searchQuery: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      repo: '',
      repos: [],
      status: 'idle',
      pauseUserSearch: false,
      username: '',
      users: [],
    };
  },
  watch: {
    searchQuery () {
      if (this.pauseUserSearch) {
        this.pauseUserSearch = false;
        return;
      }

      this.username = '';
      this.searchUsers ();
    },
  },
  methods: {
    setFocusOnList () {
      const firstListItem = this.$el.querySelector (
        '.js-selectable-list-items-item-link'
      );

      if (!firstListItem) {
        return;
      }

      firstListItem.focus ();
    },
    setStatus (status) {
      this.status = status;
    },
    setUsername (username) {
      // Temporarily pause the user search so that we can set the query to a
      // chosen username
      this.pauseUserSearch = true;
      this.$emit ('setSearchQuery', username);
      this.repos = [];
      this.username = username;
      this.searchRepos ();
    },
    setUsers ({ items: users }) {
      this.users = users.map (
        user => ({
          label: user.login,
          thumb: user.avatar_url,
        })
      );
    },
    setRepos (repos) {
      this.repos = repos.map (
        repo => ({
          label: repo.name,
          url: `/user/${repo.full_name}`,
        })
      );

      // To allow for easier keyboard navigation, we steal the focus
      // after the repos are shown and place it on the first item in a list
      if (this.repos.length) {
        this.$nextTick (() => {
          this.setFocusOnList ();
        });
      }
    },
    searchUsers: throttle (function searchUsers () {
      cancelSearchUsers ();

      this.setStatus ('searchingUsers');

      cancelSearchUsers = searchGitHubUsers ({
        query: this.searchQuery,
      })
        .fork (
          (error) => {
            this.setStatus ('error');

            if (console !== undefined) {
              console.error (error);
            }
          },
          ({ data = {} }) => {
            this.setUsers (data);
            this.setStatus ('idle');
          },
        );
    }, 300),
    searchRepos: throttle (function searchRepos () {
      cancelSearchRepos ();

      this.setStatus ('searchingRepos');

      cancelSearchRepos = searchGitHubRepos ({
        username: this.username,
      })
        .fork (
          (error) => {
            this.setStatus ('error');

            if (console !== undefined) {
              console.error (error);
            }
          },
          ({ data = [] }) => {
            this.setRepos (data);
            this.setStatus ('idle');
          },
        );
    }, 300),
  },
  render () {
    return this.$scopedSlots.default ({
      username: this.username,
      users: this.users,
      setUsername: this.setUsername,
      status: this.status,
      repo: this.repo,
      repos: this.repos,
    });
  },
};
</script>
