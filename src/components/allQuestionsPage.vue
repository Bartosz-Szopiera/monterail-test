<template lang="html">
  <div>
    <app-header></app-header>
    <pageBody>
      <questionSummary
        v-for="question in this.sortedQuestions"
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
      searchTerm: '',
      sort: 'recent',
    }
  },
  computed: {
    filteredQuestions() {
      // 'Un-filter' questions if query is empty
      if (this.searchTerm === '') return this.questions

      let filtered = (
        this.questions.filter((question) => {
          return (
            question.title.toLowerCase()
            .match(this.searchTerm.toLowerCase())
          )
        })
      );

      return filtered
    },
    sortedQuestions() {
      // Data reveiced from the server is already in
      // chronological so no further sorting is needed
      if (this.sort === 'recent') {
        return this.filteredQuestions
      }

      let sorted = [...this.filteredQuestions];

      // Filter according to the activity
      sorted.sort((quesA,quesB) => {
          return (quesB.actions.length - quesA.actions.length)
        });

      return sorted
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
        // Assign id
        data[key].id = key;

        // Find each action (answer or comment) and
        // their author and save as metadata in current
        // question
        let actions = [];

        for (let id in data[key].answers) {
          let answer = data[key].answers[id];
          actions.push(['answered', answer.author, Math.random()]);
          for (let id in answer.comments) {
            let comment = answer.comments[id];
            actions.push(['commented', comment.author, Math.random()]);
          }
        }

        // Sort according to assigned random values
        // so that questionSummary component will
        // display some of the random user actions
        // in given question
        actions.sort((a,b) => a[2] - b[2]);

        data[key].actions = actions;

        this.questions.push(data[key]);
      }

      // Sort questions chronologically
      this.questions.sort((quesA, quesB) => {
        return (quesB.time - quesA.time)
      });

      this.filteredQuestions = this.questions;
    });
  },
  mounted() {
    // Start listening 'search' event on 'bus' instance
    bus.$on('search', (searchTerm) => {
      this.searchTerm = searchTerm;
    });
    // Start listening 'sort' event
    bus.$on('sort', (method) => {
      this.sort = method;
    });
  }
}
</script>

<style lang="css" scoped>
</style>
