function animatedText(){document.querySelectorAll('.animated-text').forEach(function(elem){
    let spanParent  = document.createElement('span');
    let spanChild = document.createElement('span');

    spanChild.classList.add('child');
    spanParent.classList.add('parent'); 

    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);

    elem.innerHTML  = '';
    elem.appendChild(spanParent); 
})
}

animatedText();
let tl = gsap.timeline();

tl.from('.child span', {
    x:100,
    duration:1.4,
    
    stagger:.2,
    ease : Power3.easeInOut,
})
.to('.parent .child', {
    y:'-100%',
    duration:1,
    ease : Circ.easeInOut,
})
.to('.fullscreen',{
    height:0,
    duration:1.3,
    ease : Expo.easeInOut
})
.to('.animated-element',{
    height:"100%",
    duration:2,
    delay:-2.5,
    ease : Expo.easeInOut
})
.to('.main-content',{
    height:"100%",
    duration:2,
    delay:-2.1,
    ease : Expo.easeInOut
})
