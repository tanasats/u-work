export async function GET(req,res){
  console.log("res:",res)
  return Response.json({
    message: "test GET response"
  })
}