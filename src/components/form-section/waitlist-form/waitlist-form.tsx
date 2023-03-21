import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { TWaitlistFormPayload, useCreateWaitlist } from "@/helpers/api";
import { REGIONS } from "utils/regions";
import { TFormData, waitlistFormSchema } from "./schema";

const WaitListForm = () => {
  const createWaitlistMutation = useCreateWaitlist();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<TFormData>({
    resolver: yupResolver(waitlistFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TFormData> = (values) => {
    // console.log({ values, errors });
    const payload: TWaitlistFormPayload = {
      form: {
        fullName: values.fullName,
        emailAddress: values.emailAddress,
        region: values.region,
        role: values.role,
      },
    };

    createWaitlistMutation.mutate(payload, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="w-full">
        <div className="mt-10 rounded-2xl bg-white">
          <div className="py-12 px-5 md:px-[88px]">
            <div className="mb-3">
              <label htmlFor="fullName">
                <span className="font-[500]">Full name</span>
                <input
                  className="border-1 mt-2 block w-full rounded-2xl border-[#1A0048]"
                  placeholder="Enter full name"
                  type="text"
                  {...register("fullName")}
                />
                <p className="font-bold text-red-500">
                  {errors.fullName?.message}
                </p>
              </label>
            </div>
            <div className="mt-3 mb-3">
              <label htmlFor="emailAddress">
                <span className="font-[500]">Email Address</span>
                <input
                  className="border-1 mt-2 block w-full rounded-2xl border-[#1A0048]"
                  type="text"
                  placeholder="Enter email Address"
                  {...register("emailAddress")}
                />
                <p className="font-bold text-red-500">
                  {errors.emailAddress?.message}
                </p>
              </label>
            </div>
            {/* <label htmlFor="fullName">
              <span className="font-[500]">Phone Number</span>
              <input
                className="border-1 mt-2 block w-full rounded-2xl border-[#1A0048]"
                type="text"
                placeholder="Enter phone Number"
                name=""
              />
            </label> */}
            <div className="mt-3 mb-3">
              <label htmlFor="role">
                <span className="font-[500]">Which best describe you</span>
                <select
                  className="border-1 mt-2 block w-full rounded-2xl border-[#1A0048]"
                  {...register("role")}
                >
                  <option />
                  <option value="international_student">
                    International Student
                  </option>
                  <option value="home_owner">Home-Owner</option>
                  <option value="recruiter">Recruiter</option>
                  <option value="lender">Lender</option>
                </select>
              </label>
              <p className="font-bold text-red-500">{errors.role?.message}</p>
            </div>
            <div className="mt-3 mb-3">
              <label htmlFor="region">
                <span className="font-[500]">Region</span>
                <select
                  className="border-1 mt-2 block w-full rounded-2xl border-[#1A0048]"
                  {...register("region")}
                >
                  <option />
                  {REGIONS.map((region) => (
                    <option key={region.abbreviation} value={region.name}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </label>
              <p className="font-bold text-red-500">{errors.region?.message}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="terms" className="flex  gap-2">
          <input
            type="checkbox"
            className="default:ring-2"
            {...register("tandc")}
          />
          <span className="text-xs font-[500]">
            By joining the waiting list, you agree to receive updates and
            notification regarding Nkuzi, we will collect your name and email
            for the purpose of adding you to the waiting list. Your information
            will be kept confidential and will not be shared with any third
            parties.
          </span>
        </label>
        <p className="font-bold text-red-500">{errors.tandc?.message}</p>
      </div>

      <button
        disabled={
          Object.keys(errors).length > 0 ||
          Object.values(watch()).length < 1 ||
          createWaitlistMutation.isLoading
        }
        type="submit"
        className="cursor-pointer rounded-lg bg-[#1A0048] px-8 py-3 text-xl font-semibold text-white shadow-sm transition-all hover:bg-white hover:text-[#1A0048] disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-[#1A0048] disabled:hover:text-white md:text-2xl"
      >
        Submit
      </button>
    </form>
  );
};
export { WaitListForm };
