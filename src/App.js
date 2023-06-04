import React from "react";
import { useForm } from "react-hook-form";

function App() {

  // 分割代入でuseFormからregister / handleSubmitを取り出している
  // 追加：：useFormからformState:{errors}をimportする
  const { register,handleSubmit,formState:{errors}} = useForm();

  const onSubmit = (data) => console.log("onSubmit:",data);

  return (
    <div className="App">

      {/* register関数bの第２引数にバリデーションのルールを追加する */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <label> First Name</label>
        <input {...register("firstName", { maxLength: 15 })} />
        {errors.firstName && <p>15文字以内で入力してください。</p>}

        <label> Last Name</label>
        <input {...register("lastName", { maxLength: 15 })} />
        {errors.lastName && <p>10文字以内で返してください</p>}

        <label> email</label>
        <input {...register("email",{required:true})} />
        {errors.email && <p>メールアドレスは必須です。</p>}

        <label> 年齢</label>
        <input {...register("age")} />

        <input type="submit" />

      </form>
    </div>
  );
}

export default App;
