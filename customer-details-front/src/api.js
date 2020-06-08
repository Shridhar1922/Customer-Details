export const fetchData=async()=>{
    try{
    const response=await fetch("http://localhost:3001/CustomerData") 
    console.log("response:",response)
    const data= await response.json();
    console.log("data:",data)
    return data;
    }catch(e){
        console.log(e)
    }
}