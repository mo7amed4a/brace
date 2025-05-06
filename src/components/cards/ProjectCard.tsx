import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ title, description, imageSrc, imageAlt , color="to-[#489255]/40", link}:{ title: string, description: string, imageSrc: string, imageAlt: string, color?: string, link:string }) {
  return (
    <div className={`pt-20 flex items-center bg-gradient-to-b from-[#241F29] rounded-b-xl ${color}`}>
      <div className="p-4 flex flex-col gap-4 items-center">
        <div className="flex items-end justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-32 md:w-52"
            width={880}
            height={880}
          />
        </div>
        <div className="space-y-6 text-center">
          <Link href={link}>
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
              {title}
            </h1>
          </Link>
          <Link href={link} className='mt-4'>
            <p className="text-center text-gray-400 text-sm md:text-base">
              {description}
            </p>
          </Link>
          <Button className='mt-4' variant={"outline"}>Request a demo</Button>
        </div>
      </div>
    </div>
  )
}