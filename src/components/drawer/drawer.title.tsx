import { Text } from '@nextui-org/react'
import { Box } from '../styles/box'
import { Flex } from '../styles/flex'
import Image, { StaticImageData } from 'next/image'

interface TitleProps {
  title: string | undefined;
  image: string | StaticImageData;
}

export const DrawerTitle = ({ title, image }: TitleProps) => {
  return (
    <Box>
      <Flex align={'center'} css={{ gap: '$7' }}>
        <Image width={60} src={image} alt="Web3Develop" />
        <Box>
          <Text h3 size={'$xl'} weight={'medium'} css={{ m: 0, color: '$accents9', lineHeight: '$lg', mb: '-$5' }}>
            {title}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}