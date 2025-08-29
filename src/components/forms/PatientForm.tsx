"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// ✅ Zod schema for validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().min(6, "Password must be at least 6 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function UserForm() {
  // ✅ hook-form setup
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  // ✅ onSubmit
  function onSubmit(values: FormValues) {
    console.log("Form Submitted ✅", values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 border rounded-2xl shadow"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
               <div className="flex items-center">
                <Image src={"/assets/icons/user.svg"} height={100} width={200} alt={""} className="w-6" />
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
               </div>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem >
              <FormLabel>Email</FormLabel>
              <div className="flex">
               
              <FormControl>
                <Input
                  className="focus:ring-green-400"
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                />
              </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  className="focus:ring-green-400"
                  placeholder="Enter Your Phone Number"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-green-400 w-full">
          Get Started
        </Button>
      </form>
    </Form>
  );
}
