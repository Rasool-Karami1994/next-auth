"use client";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "@/styles/Auth.module.scss";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AuthPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validatePhone = (phone: string): boolean => {
    return /^09\d{9}$/.test(phone);
  };

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError("Invalid Phone number (example: 09199975964)");
      return;
    }
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      const user = data.results[0];

      localStorage.setItem("user", JSON.stringify(user));
      toast.success(`welcome Dear ${user.name.title}`);

      router.push("/dashboard");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch {
      toast.error("Login Error! try again please");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <Input
          value={phone}
          onChange={setPhone}
          placeholder="Phone Number"
          error={error}
        />
        <Button title="login" onClick={handleLogin} />
      </form>
    </div>
  );
}
