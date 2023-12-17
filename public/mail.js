const sendBtn = document.getElementById('send-btn');
 

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("sent");

    var name = document.getElementById('name') ;
    var email = document.getElementById('email');
    var massage = document.getElementById('message');
     

    

    Email.send({
        SecureToken : "42bd8b08-7a9d-4a5f-8949-78ef26c84673",
        To : "ablootia1993@gmail.com",
        From : "ablootia1993@gmail.com",
        Subject : "Portfolio massage from HR",
        Body : `name: ${name.value} <br/> email: ${email.value} <br/> massage: ${massage.value}`
    }).then(
      message => alert(message)
      
    );
    

 

})