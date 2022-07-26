pwShowHide = document.querySelectorAll(".eye-icon");
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

function seterror(id, error) {}

function validateForm1() {
  var a = document.getElementById("password").value;
  var e = document.getElementById("email1").value;
  if (a.length < 6) {
    document.getElementById("message").innerHTML =
      "** Password length must be 6 to 12 alphanumeric ";
    return false;
  }
  if (a.length > 12) {
    document.getElementById("message").innerHTML =
      "** Password length must be 6 to 12 alphanumeric ";
    return false;
  }

  if (e.indexOf("@") <= 2) {
    document.getElementById("error1").innerHTML = "** invalid @ position";
    return false;
  }

  if (e.charAt(e.length - 4) != "." && e.charAt(e.length - 3) != ".") {
    document.getElementById("error1").innerHTML = "** invalid '.' position";
    return false;
  }
}

function validateForm2() {
  var a = document.getElementById("passwords").value;
  var b = document.getElementById("passwordss").value;
  var c = document.getElementById("username").value;
  var d = document.getElementById("email2").value;
  if (a.length < 6) {
    document.getElementById("messages").innerHTML =
      "** Password length must be 6 to 12 alphanumeric ";
    return false;
  }
  if (a.length > 12) {
    document.getElementById("messages").innerHTML =
      "** Password length must be 6 to 12 alphanumeric ";
    return false;
  }
  if (a != b) {
    document.getElementById("messagess").innerHTML =
      "** Password doesn't match ";
    return false;
  }

  if (c.length < 5) {
    document.getElementById("msg").innerHTML =
      "** Username must be unique & between 5 to 10 alphanumeric ";
    return false;
  }
  if (a.length > 10) {
    document.getElementById("msg").innerHTML =
      "** Username must be unique & between 5 to 10 alphanumeric ";
    return false;
  }

  if (d.indexOf("@") <= 2) {
    document.getElementById("error2").innerHTML = "** invalid @ position";
    return false;
  }

  if (d.charAt(d.length - 4) != "." && d.charAt(d.length - 3) != ".") {
    document.getElementById("error2").innerHTML = "** invalid '.' position";
    return false;
  }
}
