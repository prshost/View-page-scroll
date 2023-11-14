let s = document.querySelector('.scroll');
let scr = document.querySelector('.scroll span');
let span = document.querySelector('.pro span');

window.addEventListener('scroll', () => {
    let t = document.body.scrollHeight - window.innerHeight
    let s = (window.scrollY / t) * 100;
    span.style.height = s+'%';
    scr.textContent = `${Math.round(s)}%`
    
});


document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    s.style.left = x+'px';
    s.style.top = y+'px';
    console.log(e)
})

