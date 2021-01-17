<template>
  <c-header>
    <c-toggler inHeader @click="this.toggleSidebar"/>
    <c-header-nav>
      <c-header-nav-item>
        <c-header-nav-link to="#">Home</c-header-nav-link>
      </c-header-nav-item>
    </c-header-nav>
    <c-header-nav class="ml-auto">
      <c-header-nav-item>
        <c-dropdown togglerText="Lang" nav placement="bottom-end">
            <c-dropdown-item>EN</c-dropdown-item>
            <c-dropdown-item>ES</c-dropdown-item>
            <c-dropdown-item>RU</c-dropdown-item>
            <c-dropdown-item>FA</c-dropdown-item>
        </c-dropdown>
      </c-header-nav-item>
      <c-header-nav-item>
        <c-header-nav-link v-if="this.isLoggedIn" to="#">Logout</c-header-nav-link>
        <c-header-nav-link v-else to="#">LogIn</c-header-nav-link>
      </c-header-nav-item>
    </c-header-nav>
  </c-header>
</template>

<script>
export default {
  name: 'BaseHeader',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  method: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    },
  },
};
</script>

<style scoped>
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}
</style>
