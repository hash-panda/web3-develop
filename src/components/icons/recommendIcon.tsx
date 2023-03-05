import React from 'react'
import Image from 'next/image'
import logoIcon from "../../../public/webImage/recommend.svg"

export const RecommendIcon = () => (
  <Image
      style={{position: 'absolute',right:'0'}}
      width={50}
      src={logoIcon}
      alt="推荐"
    />
)