export default {
  methods: {
    vote(x, path) {

      const elType = Object.keys(this.$props)[2];
      let votes = this[elType].votes;

      if (x<0 && votes === 0) return

      votes += x;

      const url = `https://monterail-123.firebaseio.com/questions/${path}/votes.json`;
      this.$http.put(url, votes).then(function(data){
        console.log(data);
      });

      this[elType].votes = votes
    }
  }
}
