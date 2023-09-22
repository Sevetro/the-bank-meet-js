"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function UserErrorPage() {
  return (
    <div className="mx-auto w-1/4">
      <Link href="/dashboard">
        <div className="flex items-center">
          <ArrowLeft className="my-4 h-10 w-10" />
          Back
        </div>
      </Link>

      <h1 className="text-center text-3xl">User not found</h1>
    </div>
  );
}