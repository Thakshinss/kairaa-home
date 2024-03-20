"use client"

import CourseContent from '@/app/components/CourseContent'
import Image from 'next/image'
import React, { useState,useEffect } from 'react'

function CourseDetails({params}) {
  
  const [isLoading, setLoading] = useState(true)

  const id = params.id
 
  useEffect(() => {
    fetch(`/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data.post)
        setLoading(false)
      })
  }, [id])
  const [course, setCourse] = useState([])
  // console.log(course.topics[2].name);
  // console.log(courses[1].topics[1].content[1]);
  

  return (
    <section>
      <div >
        <div className='justify-around pt-5 pb-5 md:flex px-7'>
          <div className='w-1/2'>
            <Image
              src={course.img}
              width={500}
              height={500}
              alt="Picture of the author"/>
              <h1 className='text-2xl font-bold md:4xl lg:text-3xl'>{course.name}</h1>
              <p className='pt-4'>{course.description}</p>
          </div>

          <div className='w-1/2 px-8'>
              <h1>Course Features</h1>
              <div>
                <div>
                  <div className='flex justify-between'>
                    <p>Lectures</p>
                    <p>34</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <p>Lectures</p>
                    <p>34</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <p>Lectures</p>
                    <p>34</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <p>Lectures</p>
                    <p>34</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <p>Lectures</p>
                    <p>34</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <p>Lectures</p>
                    <p>34</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <p>Lectures</p>
                    <p>34</p>
                  </div>
                </div>
                
              </div>
          </div>
        </div>
        {
          course.topics?.map((topic,i)=>(
            <div key={i}>
              <CourseContent title={topic.name} content={topic.content}/>
            </div>
            
              // topic.content?.map((content,i)=>(
              //       <p key={i}>{content}22</p>
              // ))
          ))
        }

      </div>
    </section>
  )
}

export default CourseDetails
