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
              <span class="author blue">Eva</span>
              <span class="grey upCase">is asking
              </span>
              <span class="grey">:</span>
            </div>
            <div class="subject blue italic">Will insuline make my patient gain weight?</div>
          </div>
        </div>

        <div class="body">
          <div class="textBox">
            <p class="text">
              All my patients with diabete should see an opthalmologist yearly for a dilated eye examination- begining at diagnosis in people with type 2 diabetes, and after 5 years in people with type 1 diabetes after puberty. Patients with known eye disease, symptoms of blurred vision in one eye, or blind spoth may need to see their opthalmologist more frequently.
            </p>
          </div>
        </div>

        <div class="reply">
          <button class="box normal">
            <span class="actionCall upCase">Give</span> new answer
          </button>
        </div>

      </div>

      <div class="sidebar">
        <div class="header">
          <button class="follow blue">unfollow</button>
        </div>
        <div class="votes">
          <p>
            <span class="number">19</span>
            <span class="italic"> upvotes</span>
          </p>
          <div class="buttons">
            <button class="upvote arrowUp blue"></button>
            <button class="downvote arrowDown blue"></button>
          </div>
        </div>
      </div>

    </div>

    <div class="response">
      <p class="answered italic">
        <span class="number normal">2</span>
        <span>peers already answered </span>
        <span class="user">Eva</span>
      </p>
      <!-- <p class="noAnswers">Be the first one to answer</p> -->
    </div>

  </div>
</template>

<script>
export default {
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
  flex: 1 1 auto;
  width: 600px;
  max-width: 600px;
  min-width: 600px;
  background: rgb(223,243,253);
}

.main .header {
  display: flex;
  height: 90px;
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
  padding: 15px 15px;
  width: 100%;
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
}

.main .body .author {
  width: 90px;
  flex: 1 0 auto;
  height: 100%;
  background: rgb(223,243,253);
}

.main .body .textBox {
  width: 100%;
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

.sidebar {
  flex: 1 1 auto;
  background: white;
  display: flex;
  flex-flow: column wrap;
  z-index: 0;
}

.sidebar .header {
  flex: 0 0 auto;
  height: 90px;
  background: rgb(223,243,253);
  display: flex;
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
  }

  .main .header .description .action {
    padding-left: 50px;
  }

  .main .header .description .subject {
    position: absolute;
    height: 40px;
    padding: 8px 0 8px 15px;
    border-top: 2px solid white;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 1.1em;
  }

  .main .header .description .subject::before {
    /*display: '';*/

  }

  .main .body .textBox p {
    padding-bottom: 0;
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
  }

}

</style>
