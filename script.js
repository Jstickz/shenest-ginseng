// ================== SHOW MENU ========================= // 
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')



// ============ FORM SYBMIT ======================== //
// const form = document.querySelector('form');



function sendEmail() {

        var fullName = document.getElementById("Name").value;
        var phoneNumber = document.getElementById("Phone").value;
        var email = document.getElementById("Email").value;
        var pack = document.getElementById("Pack").value;
        var ready = document.getElementById("Ready").value;
        var address = document.getElementById("Address").value;
        var state = document.getElementById("State").value;

        var bodyMessage = "Full Name: " + fullName + "<br> Email: " + email + "<br> Phone Number: "  + phoneNumber + "<br> Package: " + pack + "<br> Ready: " + ready + "<br> Address: " + address + "<br>  State: " + state ;

        // console.log(bodyMessage);

    Email.send({
        SecureToken : "23e6a165-3162-4645-9af6-e5a887fda43b",
        To : 'shenesthealthyliving@gmail.com',
        From : "shenesthealthyliving@gmail.com",
        Subject : "New Form Submission From Shenest",
        Body : bodyMessage
    }).then(
         message => {
                if (message === "OK") {
                    swal("Successful!", "Request Submitted Successfully", "success");
                } else {
                    swal("Error!", "Try Again!", "error");
                }
            }
        );
}

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();
// });


// "Full Name: " + document.getElementById("Name").value + 
//                 "<br> Phone Number: " + document.getElementById("Phone").value + 
//                 "<br> Email: " + document.getElementById("Email").value +
//                 "<br> Package: " + document.getElementById("Pack").value +
//                 "<br> Ready: " + document.getElementById("Ready").value +
//                 "<br> Address: " + document.getElementById("Address").value +
//                 "<br> State: " + document.getElementById("State").value



// function submitForm() {
//         // Get form data
//         var formData = {
//             name: document.getElementById("Name").value,
//             phone: document.getElementById("Phone").value,
//             email: document.getElementById("Email").value,
//             pack: document.getElementById("Pack").value,
//             ready: document.getElementById("Ready").value,
//             address: document.getElementById("Address").value,
//             state: document.getElementById("State").value
//         };

    //     // Use SMTP.js to send an email
    //     Email.send({
    //         Host : "smtp.elasticemail.com",
    //         Username : "shenesthealthyliving@gmail.com",
    //         Password : "17ACF48CD01B830E9C876544B24D9E5D2058",
    //         To : 'shenesthealthyliving@gmail.com',
    //         From : "shenesthealthyliving@gmail.com",
    //         Subject : "New Form Submission From Shenest",
    //         Body: JSON.stringify(formData)
    //     }).then(
    //         message => {
    //             if (message === "OK") {
    //                 alert("Form submitted successfully!");
    //             } else {
    //                 alert("Failed to submit form. Please try again.");
    //             }
    //         }
    //     );
    // }