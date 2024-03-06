"use client"
import { ArrowRightFromLine } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Explore() {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('/api/courses')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses)
      })
  }, [])
  return (
    <div className='py-6 text-center md:py-14'>
      <h1 className='text-3xl font-bold underline md:text-4xl decoration-indigo-500'>Explore Courses</h1>
      <div className='flex flex-wrap items-center justify-evenly pt-14'>
        {
          courses.slice(0, 3).map((course,i)=>(
            <Link key={i} href={`/courses/${course.id} ` }>
              <div>
                  <Image
                  src={course.img}
                  width={300}
                  height={400}
                  alt="Picture of the author"/>
                  <h1 className='pt-2 text-xl font-semibold'>{course.name}</h1>
              </div>  
            </Link>
          ))
        }
        <Link href='/courses' className='p-5 text-white bg-blue-600 rounded-full'>
          <ArrowRightFromLine/>
        </Link>
      </div>
    </div>
  )
}

export default Explore
