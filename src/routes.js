import hello from './pages/hello/hello'
import index from './pages/index/index'
import math from './pages/math/math'

export default [
  {
    path: '/hello',
    component: hello,
    name: 'hello',
  },
  { path: '*', redirect: '/hello' }
]
