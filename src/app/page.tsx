import { Inter } from "next/font/google"
import Image from 'next/image'
import type { Metadata } from "next"
import LargeHeading from "@/ui/LargeHeading"
import Paragraph from "@/components/ui/Paragraph"
import Link from "next/link"
export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Free & open-source text similarity API',
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="relative flex items-start justify-center h-screen overflow-x-hidden">
      <div className="container w-full h-full pt-32 max-w-7xl">
        <div className="flex flex-col items-center justify-start h-full gap-6 lg:justify-center lg:items-start">
          <LargeHeading size='lg' className="text-black three-d dark:text-light-gold">
            Easily determine <br /> text similarity.
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left">
            With the text similarity API, you can easily detemine the
            similarity between two places of text with a free {' '}
            <Link href='/login' className="font-bold text-black underline underline-offset-2 dark:text-light-gold dark:font-normal">API key</Link>
          </Paragraph>
          <div className="relative w-full max-w-lg aspect-square lg:max-w-3xl lg:left-1/2 lg:absolute">
            <Image
              priority
              className="img-shadow"
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              src='/typewriter.png'
              alt='typewriter' />
          </div>
        </div>
      </div>

    </div>
  )
}