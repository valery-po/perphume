$(document).ready(function(){
 gsap.from(".logo", {
   duration: 1,
   opacity: 0,
   y: -100
   
 })
  
   gsap.from("nav ul li", {
   duration: 1,
   opacity: 0,
   y: -100,
   stagger: .2
   
 })
  
   gsap.from(".content .text > *", {
   duration: 1,
   opacity: 0,
   y: 100,
   stagger: .6,
    delay: 1.6
   
 })
  
   gsap.from(".products .card", {
   duration: 1,
   opacity: 0,
   y: 100,
   stagger: .6,
   delay: 2
     
   })
     
   gsap.from(".content .img", {
   duration: 3,
   opacity: 0,
   x: 300,
   stagger: .6,
   delay: 3
   
 })
  
});