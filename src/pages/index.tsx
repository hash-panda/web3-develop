import React from 'react'
import type { NextPage } from 'next'
import { Text, Link } from '@nextui-org/react'
import { useAccount } from 'wagmi'
import { Account } from '../components/account/index'
import { websites, ListItem } from '../config/websites'
import { Box } from '../components/styles/box'
import { Flex } from '../components/styles/flex'
import { Divider } from '../components/styles/divider'
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
  // const getId = 
  const c = document.getElementsByClassName('scrollContent')[0]
  if (c) {
    console.log('c', c)
    console.log('c.onscroll', c.scroll)
    // c.onscroll = function(e) {
    //   console.log('e', e)
    // }
  }
  // console.log(c)
  return (
    <Box css={{ overflow: 'hidden', height: '100%', mt: '$6' }}>
      <Flex className="scrollContent" justify={'start'} direction={'column'}>
        {
          websites.map((item: ListItem) => {
            return (
              <Flex key={item.name} css={{ 'px': '$12', 'pt': '$10' }} direction={'column'}>
                <Link css={{ fontSize: '$2xl', fontWeight: 'bolder' }} id={item.key}>
                  { item.name }
                </Link>
                <Divider />
                <Flex css={{ 'pt': '$5', 'gap': '$12', 'height': '100%', 'flexWrap': 'wrap'}} direction={'row'} justify={'start'}>
                  { 
                    item.arr.map((i: any) => {
                      return (<MyCard key={i.key} site={i} onClick={modalHandler.bind(this, i.url)} />)
                    })
                  }
                </Flex>
              </Flex>
            )
          })
        }
      </Flex>
    </Box>
  )
}

export default Home