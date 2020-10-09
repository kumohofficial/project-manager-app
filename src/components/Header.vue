<template>
  <div class="navbar">
      <h1 class="pageTitle" v-if="pageTitle">{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
    props: [
        'pageTitle'
    ]
}
</script>

<style scoped>
.navbar{
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}
.pageTitle {
    text-align: left;
    color: white
}
</style>
