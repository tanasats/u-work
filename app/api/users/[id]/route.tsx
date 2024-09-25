import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/libs/mysql";


// export async function GET(
//     request:  NextRequest,
//     { params }: { params: { id: string } }
// ) {
//     const id = params.id // user id

//     try {
//         const db = await pool.getConnection()        

//         const query = 'select * from user where id = ?'
//         const [rows] = await db.execute(query,[id])
//         db.release()

//         return NextResponse.json(rows)
//     } catch (error) {
//         return NextResponse.json({
//             error: error
//         }, { status: 500 })
//     }
// }

const GET = async (req: any, { params }: any) => {
    console.log(params)
    //return Response.json({"message":"GET data","id":params.id})
    const id = params.id // user id
    try {
        const db = await pool.getConnection()
        const query = 'select * from user where id = ?'
        const [rows] = await db.execute(query, [id])
        db.release()
        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }




}

const POST = async (req: NextRequest, { params }: any) => {
    try {
        const body = await req.json();
        const { email, password } = body;

        return NextResponse.json(
          { message: "login successful"},
          { status: 200 }
        );
      } catch (error) {
        console.log("error", error);
        return NextResponse.json(
            { message: "error" }, 
            { status: 500 });
      }
}

export { GET, POST };