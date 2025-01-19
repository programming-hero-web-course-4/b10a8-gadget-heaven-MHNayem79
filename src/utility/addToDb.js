import { toast } from "react-toastify";

const getStoredCartList=()=>{

    const storeListStr= localStorage.getItem('cartList');
    if(storeListStr){
        const storeList=JSON.parse(storeListStr);
        return storeList;
    }
    else{
        return [];
    }

}

const addToStoredCartList=(id)=>{
    const storeList=getStoredCartList();
    if(storeList.includes(id)){
        console.log(id)
        toast("already exist in the cart list")
    }
    else{
        storeList.push(id);
        const storeListStr=JSON.stringify(storeList);
        localStorage.setItem('cartList',storeListStr)
        toast('Product added to The Cart')
    }
}

// wish list

const getStoredWishList=()=>{

    const storeListStr= localStorage.getItem('wishList');
    if(storeListStr){
        const storeList=JSON.parse(storeListStr);
        return storeList;
    }
    else{
        return [];
    }

}

const addToStoredWishList=(id)=>{
    const storeList=getStoredWishList();
    if(storeList.includes(id)){
        console.log(id)
        toast("already exist in the Wish list")
    }
    else{
        storeList.push(id);
        const storeListStr=JSON.stringify(storeList);
        localStorage.setItem('wishList',storeListStr)
        toast('Product added to The Wishlist')
    }
}

export {addToStoredCartList,addToStoredWishList,getStoredCartList,getStoredWishList}