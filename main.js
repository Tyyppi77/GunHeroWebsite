function navigationMenu() {
    var x = document.getElementById("topNavigation");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}