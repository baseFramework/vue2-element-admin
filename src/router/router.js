import hello from '../pages/hello/hello'
import dash from '../pages/dash/dash';
import login from '../pages/login/login';

export default [
  {
    path: '/dash',
    component: dash,
    children: [
      {
        path: 'hello',
        name: 'hello',
        component: hello},
    ]
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '*',
    redirect: '/dash/hello'
  }
]
