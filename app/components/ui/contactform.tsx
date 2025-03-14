"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "./button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Glassmorphism } from "./ui";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: typeof formSchema._type) {
    console.log("Form Data:", data);
  }

  return (
    // <div className="flex flex-col items-center gap-4 w-[20%]">
      <Glassmorphism className="w-full md:w-[50%] p-5  rounded-2xl shadow-md">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-5">
              {/* <FormLabel>Name</FormLabel> */}
              <FormControl>
                <Input placeholder="Enter your name" {...field} className="border-primary border-2  shadow-2xl rounded-[10px] h-[50px] " />
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
              {/* <FormLabel>Email</FormLabel> */}
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} className="border-primary border-2  shadow-2xl rounded-[10px] h-[50px] " />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Phone</FormLabel> */}
              <FormControl>
                <Input type="tel" placeholder="Enter your phone number" {...field} className="border-primary border-2  shadow-2xl h-[50px] rounded-[10px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Message</FormLabel> */}
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} className="border-primary border-2 h-[150px]  md:h-[200px] shadow-2xl rounded-[20px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="rounded-2xl py-5 font-[600] px-10">Submit</Button>
      </form>
    </Form>
    </Glassmorphism>
  );
}
