document.querySelector('.sign-up-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let submission = {
        name: e.target[0].value,
        contact: e.target[1].value,
        location: e.target[2].value,
        horsename: e.target[3].value,
        horsetype: e.target[4].value,
        company: e.target[5].value
    };
    
    console.log(submission);
    axios.post('https://lovastalalkozo.herokuapp.com/signup', submission)
        .then((response) => {
            document.querySelector('.form-message').innerHTML = response.data.message;

            //Reset form
            for(let i = 0; i < 6; i++){
                e.target[i].value = '';
            }
        })
        .catch((error) => {
            //console.log(error);
        });
});