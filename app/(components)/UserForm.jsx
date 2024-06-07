"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  
};


