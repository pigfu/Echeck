import Vue from 'vue'
import Router from 'vue-router'

import Sale from '@/components/sale/Sale';
import ProductSale from '@/components/sale/ProductSale'
import IndustryApplication from '@/components/sale/IndustryApplication'
import Price from '@/components/sale/Price';
import HelpDocument from '@/components/sale/HelpDocument';

import Login from '@/components/login/Login';
import LoginBody from '@/components/login/LoginBody';
import Register from '@/components/login/Register';

import MainBody from '@/components/MainBody';

import Organization from '@/components/organization/Organization';

import ExternalContacts from '@/components/externalcontacts/ExternalContacts';

import Jurisdiction from '@/components/jurisdiction/Jurisdiction';



Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/sale',
      name: 'sale',
      component:Sale,
      children: [{
        path: 'productSale',//
        component: ProductSale
      },
      {
        path: 'industryApplication',
        component: IndustryApplication
      },
      {
        path: 'price',
        component: Price
      },
      {
        path: 'helpDocument',
        component: HelpDocument
      }]
    },
    {
      path:'/login',
      name:'login',
      component:LoginBody,
      children: [{
        path: '',//
        component: Login
      },
     {
        path: 'register',
        component: Register
     }]
    },
    {
      path:'/main',
      name:'main',
      component:MainBody,
      children: [{
        path: '',//
        component: Organization
      },
      {
          path: 'jurisdiction',//
          component: Jurisdiction
      },
      {
          path: 'externalcontacts',
          component: ExternalContacts
      }]
    }
  ]
});
//默认显示页面
router.push('/sale/productSale');
export default router;