import { Text } from '@nextui-org/react'
import { Box } from '../styles/box'
import { Flex } from '../styles/flex'
import { Title } from '../../config/title'

export const SidebarTitle = () => {
  return (
    <Box>
      <Flex align={'center'} css={{ gap: '$7' }}>
        {Title.logo}
        <Box>
          <Text h3 size={'$xl'} weight={'medium'} css={{ m: 0, color: '$accents9', lineHeight: '$lg', mb: '-$5' }}>
            {Title.name}
          </Text>
          <Text span weight={'medium'} size={'$xs'} css={{ color: '$accents8' }}>
            {Title.desc}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}