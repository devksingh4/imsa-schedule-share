(this["webpackJsonpimsa-schedule-share"]=this["webpackJsonpimsa-schedule-share"]||[]).push([[0],{132:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),s=r(31),n=r.n(s),i=r(29),o=r(10),l=r(15),h=r(21),d=r(22),u=r(25),j=r(24),p=r(18),b=(r(78),r(16)),O=r(19),x=(r(38),{apiKey:"AIzaSyBfuLbTORxpxxhCMM7rCPSalIE-L8EDyvw",authDomain:"imsa-room-designer.firebaseapp.com",projectId:"imsa-room-designer",storageBucket:"imsa-room-designer.appspot.com",messagingSenderId:"767303068136",appId:"1:767303068136:web:54c82fffc7cabb05ac9c5d",measurementId:"G-8TTP95Q69P",databaseURL:"https://imsa-room-designer-default-rtdb.firebaseio.com"}),f=r(2),m=function(e){Object(u.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(h.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).createGroup=function(){for(var t=[],r=function(r){e.props.props[r].authenticated?t.push(Object(f.jsx)(b.b,Object(l.a)(Object(l.a)({},x),{},{firebase:O.a,children:Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{children:function(t){var a=t.isSignedIn,c=t.firebase;return!0===a?Object(f.jsx)(i.b,{to:e.props.props[r].name.toLowerCase().replace(" ","-"),style:{textDecoration:"none",color:"inherit"},children:Object(f.jsx)(p.a,{style:{margin:20},children:Object(f.jsxs)(p.a.Body,{children:[Object(f.jsx)(p.a.Title,{style:{color:"#005faf"},children:e.props.props[r].name.replace(/([A-Z])/g," $1")},e.props.props[r].name.toLowerCase().Title),Object(f.jsx)(p.a.Text,{style:{color:"#005faf"},children:e.props.props[r].description},e.props.props[r].name.toLowerCase().Text)]})},"".concat(e.props.props[r].name.toLowerCase()))},"".concat(e.props.props[r].name.toLowerCase(),".Link")):Object(f.jsx)("a",{style:{textDecoration:"none",color:"inherit"},onClick:function(){var e=new c.auth.GoogleAuthProvider;c.auth().signInWithPopup(e)},href:"javascript:;",children:Object(f.jsx)(p.a,{style:{margin:20},children:Object(f.jsxs)(p.a.Body,{children:[Object(f.jsx)(p.a.Title,{style:{color:"#005faf"},children:e.props.props[r].name.replace(/([A-Z])/g," $1")},e.props.props[r].name.toLowerCase().Title),Object(f.jsx)(p.a.Text,{style:{color:"#005faf"},children:e.props.props[r].description},e.props.props[r].name.toLowerCase().Text)]})},"".concat(e.props.props[r].name.toLowerCase()))})}})})}))):t.push(Object(f.jsx)(i.b,{to:e.props.props[r].name.toLowerCase().replace(" ","-"),children:Object(f.jsx)(p.a,{style:{margin:20},children:Object(f.jsxs)(p.a.Body,{children:[Object(f.jsx)(p.a.Title,{style:{color:"#005faf"},children:e.props.props[r].name.replace(/([A-Z])/g," $1")},e.props.props[r].name.toLowerCase().Title),Object(f.jsx)(p.a.Text,{style:{color:"#005faf"},children:e.props.props[r].description},e.props.props[r].name.toLowerCase().Text)]})},"".concat(e.props.props[r].name.toLowerCase()))},"".concat(e.props.props[r].name.toLowerCase(),".Link")))},a=0;a<e.props.props.length;a++)r(a);return t},e}return Object(d.a)(r,[{key:"render",value:function(){return Object(f.jsx)("div",{"aria-label":"Property chooser",children:this.createGroup()},"opts")}}]),r}(a.Component),v=r(26),g=(r(62),r(42)),S=r(45),y=r(34),w=function(e){Object(u.a)(r,e);var t=Object(j.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(f.jsx)(b.b,Object(l.a)(Object(l.a)({},x),{},{firebase:O.a,children:Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{children:function(e){var t=e.isSignedIn,r=e.firebase;return!0===t?Object(f.jsxs)("div",{children:[Object(f.jsxs)(y.a.Item,{disabled:!0,children:["Email: ",r.auth().currentUser.email]}),Object(f.jsx)(y.a.Item,{onClick:function(){r.auth().signOut().then((function(){window.location.reload()}))},children:"Sign Out"})]}):null}})})}))}}]),r}(a.Component),C=function(e){Object(u.a)(r,e);var t=Object(j.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(f.jsx)(b.b,Object(l.a)(Object(l.a)({},x),{},{firebase:O.a,children:Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{children:function(e){var t=e.isSignedIn,r=e.firebase;return!0===t?Object(f.jsx)(y.a,{title:"Signed in as: ".concat(r.auth().currentUser.displayName),id:"navbarScrollingDropdown",children:Object(f.jsx)(w,{})}):Object(f.jsxs)(y.a,{title:"Sign in",id:"navbarScrollingDropdown",children:[Object(f.jsx)(y.a.Item,{onClick:function(){console.log(r.auth);var e=new r.auth.GoogleAuthProvider;r.auth().signInWithPopup(e)},children:"with Google"}),Object(f.jsx)(y.a.Item,{disabled:!0,onClick:function(){console.log(r.auth);var e=new r.auth.OAuthProvider("microsoft.com");r.auth().signInWithPopup(e)},children:"with Microsoft"})]})}})})}))}}]),r}(a.Component),k=function(e){Object(u.a)(r,e);var t=Object(j.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return Object(f.jsx)(g.a,{bg:"dark",variant:"dark",children:Object(f.jsxs)(v.a,{children:[Object(f.jsx)(g.a.Brand,{href:"#",children:"IMSA Schedule Share"}),Object(f.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(S.a,{className:"me-auto",children:[Object(f.jsx)(S.a.Link,{children:Object(f.jsx)(i.b,{to:"/",style:{textDecoration:"none",color:"inherit"},children:"Home"})}),Object(f.jsxs)(S.a.Link,{children:[" ",Object(f.jsx)(i.b,{to:"/scheduler",style:{textDecoration:"none",color:"inherit"},children:"Scheduler"})]}),Object(f.jsxs)(S.a.Link,{children:[" ",Object(f.jsx)(i.b,{to:"/view-schedules",style:{textDecoration:"none",color:"inherit"},children:"View Schedules"})]})]})}),Object(f.jsx)(g.a.Collapse,{className:"justify-content-end",children:Object(f.jsx)(C,{})})]})})}}]),r}(a.Component);var I=function(){return Object(f.jsxs)("div",{className:"Home",children:[Object(f.jsx)(k,{active:"home"}),Object(f.jsx)(v.a,{children:Object(f.jsx)(m,{props:[{name:"Scheduler",description:"Enter the schedule creator",authenticated:!1},{name:"View Schedules",description:"View your saved schedules",authenticated:!0}]})})]})},N=r(73),A=r(36),L=r(71),P=(r(128),r(32)),T=r(72),B=function(e){Object(u.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(h.a)(this,r),(a=t.call(this,e)).state={share:!1,scheduleName:"",powerschoolSchedule:"",powerschoolArray:[],firebase:0!==O.a.apps.length?O.a.app():O.a.initializeApp(x),surl:"",id:"0"},a}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=this.getParameterByName("id"),r=this.getParameterByName("user");t&&r&&this.state.firebase.database().ref("schedules/"+r).get().then((function(r){if(r.exists()){var a=r.val()[t];e.setState({powerschoolArray:a.powerschoolArray,scheduleName:a.scheduleName,powerschoolSchedule:a.powerschoolSchedule}),e.getModSchedule(e.state.powerschoolArray)}else alert("No matching schedule available!")}))}},{key:"getParameterByName",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),a=r.exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}},{key:"handleScheduleName",value:function(e){this.setState({scheduleName:null===e||void 0===e?void 0:e.target.value})}},{key:"getTableEntries",value:function(e){return e.forEach((function(e){})),null}},{key:"handlePowerschoolSchedule",value:function(e){if(this.setState({powerschoolSchedule:null===e||void 0===e?void 0:e.target.value}),""===this.state.powerschoolSchedule)return null;var t=this.state.powerschoolSchedule.split("\n");t=(t=t.filter((function(e){return!isNaN(e[0])}))).map((function(e){return e.split("\t")})),this.setState({powerschoolArray:t}),this.getModSchedule(t)}},{key:"range",value:function(e,t){return void 0===t&&(t=e,e=1),Object(N.a)(Array(t-e+1).keys()).map((function(t){return t+e}))}},{key:"getModSchedule",value:function(e){var t=this;try{this.setState({userId:this.state.firebase.auth().currentUser.uid})}catch(n){console.warn("Could not get user.")}console.log(this.state.userId);var r=[];e.forEach((function(e){var t=e[0],a=e[3],c=e[4],s=e[5],n=(t=t.replace(/ +/g,"")).split(/\),*(?=[0-9])/g),i=(t=(n=n.map((function(e,t,r){return t<r.length-1?e+")":e}))).filter((function(e){return!e.includes("Sp")}))[0]).split("(")[0],o=t.split("(")[1].substring(0,t.split("(")[1].length-1),l=[a,c,s,i.split("-").map((function(e){return parseInt(e,10)-1})),o.split(",")];r.push(l)}));for(var a=[],c=0;c<8;c++)a.push([null,null,null,null,null]);var s={A:0,B:1,I:2,C:3,D:4};r.forEach((function(e){var r=e[3],c=e[4],n=[];c.forEach((function(e){if(e.includes("-")){var r=e.split("-");r=r.map((function(e){return s[e]}));var a=t.range(r[0],r[1]);return(a=a.filter((function(e){return 2!==e}))).forEach((function(e){return n.push(e)}))}return n.push(s[e])})),c=n,r.forEach((function(t){c.forEach((function(r){a[t][r]={name:e[0],teacher:e[1],room:e[2]}}))}))})),this.setState({cleanedSchedule:a,humanSchedule:r})}},{key:"renderHelper",value:function(e){if(!this.state.cleanedSchedule)return null;var t=this.state.cleanedSchedule[e-1].map((function(e){return e?Object(f.jsxs)("td",{children:[Object(f.jsx)("a",{style:{fontWeight:"bold",textAlign:"center"},children:e.name}),Object(f.jsx)("br",{}),e.teacher,Object(f.jsx)("br",{}),e.room]}):Object(f.jsx)("td",{})}));return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e},"mod-"+e),t]})}},{key:"handleSaveSchedule",value:function(){if(!this.state.powerschoolArray)return null;if(this.props.edit){var e=this.state.firebase.auth().currentUser.uid,t=this.getParameterByName("id");return this.setState({userId:e,id:t||""}),this.state.firebase.database().ref("schedules/"+e+"/"+t).set({powerschoolArray:this.state.powerschoolArray,scheduleName:this.state.scheduleName}),this.setState({surl:"".concat(window.location.origin,"/imsa-schedule-share/#/view?id=").concat(t,"&user=").concat(e)}),void this.setState({copied:this.state.surl})}var r=this.state.firebase.auth().currentUser.uid,a=this.state.firebase.database().ref("schedules/"+r).push({powerschoolArray:this.state.powerschoolArray,powerschoolSchedule:this.state.powerschoolSchedule,scheduleName:this.state.scheduleName});this.setState({surl:"".concat(window.location.origin,"/imsa-schedule-share/#/view?id=").concat(a.key,"&user=").concat(r)}),this.setState({copied:this.state.surl})}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(k,{active:"designer"}),Object(f.jsx)("br",{}),this.props.hide?null:Object(f.jsxs)(v.a,{children:[Object(f.jsx)("h1",{children:"Input Data"}),Object(f.jsxs)(A.a,{children:[Object(f.jsxs)(A.a.Group,{className:"mb-3",controlId:"scheduleInput",children:[Object(f.jsx)(A.a.Label,{children:"Schedule Name"}),Object(f.jsx)(A.a.Control,{type:"text",placeholder:"Semester 1 Schedule",value:this.state.scheduleName,onChange:this.handleScheduleName.bind(this)})]}),Object(f.jsxs)(A.a.Group,{className:"mb-3",controlId:"powerschoolInput",children:[Object(f.jsx)(A.a.Label,{children:"PowerSchool Schedule"}),Object(f.jsx)(A.a.Control,{as:"textarea",rows:3,placeholder:'Paste PowerSchool table from "Year Schedule" section here.',value:this.state.powerschoolSchedule,onChange:this.handlePowerschoolSchedule.bind(this)})]}),Object(f.jsx)(b.b,Object(l.a)(Object(l.a)({},x),{},{firebase:O.a,children:Object(f.jsx)(b.a,{children:function(t){var r=t.isSignedIn;t.firebase;return r?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(L.a,{className:"mb-2",id:"toggle",type:"checkbox",variant:"outline-primary",checked:e.state.share,value:"share",onChange:function(t){return e.setState({share:t.currentTarget.checked})},children:"Share Schedule"}),Object(f.jsx)("br",{}),Object(f.jsx)(P.a,{variant:"primary",onClick:function(){e.handleSaveSchedule.bind(e),e.handleSaveSchedule()},children:e.state.copied?"Copied to clipboard!":"Save Schedule"})]}):Object(f.jsx)(P.a,{variant:"secondary",disabled:!0,children:"Sign in to share and save schedules"})}})})),Object(f.jsx)("a",{children:this.state.copied})]})]}),Object(f.jsxs)(v.a,{children:[Object(f.jsx)("h1",{children:this.props.hide?this.state.scheduleName:"Your Schedule"}),Object(f.jsx)(b.b,Object(l.a)(Object(l.a)({},x),{},{firebase:O.a,children:Object(f.jsx)(b.a,{children:function(t){var r=t.isSignedIn;t.firebase;return r?e.getParameterByName("user")?e.state.userId===e.getParameterByName("user")&&e.props.hide?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(P.a,{variant:"primary",href:window.location.href.replace("view","scheduler/edit"),children:"Edit schedule"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]}):Object(f.jsx)("i",{children:"Sign in to manage schedule"}):null:e.props.hide?Object(f.jsx)("i",{children:"Sign in to manage schedule"}):null}})}))]}),Object(f.jsx)(v.a,{fluid:"xl",children:Object(f.jsxs)(T.a,{striped:!0,bordered:!0,hover:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Mod"}),Object(f.jsx)("th",{children:"A"}),Object(f.jsx)("th",{children:"B"}),Object(f.jsx)("th",{children:"I"}),Object(f.jsx)("th",{children:"C"}),Object(f.jsx)("th",{children:"D"})]})}),Object(f.jsxs)("tbody",{children:[this.renderHelper(1),this.renderHelper(2),this.renderHelper(3),this.renderHelper(4),this.renderHelper(5),this.renderHelper(6),this.renderHelper(7),this.renderHelper(8)]})]})})]})}}]),r}(a.Component);var E=function(){return Object(f.jsxs)("div",{className:"Home",children:[Object(f.jsx)(k,{active:"home"}),Object(f.jsx)(v.a,{children:Object(f.jsx)("h1",{children:"404 Not Found"})})]})};n.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/",exact:!0,component:I}),Object(f.jsx)(o.a,{path:"/home",exact:!0,component:I}),Object(f.jsx)(o.a,{path:"/scheduler",exact:!0,component:B}),Object(f.jsx)(o.a,{path:"/view",exact:!0,children:Object(f.jsx)(B,{hide:!0})}),Object(f.jsx)(o.a,{path:"/scheduler/edit",exact:!0,children:Object(f.jsx)(B,{edit:!0})}),Object(f.jsx)(o.a,{component:E})]})})}),document.getElementById("root"))},62:function(e,t,r){}},[[132,1,2]]]);
//# sourceMappingURL=main.d366ef60.chunk.js.map