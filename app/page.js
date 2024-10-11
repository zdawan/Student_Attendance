"use client";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <h1> Attendance System Dawan18</h1> <LoginLink> Sign in </LoginLink>{" "}
      <RegisterLink> Sign up </RegisterLink>{" "}
    </div>
  );
}
