import React from "react";
import { useForm } from "react-hook-form";

export const Form = () => {

  // １、useFormを使ってregisterとhandleSubmitを取り出す
  // 1-1,バリデーションメッセージを使いたい場合、分割代入で設定しておく
  // 1-2,defaultValuesで初期値を渡すことができる
  const { register, handleSubmit, formState: { errors } } = useForm(
    {defaultValues: {name:"関本圭汰", age:29}} // placeholderみたいなもの？
  );

  // ２、onSubmit関数は、submitイベントが発生かつバリデーションが成功した時に実行される
  const onSubmit = (data) => console.log("onSubmit", data);


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>
          名前
          <input type="text"  {...register("name", {
            required: { value: true, message: "名前を入力してください" },
          })}/>
        </label>
          <br/>
        {errors.name && errors.name.message}

        <br />
        <br />

        <label>
          年齢
          <input {...register("age", {
            required: { value: true ,message:"入力してください"},
          }
          )} />歳
        </label>
        <br/>
          {errors.age && errors.age.message}


        <br />
        <br/>

        <label>
          性別
          <select>
            <option>男性</option>
            <option>女性</option>
          </select>
        </label>

        <br />
        <br/>

        <input type="submit" />

      </form>
    </>
  )
}
