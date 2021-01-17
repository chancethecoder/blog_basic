import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import ProfilePage from '@/components/ProfilePage';
import PostsPage from '@/components/PostsPage';
import AdminPage from '@/components/AdminPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage,
    },
    {
      path: '/posts',
      name: 'PostsPage',
      component: PostsPage,
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage,
    },
  ],
});
