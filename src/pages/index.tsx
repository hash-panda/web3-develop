import React from 'react'
import type { NextPage } from 'next'
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
  const [visible, setVisible] = React.useState(false)
  const [link, setLink] = React.useState('')
  const modalHandler = (url: string) => { 
    console.log('url', url)
    setVisible(true)
    setLink(url)
  }
  const cards = websites[activeMenu].map(i => {
    return (<MyCard key={i.key} site={i} onClick={modalHandler.bind(this, i.url)} />)
  })
  return (
    <Box css={{ overflow: 'hidden', height: '100%', mt: '$6' }}>
      { isConnected && <Box css={{ 'px': '$12' }}>
        <Account />
      </Box> }
      <Flex justify={'center'}>
        <Flex css={{ 'px': '$12', 'pt': '$5', 'gap': '$12', 'height': '100%', 'flexWrap': 'wrap'}} direction={'row'} justify={'start'}>
          { cards }
        </Flex>
      </Flex>
    </Box>
  )
}

export default Home