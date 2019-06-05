const get = url => {
  return fetch(url)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fetch';
      return json;
    });
};

export const getGenPdxJobs = () => {
  return get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=Portland+OR');
   
};

export const getJobById = id => {
  return get(`https://jobs.github.com/positions/${id}.json`);
};
