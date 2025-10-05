import GetMyToken from "@/app/Utilities/GetMyToken"
export async function addToCart( productId:string){
        const token=await GetMyToken()

    const res=await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
        method:'POST',
        headers:{
              "Content-Type": "application/json",

            token:token
        },
            body:JSON.stringify({
            productId,
          
        })})
          const data=await res.json()
    console.log(data)
    if(data.status === 'success'){
        return data
    }
    else{
        console.log('error')
    }
    
    

}
export async function getLoggedCart(){
    const token=await GetMyToken()
    console.log(token)
    const res=await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
        method:'GET',
        headers:{
            token:token
        }
    
    })
    const data=await res.json()
    // console.log(data)
    if(data.status === 'success'){
        return data
    }
    else{
        console.log('error')
    }
}

export async function deleteSpecificItem(productId:string){
    const token=await GetMyToken()
    const res=await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        method:'DELETE',
        headers:{
            token:token
        }
    
    })
    const data=await res.json()
    // console.log(data)
    if(data.status === 'success'){
        return data
    }
    else{
        console.log('error')
    }
}

export async function UpdateSpecificItem({productId,count}:{productId:string,count:number}){
    const token=await GetMyToken()
    const res=await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        method:'PUT',
        headers:{
                          "Content-Type": "application/json",

            token:token
        }, body:JSON.stringify({
            productId,
            count
    
    })})
    const data=await res.json()
    // console.log(data)
    if(data.status === 'success'){
        return data
    }
    else{
        console.log('error')
    }
}
