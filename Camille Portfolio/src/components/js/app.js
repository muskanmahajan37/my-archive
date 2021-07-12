const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

(function () {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


//   navbar

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.boxShadow = null;
        document.getElementById("navbar").style.transition = ".3s ease-in"
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    } else {
        document.getElementById("navbar").style.top = "-50px";
        document.getElementById("navbar").style.boxShadow = "0 5px 5px -5px #000"
    }
    prevScrollpos = currentScrollPos;
}


const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;

    document.querySelector(".contact-form").reset();

    if (name && email && message) {
        sendEmail(name, email, message);
    } else {
        return alert('Please provide a valid input')
    }
})


function sendEmail(name, email, message) {
    Email.send({
        SecureToken : "e3e6bf6b-ad09-4472-af06-efaacc4718d7",
        To : 'CamilleDimpas06@gmail.com',
        From : email,
        Subject : `Looking for VA - ${name}`,
        Body : `<b>Name:</b> ${name} <br/><b>Email:</b> ${email} NOTE: Please reply to this email. <br/><br/> <b>Message:</b> <br/>${message}`,
        Attachments : [
        {
            name : "smtpjs.png",
            path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
        }]
    }).then(
      message => alert("message sent")
    );
}

