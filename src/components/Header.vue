<template>
  <div>
      <h1 class="pageTitle">{{ pageTitle }}</h1>
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
.pageTitle {
    text-align: left;
}
</style>
