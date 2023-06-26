"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "./InputField";
import { inputFields } from "@/utils/constants";

export type Inputs = {
  ownerName: string;
  petName: string;
  phone: string;
  email: string;
  message: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className="w-full flex justify-center items-center bg-black p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full md:w-1/2 bg-white grid grid-cols-1 lg:grid-cols-2	gap-x-10 gap-y-5	p-14 formContainer"
      >
        {inputFields.map((field) => (
          <InputField
            key={field.label}
            label={field.label}
            register={register}
            registerAs={field.registerAs}
            required={field.isRequired}
            isArea={field.isArea}
            isError={errors[field.registerAs]}
            validationPattern={field.validationPattern}
          />
        ))}
        <input type="submit" className="submitBtn" />
      </form>
    </section>
  );
}
