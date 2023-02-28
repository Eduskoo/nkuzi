import { WaitListForm } from "./waitlist-form";

const FormSection = () => {
  return (
    <div className="my-0 mx-auto w-11/12 max-w-[1107px]">
      <div className="my-0 mx-auto w-11/12 max-w-[650px]">
        <h1 className="text-center text-2xl font-[500] text-[#1A0048] md:text-5xl">
          Join our waiting list
        </h1>
        <WaitListForm />
      </div>
    </div>
  );
};

export { FormSection };
