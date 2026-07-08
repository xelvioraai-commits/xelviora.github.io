document.addEventListener('DOMContentLoaded',()=>{
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click',e=>{
const t=document.querySelector(a.getAttribute('href'));
if(!t)return;
e.preventDefault();
t.scrollIntoView({behavior:'smooth'});
});
});
const nav=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
if(window.scrollY>50)nav.classList.add('navbar-scrolled');
else nav.classList.remove('navbar-scrolled');
});
const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});
},{threshold:.15});
document.querySelectorAll('section').forEach(s=>{
if(s.id!=='hero'){s.classList.add('hidden');obs.observe(s);}
});
});
/* ==========================================
   Mouse Spotlight
========================================== */

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});
