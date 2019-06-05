const get = url => {
  return fetch(url)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fetch';
      return json;
    });
};

export const getGenPdxJobs = () => {
  return get('https://jobs.github.com/positions.json?location=Portland+OR&page=1')
    .then(json => json.map(app => ({
      id: app.id,
      type: app.type
    })));
};
