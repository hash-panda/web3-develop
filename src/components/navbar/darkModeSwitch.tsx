import React from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { SunIcon } from '../icons/SunIcon';
import { MoonIcon } from '../icons/MoonIcon';
/* 切换主题 */
export const DarkModeSwitch = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()
  return (
    <Switch 
      color="secondary" 
      iconOn={<SunIcon filled />}
      iconOff={<MoonIcon filled />}
      css={{ mb: '$2' }}
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} 
    />
  )
}
