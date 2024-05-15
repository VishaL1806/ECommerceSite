const USER_BASE_URL = '/user'
const PRODUCT_BASE_URL = '/products'
const endpoints  = {
    registerUser : USER_BASE_URL +'/register',
    loginUser : USER_BASE_URL +'/log-in',
    validateUser :USER_BASE_URL + '/validate',
    togglewishList  : USER_BASE_URL + '/wishlist/',
    toggleCart  : USER_BASE_URL + '/cart/',
    getCartItems: PRODUCT_BASE_URL + '/cart',
    getWishlist : PRODUCT_BASE_URL + '/wishlist',
    getProductDetails : PRODUCT_BASE_URL + '/getProductDetail/',
    getAllProducts : PRODUCT_BASE_URL + '/getAllProducts/',
}


export {
    endpoints
}