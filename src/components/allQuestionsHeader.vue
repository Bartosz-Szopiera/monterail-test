<template lang="html">
  <div class="headerBackground">
    <div class="headerWrapper">
      <div class="column">

        <div class="wrap">
          <h1>QUESTIONS</h1>
          <button class="addQuestion"></button>
        </div>

        <div class="controlls questionFilter">
          <div class="dataset">
            <label class="userShelf">
              <input type="radio" name="mode" value="shelf">
              My shelf
            </label>
            <label class="allQuestions">
              <input type="radio" name="mode" value="all">
              All questions
            </label>
          </div>

          <div class="sortBy">
            <span class="italic">Sort by: </span>
            <span class="recent active">recent</span>
            <span class="italic">or</span>
            <span class="hot">hot</span>
          </div>

          <input class="queryField" type="text" placeholder="Search questions">

          <button class="searchButton">SEARCH</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
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

.column {
  position: relative;
  width: 80%;
  max-width: 800px;
  margin: 45px auto 15px auto;
  height: 95px;
}

.wrap {
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.wrap .addQuestion {
  border: none;
  border-radius: 50%;
  background: #0266b9;
  color: white;
  line-height: 0;
  font-size: 150%;
}

.wrap .addQuestion::after {
  content: '+';
  display: inline;
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

.dataset {
  width: 600px;
  flex: 0 1 auto;
  display: flex;
  justify-content: flex-end;
}

.sortBy {
  flex: 1 1 auto;
  max-width: 190px;
  margin: 0 0 0 10px;
  text-align: right;
  word-spacing: 0.15em;
}

.sortBy .recent, .sortBy .hot {
  color: #0266b9;
}

.sortBy .recent:hover, .sortBy .hot:hover {
  cursor: pointer;
}

.sortBy .recent.active, .sortBy .hot.active {
  color: #a7a9ac;
  text-decoration: underline;
}

.queryField {
  width: 600px;
  flex: 0 1 auto;
  height: 30px;
  padding: 0 0 0 15px;
  margin: 0;
  font-family: 'Signika', sans-serif;
  color: rgb(107, 107, 107);
  border: 1px solid #eeeeee;
  background: #fbfbfb;
  outline: none;
}

.searchButton {
  height: 30px;
  max-width: 190px;
  flex: 1 1 auto;
  padding: 0;
  margin: 0 0 0 10px;
  background: white;
  border: 1px solid #cccecf;
  box-shadow: 0 0 1px 0 #e1e2e3;
  color: #a7a9ac;
  font-weight: bold;
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
    width: 496px;
    display: block;
  }

  .column {
    margin-top: 25px;
    margin-bottom: 5px;
    height: 125px;
  }

  .controlls .dataset {
    flex: 1 1 auto;
    order: 2;
    width: auto;
    justify-content: space-around;
  }

  .controlls .searchButton {
    flex: 2 0 auto;
    order: 3;
  }

}


/*544px*/
@media (max-width : 34em) {

  .column, .main {
    width: 320px;
  }

  .column .wrap h1 {
    font-size: 1.5em;
  }

}

</style>
