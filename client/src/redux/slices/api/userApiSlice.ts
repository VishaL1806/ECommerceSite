
import { endpoints } from "@/constants/endpoints";
import { apiSlice } from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
        query: (user) => ({
          url: endpoints.registerUser,
          method: "POST",
            body : user ,
            credentials : "include"
        }),
      }),


    login: builder.mutation({
      query: (user) => ({
        url: endpoints.loginUser,
        method: "POST",
        body : user,
        credentials : "include"
      }),
    }),
    validate : builder.query({

      providesTags :['Validate'],
        query :() => ({
            url: endpoints.validateUser,
            method: "GET",
            credentials : "include",

          }),
          
    }),
    toogleWishlist : builder.mutation({
      query: (id : string) => ({
        url: endpoints.togglewishList + id,
        method: "POST",
        credentials : "include"
      }),
      invalidatesTags :['Validate','Wishlist']
    }),
    toogleCart : builder.mutation({
      query: ({productId ,quantity} : {productId:string,quantity:number}) => ({
        url: endpoints.toggleCart + productId,
        method: "POST",
        body : {quantity},
        credentials : "include"
      }),
      invalidatesTags :['Validate','Wishlist','Cart']
    }),
})
})

export const {
    useRegisterUserMutation,
    useLoginMutation,
    useValidateQuery,
    useToogleWishlistMutation,
    useToogleCartMutation
} = userApiSlice;
