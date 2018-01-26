/*! (c) Andrea Giammarchi (ISC) */!function(t,e){"use strict";function n(t){return t.head||t[l]("head")[0]}function i(t,e){return{get:function(){return t()[e]},set:function(n){t()[e]=n}}}function o(t,e,n){var i=e.offsetWidth,o=e.offsetHeight;this.width!==i&&(t.width=(this.width=i)+"px"),this.height!==o&&(t.height=(this.height=o)+"px"),n()}function a(){for(var t=0,e=this.length;t<e;t++){var n=this[t].textContent;/:host/.test(n)&&(this[t].textContent=n.replace(/:host/g,"body"))}}function r(){return"#shadow-root:"+m+++"."+Math.random()*new Date}function s(t){function e(){clearTimeout(i),i=setTimeout(n)}function n(){i=0,t()}var i=0;this.observe=function(t){t[c]("DOMSubtreeModified",e)}}function d(t,d){function m(){v=t.contentDocument;var e=n(v);e.appendChild(v.createElement("style")).textContent="html,body{"+f+"}*{margin:0}"+p,e.appendChild(v.createElement("script")).textContent=["(function(A,G){","for(var F,i=0,l=A.length;i<l;i++){",'if(A[i].id==="'+t.id+'")return A[i].setup(G)}',"}(parent.document."+l+'("iframe")))'].join("\n");var i;if(g!==v.body){for(;i=g.firstChild;)v.body.appendChild(i);g=v.body}var r=o.bind({width:0,height:0},t.style,g,a.bind(g[l]("style")));new y(r).observe(g,{childList:!0,attributes:!0,subtree:!0}),r()}var b={mode:{value:d.mode}},v=t.contentDocument,w=t.contentWindow,y=w.MutationObserver||s,g=v.body||v.createElement("body"),E=v.createDocumentFragment(),x=function(){return g},C=function(){return v},A=function(){return E};for(var k in E)if("function"==typeof E[k]&&k in g)b[k]={value:g[k].bind(g)};else switch(k){case"nodeName":case"nodeType":case"tagName":b[k]=i(A,k);break;case"activeElement":b[k]=i(C,k);break;default:b[k]=i(x,k)}b.innerHTML=i(x,"innerHTML"),b.textContent=i(x,"textContent"),Object.defineProperties(this,b),t.id=r(),t.listeners=[];var D=(w.Element||w.Node).prototype,T=D[c],M=D[h];t.setup=function(){var n=v.documentElement;D.attachShadow=e.attachShadow,D[c]=function(e,i,o){var a=this[t.id]||(this[t.id]={s:[],d:[]}),r=a.s.indexOf(i);r<0&&(r=a.s.push(i)-1,a.d[r]=function(e){var n=t.ownerDocument.createEvent("Event");n.initEvent(e.type,e.bubbles,e.cancelable);for(var i in e)try{n[i]=e[i]}catch(o){}t.parentNode[u](n)},T.call(this,e,i,o),T.call(n,e,a.d[r],o))},D[h]=function(e,i,o){var a=this[t.id],r=a?a.s.indexOf(i):-1;r>-1&&(M.call(this,e,i,o),M.call(n,e,a.d[r],o),a.s.splice(r,1),a.d.splice(r,1))};for(var i,o=0;o<t.listeners.length;o++)i=t.listeners[o],D[i.k].apply(i.t,i.a)},"complete"!=v.readyState?(t.onload=m,D[c]=function(){t.listeners.push({k:c,t:this,a:arguments})},D[h]=function(){t.listeners.push({k:h,t:this,a:arguments})},D[u]=function(){t.listeners.push({k:u,t:this,a:arguments})}):m()}/*! (c) Andrea Giammarchi - @WebReflection (ISC) */
if(!("attachShadow"in e)){var c="addEventListener",h="removeEventListener",u="dispatchEvent",l="getElementsByTagName",f=["display:inline-block","box-sizing:border-box","margin:0","padding:0","background:transparent","visibility:visible","width:100%","height:auto"].join(";"),p="*[data-attachshadow]{padding:0 !important}",m=0;n(document).insertBefore(document.createElement("style"),n(document).firstChild).textContent=p,e.attachShadow=function(t){var e=this.ownerDocument.createElement("iframe");this.setAttribute("data-attachshadow",""),e.setAttribute("scrolling","no"),e.setAttribute("allowtransparency","yes"),e.setAttribute("allowfullscreen","yes"),e.setAttribute("frameborder","0"),e.style.cssText=f;var n=new d(this.appendChild(e),t);return"open"===t.mode&&(this.shadowRoot=n),n}}}(0,(window.Element||window.Node).prototype);
