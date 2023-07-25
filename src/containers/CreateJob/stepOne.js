function StepOne() {
  return (
    <form className="step_one create_job_form w-full h-141 border-1 rounded-lg px-8 py-8 flex flex-col justify-between">
      <div className="step_one_grid_elements grid grid-rows gap-y-6">
        <div className="title flex justify-between h-7">
          <div className="font-semibold">Create a job</div>
          <div className="font-semibold">Step 1</div>
        </div>
        <div className="job_title_elements h-15 grid grid-rows-2 gap-y-1">
          <div className="job_title_label h-5 font-semibold">Job title<span className="req text-alert">*</span></div>
          <input className="job_title_input border-1 rounded-md h-9" placeholder="  ex. UX UI Designer" type="text" required />
        </div>
        <div className="company_name h-15 grid grid-rows-2 gap-y-1">
          <div className="company_name_label h-5 font-semibold">Company name<span className="req text-alert">*</span></div>
          <input className="company_name_input border-1 rounded-md h-9" placeholder="  ex. Google" type="text" required />
        </div>
        <div className="industry h-15 grid grid-rows-2 gap-y-1">
          <div className="industry_label h-5 font-semibold">Industry<span className="req text-alert">*</span></div>
          <input className="industry_input border-1 rounded-md h-9" placeholder="  ex. Information Technology" type="text" required />
        </div>
        <div className="location_remotetype h-15 grid grid-cols-2 gap-x-6">
          <div className="location h-15 grid grid-rows-2 gap-y-1">
            <div className="location_label h-5 font-semibold">Location<span className="req text-alert">*</span></div>
            <input className="location_input border-1 rounded-md h-9" placeholder="  ex. Chennai" type="text" required />
          </div>
          <div className="remote_type h-15 grid grid-rows-2 gap-y-1">
            <div className="remote_type_label h-5 font-semibold">Remote type<span className="req text-alert">*</span></div>
            <input className="remote_type_input border-1 rounded-md h-9" placeholder="  ex. In-office" type="text" required />
          </div>
        </div>
      </div>
      <div className="next flex justify-end">
        <button className="next_button h-10 rounded-md bg-regal-blue px-4 py-2 text-white" type="button">Next</button>
      </div>
    </form>
  );
}

export default StepOne;
