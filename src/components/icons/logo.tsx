import React from 'react'
import Image from 'next/image'
import logoIcon from "../../../public/logo.png"

export const Logo = () => (
  <Image
      width={60}
      src={logoIcon}
      alt="Web3Develop"
    />
)