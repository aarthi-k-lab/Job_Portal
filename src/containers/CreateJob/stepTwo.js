function StepTwo() {
  return (
    <form className="step_two create_job_form w-full h-141 border-1 rounded-lg px-8 py-8 flex flex-col justify-between">
      <div className="step_two_grid_elements grid grid-rows gap-y-6">
        <div className="title flex justify-between h-7">
          <div className="font-semibold">Create a job</div>
          <div className="font-semibold">Step 2</div>
        </div>
        <div className="experience grid grid-cols-2 gap-x-6">
          <div className="exp_min h-15 grid grid-rows-2 gap-y-1">
            <div className="experience_label h-5 font-semibold">Experience</div>
            <input className="location_input border-1 rounded-md h-9" placeholder="  Minimum" type="text" required />
          </div>
          <div className="exp_max h-15 grid grid-rows-2 gap-y-1">
            <div className="h-5">  </div>
            <input className="remote_type_input border-1 rounded-md h-9" placeholder="  Maximum" type="text" required />
          </div>
        </div>
        <div className="salary grid grid-cols-2 gap-x-6">
          <div className="salary_min h-15 grid grid-rows-2 gap-y-1">
            <div className="salary_label h-5 font-semibold">Salary</div>
            <input className="location_input border-1 rounded-md h-9" placeholder="  Minimum" type="text" required />
          </div>
          <div className="salary_max h-15 grid grid-rows-2 gap-y-1">
            <div className="h-5">  </div>
            <input className="remote_type_input border-1 rounded-md h-9" placeholder="  Maximum" type="text" required />
          </div>
        </div>
        <div className="total_employee h-15 grid grid-rows-2 gap-y-1">
          <div className="total_employee_label h-5 font-semibold">Total Employee</div>
          <input className="total_employee_input border-1 rounded-md h-9" placeholder="  ex. 100" type="text" />
        </div>
        <div className="apply_type h-15 grid grid-rows-2 gap-y-1">
          <div className="apply_type_label h-5 font-semibold">Apply type</div>
          <div className="flex justify-start gap-x-4">
            <div className="quick_apply flex justify-start gap-x-1">
              <input id="quick_apply" type="radio" name="apply_type" value="Quick Apply" />
              <label className="quick_apply_label h-5 text-grey" htmlFor="quick_apply">Quick Apply</label>
            </div>

            <div className="external_apply flex justify-start gap-x-1">
              <input id="external_apply" type="radio" name="apply_type" value="External Apply" />
              <label className="external_apply_label h-5 text-grey" htmlFor="external_apply">External Apply</label>
            </div>
          </div>
        </div>
      </div>
      <div className="save flex justify-end">
        <button className="save_button h-10 rounded-md bg-regal-blue px-4 py-2 text-white" type="submit">Save</button>
      </div>
    </form>
  );
}

export default StepTwo;
