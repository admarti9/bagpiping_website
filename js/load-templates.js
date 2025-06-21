// Load the header
fetch('templates/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('site-header').innerHTML = data;
    });

// Load the footer
fetch('templates/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('site-footer').innerHTML = data;
    });    