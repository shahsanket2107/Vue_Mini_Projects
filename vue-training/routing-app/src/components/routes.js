import Home from './Home.vue'
import User from './user/User.vue'

export const routes=[
    {
        path:'',component:Home
    },
    {
        path:'/user',component:User
    },
    {
        path:'/user/:id',component:User
    }
]