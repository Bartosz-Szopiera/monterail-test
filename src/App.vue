<template>
  <div>
    <!-- <allQuestions></allQuestions> -->
    <singleQuestion></singleQuestion>
    <!-- <profile></profile> -->
  </div>
</template>

<script>
import allQuestions from './components/allQuestionsPage.vue';
import singleQuestion from './components/singleQuestionPage.vue';
import profile from './components/profile.vue';

export default {
  components: {
    'allQuestions': allQuestions,
    'singleQuestion': singleQuestion,
    'profile': profile,
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
