import { Button } from '@nextui-org/react'
import { useEffect } from 'react'
import { ChevronUp } from 'react-iconly'

interface Btt {
  backToTop: boolean
}
/* 返回顶部 */
export function BackToTop({ backToTop }: Btt) {
  const handleToTop = () => {
    /* 将滚动区域滚动到0位置 */
    document.getElementById('scroll')?.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return <Button 
    rounded
    icon={<ChevronUp set='bold' />}
    css={{ 
      position: 'fixed',
      right: '$10',
      bottom: '$10',
      width: '$15',
      height: '$15',
      minWidth: '$15',
      boxShadow: 'rgb(30 30 30 / 50%) 1px 1px 1px 0px',
      display: backToTop ? 'flex' : 'none' 
    }}
    onClick={handleToTop}
  />
}