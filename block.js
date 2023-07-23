/// block.js
window.addEventListener("DOMContentLoaded", (event) => {
    var scs = document.querySelectorAll('script');
    var regex = /.*`(.*)`/g;
    for (var i = 0; i < scs.length; i++) {
        var result = regex.exec(scs[i].text);
        if (result !== null) {
            document.getElementById("contentLinkInfo").classList.add("d-none");
            document.getElementById("contentLink").innerHTML = atob(result[1]);
        }
    }
});
