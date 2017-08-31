<template lang="html">
  <div class="column">

    <div class="main">

      <div class="header">
        <div class="author avatar"><div></div></div>
        <div class="description">
          <div class="action">
            <span class="author">Author</span>
            <span class="did">found</span>
            <span class="adjective">on</span>
            <span class="source">source</span>
          </div>
          <div class="subject">Subject</div>
        </div>
      </div>

      <div class="activity">
        <div class="author">
          <div class="actionType">found</div>
        </div>
        <div class="counter">
          <div class="number">X</div>
          <p>more activities</p>
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
        <p><span>X</span> related discussion</p>
        <p><span>X</span> peers involved</p>
        <p><span>X</span> conversations</p>
      </div>
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
  display: flex;
  flex-flow: row nowrap;
}

.main {
  flex: 0 0 auto;
  padding-bottom: 38px;
  width: 600px;
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
  background: none;
  box-shadow: -2px 0 2px 0 #EEE, 2px 0 2px 0 #EEE;
  border-bottom: 2px solid rgba(223,243,253,1);
  z-index: -100;
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
  font-style: normal;
  padding: 0 5px;
}


/*Media Queries*/

/*960px*/
@media (max-width : 60em) {

}

</style>
