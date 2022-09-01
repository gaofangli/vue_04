<template>
  <div class="pagination">
    <ul>
      <li v-if="currentPage > 1">
        <span @click="prevPage">上一页</span>
      </li>
      <li v-if="currentPage == 1">
        <span class="disabled">上一页</span>
      </li>
      <li v-for="(item, index) in indexs" :key="index" v-bind:class="{'active':currentPage==item}" class="item">
        <span @click="btnClick(item)">{{item}}</span>
      </li>
      <li v-if="currentPage!=allPage">
        <span @click="nextPage">下一页</span>
      </li>
      <li v-if="currentPage==allPage">
        <span class="disabled">下一页</span>
      </li>
      <li><span>共<i>{{allPage}}</i>页</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    currentPage: { // 当前第几页
      type: Number,
      default: 1
    },
    allPage: { // 总页数
      type: Number,
      default: 5
    },
    showIndex: { // 中间显示几个页数，要为奇数
      type: Number,
      default: 3
    }
  },
  methods: {
    nextPage () {
      this.$emit('setPage', this.currentPage + 1)
    },
    prevPage () {
      this.$emit('setPage', this.currentPage - 1)
    },
    btnClick (num) {
      if (num !== this.currentPage) {
        this.$emit('setPage', num)
      }
    }
  },
  computed: {
    indexs () {
      var left = 1
      var right = this.allPage
      var arr = []
      var index = parseInt(this.showIndex / 2)
      var middleIndex = index + 1
      if (this.allPage >= this.showIndex) {
        if (this.currentPage > middleIndex && this.currentPage < this.allPage - index) {
          left = this.currentPage - index
          right = this.currentPage + index
        } else if (this.currentPage <= middleIndex) {
          left = 1
          right = this.showIndex
        } else {
          left = this.allPage - (this.showIndex - 1)
          right = this.allPage
        }
      }
      while (left <= right) {
        arr.push(left)
        left++
      }
      return arr
    }
  }
}
</script>

<style scoped lang="less">
.pagination{
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .24rem;
    li{
      height: .6rem;
      margin: .12rem;
      span{
        display: block;
        padding: 0 .12rem;
        height: 100%;
        text-align: center;
        line-height: .6rem;
        color: #E0224F;
        border: 1px solid #E0224F;
        &.disabled{
          color: #D8D8D8;
          border: 1px solid #D8D8D8;
        }
      }
      &.item{
        min-width: .6rem;
        span{
          padding: 0;
          color: #413134;
          border: 1px solid #fff;
        }
        &.active{
          span{
            color: #E0224F;
            border: 1px solid #E0224F;
          }
        }
      }
    }
  }
}
</style>