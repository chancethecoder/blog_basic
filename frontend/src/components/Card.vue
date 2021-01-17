<template>
  <div class="card">
    <div
      class="thumbnail"
      v-bind:style="{ 'background-image': 'url(' + item.image_url + ')' }"
    >
      <img src="http://placehold.it/200x200" />
    </div>
    <div class="body">
      <h2 class="title">{{ item.title || 'TITLE HEADING' }}</h2>
      <h5 class="subtitle">{{ new Date(item.created_at).toLocaleString() || 'subtitle' }}</h5>
      <p class="preview">
        {{ strippedHtml }}
      </p>
    </div>
  </div>
</template>

<script>
import '@/assets/marked.min';

export default {
  name: 'Card',
  props: ['item'],
  computed: {
    compiledMarkdown() {
      return marked(this.item.body || '');
    },
    strippedHtml() {
      return this.compiledMarkdown.replace(/(<([^>]+)>)/ig, '');
    },
  },
};
</script>

<style scoped>
/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  display: flex;
}
.card > .thumbnail {
  width: 200px;
  height: 200px;
  background-position: center center;
  background-repeat: no-repeat;
}
.card > .thumbnail > img {
  min-height: 100%;
  min-width: 100%;
  opacity: 0;
}
.card > .body {
  display: flex;
  flex-direction: column;
  margin-left: 28px;
}
.card > .body > .title {
  margin: 0px;
  margin-bottom: 16px;
}
.card > .body > .subtitle {
  margin: 0px;
  margin-bottom: 12px;
}
.card > .body > .preview {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
