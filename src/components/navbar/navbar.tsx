import React from 'react'
import { Link, Navbar, Text } from '@nextui-org/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { GithubIcon } from '../icons/navbar/github-icon'
import { WeiboIcon } from '../icons/navbar/weibo-icon'
import { TwitterIcon } from '../icons/navbar/twitter-icon'
import { Box } from '../styles/box'
import { BurguerButton } from './burguer.button'
import { DarkModeSwitch } from './darkModeSwitch'
import { Title } from '../../config/title'
import { MyContact } from '../contact/contact'

interface Props {
  children: React.ReactNode
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <Box css={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
      {/* 这里设置sticky样式需注意任意父元素的overflow须为visible类型 */}
      <Navbar isBordered variant={'sticky'} css={{
          'borderBottom': '1px solid $border',
          'justifyContent': 'space-between',
          'width': '100%',
          '@md': { justifyContent: 'space-between' },
          '& .nextui-navbar-container': {
            'border': 'none',
            'maxWidth': '100%',
            'gap': '$6',
            '@md': {
              justifyContent: 'end'
            }
          }
        }}
      >
        <Navbar.Content showIn='md'>
          <BurguerButton />
          <Text h3 size={'$xl'} weight={'medium'} css={{ m: 0, color: '$accents9', lineHeight: '$lg', ml: '40px' }}>
            {Title.name}
          </Text>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Content hideIn={'md'}>
            <MyContact />
          </Navbar.Content>
          <Navbar.Content>
            <DarkModeSwitch />
          </Navbar.Content>
          <Navbar.Content hideIn={'md'}>
            <ConnectButton label='连接钱包' />
          </Navbar.Content>
        </Navbar.Content>
      </Navbar>
      {children}
    </Box>
  )
}
