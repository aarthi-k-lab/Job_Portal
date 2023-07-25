import CreateJobForm from './containers/CreateJob';
import JobGrid from './containers/JobGrid';

function App() {
  return (
    <div className="app font-Poppins text-xl font-medium leading-7">
      <CreateJobForm />
      <JobGrid />
      <br />
    </div>
  );
}

export default App;
