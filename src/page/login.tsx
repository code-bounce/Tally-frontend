import React from "react";
import { useForm } from "react-hook-form";
import { ajvResolver } from "@hookform/resolvers/ajv";
import Button from "../Component/lib/Button/Button";
import Input from "../Component/lib/Form/Input";
import { loginSchema } from "../schema/schema";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: ajvResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center gap-3 lg:flex-row  lg:bg-transparent">
      <div className="lg:flex-1  flex items-center justify-center">
        <div className="w-6/12 sm:w-5/12 pb-7 lg:pb-0">
          <img src="/tally-logo.svg" alt="" />
        </div>
      </div>
      <div className="lg:flex-1 flex md:items-center justify-center ">
        <div className="w-9/12 sm:w-7/12 md:w-6/12">
          <h4 className="font-roboto text-2xl font-semibold pb-3">Sign In</h4>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Email address"
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              label="Password"
              {...register("password")}
              error={errors.password?.message}
            />
            <div className="pt-3">
              <Button type="submit">Sign In</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
