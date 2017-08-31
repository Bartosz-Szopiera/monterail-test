<template lang="html">
  <div>
    <div class="headerBackground">
      <div class="headerWrapper">
        <!-- <app-header></app-header> -->
      </div>
    </div>
    <div class="questionsBackground">
      <div class="questionsWrapper">
        <questionSummary></questionSummary>
      </div>
    </div>
  </div>
</template>

<script>
import questionSummary from './questionSummary.vue';
import header from './header.vue';

export default {
  components: {
    'questionSummary':  questionSummary,
    'app-header':       header,
  }
}
</script>

<style lang="css" scoped>

.headerBackground {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #FFF;
  position: relative;
  z-index: 1;
}

.headerWrapper {
  width: 100vw;
  flex: 0 0 auto;
  box-shadow: 0 0px 3px 0 #CCC;
}


.questionsBackground {
  margin: 0 auto;
  width: 90%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  overflow: visible;
  background: rgb(251,251,251);
  position: relative;
  z-index: 0;
}

.questionsWrapper {
  width: 100vw;
  flex: 0 0 auto;
  background: none;
}

</style>
