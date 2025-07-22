// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".save1"); // Select the "Go to Course" button

  button.addEventListener("click", function () {
    // Get values from the input fields
    const inputs = document.querySelectorAll("input");
    const name = inputs[0].value.trim(); // Name input
    const age = inputs[1].value.trim(); // Age input
    const email = inputs[4].value.trim(); // Email input

    // Get selected course
    const course = document.querySelector(".course3").value;

    // Get selected gender
    const genderRadios = document.getElementsByName("Gender");
    let gender = "";
    for (let radio of genderRadios) {
      if (radio.checked) {
        gender = radio.nextSibling.textContent.trim();
      }
    }

    // Validation (optional)
    if (!name || !age || !gender || !email) {
      alert("Please fill out all fields before continuing.");
      return;
    }

    // Create and display the message
    const message = document.createElement("div");
    message.innerText = `🔥 Go and study bro, ${name}! Take your ${course} course seriously! 💪`;
    message.style.color = "green";
    message.style.fontWeight = "bold";
    message.style.marginTop = "20px";
    message.style.fontSize = "20px";

    document.querySelector(".save").appendChild(message);

    // Disable the button after click (optional)
    button.disabled = true;
    button.innerText = "Motivation Sent ✅";
  });
});
