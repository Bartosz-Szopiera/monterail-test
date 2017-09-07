<template lang="html">
  <div>
    <div class="column">

      <div class="main">

        <div class="answer">
          <div class="author avatarBox">
            <div @click="busEvent('showModal')" class="avatar"></div>
          </div>
          <div class="content">
            <div class="meta">
              <span @click="busEvent('showModal')" class="author blue userName">{{ comment.author }}</span>
              <span class="grey upCase">commented it</span>
              <span class="grey">&#8226;</span>
              <span class="time italic">yesterday</span>
            </div>
            <div class="text">{{ comment.content }}</div>
          </div>
        </div>

      </div>

      <div class="sidebar">
        <div class="votes">
          <p>
            <span class="number">{{ comment.votes }}</span>
            <span class="italic"> upvotes</span>
          </p>
          <div class="buttons">
            <button @click="vote(1, path)" class="upvote arrowUp blue"></button>
            <button @click="vote(-1, path)" class="downvote arrowDown blue"></button>
          </div>
        </div>
      </div>

    </div>

    <div v-if="!commented" class="reply">
      <button class="box normal">
        <span class="actionCall upCase">Continue</span>
         discussion
      </button>
    </div>

  </div>
</template>

<script>
import voteMixin from '../mixins/voteMixin';
import bus from '../main.js';

export default {
  props: ['comment', 'path', 'commented'],
  methods : {
    busEvent(eventName) {
      bus.$emit(eventName);
    }
  },
  mixins: [voteMixin],
}
</script>

<style lang="css" scoped>

.column {
  position: relative;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
}

.main {
  margin-left: 90px;
  flex: 1 1 auto;
  width: 510px;
  max-width: 510px;
  min-width: 510px;
  border-bottom: 1px solid transparent;
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
  left: 90px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: transparent;
  box-shadow: -2px 0 2px 0 #EEE, 2px 0 2px 0 #EEE;
  border-bottom: 1px solid rgba(223,243,253,0.1);
  z-index: 0;
}

.main .answer {
  display: flex;
  min-height: 100px;
  background: white;
}

.main .answer .author.avatarBox {
  width: 90px;
  flex: 0 0 auto;
  border-right: 1px solid rgb(223,243,253);
}

.main .answer .author.avatarBox .avatar {
  margin: 22px auto;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: grey;
}

.main .answer .content {
  padding: 0 15px;
  width: 100%;
}

.main .answer .content .meta {
  padding: 15px 0;
}

.main .answer .content .meta .author {
  font-weight: normal;
  padding-right: 5px;
}

.main .answer .content .author + span {
  font-size: 0.7em;
}

.main .answer .content .text {
  padding-bottom: 25px;
}

.reply {
  position: relative;
  background: transparent;
  left: 0px;
  right: 0px;
  top: 100%;
  height: 34px;
  z-index: 1;
}

.reply .box {
  font-size: 1.05em;
  display: block;
  margin: auto;
  padding: 17px 0;
  line-height: 0;
  border: 1px solid rgba(167, 169, 172, 0.4);
  background: white;
  width: 175px;
  text-align: center;
  position: relative;
  top: -50%;
}

.sidebar {
  flex: 1 1 auto;
  background: white;
  z-index: 0;
  display: flex;
  justify-content: flex-end;
}

.sidebar .votes {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  align-items: center;
  padding-right: 5px;
}

.sidebar .votes p {
  padding-right: 20px;
  word-spacing: 0.4em;
}

.sidebar .votes .buttons >* {
  padding: 0;
  margin: 15px 5px;
  width: 0;
  height: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  background: none;
}


/*Media Queries*/

/*960px*/
@media (max-width : 60em) {

  .column {
    width: 760px;
  }

  .sidebar .votes {
    padding-left: 15px;
  }

}

/*800px*/
@media (max-width : 50em) {

  .column {
    width: 100%;
  }

  .main {
    min-width: unset;
    max-width: unset;
    border-right: 180px solid white;
  }

  .sidebar {
    position: absolute;
    right: 0px;
    width: 180px;
  }

}

/*656px*/
@media (max-width:41em) {

  .main {
    border-right: 140px solid white;
  }

  .sidebar {
    width: 140px;
  }

}

/*544px*/
@media (max-width : 34em) {

  .main {
    border: none;
  }

  .main .body {
    margin-left: 0;
  }

  .main .answer .author.avatarBox {
    position: absolute;
    left: 15px;
    left: 15px;
    top: 10px;
    border: none;
  }

  .main .answer .author.avatarBox .avatar {
    height: 35px;
    width: 35px;
    margin: 0;
  }

  .main .answer .content {
    padding: 0;
  }

  .main .answer .content .meta {
    position: relative;
    padding-left: 60px;
    border-bottom: 1px solid rgb(223,243,253);
  }

  .main .answer .content .text {
    padding: 0 15px;
    padding-top: 8px;
  }

  .sidebar {
    position: static;
    height: 70px;
    padding-bottom: 30px;
  }

  .sidebar .answer {
    background: white;
    width: 50%;
    height: 100%;
  }

  .sidebar {
  }

  .sidebar .votes {
    width: 150px;
    height: auto;
  }

}

</style>
