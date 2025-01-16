import PageHome from './page-home'
import PageGamificacion from './page-gamification'
import PageReact from './page-react'
import PageWordpress from './page-wordpress'

export default [
  {
    title: 'Home',
    path: '/',
    comp: PageHome
  },
  {
    title: 'Wordpress',
    path: '/wordpress',
    comp: PageWordpress
  },
  {
    title: 'React',
    path: '/react',
    comp: PageReact
  },
  {
    title: 'Gamificación',
    path: '/gamification',
    comp: PageGamificacion
  }
]