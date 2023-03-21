import * as yup from "yup";

const waitlistFormSchema = yup.object().shape({
  fullName: yup.string().trim().required("Please input your Full name!"),
  emailAddress: yup
    .string()
    .trim()
    .email("That doesn't look like an email")
    .required("Please input your Email!"),
  role: yup.string().trim().required("Please select a Role!"),
  region: yup.string().trim().required("Please select your Region!"),
  tandc: yup.bool().oneOf([true], "You must accept the terms and conditions"),
});
export type TFormData = yup.InferType<typeof waitlistFormSchema>;
export { waitlistFormSchema };
