function loadQuestions() {
  // Check if there are already loaded questions
  if (this._isMounted) {
    let upperQuestionTime = this.questions.shift().time;
    let lowerQuestionTime = this.questions.pop().time;
  }

  // Request data
  const url = 'https://monterail-123.firebaseio.com/questions.json';
  this.$http.get(url).then(
    function(data) {
      return data.json()
    }
  ).then(
    // Process data
    function(data) {
      // Put each question into `questions` array
      // and assign it an id equal to the 'key'.
      for (let key in data) {
      // Assign id
      data[key].id = key;

      // Find each action (answer or comment) and
      // their author and save as metadata in current
      // question
      let actions = [];

      for (let id in data[key].answers) {
        let answer = data[key].answers[id];
        actions.push(['answered', answer.author, Math.random()]);
        for (let id in answer.comments) {
          let comment = answer.comments[id];
          actions.push(['commented', comment.author, Math.random()]);
        }
      }

        // Sort according to assigned random values
        // so that questionSummary component will
        // display some of the random user actions
        // in given question
        actions.sort((a,b) => a[2] - b[2]);

        data[key].actions = actions;

        this.questions.push(data[key]);
      }

      // Sort questions chronologically
      this.questions.sort((quesA, quesB) => {
        return (quesB.time - quesA.time)
      });

      this.filteredQuestions = this.questions;
    }
  );
}

export default {
  methods: {
    loadQuestions
  },
  created: loadQuestions
};
