/* 节流函数 */
export function throttle(this: any, func: Function, time: number, immediate = false) {
  if (immediate) {
    let prevTime = 0
    return (...args: any) => {
      let nowTime = Date.now()
      if (nowTime - prevTime >= time) {
        func.apply(this, args)
        prevTime = nowTime
      }
    }
  } else {
    let timer: number | null = null
    return (...args: any) => {
      if (!timer) {
        func.apply(this, args)
        timer = window.setTimeout(() => {
          if (timer) clearInterval(timer)
          timer = null
        }, time)
      }
    }
  }
}

/* 防抖函数 */
export function debounce(this: any, func: Function, time: number, immediate = false) {
  let timer: number | null = null
  return (...args: any) => {
    if (timer) clearInterval(timer)
    if (immediate) {
      if (!timer) func.apply(this, args)
      timer = window.setTimeout(() => {
        timer = null
      }, time)
    } else {
      timer = window.setTimeout(() => {
        func.apply(this, args)
      }, time)
    }
  }
}
/**
 * open a window web page
 * @param url 
 * @returns Function
 */
export const openWebPage = (url: string) => {
  return ()=>{window.open(url, '_blank')}
}