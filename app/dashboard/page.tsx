"use client"
import { ClipboardPen } from 'lucide-react'
import Link from 'next/link'

import React from 'react'
import { useState,useEffect } from 'react'
import { setCookie,getCookie } from 'cookies-next'
import { ICurrentUser } from '@/interfaces/user'

interface IJobitems {
  id: number,
  title: string
}

interface IUserData {
  id?: number;
  username?: string;
  fullname?: string;
  email?: string;
}


function dashboardpage() {
  const [userData, setUserData] = useState<ICurrentUser|null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const jobs = [
    {
      id: 1,
      title: "ช่วยงานประชาสัมพันธ์",
    },
    {
      id: 2,
      title: "ผู้ช่วยนักวิจัย",
    }
  ]


  const getUserData = async () =>{
    try{
      let tmp = JSON.parse(getCookie("userData") ?? ""); // ?? "" is default string
      console.log("cookie data=", tmp );
      setUserData(tmp)
    }catch (err){
      console.log("getUserData error :",err);
    }
  }


  useEffect(() => {
    getUserData();
  }, []);// Empty dependency array means this runs only once on mount


    return (
      <div>
        <div className='text-xl py-4'>
          My Jobs {userData?.fullname}
        </div>

        <div>
          {userData ? (
            <div>
              <p>Username: {userData.username}</p>
              <p>Name: {userData.fullname}</p>
            </div>
          ):(
            <div>No user data avariable.</div>
          )}
        </div>



        {



          jobs.map((item, index) => (
            <div key={index} className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg">
            {item.title}
            
            <Link href="">
                <Link href={"dashboard/jobs/1"}><ClipboardPen className='text-gray-500'/></Link>
            </Link>
            </div>
          ))
        }
  
      </div>
    )

}

export default dashboardpage
