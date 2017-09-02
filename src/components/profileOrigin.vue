<template lang="html">
  <div id="origin">
    <!--  -->
    <div class="userStats">

      <p class="label upCase grey">That's where we have been these
        <span class="timeSpan">5</span>
        <span class="timeUnit">months</span>
        ago
      </p>

      <div class="content">
        <div class="square peers">
          <p class="number">46</p>
          <p class="italic">peers</p>
        </div>
        <div class="square discussions">
          <p class="number">29</p>
          <p class="italic">discussions</p>
        </div>
        <div class="square findings">
          <p class="number">19</p>
          <p class="italic">findings</p>
        </div>
        <div class="square questions">
          <p class="number">10</p>
          <p class="italic">questions</p>
        </div>
      </div>

    </div>
    <!--  -->
    <div class="people">

      <p class="label upCase grey">Who joined the platform the&nbsp;same period</p>

      <div class="content blue">

        <div class="peer">
          <div class="tile">
            <div class="avatar"></div>
          </div>
          <p class="userName">S.E.N. Waweru</p>
        </div>

        <div class="peer">
          <div class="tile">
            <div class="avatar"></div>
          </div>
          <p class="userName">Patricia</p>
        </div>

        <div class="peer">
          <div class="tile">
            <div class="avatar"></div>
          </div>
          <p class="userName">Joseph Aluoch</p>
        </div>

      </div>

    </div>
    <!--  -->
    <div class="discussion">

      <p class="label upCase grey">The hottest discussion these days</p>

      <div class="content">

        <div class="avatar"></div>

        <div class="action">
          <span class="author blue">Andrew</span>
          <span class="did grey upCase"><small>found</small></span>
          <span class="adjective grey upCase"></span>
          <span class="source grey upCase"><small>the Guardian article</small></span>
        </div>

        <div class="subject blue italic">Vegan diet to stop diabetes progress</div>

        <div class="stats">
          <p>
            <span class="peers number">6</span>
            <span class="italic"> peers involved</span>
          </p>
          <p>
            <span class="related number">3</span>
            <span class="italic"> related discussion</span>
          </p>
          <p>
            <span class="convs number">3</span>
            <span class="italic"> conversations</span>
          </p>
          <p>
            <span class="votes number">19</span>
            <span class="italic"> upvotes</span>
          </p>
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

  * {
    text-align: center;
  }

  #origin {
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column nowrap;
  }

  .userStats {
    width: 75%;
    padding-bottom: 20px;
  }

  .userStats .label {
    padding-bottom: 20px;
  }

  .userStats .content {
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }

  .userStats .content .square {
    position: relative;
  }

  /*Those rotated squares*/
  .userStats .content .square::after {
    content: '';
    position: absolute;
    height: 92px;
    width: 92px;
    background: #e4f4fc;
    opacity: 0.7;
    left: 50%;
    top: 50%;
    z-index: -1;
  }

  .userStats .content >:nth-child(1)::after {
    transform: translate(-50%,-50%) rotateZ(-35deg);
  }
  .userStats .content >:nth-child(2)::after {
    transform: translate(-50%,-50%) rotateZ(-12deg);
  }
  .userStats .content >:nth-child(3)::after {
    transform: translate(-50%,-50%) rotateZ(-30deg);
  }
  .userStats .content >:nth-child(4)::after {
    transform: translate(-50%,-50%) rotateZ(10deg);
  }

  .userStats .content .number {
    margin: 5px 0;
    font-size: 1.4em;
    font-weight: bold;
  }

  .userStats .content p:not(.number) {
    font-size: 0.9em;
    margin: 10px 0;
  }

  .people {
    width: 90%;
    padding: 10px 0;
  }

  .people .content {
    display: flex;
    justify-content: center;
  }

  .people .content .peer {
    flex: 0 0 auto;
    margin: 5px;
  }

  .people .content .peer .tile {
    margin: auto;
    width: 90px;
    height: 90px;
    background: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .people .content .peer .tile .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #DDD;
  }

  .people .content .peer .userName {
    padding-top: 10px;
    margin: auto;
    text-align: center;
    width: 80%;
  }

  .discussion {
    width: 100%;
  }

  .discussion .content {
    width: 100%;
    margin-top: 40px;
    position: relative;
  }

  /*background*/
  .discussion .content::after {
    content: '';
    position: absolute;
    transform: translate(-50%,-50%);
    display: block;
    left: 50%;
    top: 50%;
    height: 100%;
    width: 100vw;
    background: #EEE;
    z-index: -1;
  }

  .discussion .content .avatar {
    margin: 0 auto;
    margin-bottom: -10px;
    width: 50px;
    height: 50px;
    top: -25px;
    border-radius: 50%;
    background: #DDD;
    position: relative;
  }

  .discussion .content .action .author {
    font-weight: bold;
  }

  .discussion .content .subject {
    font-weight: bold;
    font-size: 1.3em;
    letter-spacing: 0.03em;
  }

  .discussion .content .stats {
    padding: 10px 0;
    margin: auto;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }

  .discussion .content .stats p {
    white-space: nowrap;
  }

  .discussion .content .stats p .number {
    font-weight: bold;
  }


  /*Media Queries*/

  /*544px*/
  @media (max-width:34em) {

    .userStats .content .square {
      width: 50%;
      padding: 10px 0;
    }

    .discussion .content .stats p {
      width: 50%;
      text-align: left;
      padding-left: 25%;
      margin-left: -60px;
    }

  }

  /*448px*/
  @media (max-width:28em) {

    .discussion .content .stats p {
      padding-left: 10%;
      margin-left: 0;
    }

  }

  /*320px*/
  @media (max-width:20em) {

    .discussion .content .stats p {
      padding-left: 5%;
    }

  }

</style>
