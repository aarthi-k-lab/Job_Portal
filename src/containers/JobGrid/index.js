import jobs from '../../constants/jobs';
import Logo from '../../assets/logo.png';

function JobGrid() {
  return (
    <div className="job_grid_container max-w-3xl flex gap-21 pt-30 pr-44 pb-49 pl-85 font-normal bg-grey grid lg:grid-cols-2 gap-20 mx-auto">
      {jobs.map((job) => (
        <div className="job_grid flex gap-2 bg-white h-320 px-6 py-4 flex items-center gap-2.5 self-stretch rounded-lg border border-lightwhite">
          <div className="logo_space max-w-12 self-start"><img className="w-12 h-12" alt="logo" src={Logo} /></div>
          <div className="job_info max-w-77 h-72 grid grid-rows-3 gap-y-6">
            <div className="job_info_1 h-20 w-77">
              <div className="role text-2xl">{job.title}</div>
              <div className="company_name text-base">{job.company_name}</div>
              <div className="location text-base text-grey">{job.location}</div>
            </div>
            <div className="job_info_2 grid grid-rows-4 gap-y-2">
              <div className="job_type text-base">{job.job_type}</div>
              <div className="experience text-base">{job.experience}</div>
              <div className="salary text-base">{job.salary}</div>
              <div className="employee_count text-base">{job.employees}</div>
            </div>
            <div className="apply_now_div ">
              <button className="apply_now_btn px-4 py-2 justify-center items-center rounded-md bg-regal-blue text-white" type="button">Apply Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default JobGrid;
