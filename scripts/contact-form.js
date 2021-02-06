
// Function that handles sending an e-mail from the form
function sendEmailFromForm(e){
    e.preventDefault();
    const email = document.getElementById('e-mail').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    document.getElementById('e-mail').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('message').value = "";
    window.open(`mailto:pawelpilarczyk1@gmail.com?subject=Website_Contact&body=FROM:%0D%0A_MAIL_${email}%0D%0A_PHONE_${phone}__%0D%0AMESSAGE_${message}`);
}


const form = document.querySelector('#contact-form');

form.addEventListener('submit', function(e){
    sendEmailFromForm(e);
});
