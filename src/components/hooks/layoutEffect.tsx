/*  
  useEffect 与 useLayoutEffect 两者都是用于处理副作用，这些副作用包括改变 DOM、设置订阅、操作定时器等
  在函数组件内部操作副作用是不被允许的，所以需要使用这两个函数去处理

  useEffect 在 React 的渲染过程中是被异步调用的，用于绝大多数场景
  useLayoutEffect 会在所有的 DOM 变更之后同步调用，主要用于处理 DOM 操作、调整样式、避免页面闪烁等问题

  useEffect是按照顺序执行代码的，改变屏幕像素之后执行（先渲染，后改变DOM），当改变屏幕内容时可能会产生闪烁
  useLayoutEffect是改变屏幕像素之前就执行了（会推迟页面显示的事件，先改变DOM后渲染），不会产生闪烁
  
  useLayoutEffect总是比useEffect先执行
*/
import {useEffect, useLayoutEffect} from 'react';

export const layoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;