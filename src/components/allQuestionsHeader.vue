<template lang="html">
  <div>
    <div ref="header" class="headerBackground">
      <div class="headerWrapper">

        <div class="buttonWrapper">
          <router-link to="">
            <button class="goBack"></button>
          </router-link>
        </div>

        <div class="menuButton" @click="searchOptions = !searchOptions"></div>

        <div class="column" :class="{searchOptions}">

          <div class="wrap">
            <h1>QUESTIONS</h1>
            <button class="addQuestion"></button>
          </div>

          <div class="controls questionFilter">
            <div class="dataset">
              <label class="userShelf">
                <input type="radio" name="mode" value="shelf">
                My shelf
              </label>
              <label class="allQuestions">
                <input type="radio" checked name="mode" value="all">
                All questions
              </label>
            </div>

            <div class="dataset mobile italic">
              <div class="selectWrap">
                <select class="normal grey" name="">
                  <option value="shelf">My shelf</option>
                  <option value="all" selected>All questions</option>
                </select>
              </div>
            </div>

            <div class="sortBy recent">
              <span class="italic">Sort by: </span>
              <span @click="sortQuestions('recent')" class="recent">recent</span>
              <span class="italic">or</span>
              <span @click="sortQuestions('hot')" class="hot">hot</span>
            </div>

            <input v-model="search" class="queryField" type="text" placeholder="Search questions">

            <button @click="listenSearch()" class="searchButton">SEARCH</button>
          </div>

        </div>
      </div>
    </div>

    <!-- Placeholder keeping content flow
    coherent when header is in fixed position -->
    <div ref="shadow" class="shadow"></div>

  </div>
</template>

<script>
import bus from '../main';
import rollUpHeader from '../js/rollUpHeader';

export default {
  data() {
    return {
      search: '',
      searchOptions: false,
      listenScroll: null
    }
  },
  methods: {
    listenSearch() {
      bus.$emit('search', this.search);
    },
    sortQuestions(method) {
      // Change active element
      event.target.parentNode.classList.toggle('recent');
      bus.$emit('sort', method)
    }
  },
  mounted() {
    (function() {
      // Attach listener for transforming header into
      // compact form.

      // Header width at which it assumes compact form
      // at which point it should not be subject of
      // tranformation
      const breakingPoint = 544;

      // If device dimensions are below breaking point
      // for 'mobile' header, return
      if (Math.max(screen.availWidth,screen.availHeight) <= breakingPoint) {
        return
      }

      // Determin scrollbar width
      const scrWidth = (function(){
        const div1 = document.createElement('div');
        div1.style.visibility = 'hidden';
        div1.style.overflowY = 'scroll';
        div1.style.width = '100vw';
        document.body.appendChild(div1);
        const div2 = document.createElement('div');
        div2.style.visibility = 'hidden';
        div1.appendChild(div2);
        const width = (div1.offsetWidth - div2.offsetWidth);
        document.body.removeChild(div1);
        return width
      })();

      const header = this.$refs.header;
      const headerWidth = header.offsetWidth;

      // Get viewport diemnsion closer to the header with
      const viewWidth =
      [window.innerWidth, window.innerHeight].find((a)=>{
        return (headerWidth + scrWidth) === a
      })

      // Define handler for scroll event:
      const handler = function() {
        rollUpHeader(header, handler);
      }
      // Attach listener already if condition is met
      if (viewWidth > breakingPoint) {
        document.addEventListener('scroll', handler);
        this.listenScroll = true;
      }

      // Define resize listener to remove scroll handling
      // when viewport drops in size
      window.addEventListener('resize', function(){
        const headerWidth = header.offsetWidth;

        // Define viewport width (lateral dimension)
        const viewWidth =
        [window.innerWidth, window.innerHeight].find((a)=>{
          return (headerWidth + scrWidth) === a
        })

        if (viewWidth <= breakingPoint && this.listenScroll) {
          document.removeEventListener('scroll', handler);
          this.listenScroll = false;
          // Remove style
          const column = header.querySelector('.column');
          const button = header.querySelector('.buttonWrapper');
          column.style = '';
          button.style = '';
        }
        else if (viewWidth > breakingPoint && !this.listenScroll) {
          // Call handler to perform initial header setup
          handler();
          document.addEventListener('scroll',handler);
          this.listenScroll = true;
        }
      });

    }).call(this);
  }
}
</script>

<style lang="css" scoped>

.shadow {
  width: 100%;
  height: 155px;
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
  height: 95px;
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

.menuButton {
  position: absolute;
  display: none;
  margin: 15px 5px;
  top: 0;
  right: 0;
  width: 35px;
  padding: 8px 0;
  border: 2px solid #CCC;
  border-left: none;
  border-right: none;
  background: none;
  z-index: 1;
}

.menuButton::after {
  content: '';
  display: block;
  width: 100%;
  height: 0;
  border-top: 2px solid #CCC;
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

.controls {
  top: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-flow: row wrap;
}

.controls label {
  margin-left: 15px;
  display: flex;
  align-items: center;
}

.controls input[type="radio"] {
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

.controls input[type="radio"]:checked {
  background: black;
  background-clip: content-box;
}

.dataset {
  width: 600px;
  flex: 0 1 auto;
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
}

.dataset.mobile {
  display: none;
  padding: 0;
  background: #fbfbfb;
  flex: 1 1 auto;
}

.dataset.mobile .selectWrap {
  display: inline-block;
  width: 100%;
}

.dataset.mobile .selectWrap select {
  width: 100%;
  border: none;
  outline: none;
  padding: 0 25px 0 10px;
  -webkit-appearance: none;
  font-size: 1em;
  background: none;
  border: 1px solid #EEE;
  height: 30px;
  position: relative;
  z-index: 1;
}

.dataset.mobile .selectWrap select:hover {
  cursor: pointer;
}

.dataset.mobile .selectWrap {
  position: relative;
}

.dataset.mobile .selectWrap::after {
  content: '';
  position: absolute;
  right: 5px;
  top: 10px;
  display: block;
  border: 8px solid transparent;
  border-top-color: #CCC;
  height: 0;
  width: 0;
  z-index: 0;
}

.sortBy {
  flex: 1 1 auto;
  max-width: 190px;
  margin: 0 0 0 10px;
  text-align: right;
  word-spacing: 0.15em;
  padding: 10px 0;
}

.sortBy .recent, .sortBy .hot {
  color: #0266b9;
}

.sortBy .recent:hover, .sortBy .hot:hover {
  cursor: pointer;
}

.sortBy.recent .recent,
.sortBy:not(.recent) .hot {
  color: #a7a9ac;
  text-decoration: underline;
}

.queryField {
  max-width: 600px;
  min-width: 600px;
  flex: 1 1 auto;
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

  .buttonWrapper {
    width: 760px;
    padding: 0 22px;
  }

  .column {
    width: 760px;
  }

  .column .wrap {
    padding-left: 90px;
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
    margin-top: 25px;
    margin-bottom: 5px;
    height: 125px;
  }

  .controls>* {
    margin: 0 10px;
  }

  .controls .queryField {
    min-width: unset;
    max-width: unset;
    width: 60%;
  }

  .controls .searchButton {
    max-width: 150px;
    min-width: 150px;
  }

  .controls .dataset {
    width: auto;
  }

  .controls .sortBy {
    max-width: 150px;
  }

}

/*720px*/
@media (max-width : 45em) {

  .controls .dataset:not(.mobile) {
    display: none;
  }

  .controls .dataset.mobile {
    display: block;
    order: 2;
  }

  .controls .sortBy {
    width: 100%;
    max-width: unset;
  }

  .controls .queryField {
    width: auto;
  }

  .controls .searchButton {
    order: 3;
  }

}

/*544px*/
@media (max-width : 34em) {

  .shadow {
    height: 55px;
  }

  .buttonWrapper {
    top: 10px;
    padding: 0 15px;
  }

  .menuButton {
    display: block;
  }

  .column {
    margin: 10px auto;
    height: 35px;
  }

  .column.searchOptions {
    height: auto;
  }

  .column:not(.searchOptions) .controls {
    display: none;
  }

  .column .wrap {
    padding-left: 65px;
  }

  .column .wrap h1 {
    font-size: 1.5em;
  }


  .controls {
    padding-top: 35px;
  }

  .controls .sortBy {
    padding: 5px 0;
  }

  .controls .queryField {
    width: 100%;
  }

  .controls .dataset {
    width: 40%;
    max-width: 50%;
  }

  .controls>* {
    margin: 5px 10px;
  }

  .controls .searchButton {
    max-width: 50%;
    min-width: 40%;
  }

}

</style>
