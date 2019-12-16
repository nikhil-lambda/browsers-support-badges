(this["webpackJsonpbrowsers-support-badges"]=this["webpackJsonpbrowsers-support-badges"]||[]).push([[0],{27:function(e,a,t){e.exports=t(37)},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(1),o=t.n(s),i=t(6),c=t(7),l=t(9),m=t(8),d=t(10),u=t(2),b=t(21),p=t.n(b),h=t(22),v=t.n(h),f=t(23),E=t(12),w=t(24),g=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).state={isCopied:null},e}return Object(d.a)(a,e),Object(c.a)(a,[{key:"createMDCode",value:function(){for(var e=this.props.browsers,a=0,t="";a<e.length;a++)e[a].support&&(t+="| --------- ");return"## Browsers support\n\n"+e.map((function(e){return e.support?'| [<img src="'+e.img+'" alt="'+e.name+'" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>'+e.name+" ":null})).join("")+"|\n"+t+"|\n"+e.map((function(e){if(e.support){if("IE / Edge"===e.name){var a=[];for(var t in e.version)e.version[t]&&a.push(t);return"| "+a.join(", ")}return 1===e.version?"| last version":"| last "+e.version+" versions"}return null})).join("")}},{key:"createMDPreview",value:function(){var e=this.createMDCode();return p()(e,{gfm:!0,tables:!0})}},{key:"componentDidMount",value:function(){var e=this,a=o.a.findDOMNode(this.refs.mdCopyBtn),t=o.a.findDOMNode(this.refs.mdCode);new v.a(a,{target:function(){return e.setState({isCopied:!0}),setTimeout((function(){t.blur()}),0),setTimeout((function(){e.setState({isCopied:!1})}),2e3),t}}),o.a.findDOMNode(this.refs.mdPreview).innerHTML=this.createMDPreview(),o.a.findDOMNode(this.refs.mdCode).value=this.createMDCode()}},{key:"componentDidUpdate",value:function(){o.a.findDOMNode(this.refs.mdPreview).innerHTML=this.createMDPreview(),o.a.findDOMNode(this.refs.mdCode).value=this.createMDCode()}},{key:"render",value:function(){return r.a.createElement("div",{className:"markdown"},r.a.createElement("div",{className:"markdown-body__wrap"},r.a.createElement("h3",{className:"markdown-body__title"},r.a.createElement(f.a,{className:"icon icon--book"})," README.md"),r.a.createElement("div",{className:"markdown-body"},r.a.createElement("div",{ref:"mdPreview"}),r.a.createElement("div",{className:"tip"},"Click to collect code and paste it into yours README.md")),r.a.createElement("span",{className:"pointer pointer--inverse"},"\u2934")),r.a.createElement("div",{className:"markdown-code__wrap"},r.a.createElement("button",{className:"btn btn-copy btn--text",ref:"mdCopyBtn",title:"Click to copy to clipboard."},this.state.isCopied?r.a.createElement(n.Fragment,null,r.a.createElement(E.a,{className:"icon--copy"}),"Copied"):r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{className:"icon--copy"}),"Copy")),r.a.createElement("textarea",{id:"mdCode",className:"markdown-code",ref:"mdCode",readOnly:!0})))}}]),a}(r.a.Component),_=t(13),k=t(15),N=t(25),y=t(26),x=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"48x48";return"https://raw.githubusercontent.com/alrra/browser-logos/master/src/".concat(e,"/").concat(e,"_").concat(a,".png")},C=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).state={browsers:[{name:"IE / Edge",version:{IE7:!1,IE8:!1,IE9:!1,IE10:!1,IE11:!0,Edge:!0},img:x("edge"),support:!0},{name:"Firefox",version:2,img:x("firefox"),support:!0},{name:"Chrome",version:2,img:x("chrome"),support:!0},{name:"Safari",version:2,img:x("safari"),support:!0},{name:"iOS Safari",version:2,img:x("safari-ios"),support:!0},{name:"Samsung",version:2,img:x("samsung-internet"),support:!0},{name:"Opera",version:2,img:x("opera"),support:!0},{name:"Opera Mini",version:2,img:x("opera-mini"),support:!1},{name:"Vivaldi",version:2,img:x("vivaldi"),support:!1},{name:"Yandex",version:2,img:x("yandex"),support:!1},{name:"Electron",version:2,img:x("electron"),support:!1}]},e.handleBrowserSupportBound=e.handleBrowserSupport.bind(Object(u.a)(e)),e.handleVersionChangeBound=e.handleVersionChange.bind(Object(u.a)(e)),e.handleVersionVaryBound=e.handleVersionVary.bind(Object(u.a)(e)),e.handleIEVersionsChangeBound=e.handleIEVersionsChange.bind(Object(u.a)(e)),e}return Object(d.a)(a,e),Object(c.a)(a,[{key:"isLastActive",value:function(e,a){var t=0;if(e.forEach((function(e){e.support&&t++})),1===t&&e[a].support)return!0}},{key:"handleVersionChange",value:function(e){var a=e.target,t=this.state.browsers;t[a.dataset.id].version=a.value,this.setState({browsers:t})}},{key:"handleVersionVary",value:function(e){var a=e.target,t=a.dataset.id,n=this.state.browsers,r=o.a.findDOMNode(this.refs["btnDown"+t]),s=o.a.findDOMNode(this.refs["btnUp"+t]);a===s?(1===n[t].version&&(r.disabled=!1),n[t].version<10&&n[t].version++,10===n[t].version&&(a.disabled=!0)):(10===n[t].version&&(s.disabled=!1),n[t].version>1&&n[t].version--,1===n[t].version&&(a.disabled=!0)),this.setState({browsers:n})}},{key:"handleBrowserSupport",value:function(e){var a=e.target.dataset.index,t=this.state.browsers;if(this.isLastActive(t,a))return null;if(t[a].support=!t[a].support,"IE / Edge"===t[a].name)for(var n in t[a].version)t[a].support?"IE7"!==n&&"IE8"!==n&&"IE9"!==n&&"IE10"!==n&&(t[a].version[n]=!0):t[a].version[n]=!1;this.setState({browsers:t})}},{key:"handleIEVersionsChange",value:function(e){var a=e.target.dataset.key,t=this.state.browsers,n=0;for(var r in t[0].version[a]=!t[0].version[a],t[0].version)t[0].version[r]&&n++;t[0].support=0!==n,this.setState({browsers:t})}},{key:"render",value:function(){var e=this,a=this.state.browsers;return r.a.createElement("div",{className:"browsers__wrap"},r.a.createElement("h1",{className:"main__title"},"Browsers support for README.md",r.a.createElement("span",{className:"main__sub-title"},r.a.createElement(_.a,{className:"icon icon--markGithub"}),r.a.createElement("span",{className:"octicon octicon-mark-github"})," GitHub Flavored Markdown")),r.a.createElement("div",{className:"browser__wrap"},a.map((function(a,t){return r.a.createElement("div",{className:"browser",key:a.name,disabled:!a.support},r.a.createElement("div",{className:"browser__heading"},r.a.createElement("input",{id:"check"+a.name,className:"form__checkbox browser__checkbox","data-index":t,checked:a.support,onChange:e.handleBrowserSupportBound,type:"checkbox"}),r.a.createElement("label",{className:"browser__checkbox-label browser__title",htmlFor:"check"+a.name},r.a.createElement(E.a,{className:"icon icon--check browser__checkbox-icon"}),r.a.createElement(k.a,{className:"icon icon--cross browser__checkbox-icon"}),r.a.createElement("span",{className:"browser__title-text"},a.name))),"IE / Edge"===a.name?r.a.createElement("div",{className:"browser__control browser__control--ie"},Object.keys(a.version).map((function(e){return r.a.createElement("div",{className:"browser__control-ie-version",key:e},r.a.createElement("input",{id:"check"+e,className:"form__checkbox browser__checkbox","data-key":e,checked:a.version[e],onChange:this.handleIEVersionsChangeBound,type:"checkbox"}),r.a.createElement("label",{className:"browser__checkbox-label browser__checkbox-label--small",htmlFor:"check"+e},r.a.createElement(E.a,{className:"icon icon--check browser__checkbox-icon"}),r.a.createElement(k.a,{className:"icon icon--cross browser__checkbox-icon"}),e))}),e)):r.a.createElement("div",{className:"browser__control"},"last",r.a.createElement("input",{className:"form__input form__input--text form__input--no-spinners","data-id":t,onChange:e.handleVersionChangeBound,value:a.version,max:"10",type:"number"}),r.a.createElement("button",{className:"btn btn--text btn-up","data-id":t,ref:"btnUp"+t,onClick:e.handleVersionVaryBound,type:"button"},r.a.createElement(N.a,{className:"icon"})),r.a.createElement("button",{className:"btn btn--text btn-down","data-id":t,ref:"btnDown"+t,onClick:e.handleVersionVaryBound,type:"button"},r.a.createElement(y.a,{className:"icon"}))))}),this),r.a.createElement("span",{className:"pointer"},"\u2935")),r.a.createElement(g,{browsers:a}))}}]),a}(r.a.Component);!function(e,a,t){var n,r=e.getElementsByTagName(a)[0];e.getElementById(t)||((n=e.createElement(a)).id=t,n.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=1547693265447721&autoLogAppEvents=1",r.parentNode.insertBefore(n,r))}(document,"script","facebook-jssdk");var O=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"author"},"made by",r.a.createElement("a",{className:"authorLink",href:"https://github.com/godban",target:"_blank",rel:"author"},r.a.createElement(_.a,{className:"authorIcon"}),"godban")),r.a.createElement("div",{className:"social-box"},r.a.createElement("div",{className:"social-box__item social-box__item--gh"},r.a.createElement("a",{className:"github-button",href:"https://github.com/godban/browsers-support-badges","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star godban/browsers-support-badges on GitHub"},"Star")),r.a.createElement("div",{className:"social-box__twitter social-box__item"},r.a.createElement("a",{href:"https://twitter.com/share",className:"twitter-share-button","data-show-count":"false"},"Tweet")),r.a.createElement("div",{className:"social-box__facebook social-box__item"},r.a.createElement("div",{className:"fb-like","data-href":"http://godban.github.io/browsers-support-badges","data-layout":"button_count","data-action":"like","data-size":"small","data-show-faces":"false","data-share":"false"}))))},j=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"main"},r.a.createElement(C,null),r.a.createElement(O,null))}}]),a}(n.Component);t(34),t(35),t(36);o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.eaa6945f.chunk.js.map