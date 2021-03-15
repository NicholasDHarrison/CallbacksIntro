

let showDog= function(){
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json()) 
  .then(data => {
    let img = document.createElement('img');
    img.src = data.message;
    img.className = "dog";
    document.body.append(img);
  }).catch(err => {console.log(response.status)});
}









//------------------------------------------------------------------------------------

// styling


var form = document.querySelector('form')
form.onsubmit = function (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://127.0.0.1:5500/",
    body: name,
    method: "POST"
  }, function (err, response, body) {
    var statusMessage = document.querySelector('.status')
    if (err) return statusMessage.value = err
    statusMessage.value = body
  })
}


var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}