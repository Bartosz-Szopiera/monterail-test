<template lang="html">
  <div>
    <app-header></app-header>
    <pageBody>
      <questionSummary></questionSummary>
    </pageBody>
  </div>
</template>

<script>
import questionSummary from './questionSummary.vue';
import header from './allQuestionsHeader.vue';
import pageBody from './pageBody.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    'questionSummary':  questionSummary,
    'app-header':       header,
    'pageBody':          pageBody,
  }
}
</script>

<style lang="css" scoped>

</style>
