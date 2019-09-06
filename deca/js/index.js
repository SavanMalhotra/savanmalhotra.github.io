


var b = true;
var rawNameValue = "";
var firstNameValue = "";
var lastNameValue = "";
var emailValue = "";
const btn = document.getElementById('button');
const nameId = document.getElementById('name');
const emailId = document.getElementById('email');
const msgId = document.getElementById('msg');

function input(type) {
  if(type === "name") {
    const id = document.getElementById(type);
    if((id.value.length >= 1) && (b)) {
        console.log(b);
      b = false;
      console.log(b);
      btn.style.visibility = "visible";
      btn.classList.add('animated', 'fadeInUp');
      function handleAnimationEnd() {
        btn.classList.remove('animated', 'fadeInUp');
        btn.removeEventListener('animationend', handleAnimationEnd);
        if (typeof callback === 'function') callback()
      }
      btn.addEventListener('animationend', handleAnimationEnd)
    }
    if(id.value.length == 0) {
      removeSubmit();
    }
  }
  if(type === "email") {
    const id = document.getElementById(type);
    if((id.value.length >= 1) && (b)) {
        console.log(b);
      b = false;
      console.log(b);
      btn.style.visibility = "visible";
      btn.classList.add('animated', 'fadeInUp');
      function handleAnimationEnd() {
        btn.classList.remove('animated', 'fadeInUp');
        btn.removeEventListener('animationend', handleAnimationEnd);
        if (typeof callback === 'function') callback()
      }
      btn.addEventListener('animationend', handleAnimationEnd)
    }
    if(id.value.length == 0) {
      removeSubmit();
    }
  }
  else {
    console.log("Error");
  }
}

function removeSubmit() {
  b = true;
  btn.classList.add('animated', 'fadeOutDown');
  setTimeout(function() {
    btn.style.visibility = "hidden";
  }, 470);
  function handleAnimationEnd() {
    btn.classList.remove('animated', 'fadeOutDown');
    btn.removeEventListener('animationend', handleAnimationEnd);
    if (typeof callback === 'function') callback()
  }
  btn.addEventListener('animationend', handleAnimationEnd);
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    nextFunction();
    console.log("works");
  }
});
btn.addEventListener("click", function(event) {
    event.preventDefault();
    nextFunction();
    console.log("works");
});

function nextFunction() {
  const id = document.querySelector('.active').id;
  console.log(id);
  if(id === "name") {
    const v = document.forms["form"]["name"].value;
    rawNameValue = v;
    console.log(v);
    const l = v.length;
    var s = "";
    first = false;
    for(var i=0; i<l; i++) {
      if(v.charAt(i) === ' ') {
        firstNameValue = s;
        s = "";
        first = true;
      }
      else if((i == l-1)&&(first == true)) {
        lastNameValue = s;
      }
      else {
        s = s + v.charAt(i);
      }
    }
    console.log(firstNameValue);
    console.log(lastNameValue);

    nameId.classList.add('animated', 'fadeOutLeft');
    removeSubmit();
    setTimeout(function() {
      nameId.classList.remove('active');
      emailId.classList.add('animated', 'fadeInRight', 'active');
    }, 470);
    function handleAnimationEndName() {
      nameId.classList.remove('animated', 'fadeOutLeft');
      nameId.removeEventListener('animationend', handleAnimationEndName);
      if (typeof callback === 'function') callback()
    }

    function handleAnimationEndEmail() {
      emailId.classList.remove('animated', 'fadeInRight');
      emailId.removeEventListener('animationend', handleAnimationEndEmail);
      if (typeof callback === 'function') callback()
    }
    nameId.addEventListener('animationend', handleAnimationEndName);
    emailId.addEventListener('animationend', handleAnimationEndEmail);
  }

  if(id === "email") {
    const v = document.forms["form"]["email"].value;
    emailValue = v;
    console.log(emailValue);
    showFireworks();
    emailId.classList.add('animated', 'fadeOutLeft');
    removeSubmit();
    setTimeout(function() {
      emailId.classList.remove('active');
      msgId.classList.add('animated', 'fadeInRight', 'active');
    }, 470);
    function handleAnimationEndEmailTwo() {
      emailId.classList.remove('animated', 'fadeOutLeft');
      emailId.removeEventListener('animationend', handleAnimationEndEmailTwo);
      if (typeof callback === 'function') callback();
    }
    function handleAnimationEndMsg() {
      msgId.classList.remove('animated', 'fadeInRight');
      msgId.removeEventListener('animationend', handleAnimationEndMsg);

      if (typeof callback === 'function') callback()
    }
    emailId.addEventListener('animationend', handleAnimationEndEmailTwo);
    msgId.addEventListener('animationend', handleAnimationEndMsg);
  }
}

function reset() {
  setTimeout(function() {
    location.reload();
  }, 2500);
}

function showFireworks() {
  var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/abcdefghijklmnopqrstuvwxyz1234567890/exec'

    $('#submit-form').on('click', function(e) {
      e.preventDefault();
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
      }).success(
        const div = document.createElement('div');
          const before = document.createElement('div');
          const after = document.createElement('div');
          div.classList.add('pyro');
          before.classList.add('before');
          after.classList.add('after');

          div.appendChild(before);
          div.appendChild(after);
          document.body.appendChild(div);
          reset();
      );
    })
  

}
