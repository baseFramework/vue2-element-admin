import hello from '../pages/hello/hello'
import dash from '../pages/dash/dash';
import login from '../pages/login/login';
import index from '../dash/index/index';
import table from '../dash/table/table';

export default [
  {
    path: '/dash',
    component: dash,
    children: [
      {
        path: 'index',
        name: 'index',
        component: index
      },
      {
        path: 'table',
        name: 'table',
        component: table
      },
    ]
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '*',
    redirect: '/dash/table'
  }
]
