!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).scrollyfills={})}(this,function(e){var n=new Event("scrollend");e.scrollend=function(e){e.addEventListener("scroll",function(){clearTimeout(e.scrollEndTimer),e.scrollEndTimer=setTimeout(function(){e.dispatchEvent(n)},100)})}});
//# sourceMappingURL=scrollyfills.umd.js.map
