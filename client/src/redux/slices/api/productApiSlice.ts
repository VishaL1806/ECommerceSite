
import { endpoints } from "@/constants/endpoints";
import { apiSlice } from "../apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCartItems : builder.query({
      providesTags:['Cart'],
        query :() => ({
            url: endpoints.getCartItems,
            method: "GET",
            credentials : "include",
          }),
    }),
    getWishlist : builder.query({
        providesTags :['Wishlist'],
        query :() => ({
        url: endpoints.getWishlist,
            method: "GET",
            credentials : "include",
          }),
    }),
    getProductDetails : builder.query({
        query :(id :string) => ({
            url: endpoints.getProductDetails + id,
            method: "GET",
            credentials : "include",
          }),
    }),
    getAllProducts : builder.query({
      query :() => ({
          url: endpoints.getAllProducts,
          method: "GET",
          credentials : "include",
        }),
  }),

})
})

export const {
    useGetCartItemsQuery,
    useGetWishlistQuery,
    useGetProductDetailsQuery,
    useGetAllProductsQuery
} = productApiSlice;
