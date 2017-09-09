<template>
  <div>
    <profile ref="profile" v-if="profileModal"></profile>
    <router-view></router-view>
  </div>
</template>

<script>
import allQuestions from './components/allQuestionsPage.vue';
import singleQuestion from './components/singleQuestionPage.vue';
import profile from './components/profile.vue';
import bus from './main.js';
import scrollEvent from './js/scrollEvent';

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
  mounted() {
    // console.log(this);
    bus.$on('showModal', ()=> {
      this.profileModal = true;
      // document.body.style.overflowY = 'hidden';
      scrollEvent.disableScroll();
    });
    bus.$on('closeModal', ()=>{
      this.profileModal = false;
      // document.body.style.overflowY = 'scroll';
      scrollEvent.enableScroll();
    });
  }
}
</script>

<style>
</style>
