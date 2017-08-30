<template lang="html">
  <div class="">
    <app-header></app-header>
    <questionSummary></questionSummary>
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

<style lang="css">
</style>
