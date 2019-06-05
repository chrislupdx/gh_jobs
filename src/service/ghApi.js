const get = url => {
  return fetch(url)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fetch';
      return json;
    });
};

export const getPdxGenJobs = () => {
  return get('https://jobs.github.com/positions.json?location=Portland+OR');
};
