import React from 'react'
import { HomeIcon } from '../components/icons/sidebar/home-icon'
import web3_2 from '../../public/webImage/web3_2.jpg'
import alchemyLogo from '../../public/webImage/alchemy-logo.svg'
import web3ModalLogo from '../../public/webImage/web3modal-logo.png'
import DefaultLogo from '../../public/logo.png'
import { Paper } from 'react-iconly'
import { StaticImageData } from 'next/image'

export interface Obj {
  [key: string]: {
    _key: string,
    start: number,
    end: number
  }
}
export interface SITE {
  title?: string,
  url?: string,
  image?: string | StaticImageData,
  description?: string,
  key?: string,
  isRecommended?: boolean,
  type: string,
}

export interface ListItem {
  name: string,
  arr: SITE[],
  icon: string
  key: string
}

/* 数据源 */
export const websites: ListItem[] = [
  {
    name: '开发指南',
    icon: 'Paper',
    key: 'devGuide',
    arr: [
      {
        title: 'Web3 DApp 最佳编程实践',
        url: 'https://guoyu.mirror.xyz/RD-xkpoxasAU7x5MIJmiCX4gll3Cs0pAd5iM258S1Ek',
        image: web3_2.src,
        description: '这篇文章将会涉及到开发一个 DApp 所涵盖的几乎所有方面内容。包括：认识 DApp 技术栈、智能合约编码、开发工作流与单元测试、前端与客户端开发、开发、测试与生产环境调试、服务端编码与集成、合约部署方案 L1s & L2、去中心化储存方案等',
        key: 'guoyu',
        type: 'article',
        isRecommended: true,
      },
      {
        title: '全栈 Web3 开发完整指南：手把手教你开发一个web3应用',
        url: 'https://www.defidaonews.com/article/6728290',
        image: DefaultLogo.src,
        description: '使用 Next.js、Polygon、Solidity、The Graph、IPFS 和 Hardhat 构建全栈 web3 应用程序。在这个深入的教程中，您将学习用于构建全栈 web3 应用程序的工具、协议和框架，最重要的是 - 如何将所有内容放在一起为将来构建您自己的任何想法奠定基础。        ',
        key: 'web3devDapp',
        type: 'article',
        isRecommended: true,
      },
      {
        title: 'Web3.0 解决了什么问题',
        url: 'https://mp.weixin.qq.com/s/-yWw1qJ2hcpno62ibmtJCQ',
        image: DefaultLogo.src,
        description: '3个问题：有什么场景是在Web 2不能完成，必须在Web 3能完成的？如果有，那这个场景下的Web 3产品有多少人需要？这个场景下，Web 3的产品解决问题的效率会更好吗？',
        key: 'web3Solve',
        type: 'article',
      },
      {
        title: 'Dune Analytics 初学者指南',
        url: 'https://mirror.xyz/phillan.eth/17VAXsMPpwJg4OQNBHKTYAQTWfJMwFuXZQDAxPStf0o',
        image: DefaultLogo.src,
        description: '学习如何使用Dune分析，适合完全的Dune和SQL初学者。Dune可能是目前向公众提供的最强大的区块链数据分析工具，最棒的是：它是免费的!通过Dune，你可以通过一个公共数据库近乎实时地访问区块链数据，你可以通过Dune的网站使用SQL查询。',
        key: 'DuneAnalytics',
        type: 'article',
        isRecommended: true,
      },
    ]
  },
  {
    name: 'Solidity / Web3 教程',
    icon: 'Category',
    key: 'solidity',
    arr: [
      {
        title: 'Solidity 官方文档',
        url: 'https://solidity-cn.readthedocs.io/zh/develop/',
        image: 'https://solidity-cn.readthedocs.io/zh/develop/_images/logo.svg',
        description: 'Solidity 是一门面向合约的、为实现智能合约而创建的高级编程语言。这门语言受到了 C++，Python 和 Javascript 语言的影响，设计的目的是能在以太坊虚拟机（EVM）上运行。Solidity 是静态类型语言，支持继承、库和复杂的用户定义类型等特性。下面您将会看到，使用 Solidity 语言，可以为投票、众筹、秘密竞价（盲拍）、多重签名的钱包以及其他应用创建合约。',
        key: 'solidityDocs',
        type: 'card',
      },
      {
        title: 'wtf.academy',
        url: 'https://wtf.academy/',
        image: 'https://wtf.academy/img/wtflogo.png',
        description: '面向Web2开发者的Web3开源学院。学习，贡献，并获得链上技术认证。包括solidity、ether、前端等学习教程',
        key: 'wtfAcademy',
        type: 'card',
        isRecommended: true,
      },
      {
        title: 'Solidity Example',
        url: 'https://solidity-by-example.org/',
        image: 'https://solidity-by-example.org/favicon.ico',
        description: '通过具体的例子展示和介绍Solidity',
        key: 'solidity-by-example',
        type: 'card',
      },
      {
        title: 'OpenZeppelin',
        url: 'https://docs.openzeppelin.com/',
        image: 'https://www.openzeppelin.com/hubfs/oz-favicon.svg',
        description: 'OpenZeppelin 提供安全产品来构建、自动化和操作分散的应用程序。OpenZeppelin 是一家以太坊安全公司，其为流行的智能合约标准开发了一组合约，这些合约经过了大量的测试和安全审查，所以如果我们需要实现这些标准合约时，应该尝试找到OpenZeppelin 提供的合约，而不是重头开始重写整个标准。',
        key: 'OpenZeppelin',
        type: 'card',
        isRecommended: true,
      },
      {
        title: 'CryptoZombies',
        url: 'https://cryptozombies.io/en/course',
        image: DefaultLogo.src,
        description: 'CryptoZombies是一个免费、开源、互动的代码学校，教你在以太坊上构建游戏。该课程是为Solidity的初学者设计的，从绝对的基础知识开始。因此，如果你以前从未用Solidity编码过，不用担心--我们会一步一步地指导你。',
        key: 'CryptoZombies',
        type: 'card',
      },
      {
        title: 'buildspace',
        url: 'https://buildspace.so/',
        image: 'https://buildspace.so/images/favicon-64x64.png',
        description: 'Web3开发学习平台。课程包括：AI头像生成、GPT-3开发学习、ENS、Solidity、Ethereum NFT、Solana Web3 App、DAOs、Solana Pay、Solana NFT、NFT Game、Flow 等',
        key: 'buildspace',
        type: 'card',
      },
    ]
  },
  {
    name: '快速开发框架',
    icon: 'Plus',
    key: 'fastDevelop',
    arr: [
      {
        title: 'wagmi.sh',
        url: 'https://wagmi.sh/',
        image: 'https://wagmi.sh/favicons/light.png',
        description: 'wagmi 是一个 React Hook 的集合，包含了你与以太坊交互所需的一切。wagmi 使连接钱包、显示 ENS 和余额信息、签署消息、与合约交互等变得简单——所有这些都有缓存、重复请求降重和持久化',
        key: 'wagmi',
        type: 'card',
        isRecommended: true,
      },
      {
        title: 'thirdweb',
        url: 'https://thirdweb.com/',
        image: 'https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.a8cda9b2.png&w=1080&q=75',
        description: 'thirdweb是一个完整的web3开发框架，它提供了将你的应用程序和游戏连接到去中心化网络所需的一切',
        key: 'thirdweb',
        type: 'card',
      },
      {
        title: 'useDapp',
        url: 'https://usedapp.io/',
        image: 'https://usedapp.io/img/favicon.svg',
        description: '基于React的用于快速Dapp开发的框架。简单。稳健。可扩展。可测试。',
        key: 'useDapp',
        type: 'card',
      },
      {
        title: 'web3js',
        url: 'https://web3js.org/',
        image: 'https://web3js.org/web3js.png',
        description: 'web3.js是一个库的集合，允许你使用HTTP、IPC或WebSocket与本地或远程以太坊节点进行交互',
        key: 'web3js',
        type: 'card',
      }
    ]
  },
  {
    name: '接入钱包',
    icon: 'Wallet',
    key: 'wallet',
    arr: [
      {
        title: 'RainbowKit',
        url: 'https://www.rainbowkit.com/',
        image: 'https://www.rainbowkit.com/rainbow.svg',
        description: 'RainbowKit是一个React库，可以轻松地将钱包连接到你的dapp中。开箱即用。易于定制',
        key: 'rainbowKit',
        type: 'card',
        isRecommended: true,
      },
      {
        title: 'ConnectKit',
        url: 'https://docs.family.co/connectkit',
        image: 'https://family.co/favicon-alt.png',
        description: 'ConnectKit是一个强大的React组件库，用于连接钱包和你的dApp。它支持最流行的连接器和链，并提供一个美丽的、无缝的体验。',
        key: 'connectkit',
        type: 'card',
      },
      {
        title: 'Web3Modal',
        url: 'https://web3modal.com/',
        image: web3ModalLogo.src,
        description: 'Web3Modal是一个优雅简单而强大的库，帮助你管理你的多链钱包连接流程，所有这些都在一个地方。它的设计同时考虑到了开发人员和最终用户，易于集成和定制，带来了时尚和独特的体验。',
        key: 'Web3Modal',
        type: 'card',
      },
    ]
  },
  {
    name: 'RPC',
    icon: 'Setting',
    key: 'rpc',
    arr: [
      {
        title: 'Alchemy',
        url: 'https://www.alchemy.com/',
        image: alchemyLogo.src,
        description: '最强大的web3开发工具集，可轻松构建和扩展您的dApp',
        key: 'Alchemy',
        type: 'card',
      },
      {
        title: 'Infura',
        url: 'https://www.infura.io/zh',
        image: 'https://app.infura.io/favicon/favicon-32x32.png',
        description: 'Infura帮助Web3开发者在区块链基础设施上建立世界级的应用程序。Infura Web3与通用API的连接提供了对Web3网络的简单、强大和可靠的访问，使开发人员能够专注于他们最擅长的事情：发展他们的产品、服务和社区。',
        key: 'Infura',
        type: 'card',
      },
    ]
  },
  {
    name: 'MOVE 学习',
    icon: 'Folder',
    key: 'moveLearns',
    arr: [
      {
        title: 'MOVE 开发文档',
        url: 'https://move-language.github.io/move/introduction.html',
        image: DefaultLogo.src,
        description: 'MOVE 用于安全、沙盒化和正式验证编程的下一代语言',
        key: 'moveDocs',
        type: 'card',
      },
      {
        title: 'MOVE 资源汇总',
        url: 'https://github.com/MystenLabs/awesome-move',
        image: DefaultLogo.src,
        description: 'Move开发社区和资源汇总，这里有关于Move，你需要的一切',
        key: 'moveAwesome',
        type: 'card',
      },
    ]
  },
  {
    name: '其他工具',
    icon: 'Discount',
    key: 'others',
    arr: [
      {
        title: 'Dune',
        url: 'https://dune.com/docs/zh/getting-started/',
        image: 'https://dune.com/docs/zh/images/dune-icon-only.png',
        description: 'Dune 是一个强大的区块链研究工具，配备了您需要的所有工具，以发现、探索和可视化大量区块链数据',
        key: 'dune',
        type: 'card',
      },
    ]
  },
]