<template>
  <div>
    <input type="text" id="search_input" placeholder="Search">
    <div id="snize_results"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
      searchResults: []
    };
  },
  methods: {
    handleSearch() {
      console.log(window.Searchanise)
      window.Searchanise.search({
        query: this.searchInput,
        onSuccess: this.handleSearchSuccess,
        onError: this.handleSearchError,
      });
    },
    handleSearchSuccess(result) {
      this.searchResults = result.results;
    },
    handleSearchError(error) {
      console.error(error);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>