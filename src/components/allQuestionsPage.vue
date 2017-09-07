<template lang="html">
  <div>
    <app-header></app-header>
    <pageBody>
      <questionSummary
        v-for="question in this.filteredQuestions"
        v-bind:question="question"
        v-bind:key="question.id">
      </questionSummary>
    </pageBody>

  </div>
</template>

<script>
import questionSummary from './questionSummary.vue';
import header from './allQuestionsHeader.vue';
import pageBody from './pageBody.vue';
import bus from '../main.js';

export default {
  components: {
    'questionSummary':  questionSummary,
    'app-header':       header,
    'pageBody':         pageBody,
  },
  data() {
    return {
      questions: [],
      // filteredQuestions: '',
      searchTerm: ''
    }
  },
  computed: {
    filteredQuestions() {
      // 'Un-filter' questions if query is empty
      if (this.searchTerm === '') {
        return this.questions;
      }

      return (
        thisQuestions.filter((question) => {
          return (
            question.title.toLowerCase()
            .match(this.searchTerm.toLowerCase())
          )
        })
      )

    }
  },
  created() {
    // Request data
    const url = 'https://monterail-123.firebaseio.com/questions.json';
    this.$http.get(url).then(function(data){
      return data.json()
    }).then(function(data){
      // Put each question into `questions` array
      // and assign it an id equal to the 'key'.
      for (let key in data) {
        data[key].id = key,
        this.questions.push(data[key]);
      }
    });
    this.filteredQuestions = this.questions;
  },
  mounted() {
    // Start listening 'search' event on 'bus' instance
    bus.$on('search', (searchTerm) => {
      this.searchTerm = searchTerm;
    });
  }
}
</script>

<style lang="css" scoped>
</style>
