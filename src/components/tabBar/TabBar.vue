<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tabBar {
    height: 100px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
    padding-top: 10px;
  }

</style>
