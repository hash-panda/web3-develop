import React from 'react'
import { useLockedBody } from '../hooks/useBodyLock'
import { NavbarWrapper } from '../navbar/navbar'
import { SidebarWrapper } from '../sidebar/sidebar'
import { SidebarContext } from './layout.context'
import { WrapperLayout } from './layout.styles'
import { websites } from '../../config/websites'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [dOpen, setDOpen] = React.useState(false)
  /* 取数据源的第一个元素key作为初始激活菜单 */
  const [currentMenu, setCurrentMenu] = React.useState(websites[0].key || '')
  const [_, setLocked] = useLockedBody(false)
  /* sidebar打开和关闭的状态值 */
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
    setLocked(!sidebarOpen)
  }
  const handleDrawerOpen = () => {
    setDOpen(!dOpen)
  }
  const handleCurrentMenu = (href: string) => {
    setCurrentMenu(href)
  }
  return (
    <SidebarContext.Provider
      value={{
        activeMenu: currentMenu,
        collapsed: sidebarOpen,
        drawerOpen: dOpen,
        setCollapsed: handleToggleSidebar,
        setDrawerOpen: handleDrawerOpen,
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
