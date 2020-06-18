<template>
  <div>
    <ul class="ul">
      <li :id="`ass${index}`" v-for="(item, index) in v" :key="index">
        <span :class="+index === +Selected.index ? 'ceiling' : ''">{{index}}.</span>
        <br/> 123445667789898fgsd
        <br/> fgsdfgsdfgsdfgsd
        <br/> fgsdf756234523
        <br/> 45dfgsdfgsdfgsd2
        <br/> 
      </li>
    </ul>
    <div class="anchor">
      <a
        :href="`#ass${index}`" @click="setIndex(index)"
        :class="+index === +Selected.index ? 'Highlight' : ''"
        v-for="(item, index) in v" :key="index"
      >{{index}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v: '123456789',
      Selected: {
        index: 0
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$sAnchor.routerAnchor({doc: 'content', id: `ass8`})
      document.getElementById('content').addEventListener('scroll', this.startAnchor)
    })
  },
  destroyed () {
    document.getElementById('content').removeEventListener('scroll', this.startAnchor)
  },
  methods: {
    startAnchor () {
      this.$sAnchor.scrollAnchor({doc: 'content', els: '.ul li', Selected: this.Selected})
    },
    setIndex (index) {
      this.Selected.index = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.anchor
  position fixed
  right 60px
  top 10%
  a
    display block
    width 19px
    height: 19px
    text-align center
    line-height 19px
    margin-top 10px
    border 1px #ccc solid
    border-radius 50%
.Highlight
  background-color blue
  color #fff
.ceiling
  background-color #ffffff
  width 90%
  zIndex 1994214
  position fixed
  right 0px
  top 81px
</style>
