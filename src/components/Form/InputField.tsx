import { FieldError, UseFormRegister } from "react-hook-form";
import { Inputs } from "./Form";
import { InputKeys } from "@/utils/constants";

interface OwnProps {
  label: string;
  register: UseFormRegister<Inputs>;
  registerAs: InputKeys;
  required: boolean;
  isArea?: boolean;
  isError?: FieldError;
  validationPattern?: RegExp;
}

export default function InputField({
  label,
  register,
  registerAs,
  required,
  isArea,
  isError,
  validationPattern,
}: OwnProps) {
  return (
    <div className={isArea ? "lg:col-span-2" : ""}>
      <p className="uppercase, text-sm, mb-1 font-bold">{label}</p>
      {isArea ? (
        <textarea
          className="inputField col-span-2"
          {...register(registerAs, {
            required: required,
            pattern: validationPattern,
          })}
        />
      ) : (
        <input
          className="inputField"
          {...register(registerAs, {
            required: required,
            pattern: validationPattern,
          })}
        />
      )}

      {isError && <p className="text-xs text-red-700">To pole jest wymagane</p>}
    </div>
  );
}
