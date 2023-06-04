import React from "react";
import { useForm } from "react-hook-form";


export const Form2 = () => {

  // 分割代入でuseFormからregister / handleSubmitを取り出している
  // 追加：：useFormからformState:{errors}をimportする
  const { register,handleSubmit,formState:{errors}} = useForm();

  const onSubmit = (data) => console.log("onSubmit:", data);

  const firstNameRules = {
    required: "入力してください",
    minLength:{value:6,message:"6文字以上,15文字以内で入力してください"},
    maxLength: { value: 15, message:"6文字以上,15文字以内で入力してください"}
  }

  const emailRules = {
    pattern: { value: /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)/, message:"@を含んだメールアドレスの形式で入力してください。"}
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label> First Name</label>
        <input {...register("firstName", firstNameRules)} />
        {errors.firstName && errors.firstName.message}

        <label> Last Name</label>
        <input {...register("lastName", { required:true })} />
        {errors.lastName && <p>名は入力必須です。</p>}

        <label> email</label>
        <input {...register("email", emailRules)} />
        {errors.email && errors.email.message}

        <label> 年齢</label>
        <input {...register("age")} />

        <input type="submit" />

      </form>
    </>
  )
}
