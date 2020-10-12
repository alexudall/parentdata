/*eslint-env browser*/


document.getElementById('totalbutton').addEventListener('click', () => {
  document.getElementById('total').style.opacity = 1;
  document.getElementById('female').style.opacity = 0;
  document.getElementById('male').style.opacity = 0;
  
});

document.getElementById('malebutton').addEventListener('click', () => {
  document.getElementById('male').style.opacity = 1;
  document.getElementById('female').style.opacity = 0;
  document.getElementById('total').style.opacity = 0;
});

document.getElementById('femalebutton').addEventListener('click', () => {
  document.getElementById('female').style.opacity = 1;
  document.getElementById('male').style.opacity = 0;
  document.getElementById('total').style.opacity = 0;
});


