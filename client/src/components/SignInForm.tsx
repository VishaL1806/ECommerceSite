import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { SignInFormValidation } from "@/validation";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/redux/slices/api/userApiSlice";
import { useDispatch } from "react-redux";
import { setUserDetails } from "@/redux/slices/authSlice";

const SignInForm = () => {
  const naviagte = useNavigate()
  const dispatch = useDispatch()
  const form = useForm<z.infer<typeof SignInFormValidation>>({
    resolver: zodResolver(SignInFormValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login]=useLoginMutation()

  async function onSubmit(values: z.infer<typeof SignInFormValidation>) {
    const res = await login(values).unwrap()

    if(res.status){
       dispatch(setUserDetails(res.data))
      naviagte("/")
    }
  }
  return (
    <Form {...form}>
      <div className="gap-5 flex flex-col">
        <h1 className="text-3xl">Log in to MySite</h1>
        <span className="">Enter your details below</span>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    size={50}
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 border-transparent border-b-orange-600  h-14"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    size={50}
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 border-transparent border-b-orange-600  h-14"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="button-group flex justify-between items-center ">
            <Button variant="destructive" className="h-12 text-md">
              Log In
            </Button>

            <Link to={"/"} className="font-normal text-red-500">
              Forgot password ?
            </Link>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default SignInForm;
