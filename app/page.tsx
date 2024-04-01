"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spin } from "antd";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-100">
      <Spin />
    </div>
  );
}
