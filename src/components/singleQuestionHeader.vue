<template lang="html">
  <div>
    <div class="headerBackground">
      <div class="headerWrapper">

        <div class="buttonWrapper">
          <router-link to="/">
            <button class="goBack"></button>
          </router-link>
        </div>

        <div class="column">

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

    <!-- Placeholder keeping content flow
    coherent when header is in fixed position -->
    <div class="shadow"></div>

  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style lang="css" scoped>

.shadow {
  width: 100%;
  height: 115px;
}

.headerBackground {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #FFF;
  position: fixed;
  z-index: 2;
}

.headerWrapper {
  width: 100%;
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

.buttonWrapper {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50px;
  width: 90%;
  height: 0;
  max-width: 1100px;
  transform: translate(-50%,0);
  z-index: 1;
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

.activity p {
  margin: 10px 0;
}

.activity .number {
  padding: 0 8px;
}


/*Media Queries*/

/*960px*/
@media (max-width : 60em) {

  .buttonWrapper {
    width: 760px;
    padding: 0 22px;
  }

  .column {
    width: 760px;
  }

  .column .wrap {
    margin-left: 90px;
  }

}

/*800px*/
@media (max-width : 50em) {

  .buttonWrapper {
    width: 100%;
    padding: 0 22px;
    top: 25px;
  }

  .column {
    width: 100%;
    display: block;
  }

  .column {
    margin-top: 25px;
    height: 75px;
  }

  .activity {
    padding-right: 20px;
  }

}


/*544px*/
@media (max-width : 34em) {

  .buttonWrapper {
    top: 10px;
    padding: 0 15px;
  }

  .shadow {
    height: 55px;
  }

  .column {
    margin: 10px auto;
    height: 35px;
  }

  .column .wrap {
    width: 100%;
    padding-left: 65px;
    margin: 0;
    justify-content: space-between;
  }

  .column .wrap h1 {
    font-size: 1.5em;
  }

  .activity {
    display: none;
  }

}

</style>
