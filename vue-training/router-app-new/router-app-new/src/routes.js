import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserStart from './components/user/UserStart.vue'
import Header from './components/Header.vue'
import Project from './components/projects/Project.vue'
import ProjectDetails from './components/projects/ProjectDetails.vue'
import ProjectEdit from './components/projects/ProjectEdit.vue'
import ProjectHome from './components/projects/ProjectHome.vue'

export const routes = [
    {
        path: '', name: 'home', components: {
            default: Home, 'header-top': Header
        }
    },

    {
        path: '/user', components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ]
    },
    {
        path: '/projects', components: {
            default: Project,
            'header-bottom': Header
        },
        children: [
            { path: '', component: ProjectHome },
            { path: ':id', component: ProjectDetails, name:'projectDetails' },
            { path: ':id/edit', component: ProjectEdit, name: 'projectEdit' },
        ]
    },    
    { path: '/takemenowhere', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
]