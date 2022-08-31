var form = document.getElementById('contactpage')

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    var firstname = document.getElementById('first_name').value
    // console.log(firstname)

    var lastname = document.getElementById('last_name').value

    var email = document.getElementById('Email').value

    alert(`Hello ${firstname} ${lastname}! Your email is ${email} and you have successfully submitted the form.`)
})