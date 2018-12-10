(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,s){e.exports=s.p+"static/media/tomato.736d7de1.png"},21:function(e,t,s){e.exports=s.p+"static/media/restStart.25763938.wav"},22:function(e,t,s){e.exports=s.p+"static/media/restEnd.00970d07.wav"},23:function(e,t,s){e.exports=s(38)},28:function(e,t,s){},30:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s.n(a),n=s(16),i=s.n(n),o=(s(28),s(2)),l=s(3),c=s(7),p=s(4),m=s(6),u=(s(30),s(5)),h=s(9),d=s(19),k=s(10),v={work:5,rest:4},b={render:"visible",isWorking:!1,isResting:!1},f=Object(h.c)({makeClock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WORK_UPDATE":return Object(k.a)({},e,{work:t.payload});case"REST_UPDATE":return Object(k.a)({},e,{rest:t.payload});default:return e}},render:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RENDER_UPDATE":return Object(k.a)({},e,{render:t.payload,isWorking:t.isWorking,isResting:t.isResting});default:return e}}}),g=[d.a],E=Object(h.e)(f,{},Object(h.d)(h.a.apply(void 0,g),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),w=s(8),y=function(e){E.dispatch({type:"WORK_UPDATE",payload:e})},C=function(e){E.dispatch({type:"REST_UPDATE",payload:e})},O=function(e){function t(e){var s;return Object(o.a)(this,t),(s=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={workCounter:5,restCounter:4},s.timeChange=s.timeChange.bind(Object(w.a)(Object(w.a)(s))),s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"timeChange",value:function(e){if("fas fa-angle-down decrementer-Work"===e.target.className)if(this.state.workCounter>=2){var t=this.state.workCounter-1;this.setState({workCounter:this.state.workCounter-1}),y(t)}else console.log("We can't do negative time!");else if("fas fa-angle-up incrementer-Work"===e.target.className)if(this.state.workCounter<=59){var s=this.state.workCounter+1;this.setState({workCounter:this.state.workCounter+1}),y(s)}else console.log("More than hour?! You don't even need a Pomodoro Clock!");else if("fas fa-angle-down decrementer-Rest"===e.target.className)if(this.state.restCounter>=2){var a=this.state.restCounter-1;this.setState({restCounter:this.state.restCounter-1}),C(a)}else console.log("We can't do negative time!");else if("fas fa-angle-up incrementer-Rest"===e.target.className)if(this.state.restCounter<=59){var r=this.state.restCounter+1;this.setState({restCounter:this.state.restCounter+1}),C(r)}else console.log("More than hour?! You don't even need a Pomodoro Clock!")}},{key:"render",value:function(){return"Work"===this.props.phase&&"visible"===this.props.visibility?r.a.createElement("div",{className:"timemaker-"+this.props.phase},r.a.createElement("h2",{className:"phase-maker"},this.props.phase),r.a.createElement("div",{className:"timer-setter"},r.a.createElement("i",{className:"fas fa-angle-down decrementer-"+this.props.phase,onClick:this.timeChange}),r.a.createElement("span",{id:"l",className:"time-adjuster"},this.state.workCounter),r.a.createElement("i",{className:"fas fa-angle-up incrementer-"+this.props.phase,onClick:this.timeChange}))):"Work"===this.props.phase&&"invisible"===this.props.visibility?r.a.createElement("div",{className:"timemaker-"+this.props.phase},r.a.createElement("h2",{className:"phase-maker"},this.props.phase),r.a.createElement("div",{className:"timer-setter"},r.a.createElement("span",{id:"l",className:"time-adjuster"},this.state.workCounter))):"Rest"===this.props.phase&&"visible"===this.props.visibility?r.a.createElement("div",{className:"timemaker-"+this.props.phase},r.a.createElement("h2",{className:"phase-maker"},this.props.phase),r.a.createElement("div",{className:"timer-setter"},r.a.createElement("i",{className:"fas fa-angle-down decrementer-"+this.props.phase,onClick:this.timeChange}),r.a.createElement("span",{id:"l",className:"time-adjuster"},this.state.restCounter),r.a.createElement("i",{className:"fas fa-angle-up incrementer-"+this.props.phase,onClick:this.timeChange}))):"Rest"===this.props.phase&&"invisible"===this.props.visibility?r.a.createElement("div",{className:"timemaker-"+this.props.phase},r.a.createElement("h2",{className:"phase-maker"},this.props.phase),r.a.createElement("div",{className:"timer-setter"},r.a.createElement("span",{className:"time-adjuster"},this.state.restCounter))):void 0}}]),t}(a.Component),j=Object(u.b)(function(e){return{visibility:e.render.render,rest:e.makeClock.rest}},{workSet:y,restSet:C})(O),N=function(e,t,s){E.dispatch({type:"RENDER_UPDATE",payload:e,isWorking:t,isResting:s})},S=function(e){function t(e){var s;return Object(o.a)(this,t),(s=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={work:60*s.props.work,rest:60*s.props.rest,time:60*(s.props.work+s.props.rest),interval:"",clock:function(){if(!0===s.state.isCounting){var e,t,a=s.state.time;e=e=parseInt(a/60,10),t=(t=parseInt(a%60,10))<10?"0"+t:t,s.setState({time:s.state.time-1}),document.querySelector("#display-total").innerHTML=e+":"+t,s.state.time<60*s.props.rest&&(N("invisible",!1,!0),s.setState({isWorking:!1,isResting:!0,status:"You are resting."})),s.state.time<0&&(document.querySelector(".start-clock").style.display="inline-block",document.querySelectorAll(".btn-clock").forEach(function(e){e.style.display="none"}),document.querySelector("#display-total").innerHTML=s.props.work+s.props.rest+" total minutes",clearInterval(s.state.interval),N("visible",!1,!1),s.setState({time:60*(s.props.work+s.props.rest),isCounting:!1,status:"Waiting..."}))}},isCounting:!1,isWorking:!1,isResting:!1,status:"Waiting..."},s.Timer=s.Timer.bind(Object(w.a)(Object(w.a)(s))),s.resetTimer=s.resetTimer.bind(Object(w.a)(Object(w.a)(s))),s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"Timer",value:function(){document.querySelector("#display-total").innerHTML===this.props.work+this.props.rest+" total minutes"&&(this.setState({time:60*(this.props.work+this.props.rest),interval:setInterval(this.state.clock,1e3),isCounting:!0,isWorking:!0,isResting:!1,status:"You are working!"}),document.querySelector(".start-clock").style.display="none",document.querySelectorAll(".btn-clock").forEach(function(e){e.style.display="inline-block"}),N("invisible",!0,!1))}},{key:"resetTimer",value:function(){document.querySelector(".start-clock").style.display="inline-block",document.querySelectorAll(".btn-clock").forEach(function(e){e.style.display="none"}),document.querySelector("#display-total").innerHTML=this.props.work+this.props.rest+" total minutes",clearInterval(this.state.interval),N("visible",!1,!1),this.setState({time:60*(this.props.work+this.props.rest),isCounting:!1,isWorking:!1,isResting:!1,status:"Waiting..."})}},{key:"render",value:function(){return r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"status"},this.state.status),r.a.createElement("button",{className:"start-clock",onClick:this.Timer},"Start"),r.a.createElement("button",{className:"btn-clock",onClick:this.resetTimer},"Reset"),r.a.createElement("div",{id:"display-total"},this.props.work+this.props.rest+" total minutes"))}}]),t}(a.Component),R=Object(u.b)(function(e){return{work:e.makeClock.work,rest:e.makeClock.rest}},{reRender:N})(S),T=function(e){function t(e){var s;return Object(o.a)(this,t),(s=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={work:s.props.work,rest:s.props.rest,time:60*(s.props.work+s.props.rest),width:1,interval:"",progression:function(){var e,t=s.state.time,a=document.querySelector(".progress-bar"),r=s.state.width,n=100/(60*(s.props.work+s.props.rest));parseInt(t/60,10),e=(e=parseInt(t%60,10))<10?"0"+e:e,a.style.width=r+"%",s.setState({time:s.state.time-1,width:r+n}),s.state.time<0&&clearInterval(s.state.interval)}},s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){"invisible"===e.render?this.setState({interval:setInterval(this.state.progression,1e3)}):this.setState({interval:clearInterval(this.state.interval),width:1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar"}))}}]),t}(a.Component),W=Object(u.b)(function(e){return{work:e.makeClock.work,rest:e.makeClock.rest,render:e.render.render}},null)(T),_=s(20),A=s.n(_),q=s(21),D=s.n(q),I=s(22),P=s.n(I),L=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(!0===e.isResting)document.querySelector(".tomato").classList.add("jello-horizontal"),new Audio(D.a).play();else if(!1===e.isResting){document.querySelector(".tomato").classList.remove("jello-horizontal"),new Audio(P.a).play()}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"tomato",src:A.a,alt:"Tomato!"}))}}]),t}(a.Component),U=Object(u.b)(function(e){return{isResting:e.render.isResting}},null)(L),M=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{store:E},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"vp-center"},r.a.createElement(U,null),r.a.createElement("h1",null,"A Pomodoro Clock"),r.a.createElement("h2",null,"WORK HARD, ",r.a.createElement("span",{className:"little-text"}," but rest when you need to.")),r.a.createElement(j,{phase:"Work"}),r.a.createElement(j,{phase:"Rest"}),r.a.createElement(R,null)),r.a.createElement(W,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.8d39d4b0.chunk.js.map