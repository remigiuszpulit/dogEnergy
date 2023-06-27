"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "./InputField";
import { inputFields } from "@/utils/constants";
import { motion } from "framer-motion";

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
    <section
      id="contact"
      className="w-full flex justify-center items-center bg-black p-10"
    >
      <motion.div
        initial={{ y: 600 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, transition: { duration: 0.4 } }}
        className="w-full md:w-1/2 bg-white "
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full  bg-white grid grid-cols-1 lg:grid-cols-2	gap-x-10 gap-y-5 p-6	lg:p-14 formContainer"
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
      </motion.div>
    </section>
  );
}
