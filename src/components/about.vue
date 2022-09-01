<template>
  <pagination
    :allPage="10"
    @setPage="setPage"
    :currentPage="currentPage"
    :showIndex="3"
  ></pagination>
</template>

<script>
import pagination from '@/components/pagination'

export default {
  components: {
    pagination
  },
  data () {
    return {
      currentPage: 1,
    }
  },
  methods: {
    setPage (page) {
      this.currentPage = page
      console.log(this.currentPage)
    }
  }
}
</script>