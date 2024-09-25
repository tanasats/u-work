"use server"
export async function authenticate(formData:any) {
    const username = formData.get('username')
    const password = formData.get('password')
     
    console.log(username,password)
}