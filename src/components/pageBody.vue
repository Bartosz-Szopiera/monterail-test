<template lang="html">
  <div>
    <div class="background">
    </div>
    <div class="wrapper">
      <slot>
        <!-- <h1>fallback content</h1> -->
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="css" scoped>

.background {
  margin: 0 auto;
  width: 90%;
  max-width: 1100px;
  min-width: 760px;
  display: flex;
  justify-content: center;
  overflow: visible;
  background: rgb(251,251,251);
  z-index: -1;

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.wrapper {
  /*width: 100vw;*/
  margin: auto;
  width: 100%;
  flex: 0 0 auto;
  background: none;
}

/*Media Queries*/

/*800px*/

@media (max-width : 50em) {

  .background {
    width: 100%;
    min-width: unset;
  }

}
</style>
