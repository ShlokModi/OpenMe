document.getElementById('noBtn').onclick = function() {
  var box = document.querySelector('.proposal');
  box.style.display = 'none';
  alert("You can't say no! Try clicking 'Yes'.");
};

document.getElementById('yesBtn').onclick = function() {
  var responseText = document.getElementById('response');
  responseText.textContent = "Now text me when to go!";
};

document.getElementById('noBtn').onclick = function() {
    var box = document.querySelector('.proposal');
    box.style.display = 'none';
    alert("You can't say no! Try clicking 'Yes'.");
    location.reload(); // This will reload the page after the alert is closed
  };
  
  document.getElementById('yesBtn').onclick = function() {
    var responseText = document.getElementById('response');
    responseText.textContent = "Now text me on Insta when to!";
  };
  