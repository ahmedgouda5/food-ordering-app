import { User } from "../constents";

export const createUser = async (user: User) => {
  const res = await fetch("/api/Auth/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error("فشل في إنشاء المستخدم");
  }

  return await res.json();
};