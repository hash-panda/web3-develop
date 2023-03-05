import { Text, Link } from '@nextui-org/react'
import React from 'react'
import { useSidebarContext } from '../layout/layout.context'
import { Flex } from '../styles/flex'
import { MyIcon } from '../icons/sidebar/iconly'
interface Props {
  title: string
  icon: string
  isActive?: boolean
  href?: string
}

export const SidebarItem = ({ icon, title, isActive, href = '' }: Props) => {
  const { setCollapsed, setActiveMenu } = useSidebarContext()

  const handleClick = (href: string) => {
    // setActiveMenu(href)
    if (window.innerWidth < 768) {
      setCollapsed()
    }
  }
  return (
    /* 利用a标签href属性跳转对应的id（link封住的a标签） */
    <Link css={{ color: '$accents9', maxWidth: '100%', width: '100%' }} href={`#${href}`}>
      <Flex onClick={handleClick.bind(this, href)} css={{
          'gap': '$6',
          'width': '100%',
          'minHeight': '44px',
          'height': '100%',
          'alignItems': 'center',
          'px': '$7',
          'borderRadius': '8px',
          'cursor': 'pointer',
          'transition': 'all 0.15s ease',
          '&:active': {
            transform: 'scale(0.98)',
          },
          ...(isActive ? { bg: '$purple200', '& svg path': { fill: '$purple600', } } : { '&:hover': { bg: '$accents2' } })
        }}
        align={'center'}
      >
        <MyIcon name={icon} />
        <Text span weight={'normal'} size={'$base'} css={{ color: '$accents9' }}>
          {title}
        </Text>
      </Flex>
    </Link>
  )
}