const cookieValue = document.cookie;

document.getElementById('cookie').textContent = cookieValue;

function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    document.cookie = `${name}=${value};expires=${expirationDate.toUTCString()};path=/`;
}
function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return '';
}
function checkCookie() {
    let username = getCookie('username');
    if (username !== '') {
        alert(`Welcome back, ${username}!`);
    } else {
        username = prompt('Please enter your name:', '');
        if (username !== '' && username !== null) {
            setCookie('username', username, 365);
        }
    }
}
checkCookie();
