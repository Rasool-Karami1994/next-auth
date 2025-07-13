"use client";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "@/styles/Auth.module.scss";
import { useRouter } from "next/navigation";

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

    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data.results[0]));
    router.push("/dashboard");
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
