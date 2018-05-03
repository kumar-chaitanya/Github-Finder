class Getdata {
  constructor() {
    this.clientID = '9032a21cb1c28ac88736';
    this.clientSecret = 'c5c90f984d5657d437dc580e42580862f950008c';
    this.repos_count = 8;
    this.repos_sort = 'created: asc';
  }

  get(user) {
    return new Promise((resolve, reject) => {
      const information = fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`)
        .then(res => res.json());
      
      const repos = fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`)
        .then(res => res.json());

      Promise.all([information, repos])
        .then(data => resolve(data))
        .catch(() => reject());
    });
  }
}