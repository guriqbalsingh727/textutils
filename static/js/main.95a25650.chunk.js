(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(15);function s(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#0c0927"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,style:{backgroundColor:"dark"===e.mode?"#0c0927":"white",color:"dark"===e.mode?"white":"#0c0927"},onChange:function(e){c(e.target.value)},id:"box",rows:"8"})),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Converted to UpperCase!","success")}},"Convert to UpperCase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-secondary mx-1 my-1",onClick:function(){var t=r;t=r===r.toUpperCase()?r.charAt(0).toUpperCase()+r.slice(1).toLowerCase():r.charAt(0).toUpperCase()+r.slice(1),c(t),e.showAlert("First letter capitalized!","success")}},"Capitalize First Letter"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-success mx-1 my-1",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to LowerCase!","success")}},"Convert to LowerCase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-warning mx-1 my-1",onClick:function(){var t=r.split("").map(function(e,t){return t%2===0?e.toUpperCase():e}).join("");c(t),e.showAlert("Capitalized Alternating Letters!","success")}},"Capitalize AlTeRnAtInG Letters"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-info mx-1 my-1",onClick:function(){var t=r.split("").map(function(e,t){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()}).join("");c(t),e.showAlert("Reversed the case!","success")}},"Reverse Case"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-secondary my-1 mx-1 my-1",onClick:function(){var t=r.split(/[ ]+/);c(t.join(" ")),e.showAlert("Cleared extra spaces!","success")}},"Remove extra space"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-danger my-1 mx-4 my-1",onClick:function(){c(""),e.showAlert("Cleared text!","success")}},"Clear text")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#0c0927"}},l.a.createElement("h2",null,"Your text summary here:"),l.a.createElement("p",null,"No. of words : ",r.split(/\s+/).filter(function(e){return 0!=e.length}).length," words"),l.a.createElement("p",null,"No. of characters : ",r.length," characters(with spaces) and ",r.split(" ").join("").length," characters(without spaces)."),l.a.createElement("p",null,"The text can be read in ",.008*r.split(" ").filter(function(e){return 0!=e.length}).length," minutes."),l.a.createElement("p",null,"No. of vowels and consonants: ",r.match(/[aeiou]/gi)?r.match(/[aeiou]/gi).length:0," vowels and ",r.match(/[bcdfghjklmnpqrstvwxyz]/gi)?r.match(/[bcdfghjklmnpqrstvwxyz]/gi).length:0," consonants")))}function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch","aria-checked":"light"!==e.mode,id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark Mode")))))}i.defaultProps={title:"enter title here",about:"About",home:"enter home here"};var m=function(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "),": ",e.alert.msg))};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],h=u[1],b=function(e,t){h({msg:e,type:t}),setTimeout(function(){h(null)},1800)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:"Formatext",home:"Home",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#0c0927",b("Dark Mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",b("Dark Mode has been disabled","success"))}}),l.a.createElement(m,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(s,{showAlert:b,heading:"Enter the text to analyze",mode:a})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.95a25650.chunk.js.map