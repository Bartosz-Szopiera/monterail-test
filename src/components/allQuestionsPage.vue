<template lang="html">
  <div>
    <app-header></app-header>
    <pageBody>
      <questionSummary
        v-for="question in this.displayQuestions"
        v-bind:question="question"
        v-bind:key="question.id">
      </questionSummary>
      <div class="column">
        <div class="main">
          <button class="normal" @click="questionsLimit += 5">
            <p v-if="questionsLimit < this.questions.length">Show more questions</p>
            <p v-else="true">No more questions to show</p>
          </button>
        </div>
      </div>
    </pageBody>
  </div>
</template>

<script>
import questionSummary from './questionSummary.vue';
import header from './allQuestionsHeader.vue';
import pageBody from './pageBody.vue';
import bus from '../main.js';
import loadQuestions from '../mixins/loadQuestions';

export default {
  components: {
    'questionSummary':  questionSummary,
    'app-header':       header,
    'pageBody':         pageBody,
  },
  data() {
    return {
      questions: [],
      searchTerm: '',
      sort: 'recent',
      questionsLimit: 5
    }
  },
  computed: {
    filteredQuestions() {
      // 'Un-filter' questions if query is empty
      if (this.searchTerm === '') return this.questions

      let filtered = (
        this.questions.filter((question) => {
          return (
            question.title.toLowerCase()
            .match(this.searchTerm.toLowerCase())
          )
        })
      );

      return filtered
    },
    sortedQuestions() {
      // Data reveiced from the server is already in
      // chronological so no further sorting is needed
      if (this.sort === 'recent') {
        return this.filteredQuestions
      }

      let sorted = [...this.filteredQuestions];

      // Filter according to the activity
      sorted.sort((quesA,quesB) => {
          return (quesB.actions.length - quesA.actions.length)
        });

      return sorted
    },
    displayQuestions() {
      return this.sortedQuestions.slice(0,this.questionsLimit)
    }
  },
  mounted() {
    // Start listening 'search' event on 'bus' instance
    bus.$on('search', (searchTerm) => {
      this.searchTerm = searchTerm;
    });
    // Start listening 'sort' event
    bus.$on('sort', (method) => {
      this.sort = method;
    });
  },
  mixins: [loadQuestions]
}
</script>

<style lang="css" scoped>

.column {
  position: relative;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
}

.main {
  flex: 0 0 auto;
  padding-bottom: 20px;
  width: 600px;
}

.main >* {
  z-index: 1;
  position: relative;
}

/*Shadow*/
.main::after {
  content: '';
  position: absolute;
  display: block;
  left: 4px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: transparent;
  box-shadow: -2px 0 2px 0 #EEE, 2px 0 2px 0 #EEE;
  border-bottom: 2px solid rgba(223,243,253,1);
  z-index: 0;
}

button {
  border: none;
  background: none;
  -webkit-appearance: none;
  font-size: 1em;
  color: #E00;
}

/*Media Queries*/

/*960px*/
@media (max-width : 60em) {

  .column {
    width: 760px;
  }

}

/*800px*/
@media (max-width : 50em) {

  .column, .main {
    width: 100%;
    display: block;
  }

}

/*544px*/
@media (max-width : 34em) {

  .main .header {
    min-height: 72px;
  }

  .main {
    padding-bottom: 28px;
  }

}

</style>
