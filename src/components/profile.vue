<template lang="html">
  <div id="profileBackground">
    <div id="profile">

      <div class="header">

        <div class="user">
          <div class="avatar"></div>
          <div class="userName blue">Dr. Halima</div>
        </div>

        <div class="info">
          <div class="memberFor">
            <span class="label upCase grey">Member for</span>
            <span class="timeSpan normal">5</span>
            <span class="timeUnit normal">months</span>
          </div>
          <div class="lastSeen">
            <span class="label upCase grey">Last seen</span>
            <span class="timeSpan normal">Saturday</span>
            <span class="timeUnit normal">afternoon</span>
          </div>
          <div class="activityLevel">
            <span class="label upCase grey">Activity level</span>
            <span class="badge lvl1"></span>
          </div>
        </div>

        <div class="wrapper">
          <button class="left"></button>
          <div class="title italic"><h1>How it all started</h1></div>
          <button class="right active"></button>
        </div>

      </div>

      <button id="close" @click="busEvent('closeModal')"></button>

      <div class="main">
        <origin></origin>
      </div>

    </div>
  </div>
</template>

<script>
import origin from './profileOrigin.vue';
import bus from '../main.js';

export default {
  components: {
    'origin':  origin,
  },
  methods: {
    busEvent(eventName) {
      bus.$emit(eventName);
    }
  }
}
</script>

<style lang="css" scoped>

  * {
    text-align: center;
  }

  #profileBackground {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    background: rgba(0,0,0,0.4);
  }

  #profile {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    /*height: 90vh;*/
    height: 90%;
    width: 80%;
    max-width: 850px;
    min-width: 668px;
    background: white;
    overflow-y: scroll;
    overflow-x: hidden;
    /*box-shadow: 0 0 0 50vw rgba(0,0,0,0.4),
                0 0 0 50vh rgba(0,0,0,0.4);*/
  }

  #profile >* {
    margin: 10px auto;
    width: 70%;
    min-width: 600px;
  }

  #close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px 10px;
    min-width: unset;
    width: 14px;
    height: 14px;
    max-width: 15px;
    background: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
    display: flex;
    justify-content: center;
  }

  #close::after, #close::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 1px solid #a7a9ac;
    box-shadow: 0 0 1px 0 #a7a9ac;
    padding: 0 50%;
  }

  #close::after {
    transform: rotateZ(45deg);
  }

  #close::before {
    transform: rotateZ(-45deg);
  }

  .header {
    padding-top: 30px;
    display: flex;
    justify-content: flex-start;
    flex-flow: column nowrap;
    align-items: center;
  }

  .header>* {
    width: 100%;
  }

  .header .user .avatar {
    margin: auto;
    width: 85px;
    height: 85px;
    background: #DDD;
    border-radius: 50%;
  }

  .header .user .userName {
    text-align: center;
    padding: 15px 0;
    font-weight: bold;
  }

  .header .info {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-bottom: 25px;
    border-bottom: 1px solid #a7a9ac;
    word-spacing: 0.2em;
  }

  .header .info .activityLevel .badge {
    display: inline-block;
    width: 80px;
    position: relative;
  }

  .header .info .activityLevel .badge::after {
    content: '';
    left: 0;
    top: -1em;
    height: 25px;
    width: 80px;
    position: absolute;
    background-image: url('../assets/activityBadge.png');
    background-size: 100%;
  }

  .header .info .activityLevel .badge.lvl1 {
    background-position: 0px 0px;
  }

  .header .info .activityLevel .badge.lvl2 {
    background-position: 0px -25px;
  }

  .header .info .activityLevel .badge.lvl3 {
    background-position: 0px -50px;
  }

  .header .wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .header .title h1 {
    margin: 0;
    padding: 14px 0;
    letter-spacing: 0.03em;
  }

  .header .wrapper button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background: #a7a9ac;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    line-height: 0;
    font-size: 1.6em;
    font-family: 'Signika', sans-serif;
  }

  .header .wrapper button.left::after {
    /*margin-top: -0.1em;*/
    content: '<';
  }

  .header .wrapper button.right::after {
    /*margin-top: -0.1em;*/
    content: '>';
  }

  .header .wrapper button.active {
    background: #0266b9;
  }


  /*Media Queries*/

  /*672px*/
  @media (max-width:42em) {

    #profile {
      min-width: unset;
      width: 100%;
    }

    #profile >* {
      min-width: unset;
      width: 90%;
    }

    .header .info .label {
      display: block;
    }

  }

  /*560px*/
  @media (max-width:35em) {

    .header .info {
      flex-flow: column nowrap;
      align-items: center;
    }

    .header .info >* {
      padding: 10px 0;
    }

  }

  /*448px*/
  @media (max-width:28em) {

    .header .user .avatar {
      height: 50px;
      width: 50px;
    }

    .header .user .userName {
      padding: 10px;
    }

    .header .wrapper button {
      width: 20px;
      height: 20px;
      font-size: 1em;
      font-weight: bold;
    }

    .header .title h1 {
      font-size: 1.6em;
    }

  }
</style>
