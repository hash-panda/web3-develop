import React from 'react'
import { useLockedBody } from '../hooks/useBodyLock'
import { NavbarWrapper } from '../navbar/navbar'
import { SidebarWrapper } from '../sidebar/sidebar'
import { SidebarContext } from './layout.context'
import { WrapperLayout } from './layout.styles'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [currentMenu, setCurrentMenu] = React.useState('home')
  const [_, setLocked] = useLockedBody(false)
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
    setLocked(!sidebarOpen)
  }
  const handleCurrentMenu = (href: string) => {
    setCurrentMenu(href)
  }
  return (
    <SidebarContext.Provider
      value={{
        activeMenu: currentMenu,
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
        setActiveMenu: handleCurrentMenu
      }}
    >
      <WrapperLayout>
        <SidebarWrapper />
        <NavbarWrapper>{ children }</NavbarWrapper>
      </WrapperLayout>
    </SidebarContext.Provider>
  )
}
