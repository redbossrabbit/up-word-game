!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);const n={};let o={},a={},s=new Map;const r=(e,t)=>({true(){t.appendChild(e)},false(){const[i]=e,{[i]:n}=o;((e,t,i)=>{try{({string(){const n=document.createTextNode(e);i.appendChild(n),a[t]=n},function(){const n=e();i.appendChild(n),a[t]=n}})[typeof e]()}catch(i){throw new Error(`on initializing component - Expected node or string as value. Received ${e instanceof Function?typeof e():typeof e} instead @ ${t}.`).stack}})(n,i,t)}}[e instanceof Node]()),c=(e,t)=>{try{({string(){t.appendChild(document.createTextNode(e))},object(){r(e,t)}})[typeof e]()}catch(t){throw new Error(`on initializing component - Expected node or property name in array as value. Received ${typeof e} instead.`).stack}},l={function(e,t,i){i.prototype[t]=e.states[t],delete e.states[t]},undefined(){}},d=(e,t,i)=>{l[typeof l[typeof e.states[t]]](e,t,i)},p=(e,t,i)=>{let n=e[t];Object.defineProperty(e,i,{get:()=>n,set(e){try{"string"==typeof e?(()=>{const t=document.createTextNode(e);n.parentNode.replaceChild(t,n),n=t})():(()=>{const t=e;n.parentNode.replaceChild(t,n),n=t})()}catch(t){throw new Error(`on updating property - Expected node or string as value on '${_key}' property. Received ${typeof e} instead.`).stack}}})},m=(e,t,...i)=>{const n=document.createElement(e),o=t?Object.keys(t):[];for(let e=0;e<o.length;e++){const i=o[e];n.setAttribute(i,t[i])}for(let e=0;e<i.length;e++)c(i[e],n);return n},g=(e,t,i)=>{class s{constructor(e,t,i){this.main=e;const n=Object.keys(t),o=Object.keys(i);for(let e=0;e<n.length;e++){const t=n[e];this[t]=a[t],p(this,t,t)}for(let e=0;e<o.length;e++){const t=o[e];this[t]=i[t]}}}const r=Object.keys(i.states);for(let e=0;e<r.length;e++){const t=r[e];d(i,t,s)}n[e]=[t,i,s],o={...o,...i.props}},u=(e,t)=>{try{const i=new n[e][2](n[e][0](),n[e][1].props,n[e][1].states);return i.STRIKE&&i.STRIKE(),t&&t.appendChild(i.main),a={},i}catch(i){switch(!0){case!n[e]:throw new Error(`on creating clone - '${e}' is not a component`).stack;case!t instanceof Node:throw new Error(`on creating clone - Cannot append '${e}' to textNode: ${t}`).stack;default:throw i}}},h=(e,t)=>{!s.get(t)&&s.set(t,{...e});const i=Object.entries(e);let n="";for(let e=0;e<i.length;e++)s.get(t)[i[e][0]]=i[e][1];const o=Object.entries(s.get(t));for(let e=0;e<o.length;e++)n+=`${o[e][0]}: ${o[e][1]};`;t.setAttribute("style",n)};g("Display-menus",()=>m("div",{class:"display-menus"},["screen"]),{props:{screen:()=>m("div")},states:{}});const y=u("Display-menus",document.getElementById("display-menus-comp-containter")),x=new Audio("music/click.mp3");x.preload="auto";const f=m("div");let b=[];const v=e=>{b.push(e)};g("Achievements-main-container",()=>m("div",{class:"ach-ult-main"},m("div",{},m("p",{class:"ach-txt"},"Achievements")),["achievementsList"],["achOkBtn"]),{props:{achievementsList:()=>m("div",{class:"ach-main-cont"}),achOkBtn:()=>m("div",{class:"ok-ach"},m("p",{},"Ok"))},states:{STRIKE(){this.achOkBtn.addEventListener("click",()=>{const e=JSON.parse(localStorage.getItem("GS"));b.forEach(t=>{e.achievements[t[0]][t[2]]=!1,t[1].newTxt.style.display="none"}),document.getElementById("slide-main").style.height="unset",e.sfx&&x.play(),y.screen=f,localStorage.setItem("GS",JSON.stringify(e))})},width:150,height:271}});const w=u("Achievements-main-container",!1),{achievements:S}=JSON.parse(localStorage.getItem("GS"));g("Achievement",()=>m("div",{class:"ach-cont"},m("div",{class:"ach-det"},m("p",{},["title"]),m("p",{},["description"]),m("p",{class:"amt"},["amount"]),m("div",{class:"ach-bar-cont"},["bar"])),["newNotify"]),{props:{title:"",description:"",amount:"",bar:()=>m("div"),newNotify:()=>m("div",{},["newTxt"],["medal"]),newTxt:()=>m("p",{},"NEW!"),medal:()=>m("div",{class:"medal"})},states:{STRIKE(){h({margin:"auto",height:"20px",width:"40px","background-image":"url(Images/medal_0002_Rectangle-1-copy-4.png)","background-size":"contain","background-position":"center","background-repeat":"no-repeat"},this.medal),h({margin:"auto","font-size":"3pt",display:"flex","margin-eft":"5px","flex-direction":"column"},this.newNotify),h({margin:"auto","margin-right":"0px","margin-top":"0px","background-color":"red",padding:"1px 2px","border-radius":"2px",color:"white","font-family":"box2",transform:"rotate(20deg)",display:"none"},this.newTxt)}}});const k=[];document.getElementById("ach-main-cont");for(const e in S){const t=u("Achievement",w.achievementsList);if(t.description=e.replace(/_/g," "),"number"==typeof S[e][0]){S[e][3]&&(t.newTxt.style.display="flex",v([e,t,3])),t.title=S[e][2],S[e][0]>S[e][1]&&(S[e][0]=S[e][1]);const i=Math.ceil(S[e][0]/S[e][1]*100);t.amount=i+"%",t.bar.style.width=70*S[e][0]/S[e][1]+"px",100===i&&(t.medal.style.backgroundImage="url(Images/medal_0001_Rectangle-1-copy-5.png)")}else"boolean"==typeof S[e][0]&&S[e][0]?(S[e][2]&&(t.newTxt.style.display="flex",v([e,t,2])),t.title=S[e][1],t.medal.style.backgroundImage="url(Images/medal_0001_Rectangle-1-copy-5.png)",t.bar.style.width=""+t.bar.parentNode.style.width,t.amount="100%"):"boolean"!=typeof S[e][0]||S[e][0]||(t.title=S[e][1],t.bar.style.width="0px",t.amount="0%");k.push(t)}g("Daily-reward-main-container",()=>m("div",{},["rTxt"],["dContent"]),{props:{dContent:()=>m("div",{},["dailyReward1"],["or"],["dailyReward2"]),rTxt:()=>m("p",{},"Daily Reward"),or:()=>m("p",{},"OR"),dailyReward1:"",dailyReward2:""},states:{STRIKE(){h({margin:"auto",display:"flex","flex-direction":"column",width:"100vw",height:"100vh","background-color":"rgba(0, 0, 0, 0.5)"},this.main),h({margin:"auto","margin-top":"0px",display:"flex",width:"inherit"},this.dContent),h({margin:"auto",padding:"10px 8px","background-color":"yellow",color:"red","border-radius":"100%",border:"5px solid white","font-size":"14pt","font-family":"box2"},this.or),h({margin:"auto","margin-bottom":"50px","font-family":"box3",color:"white","border-radius":"10px",margin:"auto","font-size":"30pt",opacity:"0"},this.rTxt)}}});const I=u("Daily-reward-main-container",!1),_=document.getElementById("dr"),E=document.getElementById("load-screen"),O=document.getElementById("slide-main"),B=document.getElementById("ok-main");let N=(new Date).getDay();const C=JSON.parse(localStorage.getItem("GS")),T=()=>{const e=(e,t)=>{C.achievements[t][0]||(((e,t)=>{const[i]=k.filter(t=>t.title.textContent===e);i.medal.style.backgroundImage="url(Images/medal_0001_Rectangle-1-copy-5.png)",i.bar.style.width=""+i.bar.parentNode.style.width,i.newTxt.style.display="flex",i.amount="100%",C.achievements[t][2]=!0,v([t,i,2]),u("Pop-up",document.getElementById("pop-up-cont")).description=e})(e,t),C.achievements[t][0]=!0)};if(C.numberOfStagesPlayed<=20&&!C.hasAchievedMaxLevelsInOneDay){switch(C.numberOfStagesPlayed){case 4:e("Casual gamer","Play_5_levels_in_one_day");break;case 9:e("Up to something","Play_10_levels_in_one_day");break;case 19:e("Oh dear!","Play_20_levels_in_one_day"),C.hasAchievedMaxLevelsInOneDay=!0}}N!==C.date&&(y.screen=I.main,C.numberOfStagesPlayed=0,O.style.height="100vh",h({animation:"enddrop 0.2s ease",opacity:"1"},I.rTxt),setTimeout(()=>{I.dailyReward1.classList.add("jump")},300),setTimeout(()=>{I.dailyReward2.classList.add("jump")},500),C.date=N),localStorage.setItem("GS",JSON.stringify(C))},P=document.getElementById("bg"),L=JSON.parse(localStorage.getItem("GS"));setTimeout(()=>{window.scrollTo(0,L.scroll)},0);for(let e=0;e<L.levels.length;e++){const t=document.createElement("p");t.innerHTML=e+1;const i=document.createElement("div");i.classList.add("stars");const n=document.createElement("div");n.id="star1"+e;const o=document.createElement("div");o.id="star3"+e;const a=document.createElement("div");if(a.id="star2"+e,n.classList.add("star1"),o.classList.add("star2"),a.classList.add("star3"),i.append(n,o,a),e>0&&L.levels[e-1].animPlayed)for(let t=0;t<L.levels[e-1].stars;t++)document.getElementById(`star${t+1}${e-1}`).style.opacity="1";const s=document.createElement("div");s.classList.add("level-num-div-main"),s.id="lndm"+e;const r=document.createElement("a");if(r.setAttribute("href","../GAME/game.html"),r.id="lnd"+e,e?e>0&&(L.levels[e-1].animPlayed?r.classList.add("level-num-div"):(r.style.pointerEvents="none",r.classList.add("level-num-div-locked"))):(r.style.pointerEvents="auto",r.classList.add("level-num-div")),r.addEventListener("click",()=>{var t;t=e,E.style.display="flex",window.scrollTo(0,L.scroll),localStorage.setItem("CL",t)}),r.append(t),s.append(i,r),P.append(s),e===L.levels.length-1&&(E.style.display="none",setTimeout(()=>{T()},1500)),e===L.levels.length-1&&L.levels[e].animPlayed)for(let t=0;t<L.levels[e].stars;t++)document.getElementById(`star${t+1}${e}`).style.opacity="1"}let J=0,G=L.scroll;if(L.levelsPassed>0&&!L.levels[L.levelsPassed-1].animPlayed){let e=0;for(let t=0;t<L.levels[Number(localStorage.getItem("CL"))].stars;t++)setTimeout(()=>{document.getElementById(`star${t+1}${L.levelsPassed-1}`).classList.add("star-pop")},e+=402);const t=document.getElementById("lnd"+L.levelsPassed);setTimeout(()=>{const e=setInterval(()=>{if(246===J){clearInterval(e);const i=JSON.parse(localStorage.getItem("GS"));return i.levelsPassed!==i.levels.length&&(i.numberOfStagesPlayed+=1,t.classList.remove("level-num-div-locked"),t.classList.add("level-num-div"),t.classList.add("super-pop"),t.style.pointerEvents="auto"),i.scroll=G,i.levels[i.levelsPassed-1].animPlayed=!0,void localStorage.setItem("GS",JSON.stringify(i))}G+=3,J+=3,window.scrollTo(0,G)},10)},1500)}B.addEventListener("click",()=>{O.style.display="none",_.style.display="none"});const R=document.getElementById("settings"),z=document.getElementById("music"),A=document.getElementById("sfx"),D=document.getElementById("vibration"),W=document.getElementById("settings-div"),U=document.getElementById("sett-cont"),$=new Audio("./music/bg-music.mp3");R.addEventListener("click",()=>{U.style.display="flex",W.classList.add("drop")});const j=JSON.parse(localStorage.getItem("GS"));j.music?(z.style.opacity="1",$.play(),$.loop=!0):z.style.opacity="0.4",j.sfx?A.style.opacity="1":A.style.opacity="0.4",j.vibration?D.style.opacity="1":D.style.opacity="0.4";z.addEventListener("click",e=>{(()=>{const e=JSON.parse(localStorage.getItem("GS"));if(e.music)return e.music=!1,$.pause(),localStorage.setItem("GS",JSON.stringify(e)),void(z.style.opacity="0.4");e.music||(e.music=!0,$.play(),$.loop=!0,localStorage.setItem("GS",JSON.stringify(e)),z.style.opacity="1")})(),e.stopPropagation()});A.addEventListener("click",e=>{(()=>{const e=JSON.parse(localStorage.getItem("GS"));if(e.sfx)return e.sfx=!1,localStorage.setItem("GS",JSON.stringify(e)),void(A.style.opacity="0.4");e.sfx||(e.sfx=!0,localStorage.setItem("GS",JSON.stringify(e)),A.style.opacity="1")})(),e.stopPropagation()});D.addEventListener("click",e=>{(()=>{const e=JSON.parse(localStorage.getItem("GS"));if(e.vibration)return e.vibration=!1,localStorage.setItem("GS",JSON.stringify(e)),void(D.style.opacity="0.4");e.vibration||(e.vibration=!0,localStorage.setItem("GS",JSON.stringify(e)),D.style.opacity="1")})(),e.stopPropagation()}),U.addEventListener("click",()=>{U.style.display="none",U.classList.remove("is-open")}),g("Shop-main-container",()=>m("div",{class:"shop-cont"},m("div",{},m("p",{class:"ach-txt"},"Powerups")),["coinsCont"],["shop"],["shopOkBtn"]),{props:{coinsCont:()=>m("div",{class:"coins-cont"}),shop:()=>m("div",{class:"shop"}),shopOkBtn:()=>m("div",{class:"ok-main-shop"},m("p",{},"Ok"))},states:{STRIKE(){const e=m("div"),t=new Audio("music/click.mp3");t.preload="auto",this.shopOkBtn.addEventListener("click",()=>{const i=JSON.parse(localStorage.getItem("GS"));document.getElementById("slide-main").style.height="unset",i.sfx&&t.play(),y.screen=e})},shopItems:[],width:152,height:210}});const K=u("Shop-main-container",!1),M=m("div"),H=new Audio("music/click.mp3");H.preload="auto",g("Discover-main-container",()=>m("div",{class:"disc-ult-main"},m("div",{},m("p",{class:"disc-txt"},"Discover Words!")),["coinsCont"],["discWordsMain"],["discOkBtn"]),{props:{coinsCont:()=>m("div",{class:"coins-cont"}),discWordsMain:()=>m("div",{class:"disc-words-main"}),discOkBtn:()=>m("div",{class:"ok-disc"},m("p",{},"Ok"))},states:{STRIKE(){this.discOkBtn.addEventListener("click",()=>{const e=JSON.parse(localStorage.getItem("GS"));document.getElementById("slide-main").style.height="unset",e.sfx&&H.play(),y.screen=M})},width:200,height:351}});const q=u("Discover-main-container",!1),F=[];g("Coins",()=>m("div",{class:"shop-coins-div"},["coinsPic"],m("p",{},["coins"])),{props:{coinsPic:()=>m("div"),coins:""+JSON.parse(localStorage.getItem("GS")).coins},states:{STRIKE(){this.internalCoinsCounter=JSON.parse(localStorage.getItem("GS")).coins,F.push(this),h({"text-shadow":"-.8px -.8px 0 purple, .8px -.8px 0px purple, -.8px .8px 0px purple, .8px .8px 0px purple"},this.main)},reduce(e,t,i,n){this.internalCoinsCounter=this.internalCoinsCounter-e;const o=this.internalCoinsCounter;t.coins=o,F.forEach(e=>{e.coins=""+o}),localStorage.setItem("GS",JSON.stringify(t)),n.priceState+=n.priceState+200,n.price=""+n.priceState,o<n.priceState&&i.forEach(e=>{e.priceState>o&&e.isNotEnough()})},internalCoinsCounter:""}});const Y=u("Coins",K.coinsCont);u("Coins",document.getElementById("outer-shop-coins-div"));const Q=u("Coins",q.coinsCont);h({width:"10px",height:"10px"},Q.coinsPic),h({width:"10px",height:"10px"},Y.coinsPic),h({"font-size":"6pt","margin-left":"5px"},Q.coins.parentNode),h({"font-size":"6pt","margin-left":"5px"},Y.coins.parentNode);let V=0;const X=new Audio("music/click.mp3");X.preload="auto";const Z=document.getElementById("slide-main"),ee=document.getElementById("r-u-t"),te=[K,w,q],ie=[{"background-size":"55%","background-image":"url(Images/power-ups-icon_0000_P2.png)"},{"background-size":"80%","background-image":"url(Images/Achievements-Icon_0003_Layer-1.png)"},{"background-size":"70%","background-image":"url(Images/Discover-Icon_0002_w-copy.png)"},{"margin-left":"0px",width:"50px",height:"50px","border-radius":"100%","background-size":"35%","background-image":"url(Images/Jump-Icon_0003_Layer-1.png)"}];te.forEach(e=>{let t;const i=Math.min(window.innerWidth/e.width,window.innerHeight/e.height);t=e===K?window.innerWidth>900&&window.innerHeight>900?3:window.innerWidth>700&&window.innerHeight>900?2:.5:window.innerWidth>700&&window.innerHeight>700?1:.2,e.main.style.transform=`scale(${i-t})`}),g("Shop-btn",()=>m("div",{class:"shop-btn"}),{props:{},states:{STRIKE(){h(ie.splice(0,1)[0],this.main),V<3?this.screen=te.splice(0,1)[0].main:this.isJumpBtn=!0,V++,this.main.addEventListener("click",()=>{const e=JSON.parse(localStorage.getItem("GS"));if(e.sfx&&X.play(),e.vibration&&navigator.vibrate(50),this.isJumpBtn)return location.href=location.href;Z.style.height="100%",y.screen=this.screen,this.screen===K.main&&K.shopItems.forEach(e=>{JSON.parse(localStorage.getItem("GS")).coins<e.priceState&&e.isNotEnough()})})}}}),u("Shop-btn",ee),u("Shop-btn",ee),u("Shop-btn",ee),u("Shop-btn",document.getElementById("lower-left-tools"));let ne=[];const oe=e=>{const t=new Audio(e);return t.preload="auto",t},ae=["url(Images/power-ups_0002_P1.png)","url(Images/power-ups_0000_P2.png)","url(Images/power-ups_0001_P3.png)"];let se=0;const re=["powerUp1","powerUp2","powerUp3"];g("Shop-item",()=>m("div",{class:"shop-item-div"},m("div",{class:"power-div"},["powerUpIcon"],m("div",{class:"pow-amt"},m("p",{},["amt"]))),m("div",{class:"buy-btn"},m("p",{},"Buy"),m("div",{class:"shop-coin-icon"}),m("p",{class:"price-txt"},["price"]))),{props:{powerUpIcon:()=>m("div",{class:"power-up"}),price:"",amt:""},states:{STRIKE(){const e=(e,t,i,n)=>{const[o]=k.filter(t=>t.title.textContent===e);o.medal.style.backgroundImage="url(Images/medal_0001_Rectangle-1-copy-5.png)",o.bar.style.width=""+o.bar.parentNode.style.width,n.achievements[t][i]=!0,v([t,o,i]),o.newTxt.style.display="flex",o.amount="100%",u("Pop-up",document.getElementById("pop-up-cont")).description=e},t=oe("music/cash.mp3");K.shopItems.push(this),this.internalCloneCount=se,this.powerUpIcon.style.backgroundImage=ae[se],this.stateAmt=JSON.parse(localStorage.getItem("GS"))[re[se]],this.priceState=0===se?400:200,this.amt=""+this.stateAmt;let i=this.priceState;for(let e=0;e<this.stateAmt;e++)i+=i+200;this.price=""+i,this.priceState=i,Y.internalCoinsCounter<this.priceState&&this.isNotEnough(),se++;const n=this.main;n.addEventListener("click",()=>{if(n.style.pointerEvents="none",setTimeout(()=>{n.style.pointerEvents="auto"},1e3),Y.internalCoinsCounter<this.priceState)return;const i=JSON.parse(localStorage.getItem("GS"));i.sfx&&t.play(),Y.reduce(this.priceState,i,ce,this),this.main.style.animation="shake 0.2s",setTimeout(()=>{this.main.style.animation=void 0},190),this.amt=""+(this.stateAmt+=1),5!==this.stateAmt||i.achievements.Buy_up_to_5_of_any_power_up[0]||(i.achievements.Buy_up_to_5_of_any_power_up[0]=!0,e("Power!","Buy_up_to_5_of_any_power_up",2,i)),3!==ce.filter(e=>e.stateAmt>=5).length||i.achievements.Buy_up_to_5_of_all_3_power_ups[0]||(i.achievements.Buy_up_to_5_of_all_3_power_ups[0]=!0,e("Super Hero","Buy_up_to_5_of_all_3_power_ups",2,i)),i[re[this.internalCloneCount]]=this.stateAmt,ne.forEach(e=>{e.statePrice&&e.statePrice>i.coins&&h({opacity:"0.5","pointer-events":"none"},e.main)}),localStorage.setItem("GS",JSON.stringify(i))})},stateAmt:0,priceState:void 0,internalCloneCount:0,isNotEnough(){this.main.style.opacity="0.5"}}});const ce=[u("Shop-item",K.shop),u("Shop-item",K.shop),u("Shop-item",K.shop)];g("Pop-up",()=>m("div",{class:"scale-pop-up"},["achDetails"],["medal"]),{props:{achDetails:()=>m("div",{class:"ach-det"},m("p",{},["popUpTitle"]),m("p",{},["description"])),popUpTitle:"New Achievement!",description:"",medal:()=>m("div")},states:{STRIKE(){h({display:"flex",padding:"8px",height:"fit-content",width:"fit-content","background-image":"linear-gradient(rgb(150, 150, 150), rgb(50, 50, 50), rgb(80, 80, 80))",color:"#fff",animation:"popdrop 2s ease","box-shadow":"0px 5px 8px rgba(0, 0, 0, 0.2)",border:".5px solid rgb(221, 174, 66)","border-radius":"5px",margin:"3px auto"},this.main),h({margin:"auto",height:"35px",width:"50px","margin-left":"100px","background-image":"url(Images/medal_0001_Rectangle-1-copy-5.png)","background-size":"contain","background-position":"center","background-repeat":"no-repeat"},this.medal),h({margin:"auto",width:" 50%","margin-left":"15px","font-family":"box3",color:"brown","font-size":"9pt",color:"chocolate"},this.achDetails),h({color:"white","font-size":"11pt"},this.popUpTitle.parentNode),h({color:"rgb(255, 187, 0)","font-size":"9pt"},this.description.parentNode),setTimeout(()=>{this.main.parentNode.removeChild(this.main)},2e3)}}});let le=[];const de=oe("music/cash.mp3");g("Unlock-word-tab",()=>m("div",{},["mainTab"]),{props:{mainTab:()=>m("div",{},["question"],["costDiv"],["options"]),question:()=>m("p",{},"Do you want to unlock this word?"),costDiv:()=>m("div",{},m("p",{},"Cost:"),["coinImage"],["price"]),coinImage:()=>m("div"),price:"",options:()=>m("div",{},["cancelBtn"],["unlockBtn"]),unlockBtn:()=>m("div",{class:"ok-ach"},m("p",{},"Yes")),cancelBtn:()=>m("div",{class:"ok-ach"},m("p",{},"No"))},states:{STRIKE(){const e=new Audio("music/click.mp3");e.preload="auto";const t=(e,t,i,n)=>{const[o]=k.filter(t=>t.title.textContent===e);o.medal.style.backgroundImage="url(Images/medal_0001_Rectangle-1-copy-5.png)",o.bar.style.width=""+o.bar.parentNode.style.width,v([n,o,2]),o.newTxt.style.display="flex",o.amount="100%",t.achievements[`Unlock_${i}_words`][2]=!0,t.achievements[`Unlock_${i}_words`][0]=!0,u("Pop-up",document.getElementById("pop-up-cont")).description=e};h({display:"none",margin:"auto",width:"inherit",height:"inherit","background-color":"rgba(0, 0, 0, 0.5)",position:"fixed","z-index":"1"},this.main),h({margin:"auto",display:"flex","flex-direction":"column","background-color":"rgb(200, 255, 200)",height:"25%",width:"75%",padding:"10px 20px","border-radius":"10px","box-shadow":"0px 0px 5px rgba(0, 0, 0, 0.5)",animation:"poprise 0.2s ease","font-family":"box3"},this.mainTab),h({margin:"auto",display:"flex","font-family":"box2","font-size":"5pt","text-align":"center",color:"rgb(230, 100, 20)","font-size":"12pt"},this.costDiv),h({margin:"auto",width:"20px",height:"20px","background-image":"url(Images/coin-1_0005_Ellipse-1-copy-10.png)","background-size":"contain","background-repeat":"no-repeat","background-position":"center","margin-left":"5px","margin-right":"2px"},this.coinImage),h({margin:"auto","font-size":"14pt","text-align":"center",color:"rgb(85, 19, 19)"},this.question),h({display:"flex",width:"100%",margin:"auto"},this.options),h({margin:"auto",width:"45%",height:"50px","font-size":"20pt"},this.cancelBtn),h({margin:"auto",width:"45%",height:"50px","font-size":"20pt",border:"2px solid rgba(50, 126, 0, 0.7)"},this.unlockBtn),h({"background-image":"linear-gradient(rgb(255, 230, 183), rgb(255, 145, 2), rgb(255, 166, 0), rgb(255, 208, 0))",border:"2px solid rgb(255, 130, 2)"},this.cancelBtn),this.cancelBtn.addEventListener("click",()=>this.main.style.display="none"),this.unlockBtn.addEventListener("click",()=>{h({animation:"shake 0.2s ease","pointer-events":"none"},this.unlockBtn);const i=JSON.parse(localStorage.getItem("GS"));i.sfx&&(e.play(),de.play());const n=this.clickedWord;if(i.coins-=n.statePrice,Y.coins=""+i.coins,Y.internalCoinsCounter=i.coins,i.hiddenWords[n.cloneNum][2]=!0,n.hasBeenUnlocked=!0,i.numberOfUnlockedWords<100)switch(i.numberOfUnlockedWords+=1,i.numberOfUnlockedWords){case 10:t("Curious Cat",i,10,"Unlock_10_words");break;case 20:t("Discoverer",i,20,"Unlock_20_words");break;case 50:t("Word Hunter",i,50,"Unlock_50_words");break;case 100:t("Etymologist",i,100,"Unlock_100_words")}setTimeout(()=>{h({animation:void 0},this.unlockBtn),this.mainTab.style.animation="elevate 0.8s ease",setTimeout(()=>{this.main.style.display="none",this.mainTab.style.animation="poprise 0.2s ease",((e,t,i)=>{const n=Object.entries(i);let o=i[e];o.childNodes.forEach(e=>{n.filter(t=>t[1]===e).forEach(e=>delete i[e[0]])}),o=void 0,i[t]=i[e],p(i,e,t),delete i[e]})("costDiv","revealedWord",n),n.revealedWord=m("p",{},""+n.word),h({margin:"auto",color:"white","font-size":"6pt","font-family":"box2","text-shadow":"-.8px -.8px 0 purple, .8px -.8px 0px purple, -.8px .8px 0px purple, .8px .8px 0px purple"},n.revealedWord),h({"background-image":"linear-gradient(rgb(255, 230, 183), rgb(255, 145, 2), rgb(255, 166, 0), rgb(255, 208, 0))",animation:"superpop 0.8s ease"},n.main),setTimeout(()=>{n.main.style.animation=void 0,h({"pointer-events":"auto"},this.unlockBtn)},790)},790)},100),le.forEach(e=>{e.statePrice&&e.statePrice>i.coins&&h({opacity:"0.5","pointer-events":"none"},e.main)}),localStorage.setItem("GS",JSON.stringify(i))})}}});const pe=u("Unlock-word-tab",document.getElementById("slide-main"));g("Word-info-tab",()=>m("div",{},["mainTab"]),{props:{mainTab:()=>m("div",{},["wordCont"],["meaningCont"],["okBtn"]),wordCont:()=>m("p",{},["word"]),word:"",meaningCont:()=>m("p",{},["meaning"]),meaning:"",okBtn:()=>m("div",{class:"ok-ach"},m("p",{},"Ok"))},states:{STRIKE(){const e=new Audio("music/click.mp3");e.preload="auto",h({display:"none",margin:"auto",width:"inherit",height:"inherit","background-color":"rgba(0, 0, 0, 0.5)",position:"fixed","z-index":"1"},this.main),h({margin:"auto",display:"flex","flex-direction":"column","background-color":"wheat",height:"fit-content",width:"75%",padding:"10px 20px","border-radius":"10px","box-shadow":"0px 0px 5px rgba(0, 0, 0, 0.5)",animation:"poprise 0.2s ease","font-family":"box2","text-align":"center"},this.mainTab),h({margin:"10px auto",width:"90%"},this.meaningCont),h({color:"white","font-family":"box2","text-shadow":"-.8px -.8px 0 purple, .8px -.8px 0px purple, -.8px .8px 0px purple, .8px .8px 0px purple",margin:"10px auto","font-size":"14pt","text-align":"center"},this.wordCont),h({margin:"10px auto",width:"45%",height:"50px","font-size":"20pt","background-image":"linear-gradient(rgb(213, 255, 194), rgb(131, 255, 74), rgb(129, 214, 31), rgb(99, 255, 37))",border:"2px rgba(50, 126, 0, 0.7) solid"},this.okBtn),this.okBtn.addEventListener("click",()=>{JSON.parse(localStorage.getItem("GS")).sfx&&e.play(),this.main.style.display="none"})}}});const me=u("Word-info-tab",document.getElementById("slide-main"));let ge=[],ue=0;const he=JSON.parse(localStorage.getItem("GS")),ye=new Audio("music/click.mp3");ye.preload="auto",g("Hidden-word",()=>m("div",{},["costDiv"]),{props:{costDiv:()=>he.hiddenWords[ue][2]?m("p",{},""+he.hiddenWords[ue][0]):m("div",{},["coinImage"],["price"]),price:"",coinImage:()=>m("div")},states:{STRIKE(){const e=he.hiddenWords[ue];this.word=e[0],this.meaning=e[1];let t=e[2],i=!1;this.cloneNum=ue,ue++;let n=this.word.length;t?h({margin:"auto",color:"white","font-size":"6pt","font-family":"box2","text-shadow":"-.8px -.8px 0 purple, .8px -.8px 0px purple, -.8px .8px 0px purple, .8px .8px 0px purple"},this.costDiv):(this.statePrice=100*n,this.price=""+this.statePrice,h({margin:"auto",display:"flex","font-size":"5pt","text-align":"center",color:"white","font-family":"box2"},this.costDiv),h({margin:"auto",width:"5px",height:"5px","background-image":"url(Images/coin-1_0005_Ellipse-1-copy-10.png)","background-size":"contain","background-repeat":"no-repeat","background-position":"center","margin-left":"5px","margin-right":"2px"},this.coinImage),i=he.coins>=this.statePrice),h({margin:"auto",opacity:i||t?"1":"0.5","pointer-events":i||t?"auto":"none",height:"20px",display:"flex",margin:"5px auto",width:10*n+"px","border-radius":"5px","background-image":t?"linear-gradient(rgb(255, 230, 183), rgb(255, 145, 2), rgb(255, 166, 0), rgb(255, 208, 0))":"linear-gradient(rgb(25, 230, 183), rgb(25, 150, 122), rgb(25, 120, 120), rgb(25, 120, 120))","box-shadow":"0px 3px 5px rgba(0, 0, 0, 0.3)",border:"2px solid white"},this.main),this.main.addEventListener("click",()=>{JSON.parse(localStorage.getItem("GS")).sfx&&ye.play(),this.hasBeenUnlocked||t?(me.main.style.display="flex",me.word=""+this.word,me.meaning=""+this.meaning):(pe.main.style.display="flex",pe.price=""+this.statePrice,pe.clickedWord=this)}),ge=[...ge,this]}}});document.getElementById("disc-words-main");for(let e=0;e<he.hiddenWords.length;e++)u("Hidden-word",q.discWordsMain);ne=ge,(e=>{le=e})(ge);const xe=m("div");let fe=0;const be=["url(Images/smallCoins.png)","url(Images/chest.png)"];g("Daily-reward",()=>m("div",{},["rewardPic"],["claimBtn"]),{props:{rewardPic:()=>m("div"),claimBtn:()=>m("div",{},m("p",{style:"margin: auto: margin-right: 0px;"},"Get"),["rCoinImage"],m("p",{},["rPrice"])),rCoinImage:()=>m("div"),rPrice:""},states:{STRIKE(){this.cId=fe,this.rPrice=0===this.cId?"100":"400",fe++,h({margin:"auto",display:"flex","flex-direction":"column"},this.main),h({margin:"auto","margin-bottom":"0px",width:"40vw",height:"40vw","background-image":be.splice(0,1)[0],"background-position":"center","background-size":"150%","background-repeat":"no-repeat"},this.rewardPic),h({margin:"auto","margin-top":"10px",display:"flex",padding:"3vw 5vw","background-image":0===this.cId?"linear-gradient(\n            rgb(213, 255, 194),\n            rgb(131, 255, 74),\n            rgb(129, 214, 31),\n            rgb(99, 255, 37)\n          )":"linear-gradient(\n            rgb(255, 230, 183),\n            rgb(255, 145, 2),\n            rgb(255, 166, 0),\n            rgb(255, 208, 0)\n          )","border-radius":"10px","font-family":"box2","font-size":"11pt",color:0===this.cId?"darkgreen":"brown"},this.claimBtn),h({margin:"auto","margin-left":"10px","margin-right":"0px",width:"20px",height:"20px","background-image":"url(Images/coin-1_0005_Ellipse-1-copy-10.png)","background-size":"contain","background-repeat":"no-repeat","background-position":"center"},this.rCoinImage),h({margin:"auto","margin-left":"2px"},this.rPrice.parentNode),this.claimBtn.addEventListener("click",()=>{y.screen=xe,document.getElementById("slide-main").style.height="unset"})}}}),I.dailyReward1=u("Daily-reward",!1).main,I.dailyReward2=u("Daily-reward",!1).main}]);