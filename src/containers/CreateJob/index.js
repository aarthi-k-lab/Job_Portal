import StepOne from './stepOne';
import StepTwo from './stepTwo';

function CreateJobForm() {
  return (
    <div className="create_job_container max-w-sm mx-auto flex flex-col justify-around h-1500">
      <StepOne />
      <StepTwo />
    </div>
  );
}

export default CreateJobForm;
