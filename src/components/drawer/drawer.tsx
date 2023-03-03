import { Box } from '../styles/box'
import { Drawer } from './drawer.styles'
import { Flex } from '../styles/flex'
import { DrawerTitle } from './drawer.title'
import { useSidebarContext } from '../layout/layout.context'
import React from 'react'
import { SITE } from '../../config/websites'

interface DrawerProps {
  children: React.ReactNode
}

export const DrawerWrapper = (drawer: DrawerProps) => {
  const { drawerOpen, setDrawerOpen } = useSidebarContext()
  return (
    <Box className='custom-drawer' css={{ height: '100vh', zIndex: 202 }}>
      {drawerOpen ? <Drawer.Overlay onClick={setDrawerOpen} /> : null}
      <Drawer open={drawerOpen}>
        <Flex direction={'column'} justify={'between'} css={{ height: '100%' }}>
          <Drawer.Body className='body sidebar'>
            { drawer.children }
          </Drawer.Body>
        </Flex>
      </Drawer>
    </Box>
  )
}