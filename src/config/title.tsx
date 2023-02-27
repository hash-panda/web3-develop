
import React from 'react'
import { Logo } from '../components/icons/logo'
interface TitleContent {
  name: string
  desc: string
  logo: React.ReactNode
}

export const Title: TitleContent = {
  name: 'Web3 Develop',
  desc: 'Web3开发入门，从这里开始',
  logo: <Logo />,
}