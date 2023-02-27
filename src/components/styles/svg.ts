import { styled } from '@nextui-org/react'

const UnstyledSvg = styled('svg', {})
const UnstyledPath = styled('path', {})
const UnstyledRect = styled('rect', {})
/* 利用nextUI 提供的 styled 自定义函数组件 Svg */
export const Svg = Object.assign(UnstyledSvg, {
  Path: UnstyledPath,
  Rect: UnstyledRect
})
