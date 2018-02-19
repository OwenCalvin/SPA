<template>
  <div class="hello">
    <transition name="fade" mode="out-in">
      <component :is="View"></component>
    </transition>
    <footer>
      <div class="PT" id="PTPrev" >
        <button @click="previous">Previous</button>
      </div>
      <div class="backPB">
        <div :style="{width: Progression + '%'}" class="PB"></div>
      </div>
      <div class="PT" id="PTNext">
        <button @click="next">Next</button>
      </div>
    </footer>
  </div>
</template>

<script>
import Loader from '../Articles/Loader'

export default {
  name: 'Article',
  data: function () {
    let Page = 1
    return {
      View: Loader.LoadView(Page),
      Page: Page,
      Progression: 0
    }
  },
  methods: {
    next: function () {
      this.pageTurner(1)
    },
    previous: function () {
      this.pageTurner(-1)
    },
    pageTurner: function (value) {
      this.Page = Loader.TurnPage(this.Page, value)
      this.View = Loader.LoadView(this.Page)
      this.Progression = (this.Page - 1) / (Loader.Count - 1) * 100
    }
  }
}
</script>

<style lang="scss" scoped>
  footer {
    $footerHeight: 50px;
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    height: $footerHeight;

    .PT button {
      height: $footerHeight;
      min-width: 200px;
    }

    .backPB {
      $PBHeight: $footerHeight / 2;

      height: $PBHeight;
      margin: 0 10px;
      margin-top: $PBHeight / 2;
      width: 50%;
      min-width: 200px;
      background: rgb(207, 207, 207);
      border-radius: 20px;
      overflow: hidden;
      .PB {
        height: $PBHeight;
        background: rgb(27, 109, 240);
        transition: width .2s;
      }
    }
  }
</style>

<style scoped>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .2s ease;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
</style>
