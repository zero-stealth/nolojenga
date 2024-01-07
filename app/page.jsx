"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/Auth";


export default function Home() {
  const router = useRouter();
  const { isAuth } = useAuthStore();

  useEffect(() => {
    if (isAuth) {
      router.push("/authentication/chooseAccount");
    } else {
      router.push("/authentication/signup");
    }
  }, [isAuth, router]);

  return <></>;
}