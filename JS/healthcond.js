/*for navbar*/
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function toggleDescription(id, element) {
       const description = document.getElementById(id);
       const icon = element.querySelector('i');
       
       if (description.style.display === "none") {
           description.style.display = "block";
           icon.classList.add('rotate');
       } else {
           description.style.display = "none";
           icon.classList.remove('rotate');
       }
   }

   function showQuizResult() {
    const anxiety = document.querySelector('input[name="anxiety"]:checked').value;
    const focus = document.querySelector('input[name="focus"]:checked').value;
    const depression = document.querySelector('input[name="depression"]:checked').value;
    let result = '';

    if (anxiety === 'yes' || focus === 'yes' || depression === 'yes') {
        result = "It seems you may be experiencing some mental health challenges. Consider seeking support.";
    } else {
        result = "You're doing well! Keep maintaining your mental health.";
    }

    document.getElementById('quiz-result').innerText = result;
    
    // Display a popup message indicating the form has been submitted
    alert("Your quiz has been submitted.");

     // Reset the form after submission
     document.getElementById('quiz-form').reset();
}

