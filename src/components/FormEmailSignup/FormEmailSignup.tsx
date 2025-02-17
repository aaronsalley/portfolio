"use client";

import Button from "../Button/Button";
import style from "./style.module.scss";

export default function FormEmailSignup(): any {
  // TODO: make this do something
  // may need to move outside of client component to run on server
  const handleSubmit = (event) => {
    event.preventDefault();

    return;
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <div className={style["input-group"]}>
        <input
          name="email"
          placeholder=""
          type="email"
          autoComplete="email"
          required
        />
        <label htmlFor="email">Your email address</label>
        <Button
          label=""
          type="submit"
          classes={{
            padding: 0,
            background: "transparent",
            border: "none",
          }}
        />
      </div>
    </form>
  );
}
