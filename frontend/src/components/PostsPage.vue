<template>
  <layout>
    <div class="row">
      <div class="leftcolumn" v-for="post in posts" v-bind:key="post.id">
        <card v-bind:item="post" />
      </div>
      <div class="rightcolumn">
        <div class="card">
          <div class="body">
            <h2>About Me</h2>
            <p>Some text about me here...</p>
          </div>
        </div>
        <div class="card">
          <div class="body">
            <h3>Popular Post</h3>
            <ul>
              <li>post 1</li>
              <li>post 2</li>
              <li>post 3</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="body">
            <h3>Follow Me</h3>
            <p>Some links here...</p>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Card from '@/components/Card';
import Layout from '@/components/Layout';

export default {
  name: 'PostsPage',
  components: {
    Card,
    Layout,
  },
  data() {
    return {
      posts: [{
        id: 1,
        title: '안녕하세요',
      }],
    };
  },
  async mounted() {
    // life cycle: https://kr.vuejs.org/v2/guide/instance.html
    // 비동기 동작이므로 기다려줘야함.
    const response = await this.$http.get('http://localhost:8000/api/posts/');
    this.posts = response.data.map(data => Object.assign(data.fields, {
      id: data.pk,
    }));
  },
};
</script>

<style scoped>
.leftcolumn {
  float: left;
  width: 75%;
}

.rightcolumn {
  float: right;
  width: calc(25% - 16px);
  padding-left: 16px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
</style>
