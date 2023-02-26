import { HomeIcon } from '../components/icons/sidebar/home-icon'
import React from 'react'

interface menu {
  title: string
  icon: React.ReactNode
  key: string
}

export const sidebars: menu[] = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    key: 'home'
  },
  {
    title: 'Blockchain',
    icon: <HomeIcon />,
    key: 'blockchain'
  }
]