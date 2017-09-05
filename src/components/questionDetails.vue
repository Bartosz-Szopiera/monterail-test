<template lang="html">
  <div class="">
    <div class="column">

      <div class="main">

        <div class="header">
          <div class="author avatarBox">
            <div class="avatar"></div>
          </div>
          <div class="description">
            <div class="action">
              <span class="author blue">{{ question.author }}</span>
              <span class="grey upCase">is asking
              </span>
              <span class="grey">:</span>
            </div>
            <div class="subject blue italic">{{ question.title }}</div>


          </div>

          <div class="sidebar">
            <div class="header">
              <button class="follow blue">unfollow</button>
            </div>
          </div>
        </div>

        <div class="body">
          <div class="textBox">
            <p class="text">{{ question.content }}</p>
          </div>

          <div class="sidebar">
            <div class="votes">
              <p>
                <span class="number">{{ question.votes }}</span>
                <span class="italic"> upvotes</span>
              </p>
              <div class="buttons">
                <button @click="vote(1, path)" class="upvote arrowUp blue"></button>
                <button @click="vote(-1, path)" class="downvote arrowDown blue"></button>
              </div>
            </div>
          </div>

        </div>

        <div class="reply">
          <button class="box normal">
            <span class="actionCall upCase">Give</span> new answer
          </button>
        </div>

      </div>

      <div class="sidebar mobile">
        <div class="header">
          <button class="follow blue">unfollow</button>
        </div>
        <div class="votes">
          <p>
            <span class="number">{{ question.votes }}</span>
            <span class="italic"> upvotes</span>
          </p>
          <div class="buttons">
            <button @click="vote(1, path)" class="upvote arrowUp blue"></button>
            <button @click="vote(-1, path)" class="downvote arrowDown blue"></button>
          </div>
        </div>
      </div>

    </div>

    <div class="response">
      <p v-if="replies > 0" class="answered italic">
        <span class="number normal">{{ replies }}</span>
        <span>peers already answered </span>
        <span class="user">{{ question.author }}</span>
      </p>
      <p v-else-if="replies === 0"class="noAnswers">Be the first one to answer</p>
    </div>

  </div>
</template>

<script>
import voteMixin from '../mixins/voteMixin';

export default {
  props: ['question', 'path', 'replies'],
  data() {
    return {
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
  margin-bottom: 34px;
  display: flex;
  flex-flow: row wrap;
}

.main {
  flex: 0 0 auto;
  width: 100%;
  background: rgb(223,243,253);
}

.main .header {
  display: flex;
  min-height: 90px;
  background: rgb(223,243,253);
}

.main .header .author.avatarBox {
  width: 90px;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.main .header .author.avatarBox .avatar {
  margin: 0 auto;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: grey;
}

.main .header .description {
  flex: 1 1 auto;
  width: 510px;
  min-width: 510px;
  padding: 15px 15px;
}

.main .header .description .author {
  font-weight: normal;
  padding-right: 5px;
}

.main .header .description .author + span {
  font-size: 0.7em;
}

.main .header .description .subject {
  font-size: 1.25em;
  padding: 10px 0;
}

.main .body {
  display: flex;
  color: #888;
  background: white;
  margin-left: 90px;
  flex-flow: row nowrap;
}

.main .body .author {
  width: 90px;
  flex: 1 0 auto;
  height: 100%;
  background: rgb(223,243,253);
}

.main .body .textBox {
  flex: 0 1 auto;
  width: 510px;
  min-width: 510px;
}

.main .body .textBox p {
  padding: 10px 10px 30px 20px;
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
  border-bottom: 1px solid rgba(223,243,253,0.1);
  z-index: 0;
}

.reply {
  position: absolute;
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

.sidebar.mobile {
  display: none;
  flex-flow: row nowrap;
}

.sidebar.mobile .header {
  flex: 0 0 auto;
}

.sidebar {
  flex: 1 1 auto;
  background: white;
  display: flex;
  flex-flow: column wrap;
  z-index: 0;
}

.sidebar .header {
  flex: 1 1 auto;
  /*height: 90px;*/
  background: rgb(223,243,253);
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar .header .follow {
  padding: 0 20px;
  border: none;
  background: none;
  letter-spacing: 0.03em;
}

.sidebar .votes {
  width: 100%;
  height: 80px;
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

.response {
  padding-top: 20px;
  padding-bottom: 10px;
  margin: auto;
  text-align: center;
}

.response .number {
  font-size: 1em;
  font-weight: bold;
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

  .column .main .header .description {
    min-width: unset;
    width: auto;
    padding: 10px 15px;
  }

  .column .main .body .textBox {
    min-width: unset;
  }

  .sidebar {
    right: 0px;
    min-width: 180px;
  }

}

/*656px*/
@media (max-width:41em) {

  .sidebar {
    min-width: 140px;
  }

}

/*544px*/
@media (max-width : 34em) {

  .main .header {
    display: block;
  }

  .main .header .author.avatarBox {
    position: absolute;
    left: 15px;
    top: 10px;
    z-index: 1;
  }

  .main .header .author.avatarBox .avatar {
    height: 35px;
    width: 35px;
    margin: 0;
  }

  .main .header .description .action {
    position: relative;
    padding: 5px 0 15px 50px;
  }

  .main .header .description .subject {
    padding: 8px 0 8px 15px;
    font-size: 1.1em;
    position: relative;
  }

  .main .header .description .subject::before {
    content: '';
    display: block;
    position: absolute;
    border-top: 1px solid white;
    width: 150%;
    top: 0;
    left: -5%;
  }

  .main .body {
    margin-left: 0;
  }

  .main .body .textBox p {
    padding-bottom: 0;
  }

  .sidebar.mobile {
    display: flex;
  }

  .sidebar:not(.mobile) {
    display: none;
  }

  .sidebar {
    position: static;
    height: 70px;
    padding-bottom: 30px;
  }

  .sidebar .header {
    background: white;
    width: 50%;
    height: 100%;
  }

  .sidebar .votes {
    width: 50%;
    height: auto;
  }

}

</style>
