import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import LandingImage from "../app/assets/work1.png"

import React from 'react'
import Link from 'next/link'

function LandingPage
  () {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
        <div className="text-8xl font-bold">Work Progress</div>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,600px] items-center">
        <div>
          <h1 className='capitalize text-4xl md:text-6xl font-bold text-yellow-400'>
          work experience
          </h1>
          <p className='loading-loose max-w-md my-4'>
          <span className='font-bold'>“คุณมีประสบการณ์การทำงานหรือการทำกิจกรรมอะไรบ้างขณะที่กำลังศึกษาอยู่”</span> นี่มักจะเป็นคำถามที่บัณฑิตจบใหม่จะต้องเจอในการสัมภาษณ์งาน คำตอบนี้จะแสดงให้เห็นความเป็นตัวตน สิ่งที่สนใจ และทัศนคติของผู้ตอบ 
          ดังนั้นเพื่อเก็บเกี่ยวประสบการณ์การทำงาน และแถมยังมีรายได้ กองกิจการนิสิตขอเชิญชวน นิสิตมาเข้าร่วมกิจกรรมกับเรา ผ่านทางแอพพลิเคชัน MSUJobs 
          </p>
          <Button><Link href="/signin">Get Started</Link></Button>
        </div>
        <Image className='max-w' src={LandingImage} alt="Landing image"></Image>
      </section>
    </main>
  )
}

export default LandingPage

