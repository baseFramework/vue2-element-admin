import hello from '../pages/hello/hello'
import App from '../App';

export default [
  {
    path: '/index',
    component: App,
    children: [
      {
        path: 'hello',
        name: 'hello',
        component: hello},
    ]
  },
  {
    path: '*',
    redirect: '/index/hello'
  }
]
