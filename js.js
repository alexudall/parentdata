/*eslint-env browser*/

// grab all ellipses
let totalellipses = document.querySelectorAll('#total ellipse');
let maleellipses = document.querySelectorAll('#male ellipse');
let femaleellipses = document.querySelectorAll('#female ellipse');

// hid all of the ellipses

for (let i=0; i < totalellipses.length; i++) {
    gsap.to(totalellipses[i], 0, { scale:0 })
}
for (let i=0; i < maleellipses.length; i++) {
    gsap.to(maleellipses[i], 0, { scale:0 })
}
for (let i=0; i < femaleellipses.length; i++) {
    gsap.to(femaleellipses[i], 0, { scale:0 })
}

// code for total button 
document.getElementById('totalbutton').addEventListener('click', () => {
  // hide all males
  for (let i=0; i < maleellipses.length; i++) {
    gsap.to(maleellipses[i], 0, { scale:0 })
  }
  // hide all females
  for (let i=0; i < femaleellipses.length; i++) {
    gsap.to(femaleellipses[i], 0, { scale:0 })
  }
  // show all total ellipses
  for (let i=0; i < totalellipses.length; i++) {
    gsap.to(totalellipses[i], 1, { 
      scale: 1, 
      transformOrigin: 'center center',
      ease: "elastic.out(1, 0.3)"
    });
  }
})

document.getElementById('malebutton').addEventListener('click', () => {
  // hide all total
  for (let i=0; i < totalellipses.length; i++) {
    gsap.to(totalellipses[i], 0, { scale:0 })
  }
     
  // hide all females
  for (let i=0; i < femaleellipses.length; i++) {
    gsap.to(femaleellipses[i], 0, { scale:0 })
  }  
    
  // show all male ellipses
  for (let i=0; i < maleellipses.length; i++) {
    gsap.to(maleellipses[i], 1, { 
      scale: 1, 
      transformOrigin: 'center center',
      ease: "elastic.out(1, 0.3)"
    });
  }
})

document.getElementById('femalebutton').addEventListener('click', () => {
  // hide all total
  for (let i=0; i < totalellipses.length; i++) {
    gsap.to(totalellipses[i], 0, { scale:0 })
  }
    
  // hide all males
  for (let i=0; i < maleellipses.length; i++) {
    gsap.to(maleellipses[i], 0, { scale:0 })
  } 
    
  // show all female ellipses
  for (let i=0; i < femaleellipses.length; i++) {
    gsap.to(femaleellipses[i], 1, { 
      scale: 1, 
      transformOrigin: 'center center',
      ease: "elastic.out(1, 0.3)"
    });
  }
})
