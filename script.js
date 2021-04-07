document.querySelector(".new_quote").addEventListener('click', generatequote);

function generatequote() {
    let quoteDisplay = document.querySelector('.quote');
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => { 
            quoteDisplay.innerHTML = `<p> ${data.content} <br> - ${data.author} </p>`;
    })
}

const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});