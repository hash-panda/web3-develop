import { Text } from '@nextui-org/react'
import React, { useState } from 'react'
import { Logo } from '../icons/logo'
import { Box } from '../styles/box'
import { Flex } from '../styles/flex'

interface Title {
  name: string
  desc: string
  logo: React.ReactNode
}

export const SidebarTitle = () => {
  const [title, setTitle] = useState<Title>({
    name: 'Web3 Dev Awesome',
    desc: 'web3 kits',
    logo: <Logo />,
  })
  return (
    <Box>
      <Flex align={'center'} css={{ gap: '$7' }}>
        {title.logo}
        <Box>
          <Text h3 size={'$xl'} weight={'medium'} css={{ m: 0, color: '$accents9', lineHeight: '$lg', mb: '-$5' }}>
            {title.name}
          </Text>
          <Text span weight={'medium'} size={'$xs'} css={{ color: '$accents8' }}>
            {title.desc}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}