"use client"
import React from "react";
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
import { Control } from "react-hook-form";
import { FormFieldType } from "./PatientForm";

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode;

}

export default function CustomFormField({control, fieldType ,name,lebel}: CustomProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
            {
                fieldType !== FormFieldType.CHECKBOX && lebel(
                    <FormLabel>{lebel}</FormLabel>
                )
            }
          
          <FormControl>
            <Input placeholder="Enter Your Name" {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
