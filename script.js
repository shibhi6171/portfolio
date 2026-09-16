// Highlight current nav link
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path || (path === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });
})();

// Typewriter effect (home page only)
const typedEl = document.getElementById('typed');
if(typedEl){
  const roles = ["Embedded Systems Engineer.", "IoT Developer.", "MERN Stack Developer.", "Patent Holder."];
  let ri = 0, ci = 0, deleting = false;
  function tick(){
    const word = roles[ri];
    if(!deleting){
      ci++;
      typedEl.textContent = word.slice(0, ci);
      if(ci === word.length){ deleting = true; setTimeout(tick, 1400); return; }
    } else {
      ci--;
      typedEl.textContent = word.slice(0, ci);
      if(ci === 0){ deleting = false; ri = (ri+1) % roles.length; }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('show'); } });
}, {threshold:0.1});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
