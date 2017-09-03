import allQuestions from './components/allQuestionsPage.vue';
import singleQuestion from './components/singleQuestionPage.vue';

export default [
  { path: '/', component: allQuestions},
  { path: '/question/:id', component: singleQuestion},
];
