import { styled } from '@nextui-org/react'
/* 利用nextUI 提供的 styled 自定义Navbar相关函数组件 */
export const StyledBurgerButton = styled('button', {
  'position': 'absolute',
  'display': 'flex',
  'flexDirection': 'column',
  'justifyContent': 'space-around',

  'width': '22px',
  'height': '22px',
  'background': 'transparent',
  'border': 'none',
  'cursor': 'pointer',
  'padding': '0',
  'zIndex': '202',
  '&:focus': {
    outline: 'none',
  },
  '& div': {
    'width': '22px',
    'height': '1px',
    'background': '$accents9',
    'borderRadius': '10px',
    'transition': 'all 0.3s ease',
    'position': 'relative',
    'transformOrigin': '1px',

    '&:first-child': {
      transform: 'translateY(-4px) rotate(0deg)',
      height: '1px',
      marginTop: '10px',
    },
    '&:nth-child(2)': {
      transform: 'translateY(4px) rotate(0deg)',
      height: '1px',
      marginBottom: '10px',
    },
  },
  'variants': {
    open: {
      true: {
        '& div': {
          '&:first-child': {
            marginTop: '0px',
            transform: 'translateY(1px) rotate(45deg)',
          },
          '&:nth-child(2)': {
            marginBottom: '0px',
            transform: 'translateY(4px) rotate(-45deg)',
          },
        },
      },
    },
  },
})
