import React from 'react'
import Title from './Title'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

const activities = ['Upcoming Events','Seminars','Performace']

const links = ['Terms & Conditions','Refund Policy','Privacy Policy']

const resources = [
  {
    id:1,
    name:"Latest Blogs",
    path:"/blogs"
  },
  {
    id:2,
    name:"FAQ's",
    path:"/faq"
  },
  {
    id:3,
    name:"Privacy Policy",
    path:"/policy"
  },
  {
    id:4,
    name:"Our Terms",
    path:"/terms"
  },

]

const address = [
  {
    id:1,
    name:"support@kairaa.in",
    logo:<Mail />
  },
  {
    id:2,
    name:"+91-709-277-4077",
    logo:<Phone />
  },
  {
    id:1,
    name:"131, 2nd floor, DB Road, RS Puram, <br/> Coimbatore - 641002.",
    logo:<MapPin />
  },
]


function Footer() {
  return (
    <footer className='md:px-20 pt-10 pb-10 text-white bg-slate-700 text-center px-6'>
      <div className='md:flex flex-wrap justify-between'>
        <div className='w-full md:w-2/4 lg:w-1/4 pr-4'>
          <Title>About Us</Title>
          
    
          <p className='pt-2'>Kairaa Blockchain Academy is a top-notch online learning 
            center that offers a wide range of courses.</p>
        </div>
        <div className='w-full md:w-2/4 lg:w-1/4'>
          {/* <Title>Quick Links</Title> */}
          <Title>Quick Links</Title>
          <ul>
            {links.map((activity)=>(
              <li key={activity} className='md:p-2'>{activity}</li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-2/4 lg:w-1/4 mt-2'>
          <Title>Resources</Title>
          <ul className='flex flex-col '>
            {resources.map((activity)=>(
              <Link href={activity.path} key={activity.id} className='md:p-2'>{activity.name}</Link>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-2/4 lg:w-1/4'>
          <Title>Get in Touch</Title>
          <ul>
            {address.map((activity)=>(
              <li key={activity.id} className=' flex justify-center items-center'>
                <div className='flex mt-2 gap-2'>
                  <p>{activity.logo}</p>
                  <p>{activity.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='md:flex items-center justify-center mt-8 text-center'>
      © 2024 KAIRAAACADEMY.COM. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
