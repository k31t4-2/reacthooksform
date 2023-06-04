import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export const Form = () => {

  return (
    <>
      <label>名前</label>
      <input type="text" />

      <br />
      <br/>

      <label>性別</label>
      <select>
        <option>男性</option>
        <option>女性</option>
      </select>

      <br />
      <br/>

      <input type="submit" value="送信する"/>
    </>
  )
}
