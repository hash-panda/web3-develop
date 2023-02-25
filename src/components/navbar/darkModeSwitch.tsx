import React from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

export const DarkModeSwitch = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()
  return (
    <Switch css={{ mb: '$2' }} checked={isDark} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
  )
}
