<template>
  <div>
  <base-sidebar />
    <c-wrapper>
    <base-header/>
    <div class="c-body">
      <div class="c-main">
        <slot/>
      </div>
    </div>
    <!-- <c-container>
      <slot/>
    </c-container> -->
    <base-footer/>
    </c-wrapper>
  </div>
</template>

<script>
import BaseFooter from '@/components/BaseFooter';
import BaseHeader from '@/components/BaseHeader';
import BaseSidebar from '@/components/BaseSidebar';

export default {
  name: 'Layout',
  components: {
    BaseFooter,
    BaseHeader,
    BaseSidebar,
  }
}
</script>

<style scoped>
</style>
