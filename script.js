document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("burger").addEventListener("click", ()=>{
        document.querySelector("header").classList.toggle("open");
    })
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Glavnaja').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollBy({ top: 0, behavior: 'smooth' }); 
    });

    document.getElementById('Achievements').addEventListener('click', function(event) {
        event.preventDefault(); 
        window.scrollBy({ top: 1250, behavior: 'smooth' }); 
    });

    document.getElementById('Technologies').addEventListener('click', function(event) {
        event.preventDefault(); 
        window.scrollBy({ top: 2300, behavior: 'smooth' }); 
    });

    document.getElementById('review').addEventListener('click', function(event) {
        event.preventDefault(); 
        window.scrollBy({ top: 5100, behavior: 'smooth' }); 
    });

    document.getElementById('contacts').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollBy({ top: 6400, behavior: 'smooth' }); 
    });

    document.getElementById('application').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollBy({ top: 4050, behavior: 'smooth' }); 
    });
});


