$(document).ready(function() {
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var submitButton = $("input[type=submit]");

  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function() {
        window.location.replace("/members");
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  submitButton.on("click", function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });
});
