import { Box } from '../styles/box'
import { Sidebar } from './sidebar.styles'
import { Flex } from '../styles/flex'
import { SidebarTitle } from './sidebar.title'
import { SidebarItem } from './sidebar.item'
import { SidebarMenu } from './sidebar.menu'
import { useSidebarContext } from '../layout/layout.context'
import { websites as menus } from '../../config/websites'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export const SidebarWrapper = () => {
  const { activeMenu, collapsed, setCollapsed } = useSidebarContext()
  return (
    <Box as='aside' css={{ height: '100vh', zIndex: 202, position: 'sticky', top: '0' }}>
      {/* sidebar手机模式下的遮罩层 */}
      {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}
      <Sidebar collapsed={collapsed}>
        <Sidebar.Title css={{ position: 'sticky', top: '0', left: '0', right: '0', zIndex: '203', background: '$background' }}>
          <SidebarTitle />
        </Sidebar.Title>
        <Flex direction={'column'} justify={'between'} css={{ height: '100%' }}>
          <Sidebar.Body className='body sidebar'>
            {
              menus.map((s) => {
                return (
                  <SidebarItem key={s.key} title={s.name} icon={s.icon} isActive={activeMenu === s.key} href={s.key} />
                )
              })
            }
            <SidebarMenu title={''} mobileMode={true}>
              <ConnectButton />
            </SidebarMenu>
          </Sidebar.Body>
        </Flex>
      </Sidebar>
    </Box>
  )
}