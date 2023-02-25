import { Card, Text, Avatar, Tooltip } from '@nextui-org/react'
import React from 'react'
import { Box } from './styles/box'
import { Flex } from './styles/flex'
import { SITE } from '../config/websites'
import { useRouter } from 'next/router'

export const MyCard = (web: SITE | any) => {
  const { site } = web
  const router = useRouter()
  return (
    <Tooltip content={site.url} enterDelay={400}>
      <Card isPressable css={{ mw: '375px', width: '20rem', height: '7rem', bg: '$blue600', borderRadius: '$xl', px: '$6', cursor: 'pointer' }}>
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