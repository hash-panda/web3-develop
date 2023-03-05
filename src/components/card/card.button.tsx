import React from 'react'
import { Button, Popover } from '@nextui-org/react'
import { Box } from '../styles/box'

interface ButtonProps {
  children: React.ReactNode
  bgColor?: string
  func?: Function,
  native?: boolean
  popover?: string
}

export const CardButton = ({ bgColor, func, native = false, popover, children }: ButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleNativeClick = (e: any) => {
    if (func && typeof func === 'function') {
      func(e)
    }
    if (native) e.stopPropagation()
  }
  const handleClick = (e: any) => {
    if (func && typeof func === 'function') {
      func()
    }
  }
  const overlayClose = async (isOpenStatus: boolean) => {
    setIsOpen(isOpenStatus)
    setTimeout(async () => {
      await setIsOpen(false)
    }, 2000)
  }
  return (
    native ? 
    <button className='custom-button' style={{ background: bgColor }} onClick={(e) => handleNativeClick(e)}>{ children }</button>
    :
    (
      !popover ?
      <Button rounded auto size={'xs'} css={{ background: bgColor }} onClick={(e) => handleClick(e)}>{ children }</Button>
      :
      <Popover isOpen={isOpen} onOpenChange={overlayClose} placement={'top'}>
        <Popover.Trigger>
          <Button rounded auto size={'xs'} css={{ background: bgColor }} onClick={(e) => handleClick(e)}>{ children }</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Box css={{ px: "$8", py: '$4', fontSize: '$sm' }}>{ '复制成功！' }</Box>
        </Popover.Content>
      </Popover>
    )
  )
}