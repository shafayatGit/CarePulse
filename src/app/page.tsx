"use client";
import PatientForm from "@/components/forms/PatientForm";
// import { PatientForm } from "@/components/forms/PatiantForm";
import Image from "next/image";
// import PatientForm from "../components/forms/PatiantForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar relative flex-1 overflow-y-auto px-[5%] my-auto">
        <div className="mx-auto flex size-full flex-col py-10 max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={100}
            width={100}
            alt=""
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />

          <div className="text-[16px] leading-[20px] font-normal mt-20 flex justify-between">
            <p className="justify-items-end text-gray-500 xl:text-left">
              ©2025CarePulse
            </p>
            <Link href={"?admin=true"}>Admin</Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
