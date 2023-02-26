import { HomeIcon } from '../components/icons/sidebar/home-icon'
import React from 'react'
export interface SITE {
  title: string,
  url: string,
  image: string,
  description: string,
  key: string
}

export interface ListItem {
  name: string,
  arr: SITE[],
  icon: React.ReactNode
  key: string
}

export const websites: ListItem[] = [
  {
    name: 'Web3 开发',
    icon: <HomeIcon />,
    key: 'web3_1',
    arr: [
      {
        title: 'thirdweb',
        url: 'https://thirdweb.com/',
        image: 'https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.a8cda9b2.png&w=1080&q=75',
        description: 'thirdweb is a complete web3 development framework that provides everything you ne',
        key: 'thirdweb'
      },
      {
        title: 'wagmi.sh',
        url: 'https://wagmi.sh/',
        image: 'https://avatars.githubusercontent.com/u/58292274?s=400&u=a46b463019b90c071a27243c2add5d0177b482e4&v=4',
        description: 'wagmi 是一个 React Hook 的集合，包含了你与以太坊交互所需的一切。wagmi 使连接钱包、显示 ENS 和余额信息、签署消息、与合约交互等变得简单——所有这些都有缓存、重复请求降重和持久化',
        key: 'wagmi'
      }
    ]
  },
  {
    name: 'Web3 开发2',
    icon: <HomeIcon />,
    key: 'web3_2',
    arr: [
      {
        title: 'thirdweb',
        url: 'https://thirdweb.com/',
        image: 'https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.a8cda9b2.png&w=1080&q=75',
        description: 'thirdweb is a complete web3 development framework that provides everything you ne',
        key: 'thirdweb'
      },
      {
        title: 'wagmi.sh',
        url: 'https://wagmi.sh/',
        image: 'https://avatars.githubusercontent.com/u/58292274?s=400&u=a46b463019b90c071a27243c2add5d0177b482e4&v=4',
        description: 'wagmi 是一个 React Hook 的集合，包含了你与以太坊交互所需的一切。wagmi 使连接钱包、显示 ENS 和余额信息、签署消息、与合约交互等变得简单——所有这些都有缓存、重复请求降重和持久化',
        key: 'wagmi'
      }
    ]
  },
  {
    name: 'Dapp 指南',
    icon: <HomeIcon />,
    key: 'web3_3',
    arr: [
      {
        title: 'Web3 DApp 最佳编程实践指南',
        url: 'https://guoyu.mirror.xyz/RD-xkpoxasAU7x5MIJmiCX4gll3Cs0pAd5iM258S1Ek',
        image: 'https://avatars.githubusercontent.com/u/58292274?s=400&u=a46b463019b90c071a27243c2add5d0177b482e4&v=4',
        description: '这篇文章将会涉及到开发一个 DApp 所涵盖的几乎所有方面内容。包括：认识 DApp 技术栈、智能合约编码、开发工作流与单元测试、前端与客户端开发、开发、测试与生产环境调试、服务端编码与集成、合约部署方案 L1s & L2、去中心化储存方案等',
        // author: '郭宇',
        key: 'guoyu'
      }
    ]
  },
  {
    name: 'Dapp 指南1',
    icon: <HomeIcon />,
    key: 'web3_4',
    arr: [
      {
        title: 'Web3 DApp 最佳编程实践指南',
        url: 'https://guoyu.mirror.xyz/RD-xkpoxasAU7x5MIJmiCX4gll3Cs0pAd5iM258S1Ek',
        image: 'https://avatars.githubusercontent.com/u/58292274?s=400&u=a46b463019b90c071a27243c2add5d0177b482e4&v=4',
        description: '这篇文章将会涉及到开发一个 DApp 所涵盖的几乎所有方面内容。包括：认识 DApp 技术栈、智能合约编码、开发工作流与单元测试、前端与客户端开发、开发、测试与生产环境调试、服务端编码与集成、合约部署方案 L1s & L2、去中心化储存方案等',
        // author: '郭宇',
        key: 'guoyu'
      }
    ]
  },
  {
    name: 'Dapp 指南2',
    icon: <HomeIcon />,
    key: 'web3_5',
    arr: [
      {
        title: 'Web3 DApp 最佳编程实践指南',
        url: 'https://guoyu.mirror.xyz/RD-xkpoxasAU7x5MIJmiCX4gll3Cs0pAd5iM258S1Ek',
        image: 'https://avatars.githubusercontent.com/u/58292274?s=400&u=a46b463019b90c071a27243c2add5d0177b482e4&v=4',
        description: '这篇文章将会涉及到开发一个 DApp 所涵盖的几乎所有方面内容。包括：认识 DApp 技术栈、智能合约编码、开发工作流与单元测试、前端与客户端开发、开发、测试与生产环境调试、服务端编码与集成、合约部署方案 L1s & L2、去中心化储存方案等',
        // author: '郭宇',
        key: 'guoyu'
      }
    ]
  },
  {
    name: 'Dapp 指南3',
    icon: <HomeIcon />,
    key: 'web3_6',
    arr: [
      {
        title: 'Web3 DApp 最佳编程实践指南',
        url: 'https://guoyu.mirror.xyz/RD-xkpoxasAU7x5MIJmiCX4gll3Cs0pAd5iM258S1Ek',
        image: 'https://avatars.githubusercontent.com/u/58292274?s=400&u=a46b463019b90c071a27243c2add5d0177b482e4&v=4',
        description: '这篇文章将会涉及到开发一个 DApp 所涵盖的几乎所有方面内容。包括：认识 DApp 技术栈、智能合约编码、开发工作流与单元测试、前端与客户端开发、开发、测试与生产环境调试、服务端编码与集成、合约部署方案 L1s & L2、去中心化储存方案等',
        // author: '郭宇',
        key: 'guoyu'
      }
    ]
  },
  {
    name: 'Dapp 指南4',
    icon: <HomeIcon />,
    key: 'web3_7',
    arr: [
      {
        title: 'Web3 DApp 最佳编程实践指南',
        url: 'https://guoyu.mirror.xyz/RD-xkpoxasAU7x5MIJmiCX4gll3Cs0pAd5iM258S1Ek',
        image: 'https://avatars.githubusercontent.com/u/58292274?s=400&u=a46b463019b90c071a27243c2add5d0177b482e4&v=4',
        description: '这篇文章将会涉及到开发一个 DApp 所涵盖的几乎所有方面内容。包括：认识 DApp 技术栈、智能合约编码、开发工作流与单元测试、前端与客户端开发、开发、测试与生产环境调试、服务端编码与集成、合约部署方案 L1s & L2、去中心化储存方案等',
        // author: '郭宇',
        key: 'guoyu'
      }
    ]
  },
  {
    name: 'Dapp 指南5',
    icon: <HomeIcon />,
    key: 'web3_8',
    arr: [
      {
        title: 'Web3 DApp 最佳编程实践指南',
        url: 'https://guoyu.mirror.xyz/RD-xkpoxasAU7x5MIJmiCX4gll3Cs0pAd5iM258S1Ek',
        image: 'https://avatars.githubusercontent.com/u/58292274?s=400&u=a46b463019b90c071a27243c2add5d0177b482e4&v=4',
        description: '这篇文章将会涉及到开发一个 DApp 所涵盖的几乎所有方面内容。包括：认识 DApp 技术栈、智能合约编码、开发工作流与单元测试、前端与客户端开发、开发、测试与生产环境调试、服务端编码与集成、合约部署方案 L1s & L2、去中心化储存方案等',
        // author: '郭宇',
        key: 'guoyu'
      }
    ]
  }
]