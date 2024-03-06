import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <main className='px-5 md:px-24 md:flex items-center justify-between '>
        <div className='items-center justify-between md:w-2/4 '>
            <div className='text-center pt-10 '>
                <h1 className='text-4xl md:text-5xl font-extrabold text-center'>Discover Blockchain Technology with <span className='text-blue-700 '>Kairaa Academy</span> Online Courses.</h1>
                <p className='pt-10 md:text-lg'>Kairaa Academy is the leading provider of online blockchain courses. We offer a wide range of courses to meet the needs of students of all levels of experience, from beginners to advanced learners.</p>
                <Link href='/contact' className='p-4 mt-16 text-white bg-blue-600 flex justify-center items-center gap-2 text-center'>Explore Courses <MoveRight /></Link>
            </div>
        </div>
        <Image 
        className='hidden md:flex'
          src="/home.png"
          width={500}
          height={500}
          alt="Picture of the author"/>
    </main>
  )
}

export default Header
