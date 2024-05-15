export type Product = {
    _id:string,
    title:string,
    price :number,
    thumbnail:string,
    category?:string,
    images?:string[],
    discountPercentage?:number,
    rating?:number,
    stock?:number,
    brand?:string,
    isWishlisted?:boolean,
    isCart?:boolean,
    quantity?:number
}

export type CartItem = {
    productId : Product,
    price : number,
    title:string,
    thumbnail:string,

}