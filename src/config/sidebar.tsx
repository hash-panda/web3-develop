import { HomeIcon } from '../components/icons/sidebar/home-icon'
import React from 'react'

interface menu {
  title: string
  icon: React.ReactNode
  key: string
}

export const sidebars: menu[] = [
  {
    title: '网址导航',
    icon: <HomeIcon />,
    key: 'links'
  },
  {
    title: '开发指引',
    icon: <HomeIcon />,
    key: 'articles'
  }
]