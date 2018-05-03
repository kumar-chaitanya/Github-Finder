const request = new Getdata;
const ui = new UI;
const input = document.getElementById('searchUser');

input.addEventListener('keyup', (e) => {
  // let user = this;
  // console.log(user);
  let userName = e.target.value;
  if(userName !== '') {
    request.get(userName)
      .then(data => {
        if(data[0].message === 'Not Found')
          ui.showAlert('User Not Found', 'alert alert-danger');
        else {
          ui.showProfile(data[0]);
          ui.showRepos(data[1]);
        }
      })
  } else {
    ui.clearProfile();
  }
});
