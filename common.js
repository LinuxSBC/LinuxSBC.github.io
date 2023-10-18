function createCookie(key, value) {
    const d = new Date();
    d.setTime(d.getTime() + (30*24*60*1000))
    let expires = "expires="+ d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
}
function getCookie(key) {
    let name = key + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return "";
}

const theme = document.getElementsByTagName("link")[0];
if (isDarkTheme()) {
    theme.setAttribute("href", "/dark.css")
} else {
    theme.setAttribute("href", "/light.css")
}
function toggleTheme() {
    const theme = document.getElementsByTagName("link")[0];

    if (!isDarkTheme()) {
        theme.setAttribute("href", "/dark.css");
        createCookie("theme", "dark");
    } else if (isDarkTheme()) {
        theme.setAttribute("href", "/light.css");
        createCookie("theme", "light");
    }
}

function isThemeSet() {
    return getCookie("theme") === "dark" || getCookie("theme") === "light";
}

function isDarkTheme() {
    if (isThemeSet() && getCookie("theme") === "dark") {
        return true;
    } else if (isThemeSet() && getCookie("theme") === "light") {
        return false;
    } else return prefersDark();

    // const theme = document.getElementsByTagName("link")[0];
    // if (theme.getAttribute("href") === "/light.css") {
    //     return false;
    // } else if (theme.getAttribute("href") === "/dark.css") {
    //     return true;
    // } else return prefersDark();
}

function prefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}