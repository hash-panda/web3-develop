import { styled } from '@nextui-org/react'
/* 利用nextUI 提供的 styled 自定义Drawer相关函数组件 */
export const DrawerWrapper = styled('div', {
  'backgroundColor': '$background',
  'transition': 'transform 0.2s ease',
  'height': '100%',
  'position': 'fixed',
  'right': 0,
  'top': 0,
  'transform': 'translateX(100%)',
  'width': '20rem',
  'flexShrink': 0,
  'zIndex': '202',
  'overflowY': 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  'borderRight': '1px solid $border',
  'flexDirection': 'column',
  'py': '$10',
  'px': '$6',
  '@md': {
    'width': '30rem'
  },
  'variants': {
    open: {
      true: {
        display: 'inherit',
        marginLeft: '0 ',
        transform: 'translateX(0)',
      },
    },
  },
})

export const Overlay = styled('div', {
  'backgroundColor': 'rgb(15 23 42 / 0.3)',
  'position': 'fixed',
  'inset': 0,
  'zIndex': '201',
  'transition': 'opacity 0.3s ease',
  'opacity': 0.8
})

export const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  px: '$4',
})

export const Footer = styled('div', {
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'gap': '$12',
  'pt': '$18',
  'pb': '$8',
  '@md': {
    pt: 0,
    pb: 0,
  },
  'px': '$8',
})

export const Drawer = Object.assign(DrawerWrapper, {
  Body,
  Overlay,
  Footer,
})
