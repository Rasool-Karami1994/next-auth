"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Dashboard.module.scss";
import { User } from "@/components/types";
import Image from "next/image";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const userData = localStorage.getItem("user");
      if (!userData) {
        router.push("/auth");
        return;
      }

      const parsedUser: User = JSON.parse(userData);
      setUser(parsedUser);
    } catch {
      setError("User's Information's Fetch Error");
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Loading</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      {user && (
        <>
          <h2>Welcome to the Dashboard</h2>
          <div>
            <Image
              width={80}
              height={80}
              src={user.picture.medium}
              alt="User Profile"
              className={styles.avatar}
            />
            <p>
              {user.name.first} {user.name.last}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
