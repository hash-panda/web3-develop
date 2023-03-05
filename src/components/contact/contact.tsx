import React from 'react'
import { Link } from '@nextui-org/react'
import { GithubIcon } from '../icons/navbar/github-icon'
import { WeiboIcon } from '../icons/navbar/weibo-icon'
import { TwitterIcon } from '../icons/navbar/twitter-icon'
import { Flex } from '../styles/flex'
import { contacts } from '../../config/contact'

export const MyContact = () => {
  return (
    <Flex css={{ gap: '$8' }} align={'center'}>
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