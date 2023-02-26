import { Card, Text, Avatar, Tooltip, Modal, Button } from '@nextui-org/react'
import React from 'react'
import { Flex } from './styles/flex'
import { SITE } from '../config/websites'

export const MyCard = (web: SITE | any) => {
  const { site } = web
  return (
    <Tooltip content={site.url} enterDelay={400}>
      <Card isHoverable isPressable css={{ mw: '375px', width: '20rem', maxHeight: '10rem', bg: '$blue600', borderRadius: '$xl', px: '$6', cursor: 'pointer' }}>
        <Card.Body css={{ py: '$0' }}>
          <Flex css={{ gap: '$6', py: '$4' }} direction={'row'} align={'center'}>
            <Avatar
              size="xl"
              src={site.image}
              color="primary"
              bordered
            />
            <Flex css={{ gap: '$6', py: '$4' }} direction={'column'}>
              <Text span size={'$xl'} css={{ color: 'white' }} weight={'semibold'}>
                {site.title}
              </Text>
              <Text span css={{ color: '$green800' }} size={'$xs'} className='line-2'>
                {site.description}
              </Text>
            </Flex>
          </Flex>
        </Card.Body>
      </Card>
    </Tooltip>
  )
}