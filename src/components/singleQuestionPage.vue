<template lang="html">
  <div>
    <app-header></app-header>
    <pageBody>
      <question></question>
      <answer></answer>
      <comment></comment>
      <answer></answer>
    </pageBody>
  </div>
</template>

<script>
import header from './singleQuestionHeader.vue';
import pageBody from './pageBody.vue';
import question from './questionDetails.vue';
import answer from './answer.vue';
import comment from './comment.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    'app-header':     header,
    'pageBody':       pageBody,
    'question':       question,
    'answer':         answer,
    'comment':        comment,
  }
}
</script>

<style lang="css">
</style>
