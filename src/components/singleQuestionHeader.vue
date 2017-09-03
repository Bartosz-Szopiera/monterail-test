<template lang="html">
  <div class="headerBackground">
    <div class="headerWrapper">
      <div class="column">

        <router-link to="/">
          <button class="goBack"></button>
        </router-link>

        <div class="wrap">
          <h1>QUESTIONS</h1>
          <button class="addQuestion"></button>
        </div>

        <div class="activity">
          <p class="italic">Last time discussed <span class="number normal timeUnit">1</span> <span class="timeUnit">day</span> ago
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  }
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
  height: 55px;
}

.goBack {
  border: 1px solid #a7a9ac;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: white;
  line-height: 0;
  color: #a7a9ac;
  font-size: 2em;
  font-family: courier;
  font-weight: lighter;
  position: absolute;
  left: -60px;
}

.goBack::after {
  content: '<';
  position: relative;
  top: 1px;
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

.activity {
  float: right;
}

.activity .number {
  padding: 0 8px;
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
    height: 75px;
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
