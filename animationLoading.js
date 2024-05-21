document.addEventListener("DOMContentLoaded", function() {
    let width = 0;
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('loading-screen').style.opacity = 0;
            setTimeout(function() {
                document.getElementById('loading-screen').style.display = 'none';
            }, 500);
        } else {
            width++;
            document.getElementById('loading-bar').style.width = width + '%';
            document.getElementById('loading-text').innerText = width + '%';
        }
    }, 10); 
});
