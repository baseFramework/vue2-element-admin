import home from '../pages/home/home'
import products from '../pages/products/products'
import mproduct from '../pages/mproduct/mproduct'
import mproject from '../pages/mproject/mproject'
import addproject from '../pages/addproject/addproject'
import editproject from '../pages/editproject/editproject'
import addproduct from '../pages/addproduct/addproduct'
import editproduct from '../pages/editproduct/editproduct'
export default [
  {
    path: '/home',
    component: home,
    name: 'home',
  },
  {
    path:'/products/:id',
    component: products,
    name: 'products',
  },
  {
    path:'/admin/',
    component: mproject,
    name: 'mproject',
  },
  {
    path:'/admin/mproduct/:id',
    component: mproduct,
    name: 'mproduct',
  },
  {
    path:'/edit/product/:id/:pid',
    component: editproduct,
    name: 'editproduct',
  },
  {
    path:'/addproject',
    component: addproject,
    name: 'addproject',
  },
  {
    path:'/edit/project/:id',
    component: editproject,
    name: 'editproject',
  },
  {
    path:'/product/add/:id',
    component: addproduct,
    name: 'addproduct',
  },
  { path: '*', redirect: '/home' }
]
