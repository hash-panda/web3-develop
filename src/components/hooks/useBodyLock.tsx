import { useEffect, useState } from 'react'
import { layoutEffect } from './layoutEffect'

type ReturnType = [boolean, (locked: boolean) => void]

export const useLockedBody = (initialLocked = false): ReturnType => {
  const [locked, setLocked] = useState(initialLocked)

  layoutEffect(() => {
    if (!locked) {
      return
    }

    // 保存body的初始样式
    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight

    // 锁定body滚动
    document.body.style.overflow = 'hidden'

    // 获取滚动条的宽度
    const root = document.getElementById('___gatsby') // or root
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0

    // 避免宽度重排
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`
    }

    return () => {
      /* 还原body初始样式 */
      document.body.style.overflow = originalOverflow

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight
      }
    }
  }, [locked])

  // 初始值变化时，更新组件状态
  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked])

  return [locked, setLocked]
}