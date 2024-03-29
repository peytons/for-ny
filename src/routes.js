
import App from './components/App'
import Index from './components/Index'
import PostList from './components/PostList'
import PaidLandingIndex from './components/PaidLandingIndex'
import PostIndex from './components/PostIndex'
import Post from './components/Post'

const baseurl = '/fornewyork/'

const routes = [
    {
        path: baseurl,
        component: App,
        indexRoute: {
            component: Index
        },
        childRoutes: [
            {
                path: 'posts',
                component: PostIndex
            },
            {
                path: 'posts/:name',
                component: Post
            },
            {
                path: 'p',
                component: PaidLandingIndex
            }
        ]
    }
]

export default routes



