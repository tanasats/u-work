import pool from "@/app/libs/mysql";

export async function GET(request,{params}) {
    //   const res = await fetch('https://data.mongodb-api.com/...', {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'API-Key': process.env.DATA_API_KEY,
    //     },
    //   })
      
    //   const data = await res.json()

    try{
        const connection = await pool.getConnection();
        const [rows] = await connection.execute("select * from `user`");
        connection.release();
        return Response.json(rows)
    }catch (error){
        return Response.json({
            error:error
        },{status:500})
    }


    console.log("test api")
      return Response.json({"status":"ok"})
    }


