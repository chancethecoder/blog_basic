<template>
  <c-sidebar :show.sync="showSidebar">
    <c-sidebar-header>
      <c-sidebar-brand to="/">
        Blog Basic
      </c-sidebar-brand>
    </c-sidebar-header>
    <c-sidebar-nav>
      <c-sidebar-nav-item name="Posts" to="/posts" />
      <c-sidebar-nav-item name="My Profile" to="/profile" v-if="this.isLoggedIn" />
      <c-sidebar-nav-item name="Admin" to="/admin" v-if="this.isAdmin" />
    </c-sidebar-nav>

    <c-select
      label="Select user role:"
      :options="[ 'guest', 'user', 'admin' ]"
      :value.sync="role"
      class="p-2"
    />
    <c-sidebar-minimizer/>
  </c-sidebar>
</template>

<script>
export default {
  name: 'BaseSidebar',
  data() {
    return {
      role: this.user,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    showSidebar() {
      return this.$store.getters.showSidebar;
    },
  },
  watch: {
    role(role) {
      this.$store.dispatch('setUser', role);
    },
  },
}
</script>

<style scoped>
</style>
