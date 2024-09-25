import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/libs/mysql"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const db = await pool.getConnection()
        const query = 'insert into user (username,uid,utype,name) values (?,?,?,?)'
        //console.log(body)
        const [rows] = await db.execute(query, Object.values(body))
        db.release()
        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}