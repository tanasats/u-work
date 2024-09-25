export const dynamic = 'force-static'
 
export async function GET(request,{params}) {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
  
//   const data = await res.json()
console.log("test api")
  return Response.json({"status":"ok"})
}