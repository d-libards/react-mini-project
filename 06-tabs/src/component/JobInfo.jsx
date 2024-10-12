import JobDuties from './JobDuties';

function JobInfo({ jobs, currentItem }) {
  const { company, dates, title, duties } = jobs[currentItem];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <JobDuties duties={duties} />
    </article>
  );
}
export default JobInfo;
