import { Text } from '@nextui-org/react'
import React, { useState } from 'react'
import { AcmeIcon } from '../icons/acme-icon'
import { Box } from '../styles/box'
import { Flex } from '../styles/flex'

interface Company {
  name: string
  location: string
  logo: React.ReactNode
}

export const SidebarTitle = () => {
  const [company, setCompany] = useState<Company>({
    name: 'Web3 Dev Awesome',
    location: 'web3 kits',
    logo: <AcmeIcon />,
  })
  return (
    <Box>
      <Flex align={'center'} css={{ gap: '$7' }}>
        {company.logo}
        <Box>
          <Text h3 size={'$xl'} weight={'medium'} css={{ m: 0, color: '$accents9', lineHeight: '$lg', mb: '-$5' }}>
            {company.name}
          </Text>
          <Text span weight={'medium'} size={'$xs'} css={{ color: '$accents8' }}>
            {company.location}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}