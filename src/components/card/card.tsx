import { Card, Text, Avatar, Tooltip, Popover, Button } from '@nextui-org/react'
import React from 'react'
import { Flex } from '../styles/flex'
import { Box } from '../styles/box'
import { SITE } from '../../config/websites'
import { CardButton } from './card.button'
import { useSidebarContext } from '../layout/layout.context'

interface content {
  url: string;
  desc: string;
}

interface CardProps extends SITE {
  click?: Function;
  getKey?: Function;
}
/* 卡片组件 */
/* TODO 扩展：根据类型展示不同的卡片 */
export const MyCard = (web: CardProps | any) => {
  const { site } = web
  const { setDrawerOpen } = useSidebarContext()
  
  async function copyTextToClipboard() {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(site.url)
    } else {
      return document.execCommand('copy', true, site.url)
    }
  }

  const handleDetail = () => {
    if (web.getKey && typeof web.getKey === 'function') {
      web.getKey(site)
    }
    setDrawerOpen()
  }

  const handlePress = () => {
    window.open(site.url, '_blank')
  }
  return (
    // <Tooltip content={tipContent({ url: site.url, desc: site.description })} enterDelay={600}>
      <Card 
        isHoverable
        isPressable
        variant='bordered' 
        css={{ mw: '375px', width: '20rem', maxHeight: '10rem', borderRadius: '$xl', px: '$6', cursor: 'pointer', '&:hover': { borderColor: '$primary' } }}
      >
        <Card.Body css={{ py: '$0' }}>
          <Flex css={{ gap: '$6', py: '$4' }} direction={'row'} align={'center'}>
            <Avatar
              size='xl'
              src={site.image}
              color='primary'
              bordered
            />
            <Flex css={{ gap: '$6', py: '$4' }} direction={'column'}>
              <Text span size={'$md'} weight={'semibold'}>
                {site.title}
              </Text>
              <Text span size={'$xs'} className='line-2'>
                {site.description}
              </Text>
            </Flex>
          </Flex>
        </Card.Body>
        <Card.Footer>
          <Flex justify={'end'} align={'center'} css={{ gap: '$4', width: '100%' }}>
            <CardButton bgColor='$primaryBorder' func={copyTextToClipboard} popover='复制成功！'>复制地址</CardButton>
            {/* 自定义元素button不识别nextUI的语法糖解析，使用var声明样式变量 */}
            <CardButton bgColor='var(--nextui-colors-primaryLightContrast)' func={handleDetail} native>详情</CardButton>
            <CardButton bgColor='$primarySolidHover' func={handlePress}>出发</CardButton>
          </Flex>
        </Card.Footer>
      </Card>
    // </Tooltip>
  )
}