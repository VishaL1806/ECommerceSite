import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SignUpFormValidation } from "@/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const SignUpForm = () => {

  const form = useForm<z.infer<typeof SignUpFormValidation>>({
    resolver: zodResolver(SignUpFormValidation),
    defaultValues: {
      name:"",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignUpFormValidation>) {
    console.log(values);
  }
  return (
    <Form {...form}>
    <div className="gap-5 flex flex-col">
      <h1 className="text-3xl">Create an account</h1>
      <span className="">Enter your details below</span>
      <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
       <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="name"
                    placeholder="Name"
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

      <Button variant="destructive" className="h-12 text-md">
        Create Account
      </Button>

      <span className="font-normal text-center">
        Already have an account?{" "}
        <Link to={"/sign-in"} className="underline">
          Login
        </Link>
      </span>
      </form>
    </div>
    </Form>
  );
};

export default SignUpForm;
