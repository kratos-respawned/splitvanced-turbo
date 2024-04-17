"use client";
import { Login, SignUp } from "@/app/_auth_actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@splitvanced/validators/authValidator";
import Link from "next/link";
import { useForm } from "react-hook-form";
const SignInPage = () => {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: SignInSchema) => {
    const resp = await Login(data);
    if (resp.status == "200") {
      alert("Login Successful");
    } else {
      alert(resp.message);
    }
  };
  return (
    <main className={"grid place-items-center h-screen w-full"}>
      <Card className="max-w-lg w-full">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Enter your email below to login</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className=" space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="abc@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="pb-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="something secure"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={form.formState.isSubmitting}
                className="w-full "
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Link
            className="text-sm text-center hover:underline mx-auto"
            href="/signup"
          >
            Don't have an account? Sign Up
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};
export default SignInPage;
