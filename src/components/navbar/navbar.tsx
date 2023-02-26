import React from 'react'
import { Link, Navbar } from '@nextui-org/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { GithubIcon } from '../icons/navbar/github-icon'
import { SupportIcon } from '../icons/navbar/support-icon'
import { Box } from '../styles/box'
import { BurguerButton } from './burguer.button'
import { DarkModeSwitch } from './darkModeSwitch'

interface Props {
  children: React.ReactNode
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <Box css={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
      <Navbar isBordered variant={'sticky'} css={{
          'borderBottom': '1px solid $border',
          'justifyContent': 'space-between',
          'width': '100%',
          '@md': {
            justifyContent: 'space-between',
          },
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
        </Navbar.Content>

        <Navbar.Content>
          {/* <Navbar.Content hideIn={'md'}>
            <SupportIcon />
          </Navbar.Content> */}
          <Navbar.Content>
            <DarkModeSwitch />
          </Navbar.Content>
          <Navbar.Content>
            <Link href='https://github.com/geekDAO/web3-dev-awesome' target={'_blank'}>
              <GithubIcon />
            </Link>
          </Navbar.Content>
          <Navbar.Content hideIn={'md'}>
            <ConnectButton />
          </Navbar.Content>
        </Navbar.Content>
      </Navbar>
      {children}
    </Box>
  )
}
