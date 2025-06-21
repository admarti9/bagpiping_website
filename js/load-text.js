// Load about text
fetch('content/about_text.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('about-text').innerText = data;
    });

// Load welcome message
fetch('content/welcome_message.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('welcome_message').innerText = data;
    });    