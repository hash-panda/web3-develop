import { styled } from '@nextui-org/react'
/* 利用nextUI 提供的 styled 自定义函数组件 Divider */
export const Divider = styled('div', {
  boxSizing: 'border-box',
  width: '40%',
  height: '$1',
  background: '$primaryBorder',
  borderRadius: '$2xl',
  mb: '$8',
  mt: '$4'
})
