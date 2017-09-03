<template lang="html">
  <div>
    <app-header></app-header>
    <pageBody>
      <questionSummary
        v-for="question in filteredQuestions"
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
    'pageBody':          pageBody,
  },
  data() {
    return {
      questions: [],
      filteredQuestions: '',
    }
  },
  created() {
    const url = 'https://monterail-123.firebaseio.com/questions.json';
    this.$http.get(url).then(function(data){
      return data.json()
    }).then(function(data){
      for (let key in data) {
        data[key].id = key,
        this.questions.push(data[key]);
      }
    });
    this.filteredQuestions = this.questions;
  },
  mounted() {
    bus.$on('search', (searchTerm) => {
      if (searchTerm === '') {
        this.filteredQuestions = this.questions;
      }

      this.filteredQuestions =
        this.questions.filter((question) => {
        return  (
          question.title.toLowerCase()
          .match(searchTerm.toLowerCase())
          )
        });

    });
  },
}
</script>

<style lang="css" scoped>
</style>
