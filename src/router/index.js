import React from 'react';
import AboutPage from '../views/about';
import GetStartPage from '../views/getstart';
import IndexPage from '../views/index';
import Page404 from '../views/page404';
import TopicsPage from '../views/topic';
import UserPage from '../views/user';

const route = [{
  path: '/',
  exact: true,
  render(props) {
    return <IndexPage {...props} />
  }
}, {
  path: '/topics/:id',
  exact: true,
  render(props) {
    return <TopicsPage {...props} />
  }
}, {
  path: '/user/:userName',
  exact: true,
  render(props) {
    return <UserPage {...props} />
  }
}, {
  path: '/getStart',
  exact: true,
  render(props) {
    return <GetStartPage {...props} />
  }
}, {
  path: '/about',
  exact: true,
  render(props) {
    return <AboutPage {...props} />
  }
}, {
  path: '',
  exact: false,
  render(props) {
    return <Page404 {...props} />
  }
}];

const nav = [{
  to: '/',
  txt: '首页'
}, {
  to: '/getStart',
  txt: '新手入门'
}, {
  to: '/about',
  txt: '关于我们'
}]

export { route, nav };

