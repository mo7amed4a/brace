import Image from 'next/image'
import React from 'react'

export default function ShapeSide({
    className
}:{
    className?: string
}) {
  return (
    <Image className={className} src={"/shapes/1.png"} alt="" width={100} height={100} />
  )
}
