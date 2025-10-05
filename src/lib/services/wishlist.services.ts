import GetMyToken from "@/app/Utilities/GetMyToken"

export async function getLoggedWishList(){
    const token=await GetMyToken()
    const res=await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
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


export async function addToWishList(productId: string){
    const token=await GetMyToken()
    const res=await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            token:token
        },
        body:JSON.stringify({
            productId:productId
        })
    
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


export async function deleteFromWishList(productId: string){
    const token=await GetMyToken()
    const res=await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            token:token
        },
        body:JSON.stringify({
            productId:productId
        })
    
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