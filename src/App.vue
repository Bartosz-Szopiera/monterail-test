<template>
  <div>
    <profile v-if="profileModal" @close="profileModal = false" ></profile>
    <router-view></router-view>
  </div>
</template>

<script>
import allQuestions from './components/allQuestionsPage.vue';
import singleQuestion from './components/singleQuestionPage.vue';
import profile from './components/profile.vue';
import bus from './main.js';

export default {
  components: {
    'allQuestions': allQuestions,
    'singleQuestion': singleQuestion,
    'profile': profile,
  },
  data () {
    return {
      profileModal: false,
    }
  },
  methods: {
  },
  mounted() {
    bus.$on('showModal', ()=> {
      this.profileModal = true;
    });
  }
}
</script>

<style>
</style>
