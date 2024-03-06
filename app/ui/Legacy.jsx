import { BookOpenText, GraduationCap, MonitorPlay } from 'lucide-react'
import React from 'react'

function Legacy() {
  return (
    <section className='md:flex px-5 md:px-10 justify-center justify-around pt-10 pb-10 bg-slate-50'>
        <div className='flex md:w-1/4 gap-3 items-center p-3'>
            <GraduationCap size={180} color='blue'/>
            <div>
                <h1 className='text-2xl font-semibold'>Learn technologies From Experts</h1>
                <p className='pt-4'>Blockchain courses we provide students with in-depth, specialized knowledge.</p>
            </div>
        </div>
        <div className='flex md:w-1/4 gap-3 item-center p-3'>
            <BookOpenText size={200} color='blue'/>
            <div>
                <h1 className='text-2xl font-semibold'>Over 30+ High Quality Topics</h1>
                <p className='pt-4'>Topics cover a wide range of subjects, from blockchain and and much more.</p>
            </div>
        </div>
        <div className='flex md:w-1/4 gap-3 item-center p-3'>
            <MonitorPlay size={200} color='blue'/> 
            <div>
                <h1 className='text-2xl font-semibold'>Event & Program Video Update</h1>
                <p className='pt-4'>Kairaa Blockchain Academy keeps its students informed about events and programs.</p>
            </div>
        </div>
    </section>
  )
}

export default Legacy
