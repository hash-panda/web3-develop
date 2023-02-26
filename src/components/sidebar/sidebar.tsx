import { Box } from '../styles/box'
import { Sidebar } from './sidebar.styles'
import { Flex } from '../styles/flex'
import { SidebarTitle } from './sidebar.title'
import { HomeIcon } from '../icons/sidebar/home-icon'
import { SidebarItem } from './sidebar.item'
// import { SidebarMenu } from './sidebar.menu'
import { useSidebarContext } from '../layout/layout.context'
import { useRouter } from 'next/router'
import { websites } from '../../config/websites'

export const SidebarWrapper = () => {
  const router = useRouter()
  const { activeMenu, collapsed, setCollapsed, setActiveMenu } = useSidebarContext()
  return (
    <Box as='aside' css={{ height: '100vh', zIndex: 202, position: 'sticky', top: '0' }}>
      {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}
      <Sidebar collapsed={collapsed}>
        <Sidebar.Header>
          <SidebarTitle />
        </Sidebar.Header>
        <Flex direction={'column'} justify={'between'} css={{ height: '100%' }}>
          <Sidebar.Body className='body sidebar'>
            {
              websites.map((s) => {
                return (
                  <SidebarItem key={s.key} title={s.name} icon={s.icon} isActive={activeMenu === s.key} href={s.key} />
                )
              })
            }
          </Sidebar.Body>
        </Flex>
      </Sidebar>
    </Box>
  )
}