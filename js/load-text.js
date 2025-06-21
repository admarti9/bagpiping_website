// Load about text
fetch('content/about_text.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('about-text').innerText = data;
    });