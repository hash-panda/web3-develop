import { Card, Text, Avatar, Tooltip, Modal, Button } from '@nextui-org/react'
import React from 'react'
import { Flex } from './styles/flex'
import { Box } from './styles/box'
import { SITE } from '../config/websites'

interface content {
  url: string;
  desc: string;
}

interface CardProps extends SITE {
  click: Function
}
/* 卡片组件 */
/* TODO 扩展：根据类型展示不同的卡片 */
export const MyCard = (web: CardProps | any) => {
  const { site } = web
  /* 自定义toolTip信息 */
  const tipContent = ({ ...props }: content) => {
    return (
      <Flex direction={'column'}>
        <Box css={{ fontWeight: 'bolder', mb: '$2' }}>{props.url}</Box>
        <Flex css={{ maxW: '$8xl' }} wrap={'wrap'}>{props.desc}</Flex>
      </Flex>
    )
  }
  const handlePress = () => {
    web.click(site.url)
  }
  return (
    <Tooltip content={tipContent({ url: site.url, desc: site.description })} enterDelay={600}>
      <Card 
        isHoverable
        isPressable
        onPress={handlePress}
        variant='bordered' 
        css={{ mw: '375px', width: '20rem', maxHeight: '10rem', borderRadius: '$xl', px: '$6', cursor: 'pointer', '&:hover': { borderColor: '$primary' } }}
      >
        <Card.Body css={{ py: '$0' }}>
          <Flex css={{ gap: '$6', py: '$4' }} direction={'row'} align={'center'}>
            <Avatar
              size="xl"
              src={site.image}
              color="primary"
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
      </Card>
    </Tooltip>
  )
}