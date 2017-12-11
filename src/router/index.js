import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = resolve => {
  require.ensure(['../components/Index.vue'], () => {
      resolve(require('../components/Index.vue'))
  })
}

const Services = resolve => {
  require.ensure(['../components/Services.vue'], () => {
      resolve(require('../components/Services.vue'))
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/services',
          name: 'Services',
          component: Services,
          meta:{
            requireAuth: true
          }
        }
      ]
    }
  ]
})
