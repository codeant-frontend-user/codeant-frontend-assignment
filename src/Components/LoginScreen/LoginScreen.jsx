import React from "react";
import { LoginLeft, LoginRight } from "../index";

const LoginScreen = () => {
  return (
    <section className="w-full min-h-screen flex">
      <LoginLeft />
      <LoginRight />
    </section>
  );
};

export default LoginScreen;
