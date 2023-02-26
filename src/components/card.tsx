import { Card, Text, Avatar, Tooltip, Modal, Button } from '@nextui-org/react'
import React from 'react'
import { Flex } from './styles/flex'
import { SITE } from '../config/websites'
import { useTheme } from '@nextui-org/react'

export const MyCard = (web: SITE | any) => {
  const { site } = web
  const { isDark } = useTheme()
  return (
    <Tooltip content={site.url} enterDelay={400}>
      <Card isHoverable isPressable css={{ mw: '375px', width: '20rem', maxHeight: '10rem', bg: '$primary', borderRadius: '$xl', px: '$6', cursor: 'pointer' }}>
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