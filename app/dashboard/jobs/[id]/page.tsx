import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import { Plus, Image, FileText, Settings } from "lucide-react"

function jobidpage({ params }: any) {
    const id = params.id
    const workprogress = [
        {
            id: 1,
            datefrom: "xx-xx-xxxx",
            dateto: "yy-yy-yyyy",
            hour: 10,
            status: "w",
        },
        {
            id: 2,
            datefrom: "aa-xx-xxxx",
            dateto: "bb-yy-yyyy",
            hour: 8,
            status: "w",
        }

    ]
    return (
        <div>
            <div className='text-2xl'>ช่วยงานประชาสัมพันธ์</div>
            <div className=''>ผู้ควบคุม: กองกิจการนิสิต</div>
            <div>วันที่เริ่มทำงาน: xx-yy-zzzz</div>

            <div className="flex justify-end items-center mb-4">
                <Button><Plus />เพิ่มบันทึก</Button>
            </div>
            <ul>
                {workprogress.map((item, index) => (
                    <li className='px-6 py-4 mb-4 border border-base-300 rounded-lg'>

                        <div className='flex justify-between items-center '>
                            <div>วันที่ {item.datefrom} ถึง {item.dateto}</div>
                            <div className='flex justify-end'>จำนวน {item.hour} ชั่วโมง

                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div>รายละเอียดงาน</div>
                            <div>สถานะ: รอตรวจ</div>
                        </div>
                        <div className='flex justify-start'>
                            <div className="flex-1">
                                <Button variant="ghost" size="icon" className='text-gray-600'><Image /></Button>
                                <Button variant="ghost" size="icon" className='text-gray-600'><FileText /></Button>
                            </div>
                            <div className="flex-none">
                                <Button variant="ghost" size="icon" className='text-gray-600'><Settings /></Button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default jobidpage
