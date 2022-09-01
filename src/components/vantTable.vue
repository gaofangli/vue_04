<template>
  <div class="vantTable">
    <p style="heigjt: 44px; line-height: 44px; text-align: center">归档列表</p>
    <!-- <pms-header
      :title="title"
      class="shadow"
      @back="back"
    /> -->
    <div class="business">
      <slot />
    </div>
    <div class="footer" v-if="gotop" >
      <!-- <div class="iconfont" @click="toTop"><img src="../../../assets/backToTop.svg" alt=""></div> -->
    </div>
  </div>
</template>
<script>

export default {
  name: 'formLayout',
  data () {
    return {
      gotop: false
    }
  },
  components: {
    // PmsHeader
  },
  props: {
    title: {
      type: String,
      default: '归档文案'
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    toTop () {
      console.log(11)
    },
    back () {
    }
  }

}
</script>
<style scoped>
.vantTable {
  height: 100vh;
  width: 100%;
  display: flex;
  background: #f5f5f5;
  flex-direction: column;
  box-sizing: content-box;
  /* overflow-y: hidden; */
}
.business {
  margin-top: 5px;
  flex: 1;
  padding-top: 11px;
  background-color: #fff;
}
.footer {
  position: fixed;
  bottom: 200px;
  right: 15px;
  width: 43px;
  height: 43px;
}
.footer img {
  width: 100%;
  display: block;
}
</style>
