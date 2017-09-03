<template lang="html">
  <div class="column">

    <div class="main">

      <div class="header">
        <div class="author avatar"><div @click="listenAvatar()"></div></div>
        <div class="description">
          <div class="action">
            <span @click="listenAvatar()" class="author blue">{{ question.author }}</span>
            <span class="did grey upCase">is asking</span>
            <span class="adjective grey upCase"></span>
            <span class="source grey upCase"></span>
          </div>
          <div class="subject blue italic"><router-link v-bind:to="'/question/' + question.id">{{ question.title }}</router-link></div>
          <!-- <div class="subject blue italic"><router-link to="/question/">{{ question.title }}</router-link></div> -->
          <!-- <div class="subject blue italic">{{ question.title }}</div> -->
        </div>
      </div>

      <div class="activity">
        <div class="author">
          <div class="actionType grey upCase">asked</div>
        </div>
        <div class="counter">
          <div class="number">3</div>
          <p class="italic">more activities</p>
        </div>
        <div class="peer">
          <div class="avatar"></div>
          <div class="actionType">commented</div>
        </div>
        <div class="peer">
          <div class="avatar"></div>
          <div class="actionType">commented</div>
        </div>
        <div class="peer">
          <div class="avatar"></div>
          <div class="actionType">commented</div>
        </div>
        <div class="peer">
          <div class="avatar"></div>
          <div class="actionType">commented</div>
        </div>
      </div>

    </div>

    <div class="sidebar">
      <div class="stats">
        <p><span class="number normal">1</span><span class="italic"> related discussion</span></p>
        <p><span class="number normal">6</span><span class="italic"> peers involved</span></p>
        <p><span class="number normal">3</span><span class="italic"> conversations</span></p>
      </div>
    </div>

  </div>
</template>

<script>
import bus from '../main.js';

export default {
  props: ['question'],
  data() {
    return {
      id: '',
      author: '',
      title: '',
      peers: [],
      related: 0,  // related discussions
      answers: 0,  // conversations
      comments: 0 // total number of comments
    }
  },
  methods : {
    listenAvatar() {
      bus.$emit('showModal');
    }
  },
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
  padding-bottom: 38px;
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

.header {
  display: flex;
  min-height: 90px;
  background: rgb(223,243,253);
}

.header .author.avatar {
  width: 90px;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.header .author.avatar div {
  margin: 0 auto;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: grey;
}

.header .description {
  padding: 15px 15px;
  width: 100%;
}

.header .description .action .author:hover {
  cursor: pointer;
  text-decoration: underline;
}

.header .description .subject {
  font-size: 1.2em;
}

.header .description .subject:hover {
  cursor: pointer;
  text-decoration: underline;
}

.activity {
  display: flex;
  height: 188px;
  color: #888;
}

.activity>* {
  width: 90px;
  height: 100%;
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  align-items: center;
}

.activity>*:not(.author) {
  margin-left: 12px;
}

.activity .author {
  background: rgb(223,243,253);
  justify-content: flex-end;
}

.activity .counter .number {
  color: black;
  height: 0;
  line-height: 0;
  margin-top: 42px;
}

.activity .counter p {
  color: black;
  margin: 0;
  height: 45px;
  line-height: 15px;
  width: 50%;
  text-align: center;
  position: relative;
}

.activity .peer {
  background: rgb(236,236,236);
  background-clip: content-box;
}

.activity .peer .avatar {
  margin-top: 20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: grey;
}

.activity .actionType {
  border-top: 1px solid;
  line-height: 0;
  padding: 15px 0;
  width: 75%;
  text-align: center;
  position: relative;
}

.activity .actionType {
  font-size: 0.65em;
  text-transform: uppercase;
}

.activity .counter p {
  font-size: 0.8em;
  font-style: italic;
}

/*Bullet*/
.activity .peer .actionType::after,
.activity .counter p::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%,50%);
  display: block;
  border: 5px solid;
  border-radius: 50%;
}

.activity .counter p::after {
  border-color: #888;
}

.sidebar {
  flex: 1 1 auto;
  margin: 0 0 0 10px;
  position: relative;
}

.sidebar .stats {
  width: 100%;
  min-height: 188px;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 32px 0 0 25px;
  position: absolute;
  bottom: 38px;
}

.sidebar .stats p {
  font-size: 0.8em;
  margin: 10px 0;
  font-style: italic;
}

.sidebar .stats p span {
  padding: 0 5px;
}


/*Media Queries*/

/*960px*/
@media (max-width : 60em) {

  .column {
    width: 760px;
  }

  .sidebar .stats {
    padding-left: 15px;
  }

}

/*800px*/
@media (max-width : 50em) {

  .column, .main {
    width: 496px;
    display: block;
  }

  .activity .peer:not(:nth-child(3)) {
    display: none;
  }

  .sidebar {
    position: absolute;
    right: 0px;
    width: 180px;
  }

}

/*544px*/
@media (max-width : 34em) {

  .column, .main {
    width: 320px;
  }

  .main .header {
    min-height: 72px;
  }

  .main {
    padding-bottom: 28px;
  }

  .main .activity {
    height: 132px;
  }

  .activity .author {
    display: none;
  }

  .activity>* {
    width: 76px;
  }

  .activity .counter {
    margin: 0;
    background: rgb(236,236,236);
    background-clip: content-box;
    padding: 1px 0 0 0;
  }

  .activity .peer {
    padding: 1px 0 0 0;
    margin-left: 1px;
  }

  .sidebar {
    width: 160px;
  }

  .sidebar .stats {
    min-height: 132px;
  }

}

</style>
