<template lang="html">
  <div>
    <app-header></app-header>
    <pageBody>
      <question
        :question="question"
        :path="id"
        :replies="question.answers === undefined ? 0 : Object.keys(question.answers).length">
      </question>
      <template
        v-for="(answer, ansKey) in question.answers">
        <answer :answer="answer"
          :commented="answer.comments !== undefined"
          :path="`${id}/answers/${ansKey}`"
          v-bind:key="answer.id">
        </answer>
        <comment
          v-for="(comment, comKey) in answer.comments"
          :comment="comment"
          :path="`${id}/answers/${ansKey}/comments/${comKey}`"
          :commented="comKey !== Object.keys(answer.comments).pop()"
          v-bind:key="comment.id">
        </comment>
      </template>
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
      question: {},
      id: '',
    }
  },
  components: {
    'app-header':     header,
    'pageBody':       pageBody,
    'question':       question,
    'answer':         answer,
    'comment':        comment,
  },
  methods: {
  },
  computed: {
  },
  created() {
    const id = this.$route.params.id;
    this.id = id;

    const url = `https://monterail-123.firebaseio.com/questions/${id}.json`;
    console.log(url);
    this.$http.get(url).then(function(data){
      return data.json()
    }).then(function(data){
      this.question = data;
    });
  }
}
</script>

<style lang="css">
</style>
