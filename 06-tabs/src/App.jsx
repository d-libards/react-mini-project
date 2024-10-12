import { useEffect } from 'react';
import { useState } from 'react';
import JobInfo from './component/JobInfo';
import BtnContainer from './component/BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  async function fetchJobs() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Unable to fetch');
      const person = await response.json();
      setJobs(person);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  function selectedTab(index) {
    setCurrentItem(index);
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        selectedTab={selectedTab}
        currentItem={currentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
