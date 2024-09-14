"use client";
import { SignUp } from "@/app/actions/_auth_actions";
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
import { SignUpSchema } from "@splitvanced/validators/authValidator";
import Link from "next/link";
import { useForm } from "react-hook-form";
const SignUpPage = () => {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      confirmPassword: "",
      name: "",
      password: "",
    },
  });
  const onSubmit = async (data: SignUpSchema) => {
    const resp = await SignUp(data);
    if (resp.status == "403") {
      alert("User Created");
    } else {
      alert(resp.message);
    }
  };
  return (
    <main className={"grid place-items-center h-screen w-full"}>
      <Card className="max-w-lg w-full">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className=" space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Alan Turing" {...field} />
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
                  <FormItem>
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={form.formState.isSubmitting}
                className="w-full"
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
            href="/signin"
          >
            Already have an account? Sign In
          </Link>
        </CardFooter>
      </Card>
      
    </main>
  );
};
export default SignUpPage;  
