/*

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // change the theme of the website
    document.body.classList.toggle('dark')
});

*/


const themes = {
    light: {
        background: 'var(--cor-light: #fff)' ,
        text: 'var( --cor-light-text: #2e2e2e)',
},

    dark: {
        background: 'var(--cor-dark: #2e2e2e)',
        text: 'var( --cor-dark-text: #e9e9e9)',
    }
};

function setTheme(newTheme) {
    const themeColors = themes[newTheme];

    Object.keys(themeColors).map(function(key) {
        html.style.setProperty(`--${key}`, themeColors[key]);
    });
}

const darkModeToggle = document.querySelector('input[name=theme]');
darkModeToggle.addEventListener('change', function([target]) {
    setTheme(target.checked ? 'dark' : 'light');
});

function setTheme(newTheme) {
    const themeColors = themes [newTheme];

    Object.keys(themeColors).map(function(key) {
        html.style.setProperty(`--${key}`, themeColors[key]);
    });
    localStorage.setItem('theme', newTheme);
}

const theme = localStorage.getItem('theme');
if (theme) {
    setTheme(theme)
}