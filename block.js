/// block.js
var scs = document.querySelectorAll('script');
console.log("adblock -> ", scs);
var regex = /.*`(.*)`/g;
for(var i = 0; i < scs.length; i++) {
  var result = regex.exec(scs[i].text);
  if (result !== null){
    console.log("adblock -> ", result[1]);
    document.getElementById("contentLinkInfo").classList.add("d-none");
    document.getElementById("contentLink").innerHTML = atob(result[1]);
  }
}
