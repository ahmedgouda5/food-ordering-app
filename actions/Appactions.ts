import { Order, User } from "../constents";

// دالة إنشاء مستخدم
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

  const data = await res.json();
  console.log("User created successfully:", data);
  return data;
};

// دالة إنشاء الطلب
export const createOrder = async (orderData: Order) => {
  const res = await fetch("/api/cart/Foodcart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!res.ok) {
    throw new Error("فشل في إنشاء الطلب");
  }

  const data = await res.json();
  console.log("Order created successfully:", data);
  return data;
};
