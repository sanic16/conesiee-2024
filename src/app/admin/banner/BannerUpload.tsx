"use client";
import FormButton from "@/components/formButton/FormButton";
import React from "react";
import classes from "./bannerUpload.module.css";
import { useFormState } from "react-dom";
import { bannerImageUploadAction } from "@/actions";

const BannerUpload = () => {
  const [state, action] = useFormState(bannerImageUploadAction, {
    errors: {},
  });
  return (
    <div className={classes["banner__form-wrapper"]}>
      <h2>Subir imagen</h2>
      <form className={classes.banner__form} action={action}>
        <input
          type="file"
          name="image"
          accept="image/png, image/jpeg, image/jpg"
        />
        <p>{state.errors._form && state.errors._form.join(", ")}</p>
        <FormButton />
      </form>
    </div>
  );
};

export default BannerUpload;
