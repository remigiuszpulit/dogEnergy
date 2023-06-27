interface Route {
  name: string;
  path: string;
}
export enum InputKeys {
  ownerName = "ownerName",
  petName = "petName",
  phone = "phone",
  email = "email",
  message = "message",
}
interface inputField {
  label: string;
  isRequired: boolean;
  registerAs: InputKeys;
  isArea?: boolean;
  validationPattern?: RegExp;
}

export const routes: Route[] = [
  { name: "O nas", path: "/" },
  { name: "Aktualności", path: "/aktualnosci" },
  { name: "Oferta", path: "/oferta" },
];

export const inputFields: inputField[] = [
  {
    label: "Imię Właściciela",
    isRequired: true,
    registerAs: InputKeys.ownerName,
  },
  { label: "Imię Psa", isRequired: true, registerAs: InputKeys.petName },
  {
    label: "Numer Telefonu",
    isRequired: true,
    registerAs: InputKeys.phone,
    validationPattern: /^(\+\d{1,3})?\d{9}$/,
  },
  {
    label: "E-mail",
    isRequired: true,
    registerAs: InputKeys.email,
    validationPattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  {
    label: "Wiadomość",
    isRequired: true,
    registerAs: InputKeys.message,
    isArea: true,
  },
];
