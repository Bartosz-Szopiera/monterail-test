<template lang="html">
  <div id="header">
    <div class="column">

      <div class="wrap">
        <h1>QUESTIONS</h1>
        <button class="addQuestion"></button>
      </div>

      <div class="controlls">
        <label>
          <input type="radio" name="mode" value="">
          My shelf
        </label>
        <label>
          <input type="radio" name="mode" value="">
          All questions
        </label>

        <div class="sortBy">
          Sort by:
          <span>recent</span>
          or
          <span>hot</span>
        </div>

        <input class="queryField" type="text" placeholder="Search questions">

        <button class="searchButton">SEARCH</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

* {
  box-sizing: border-box;
}

#header {
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  width: 100%;
  height: 120px;
  background: white;
  box-shadow: 0 1px 2px 0 #CCC;
}

.column {
  position: relative;
  width: 75%;
  max-width: 750px;
  margin: 20px 125px;
}

.wrap {
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

h1, .addQuestion {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2em;
}

.addQuestion {
  margin: 0 15px 0;
  width: 20px;
  height: 20px;
}

.controlls {
  top: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: row wrap;
}

.controlls label {
  margin-left: 15px;
  display: flex;
  align-items: center;
}

.controlls input[type="radio"] {
  margin: 0 5px;
  -webkit-appearance: none;
  background: white;
  width: 14px;
  height: 14px;
  padding: 3px;
  border: 1px solid #444;
  border-radius: 50%;
  outline: none;
  background: none;
}

.controlls input[type="radio"]:checked {
  background: black;
  background-clip: content-box;
}

.sortBy {
  width: 25%;
  margin: 0 0 0 10px;
  text-align: right;
  font-style: italic;
}

.sortBy span {
  font-style: normal;
}

.queryField {
  width: 60%;
  flex: 1 1 auto;
  height: 30px;
  padding: 0 0 0 15px;
  margin: 0;
}

.searchButton {
  height: 30px;
  width: 25%;
  padding: 0;
  margin: 0 0 0 10px;
}

</style>
