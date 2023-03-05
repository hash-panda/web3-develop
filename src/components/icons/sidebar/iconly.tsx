import React, { CSSProperties } from 'react'
import { Iconly } from 'react-iconly'

/*
  Please find Icon`s name at https://react-iconly.jrgarciadev.com/
  e.g. Paper, Setting, Work...
*/

interface IconProps {
  name: string;
  primaryColor?: string;
  type?: 'light' | 'bold' | 'two-tone' | 'bulk' | 'broken' | 'curved';
  size?: number | 'small' | 'medium' | 'large' | 'xlarge';
  css?: CSSProperties
}

export const MyIcon = ({ name, type = 'bold', primaryColor = 'var(--nextui-colors-accents6)', size = 'medium', css }: IconProps) => {
  return (
    <Iconly name={ name } set={type} primaryColor={primaryColor} size={size} style={css} />
  )
}