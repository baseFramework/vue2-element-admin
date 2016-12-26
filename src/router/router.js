import hello from '../pages/hello/hello'
import dash from '../pages/dash/dash';
import login from '../pages/login/login';
import index from '../dash/index/index';

export default [
  {
    path: '/dash',
    component: dash,
    children: [
      {
        path: 'hello',
        name: 'hello',
        component: hello
      },
      {
        path: 'index',
        name: 'index',
        component: index
      },
    ]
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '*',
    redirect: '/dash/index'
  }
]
