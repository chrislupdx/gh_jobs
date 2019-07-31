const get = url => {
  return fetch(url)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fetch';
      return json;
    });
};


export const getJobById = id => {
  return get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`);
};

export const getJobByKW = (query, location) => {
  console.log(query, location);
  return get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${query}&location=${location}`);
};


