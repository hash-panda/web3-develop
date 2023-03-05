import React, { CSSProperties } from 'react'
import { Link } from '@nextui-org/react'
import { GithubIcon } from '../icons/navbar/github-icon'
import { WeiboIcon } from '../icons/navbar/weibo-icon'
import { TwitterIcon } from '../icons/navbar/twitter-icon'
import { Flex } from '../styles/flex'
import { contacts } from '../../config/contact'

interface ContactProps {
  css?: object
}

export const MyContact = ({ css }: ContactProps) => {
  return (
    <Flex css={{ gap: '$8', ...css }} align={'center'}>
      <Link href={contacts.weibo} target={'_blank'}>
        <WeiboIcon />
      </Link>
      <Link href={contacts.twitter} target={'_blank'}>
        <TwitterIcon />
      </Link>
      <Link href={contacts.github} target={'_blank'}>
        <GithubIcon />
      </Link>
    </Flex>
  )
}