/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

function end() {
    document.getElementById("just-kill-it").classList.add('end-text');
}
// function end() {
//     document.body.classList.add("shake");
//     setTimeout(document.body.classList.remove("shake"), 3000);
//     setTimeout(document.body.classList.add("shake"), 3000);
// }

window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            // if (entry.intersectionRatio > 0) {
            //     document.querySelector(`nav li a[href="#${id}"]`).classList.add('nav-active');
            // } else {
            //     document.querySelector(`nav li a[href="#${id}"]`).classList.remove('nav-active');
            // }
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).id= "nav-active" ;
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).id= "" ;
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
    
});