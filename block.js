let scs = document.querySelectorAll('script');
let regex = /.*document\|getElementById\|if\|window\|(.*)\|contentLinkInfo/g;
for(var i = 0; i < scs.length; i++) {
  var result = regex.exec(scs[i].text);
  console.log("adblock -> ", result);
}
