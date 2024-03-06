import Form from '@/app/ui/Form'
import Header from '@/app/ui/Header'
import Link from 'next/link'
import React from 'react'

const locations = [
  {
    id:1,
    name:"Corporate Office",
    loca:"No 131, 2nd floor, DB Road, RS Puram, CBE - 641002."
  },
  {
    id:2,
    name:"Chennai Branch",
    loca:"20/14, Kalaivanar Street, Jafferkhanpet, Chennai - 600083."
  },
  {
    id:3,
    name:"Trichy Branch",
    loca:"No 76-O, Jothi complex, Thillai nagar, Pincode - 620018."
  },
  {
    id:4,
    name:"Tirunelveli Branch",
    loca:"No 12, Shanthi complex, Vasanth nagar, Pincode - 627005."
  },
  {
    id:5,
    name:"Salem Branch",
    loca:"Sairam complex, Veeranganur main road, Thalaivasal. Pincode - 636112."
  },
  {
    id:6,
    name:"Email Us",
    loca:"support@kairaaacademy.com, team@kairaaacademy.com"
  },
  {
    id:7,
    name:"Helpline",
    loca:"+91 70927 71133"
  },

]

function Contact() {
  return (
    <>
      <section 
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        className={`bg-[url('/banners/contact.png')] h-[60%] p-6 mb-10`}>
          <div className={` mx-auto pt-10 pb-6 flex flex-col-reverse xl:flex-row`} >
            <div className="flex items-center justify-center w-full">
                  <div>
                    <p className="z-50 pb-8 text-3xl md:text-6xl font-extrabold text-center text-white uppercase">
                      Contact Us
                    </p>
                    
                  </div>
            </div>
          </div>

        </section>
        <section >
          <div className='md:flex justify-between md:px-20 px-10'>
            <div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7648190412674!2d80.16218697428296!3d12.922831587388082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424bead677b3c9a5%3A0x9f8bd89bdca64146!2sKairaa%20Tech%20serve%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1708402923939!5m2!1sen!2sin"  height="580" className='bottom-0 md:w-1/2 lg:w-[600px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Form/>
          </div>
          <div className='flex flex-wrap justify-between px-20 mt-7'>
            {
              locations.map((location)=>(
                <div key={location.id} className='w-full md:w-1/4 p-10 m-2 text-center bg-blue-200 border rounded-lg '>
                  <h1 className='pb-3 text-2xl font-extrabold'>{location.name}</h1>
                  <p>{location.loca}</p>
                </div>
              ))
            }

          </div>
        </section>
      </>
  )
}

export default Contact
