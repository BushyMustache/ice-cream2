alert("hello Ice cream!");
document.getElementById("ice-cream-form").onsubmit = () => {

clearerrors();

let isValid= true;




//validate  name
let firstName = document.getElementById("name").value.trim();
if (!firstName) {
    document.getElementById("name-error").style.display = "block";
    isValid = false;

}
//validate email
let email = document.getElementById("email").value.trim();
if(!email) {
    document.getElementById("email-error").style.display = "block";
    isValid = false;
}
//validate cone type
let cone = document.getElementsByID("sugar-cone","waffle-cone", "cup").value.trim();
if(!cone){
    document.getElementsById("cone-error").style.display = "block";
    isValid = false;
}
//validate flavor 
let flavor = document.getElementById("flavor").value.trim();
if(!flavor) {
    document.getElementById("flavor-error").style.display = "block";
    isValid = false;
}




form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const flavor = document.getElementById("flavor").value;
    

});





};

function clearerrors() {
    let errors = document.getElementsByClassName("error");
    for (let error of errors) {
        error.style.display = "none";
    };
}
