<template>
  <div @keydown.enter="alert('hi')">
    <header>
      <img src="../assets/logo.png" alt="Vue"/>
    </header>
    <transition name="component-fade" mode="out-in">
      <component :is="View"></component>
    </transition>
    <footer>
      <div class="PT" id="PTPrev" >
        <button @click="previous" @keydown.37="previous">Previous</button>
      </div>
      <div class="backPB">
        <div :style="{width: Progression + '%'}" class="PB">
          <div v-if="Progression > 0">
            {{ Progression }}
          </div>
        </div>
      </div>
      <div class="PT" id="PTNext">
        <button @click="next" @keydown.39="next">Next</button>
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
  },
  mounted: function () {
    let _this = this
    window.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        case 37:
          _this.previous()
          break
        case 39:
          _this.next()
          break
      }
    })
  }
}
</script>

<style scoped>
    .component-fade-enter-active, .component-fade-leave-active {
      transition: opacity .15s ease-in-out;
    }
    .component-fade-enter, .component-fade-leave-to {
      opacity: 0;
    }
</style>

<style lang="scss" scoped>
  footer {
    $footerHeight: 40px;

    box-shadow: -2px 1px 17px 0px rgb(240, 240, 240);
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    height: auto;
    flex-wrap: wrap;
    height: $footerHeight;

    .PT button {
      $buttonHeight: $footerHeight - 10px;

      height: $buttonHeight;
      margin-top: $footerHeight / 2 - $buttonHeight / 2;
      min-width: 100px;
      background: #e4e4e4;
      border: none;
      font-size: 1em;
      color: rgb(134, 134, 134);
      font-weight: 700;
      border-radius: 10px;
      margin-left: 10px;
      margin-right: 10px;
    }

    .backPB {
      $PBHeight: 20px;

      height: $PBHeight;
      margin: 0 10px;
      margin-top: $footerHeight / 2 - $PBHeight / 2;
      width: 30%;
      min-width: 200px;
      background: rgb(240, 240, 240);
      border-radius: 20px;
      overflow: hidden;
      .PB {
        font-weight: bold;
        height: $PBHeight;
        background: #54d78e;
        background: -moz-linear-gradient(-45deg, #54d78e 0%, #39dc84 100%);
        background: -webkit-linear-gradient(-45deg, #54d78e 0%,#39dc84 100%);
        background: linear-gradient(135deg, #54d78e 0%,#39dc84 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#54d78e', endColorstr='#39dc84',GradientType=1 );
        transition: width .2s;
        color: white;
        line-height: $PBHeight;
      }
    }
  }

  header {
    $HeaderHeight: 50px;

    width: 100%;
    height: $HeaderHeight;
    box-shadow: 2px 4px 17px 0px rgb(235, 235, 235);
    margin-bottom: 50px;
    img {
      $ImgHeight: 30px;

      margin-top: $HeaderHeight / 2 - $ImgHeight / 2;
      height: $ImgHeight;
    }
  }
</style>
