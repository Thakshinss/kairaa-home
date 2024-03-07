"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react'


function Courses() {
  const [courses, setCourses] = useState([])
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('/api/courses')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses)
        setLoading(false)
        
      })
  }, [])
  // console.log("THE DATA ISSSSs",JSON.stringify(courses));
  
  return (
    <div className='grid justify-between gap-5 px-10 md:grid-cols-2 lg:grid-cols-3'>
      {courses.map((c)=>(
        <Link key={c.id} href={`/courses/${c.id}`}>
          <div>
            <Image
            src={c.img}
            width={500}
            height={500}
            alt="Picture of the author"/>
            <div>
              <h1 className='text-2xl font-bold'>{c.name}</h1>
              <p>{c.description}</p>
            </div>
            
          </div>
        </Link>
      ))}

    </div>
  )
}
export default Courses


