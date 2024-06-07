"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Member = async () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/ClientMember");
    },
  });

  
};


