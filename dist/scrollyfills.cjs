if(!("onscrollend"in window)){var e=function(e,t,n){var r=e[t];e[t]=function(){var e=Array.prototype.slice.apply(arguments,[0]);r.apply(this,e),e.unshift(r),n.apply(this,e)}},t=function(e,t,n,l){if("scroll"==t||"scrollend"==t){var i=this,s=o.get(i);if(void 0===s){var c=0;s={scrollListener:function(e){clearTimeout(c),c=setTimeout(function(){i.dispatchEvent(r),c=0},100)},listeners:0},e.apply(i,["scroll",s.scrollListener]),o.set(i,s)}s.listeners++}},n=function(e,t,n){if("scroll"==t||"scrollend"==t){var r=this,l=o.get(r);void 0!==l&&(l[t]--,--l.listeners>0||(e.apply(r,["scroll",l.scrollListener]),o.delete(r)))}},r=new Event("scrollend"),o=new WeakMap;e(Element.prototype,"addEventListener",t),e(window,"addEventListener",t),e(document,"addEventListener",t),e(Element.prototype,"removeEventListener",n),e(window,"removeEventListener",n),e(document,"removeEventListener",n)}exports.scrollend={__proto__:null};
//# sourceMappingURL=scrollyfills.cjs.map
