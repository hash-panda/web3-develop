import type { NextPage } from 'next'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { Account } from '../components/account/index'
import { websites } from '../config/websites'
import { Box } from '../components/styles/box'
import { Flex } from '../components/styles/flex'
import { MyCard } from '../components/card'
import { useSidebarContext } from '../components/layout/layout.context'

const Home: NextPage = () => {
  const { isConnected } = useAccount()
  const { activeMenu } = useSidebarContext()
  const cards = websites[activeMenu].map(i => {
    return (<MyCard key={i.key} site={i} />)
  })
  return (
    <Box css={{ overflow: 'hidden', height: '100%', mt: '$6' }}>
      <Box css={{ 'px': '$12' }}>
        <h3>wagmi + RainbowKit + Next.js</h3>
        <ConnectButton />
        {isConnected && <Account />}
      </Box>
      <Flex justify={'center'}>
        <Flex css={{ 'px': '$12', 'pt': '$5', 'gap': '$12', 'height': '100%', 'flexWrap': 'wrap'}} direction={'row'} justify={'start'}>
          { cards }
        </Flex>
      </Flex>
    </Box>
  )
}

export default Home