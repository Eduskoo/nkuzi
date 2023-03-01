import { REGIONS } from "utils/regions";

const WaitListForm = () => {
  return (
    <form className="flex flex-col items-center justify-center gap-4">
      <div className="w-full">
        <div className="mt-10 rounded-2xl bg-white">
          <div className="py-12 px-5 md:px-[88px]">
            <label htmlFor="fullName">
              <span className="font-[500]">Full name</span>
              <input
                className="border-1 mb-5 mt-2 block w-full rounded-2xl border-[#1A0048]"
                placeholder="Enter full name"
                type="text"
                name=""
              />
            </label>
            <label htmlFor="fullName">
              <span className="font-[500]">Email Address</span>
              <input
                className="border-1 mb-5 mt-2 block w-full rounded-2xl border-[#1A0048]"
                type="text"
                placeholder="Enter email Address"
                name=""
              />
            </label>
            {/* <label htmlFor="fullName">
              <span className="font-[500]">Phone Number</span>
              <input
                className="border-1 mb-5 mt-2 block w-full rounded-2xl border-[#1A0048]"
                type="text"
                placeholder="Enter phone Number"
                name=""
              />
            </label> */}
            <label htmlFor="">
              <span className="font-[500]">Which best describe you</span>
              <select
                className="border-1 mb-5 mt-2 block w-full rounded-2xl border-[#1A0048]"
                name=""
                id=""
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
            <label htmlFor="region">
              <span className="font-[500]">Region</span>
              <select
                className="border-1 mb-5 mt-2 block w-full rounded-2xl border-[#1A0048]"
                name="region"
              >
                <option />
                {REGIONS.map((region) => (
                  <option key={region.abbreviation} value={region.abbreviation}>
                    {region.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="" className="flex  gap-2">
          <input type="checkbox" className="default:ring-2" />
          <span className="text-xs font-[500]">
            By joining the waiting list, you agree to receive updates and
            notification regarding Nkuzi, we will collect your name and email
            for the purpose of adding you to the waiting list. Your information
            will be kept confidential and will not be shared with any third
            parties.
          </span>
        </label>
      </div>

      <button className="cursor-pointer rounded-lg bg-[#1A0048] px-8 py-3 text-xl font-semibold text-white shadow-sm transition-all hover:bg-white hover:text-[#1A0048] md:text-2xl">
        Submit
      </button>
    </form>
  );
};
export { WaitListForm };
