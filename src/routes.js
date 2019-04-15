import Home from './Home'
import Grid from './Grid'
import { cities } from './api'

const route = [

    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/cities',
        component: Grid,
        fetchInitialData: cities


    }
]

export default route