(this["webpackJsonpthe-occasion"]=this["webpackJsonpthe-occasion"]||[]).push([[0],{244:function(e,t,a){e.exports=a.p+"static/media/loginpic.c40f4025.png"},278:function(e,t,a){e.exports=a(509)},283:function(e,t,a){},284:function(e,t,a){},305:function(e,t,a){},368:function(e,t,a){},369:function(e,t,a){},475:function(e,t,a){},494:function(e,t,a){},495:function(e,t,a){},508:function(e,t,a){},509:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a.n(n),o=a(70),l=a(0),c=a.n(l),i=a(10),s=a.n(i),u=(a(283),a(284),a(33)),m=a(29),d=a(43),p=a(44),g=a(47),h=a(46),f=a(510),E=a(518),b=a(119),v=a(65),k=a(511),y=a(512),C=a(523),O=a(62),j=a(34),w=a(527),S=a(528),I=a(244),R=a.n(I),N=a(52),x=a(71),B=a.n(x),_="http://localhost:5001",T={headers:{"Content-Type":"application/json"}};B.a.defaults.withCredentials=!0;var F=function(e){console.log(e),fetch(_+"/api/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})},M=function(e){return B.a.post(_+"/api/session",JSON.stringify(e),T)},P=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,n,o,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(_+"/api/session",{credentials:"include"});case 2:return t=e.sent,console.log("response is ",t),e.prev=4,e.next=7,t.json();case 7:n=e.sent,console.log("the out put ",n),o=n.userId,l=n.username,c={userId:o,username:l},console.log("user is ",c),c&&(a={session:c}),console.log("preloaded state is in try  ",a),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),a={};case 19:return console.log("preloaded state is ",a),e.abrupt("return",a);case 21:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}(),U=function(e){return{type:"RECEIVE_ERRORS",message:e.message}},H=function(e){return{type:"RECEIVE_CURRENT_USER",user:e}},D=(a(305),f.a.Header),L=f.a.Content,V=E.a.Title,A=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleUsernameInput=function(e){n.setState({username:e.target.value})},n.handlePasswordInput=function(e){n.setState({password:e.target.value})},n.handleLogin=function(){var e={email:n.state.username,password:n.state.password};return n.props.login(e),c.a.createElement(m.a,{to:"/"})},n.state={username:"",password:""},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(f.a,null,c.a.createElement(D,{className:"header"},c.a.createElement(V,{className:"title-header",style:{color:"white",padding:"15px"},level:3},"The Occasion")),c.a.createElement(L,{className:"content"},c.a.createElement(b.a,null,c.a.createElement(v.a,{span:11},c.a.createElement("img",{id:"login-pic",src:R.a})),c.a.createElement(k.a,{type:"vertical",style:{height:"100%"}}),c.a.createElement(v.a,{className:"login-title",span:11},c.a.createElement(V,{level:3},"LogIn"),c.a.createElement(y.a,{direction:"vertical"},c.a.createElement(C.a,{className:"input-login",onChange:function(t){return e.handleUsernameInput(t)},placeholder:"Enter your username",prefix:c.a.createElement(w.a,{className:"site-form-item-icon"}),suffix:c.a.createElement(O.a,{title:"Extra information"},c.a.createElement(S.a,{style:{color:"rgba(0,0,0,.45)"}}))}),c.a.createElement(C.a.Password,{onChange:function(t){return e.handlePasswordInput(t)},className:"input-login",placeholder:"input password"}),c.a.createElement(j.a,{onClick:this.handleLogin,className:"header",type:"primary",block:!0},"LogIn"),c.a.createElement(u.b,{to:"/signup"},"Signup")))))))}}]),a}(l.Component),Y=Object(N.b)((function(e){return{errors:e.errors}}),(function(e){return{login:function(t){return e(function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:M(e).then((function(e){if(console.log(e),"OK"===e.statusText)return a(H(e.data))})).catch((function(e){return console.log("error comes",e.response.data),a(U(e.response.data))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(A),z=Object(N.b)((function(e){return{errors:e.errors}}),(function(e){return{signup:function(t){return e(function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:return n=t.sent,t.next=5,n.json();case 5:if(o=t.sent,!n.ok){t.next=8;break}return t.abrupt("return",a(H(o)));case 8:return t.abrupt("return",a(U(o)));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.errors,a=e.signup;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Signup"),c.a.createElement("p",null,t),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={username:e.target[0].value,email:e.target[1].value,password:e.target[2].value};a(t)}},c.a.createElement("label",null,"Username:",c.a.createElement("input",{type:"text",name:"username"})),c.a.createElement("label",null,"Email:",c.a.createElement("input",{type:"email",name:"email"})),c.a.createElement("label",null,"Password:",c.a.createElement("input",{type:"password",name:"password"})),c.a.createElement("input",{type:"submit",value:"Submit"})),c.a.createElement(u.b,{to:"/login"},"Login"))})),G=(Object(N.b)((function(e){return{session:e.session}}),(function(e){return{logout:function(){return e(function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.defaults.withCredentials=!0,console.log("before the axios"),B.a.delete(_+"/api/session");case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,!a.ok){e.next=8;break}return e.abrupt("return",t({type:"LOGOUT_CURRENT_USER"}));case 8:return e.abrupt("return",t(U(n)));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.logout,a=e.session;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Hi ",a.username),c.a.createElement("p",null,"You are now logged in!"),c.a.createElement("button",{onClick:t},"Logout"))})),a(90)),q=(a(367),a(368),a(94)),K=a(514),W=a(525),J=a(515),Q=a(532),$=a(533),X=a(534),Z=a(535),ee=a(536),te=a(537),ae=a(257),ne=a(517),re=a(147),oe=a(521),le=a(524),ce=a(41),ie=a(40),se=a(82),ue=a(520),me=a(519),de=a(522),pe=a(126),ge=a(58),he=a.n(ge),fe={headers:{"Content-Type":"application/json"}};B.a.defaults.withCredentials=!0;var Ee=function(e){return B.a.get("http://localhost:5001/"+e)},be=function(e,t){return B.a.put("http://localhost:5001/"+e,JSON.stringify(t),fe)},ve=function(e){return function(e,t){return B.a.post("http://localhost:5001/"+e,JSON.stringify(t),fe)}("api/bookings",e)},ke=a(252);a(274);ke.a.config({top:100});for(var ye,Ce,Oe,je=function(e){ke.a.success(e)},we=function(e){ke.a.error("ERR: "+e)},Se=(a(369),se.a.Option),Ie=["DD/MM/YYYY","DD/MM/YY"],Re=c.a.createElement(ue.a.Item,{name:"prefix",noStyle:!0},c.a.createElement(se.a,{style:{width:70}},c.a.createElement(Se,{value:"91"},"+91"),c.a.createElement(Se,{value:"86"},"+86"),c.a.createElement(Se,{value:"87"},"+87"))),Ne=function(e){var t=e.onCreate,a=e.onCancel,n=(e.date,e.loading),r=e.setState,o=e.state,i=e.modelload,s=e.isbooked,u=e.form,m=e.cancelButtonLoading,d=e.onCancelBooking;Object(l.useEffect)((function(){u.setFieldsValue(o)}));var p=function(e){null!==e&&void 0!==e&&(console.log("in the if block0",e),e instanceof he.a?r(Object(ie.a)(Object(ie.a)({},o),{},{Booking_date:e})):r(Object(ie.a)(Object(ie.a)({},o),{},Object(G.a)({},e.target.name,e.target.value))))},g=function(){u.validateFields().then((function(e){u.resetFields(),t(e)})).catch((function(e){console.log("Validate Failed:",e)}))};return c.a.createElement(me.a,{visible:!0,title:"Booking Form",cancelText:"Cancel",onCancel:a,footer:[c.a.createElement(j.a,{key:"back",onClick:a},"Return"),s?c.a.createElement(j.a,{key:"submit",type:"primary",loading:n,onClick:g,disabled:i},"Update"):c.a.createElement(j.a,{key:"submit",type:"primary",loading:n,onClick:g,disabled:i},"Book")]},c.a.createElement(ae.a,{tip:"Loading...",spinning:i},c.a.createElement(ue.a,{form:u,layout:"vertical",name:"form_in_modal"},c.a.createElement(ue.a.Item,{name:"Customer_Name",label:"Customer Name",rules:[{required:!0,message:"Please input the Customer name!"}]},c.a.createElement(C.a,{name:"Customer_Name",onChange:p})),c.a.createElement(ue.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}]},c.a.createElement(C.a,{name:"phone",addonBefore:Re,style:{width:"100%"},onChange:p})),c.a.createElement(ue.a.Item,{name:"Occasion",label:"Ocassion",rules:[{required:!0,message:"Please input the  Occasion"}]},c.a.createElement(C.a,{name:"Occasion",onChange:p})),c.a.createElement(ue.a.Item,{name:"Booking_date",label:"Booking Date",style:{display:"inline-block",width:"calc(50% - 8px)"},rules:[{required:!0,message:"Please input the booking date"}]},c.a.createElement(de.a,{disabled:!s,name:"Booking_date",format:Ie,onChange:p})),c.a.createElement(ue.a.Item,{name:"paid",label:"Advance Paid (in rupees)"},c.a.createElement(C.a,{name:"paid",onChange:p})),c.a.createElement(ue.a.Item,{name:"Due",label:"Due (in rupees)"},c.a.createElement(C.a,{name:"Due",onChange:p})),c.a.createElement(ue.a.Item,{name:"Booking_type",label:"Booking type",className:"collection-create-form_last-form-item"},c.a.createElement(pe.default.Group,{name:"Booking_type",onChange:p},c.a.createElement(pe.default,{value:"Provisional"},"Provisional"),c.a.createElement(pe.default,{value:"paid"},"Paid"))),c.a.createElement(ue.a.Item,{name:"Comments",label:"Comments",onChange:p},c.a.createElement(C.a,{name:"Comments"})),s?c.a.createElement(ue.a.Item,{name:"Cancel_booking"},c.a.createElement(j.a,{type:"text",size:"large",danger:!0,loading:m,onClick:d},"Cancel Booking")):null)))},xe=function(e){var t=Object(l.useState)(!0),a=Object(ce.a)(t,2),n=a[0],r=(a[1],Object(l.useState)(!1)),o=Object(ce.a)(r,2),i=o[0],s=o[1],u=Object(l.useState)(!1),m=Object(ce.a)(u,2),d=m[0],p=m[1],g=Object(l.useState)(!1),h=Object(ce.a)(g,2),f=h[0],E=h[1],b=Object(l.useState)({Customer_Name:"",phone:"",Occasion:"",Booking_date:e.date,paid:"",Due:"",Booking_type:"Provisional",Comments:""}),v=Object(ce.a)(b,2),k=v[0],y=v[1],C=Object(l.useState)(!0),O=Object(ce.a)(C,2),j=O[0],w=O[1],S=ue.a.useForm(),I=Object(ce.a)(S,1)[0];Object(l.useEffect)((function(){var t,a={},n=(e.date&&e.date.format("YYYY-MM-DD")).split("-");a.day=n[2],a.month=n[1],a.year=n[0],(t=a,Ee("api/bookings/isbooked?day=".concat(encodeURIComponent(t.day),"&month=").concat(encodeURIComponent(t.month),"&year=").concat(encodeURIComponent(t.year)))).then((function(t){var a;ye=t.data.isBooked,Ce=t.data.bookingId,E(t.data.isBooked),ye?(a=Ce,Ee("api/bookings/".concat(a))).then((function(t){y(Object(ie.a)(Object(ie.a)({},k),{},{Customer_Name:t.data.customerName,phone:t.data.phoneNo,Occasion:t.data.ocassion,Booking_date:e.date,paid:"",Due:"",Booking_type:"",Comments:""})),w(!1)})):w(!1)}))}),[]);return c.a.createElement("div",null,c.a.createElement(Ne,{visible:n,onCreate:function(t){var a,n;s(!0),f?(a=Ce,n=k,be("api/bookings/".concat(a),n)).then((function(){e.onClose(),s(!1),je("Booking Succesfully Updated!!!")})).catch((function(e){return we(e.response.data)})):ve(k).then((function(){e.onClose(),s(!1),je("Booking Successful!!!")})).catch((function(e){return we(e.response.data)}))},date:e.date,loading:i,cancelButtonLoading:d,setState:y,state:k,modelload:j,setModelload:w,isbooked:f,form:I,onCancelBooking:function(){s(!0),p(!0)},onCancel:function(){e.onClose()}}))},Be=(a(475),function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getListData=function(e){var t={},a=n.props.bookings;if(a.bookings)if(e.date()<=15){for(var r=0;r<Math.ceil(a.bookings.length/2);r++)if(parseInt(a.bookings[r].date)===e.date()&&parseInt(a.bookings[r].month)===e.month()+1){t.weightage=a.bookings[r].weight,a.bookings[r].isBooked&&(t.bookings=a.bookings[r].booking);break}}else for(var o=Math.ceil(a.bookings.length/2);o<a.bookings.length;o++)if(parseInt(a.bookings[o].date)===e.date()&&parseInt(a.bookings[o].month)===e.month()+1){t.weightage=a.bookings[o].weight,a.bookings[o].isBooked&&(t.bookings=a.bookings[o].booking);break}return t},n.dateCellRender=function(e){var t=n.getListData(e);return t.bookings?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"divcustom",style:{height:"100%",width:"100%",background:"#40a9ff",opacity:"90"},onMouseEnter:function(){return n.handleMouseHover(e._d)},onMouseLeave:function(){return n.handleMouseHover("")}},new String(n.state.isHovering).valueOf()===new String(e._d).valueOf()?c.a.createElement(oe.a,{className:"weightage",type:"circle",percent:t.weightage,width:60}):c.a.createElement("ul",{className:"events"},c.a.createElement("li",null,c.a.createElement(W.a,{status:"error",text:t.bookings.customerName})),c.a.createElement("li",null,c.a.createElement(W.a,{status:"error",text:t.bookings.ocassion}))))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"divcustom",style:{height:"100%",width:"100%"},onMouseEnter:function(){return n.handleMouseHover(e._d)},onMouseLeave:function(){return n.handleMouseHover("")}},new String(n.state.isHovering).valueOf()===new String(e._d).valueOf()&&c.a.createElement(oe.a,{className:"weightage",type:"circle",percent:t.weightage,width:70,format:function(e){return"".concat(e,"%Rise")}})))},n.getMonthData=function(e){if(8===e.month())return 1394},n.monthCellRender=function(e){var t=n.getMonthData(e);return t?c.a.createElement("div",{className:"notes-month"},c.a.createElement("section",null,t),c.a.createElement("span",null,"Backlog number")):null},n.onClose=function(){n.setState({showForm:!1,dateSelected:""})},n.onSelect=function(e){n.setState({showForm:!0,dateSelected:e})},n.onPanelChange=function(e,t){n.props.fetchBookingsFunction(e.month()+1,e.year())},n.handleMouseHover=n.handleMouseHover.bind(Object(re.a)(n)),n.state={showForm:!1,isHovering:"",dateSelected:"",loading:!1},n}return Object(p.a)(a,[{key:"handleMouseHover",value:function(e){var t=this;this.setState((function(){return t.toggleHoverState(e)}))}},{key:"toggleHoverState",value:function(e){return{isHovering:e}}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(le.a,{dateCellRender:this.dateCellRender,monthCellRender:this.monthCellRender,onSelect:this.onSelect,onPanelChange:this.onPanelChange}),this.state.showForm&&c.a.createElement(xe,{date:this.state.dateSelected,onClose:this.onClose}))}}]),a}(l.Component)),_e=function(e){return function(t){t({type:"FETCH_BOOKING_REQUEST"}),function(e){return Ee("api/bookings?month=".concat(encodeURIComponent(e.month),"&year=").concat(encodeURIComponent(e.year)))}(e).then((function(e){var a=e.data;t(function(e){return{type:"FETCH_BOOKING_SUCCESS",payload:e}}(a))})).catch((function(e){var a=e.response.data;t({type:"FETCH_BOOKING_ERROR",payload:a})}))}},Te=E.a.Paragraph,Fe=0,Me=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).fetchAllBookings=function(e,t){e&&t&&(n.setState({month:e,year:t}),Fe=1),Fe+=1,n.props.fetchBookings(e||n.state.month,t||n.state.year)},n.onChange=function(e){n.setState({Notes:e})},n.state={Notes:"Make notes that u remember",error:!!n.props.bookings.error,month:he()().month()+1,year:(new Date).getFullYear()},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.fetchAllBookings(null,null),Oe=setInterval((function(){e.fetchAllBookings()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(Oe)}},{key:"render",value:function(){return this.state.error?we(this.props.boookings.error):c.a.createElement(c.a.Fragment,null,c.a.createElement(ae.a,{tip:"Loading...",spinning:1===Fe&&this.props.bookings.loading},c.a.createElement(b.a,{gutter:15,style:{padding:"15px",height:"100%"}},c.a.createElement(v.a,{span:18},c.a.createElement(Be,{bookings:this.props.bookings.bookings,fetchBookingsFunction:this.fetchAllBookings})),c.a.createElement(v.a,{span:6},c.a.createElement(b.a,null,c.a.createElement(ne.a,{title:"Notes",bordered:!1,style:{width:"100%",height:"370px"}},c.a.createElement(Te,{editable:{onChange:this.onChange}},this.state.Notes))),c.a.createElement("br",null),c.a.createElement(b.a,null,c.a.createElement(ne.a,{title:"Statistics in Month",bordered:!1,style:{width:"100%"}},this.props.bookings.bookings.stats&&c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("strong",null,"Booked")," - ",this.props.bookings.bookings.stats.booked),c.a.createElement("p",null,c.a.createElement("strong",null,"Available")," - ",this.props.bookings.bookings.stats.available),c.a.createElement("p",null,c.a.createElement("strong",null,"Provisinal Bookings")," - 17"),c.a.createElement("p",null,c.a.createElement("strong",null,"Cancelled ")," - ",this.props.bookings.bookings.stats.cancelled)),c.a.createElement(k.a,{orientation:"left"},"Date Wieghtage"),c.a.createElement("p",null,c.a.createElement("strong",null,"High")," - 5"),c.a.createElement("p",null,c.a.createElement("strong",null,"Medium")," - 15"),c.a.createElement("p",null,c.a.createElement("strong",null,"Low")," - 10")))))))}}]),a}(l.Component),Pe=Object(N.b)((function(e){var t=e.bookingsReducer;return console.log(t),{bookings:t}}),(function(e){return{fetchBookings:function(t,a){return e(_e({month:t,year:a}))}}}))(Me),Ue=(a(494),Pe),He=a(529),De=a(530),Le=a(531),Ve=se.a.Option,Ae=de.a.RangePicker,Ye=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).refreshPage=function(){window.location.reload()},n.increase=function(){var e=n.state.percent+10;e>100&&(e=100),n.setState({percent:e})},n.decline=function(){var e=n.state.percent-10;e<0&&(e=0),n.setState({percent:e})},n.onChangeRangePicker=function(e){n.setState({rangepicker:e})},n.onChangeDatePicker=function(e){n.setState({datepicker:e})},n.onChangeSelect=function(e){n.setState({type:e})},n.verfication=function(){return n.state.rangepicker||n.state.datepicker?n.state.percent<=0?(we("percentage is required"),n.setState({error:!0,errorMessage:"percentage is required"}),!1):null!==n.state.type||(we("Choose type"),n.setState({error:!0,errorMessage:"Choose type"}),!1):(we("one of the datepicker is required to fill"),n.setState({error:!0,errorMessage:"one of the datepicker is required to fill"}),!1)},n.onClickButton=function(){(n.setState({error:!1}),n.verfication())&&(n.setState({loadingButton:!0}),function(e){return be("api/weight",e)}({rangepicker:n.state.rangepicker,datepicker:n.state.datepicker,percent:n.state.percent,type:n.state.type}).then((function(e){je("Weightage assign successfully!!!!")})).catch((function(e){console.log(e.response.data),we(e.response.data)})).finally((function(){n.setState({loadingButton:!1})})))},n.state={rangepicker:null,datepicker:null,percent:0,type:null,error:!1,errorMessage:"",loadingButton:!1},n}return Object(p.a)(a,[{key:"render",value:function(){return console.log(this.state.rangepicker),c.a.createElement("div",{className:"Weightagemain"},c.a.createElement("div",{className:"weightagediv"},c.a.createElement(y.a,{direction:"vertical",size:20},c.a.createElement(y.a,{direction:"horizontal",size:20},c.a.createElement(y.a,{direction:"vertical",size:2},c.a.createElement(Ae,{onChange:this.onChangeRangePicker}),c.a.createElement("h1",null," OR"),c.a.createElement(de.a,{onChange:this.onChangeDatePicker})),c.a.createElement("div",null,c.a.createElement(oe.a,{type:"circle",percent:this.state.percent}),c.a.createElement(j.a.Group,null,c.a.createElement(j.a,{onClick:this.decline,icon:c.a.createElement(He.a,null)}),c.a.createElement(j.a,{onClick:this.increase,icon:c.a.createElement(De.a,null)}))),c.a.createElement(se.a,{defaultValue:"choose type",style:{width:180},onChange:this.onChangeSelect},c.a.createElement(Ve,{value:"Rise"},"Rise"),c.a.createElement(Ve,{value:"fall"},"Fall")),c.a.createElement("br",null)),this.state.error?c.a.createElement(O.a,{title:this.state.errorMessage,placement:"bottom",color:"red",onClick:this.onClickButton},c.a.createElement(j.a,{type:"primary",danger:!0,size:"large",icon:c.a.createElement(Le.a,null)}," save ")):c.a.createElement(j.a,{type:"primary",size:"large",onClick:this.onClickButton,loading:this.state.loadingButton},"Save"))))}}]),a}(l.Component),ze=(a(495),Ye),Ge=a(272),qe=a(275),Ke=a(526),We=a(513),Je=a(516),Qe=function(e){var t=e.visible,a=e.onCreate,n=e.onCancel,r=ue.a.useForm(),o=Object(ce.a)(r,1)[0];return c.a.createElement(me.a,{visible:t,title:"Create a new User",okText:"OK",cancelText:"Cancel",onCancel:n,onOk:function(){o.validateFields().then((function(e){o.resetFields(),a(e)})).catch((function(e){console.log("Validate Failed:",e)}))}},c.a.createElement(ue.a,{form:o,layout:"vertical",name:"form_in_modal",initialValues:{modifier:"public"}},c.a.createElement(ue.a.Item,{name:"title",label:"Title",rules:[{required:!0,message:"Please input the title of collection!"}]},c.a.createElement(C.a,null)),c.a.createElement(ue.a.Item,{name:"description",label:"Description"},c.a.createElement(C.a,{type:"textarea"})),c.a.createElement(ue.a.Item,{name:"modifier",className:"collection-create-form_last-form-item"},c.a.createElement(pe.default.Group,null,c.a.createElement(pe.default,{value:"public"},"Public"),c.a.createElement(pe.default,{value:"private"},"Private")))))},$e=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).setVisible=function(e){n.setState({visible:e})},n.onCreate=function(e){console.log("Received values of form: ",e),n.setVisible(!1)},n.state={visible:!1},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(Qe,{visible:this.props.showModel,onCreate:this.onCreate,onCancel:function(){e.props.onClose()}}))}}]),a}(l.Component),Xe=[],Ze=0;Ze<100;Ze++)Xe.push({key:Ze.toString(),name:"Edrward ".concat(Ze),age:32,address:"London Park no. ".concat(Ze)});var et=function(e){var t=e.editing,a=e.dataIndex,n=e.title,r=e.inputType,o=(e.record,e.index,e.children),l=Object(qe.a)(e,["editing","dataIndex","title","inputType","record","index","children"]),i="number"===r?c.a.createElement(Ke.a,null):c.a.createElement(C.a,null);return c.a.createElement("td",l,t?c.a.createElement(ue.a.Item,{name:a,style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(n,"!")}]},i):o)},tt=function(){var e=ue.a.useForm(),t=Object(ce.a)(e,1)[0],a=Object(l.useState)(Xe),n=Object(ce.a)(a,2),i=n[0],s=n[1],u=Object(l.useState)(""),m=Object(ce.a)(u,2),d=m[0],p=m[1],g=Object(l.useState)(!1),h=Object(ce.a)(g,2),f=h[0],E=h[1],b=function(e){return e.key===d},v=function(){p("")},k=function(){var e=Object(o.a)(r.a.mark((function e(a){var n,o,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.validateFields();case 3:n=e.sent,o=Object(Ge.a)(i),(l=o.findIndex((function(e){return a===e.key})))>-1?(c=o[l],o.splice(l,1,Object(ie.a)(Object(ie.a)({},c),n)),s(o),p("")):(o.push(n),s(o),p("")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Validate Failed:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),y=[{title:"name",dataIndex:"name",width:"25%",editable:!0},{title:"age",dataIndex:"age",width:"15%",editable:!0},{title:"address",dataIndex:"address",width:"40%",editable:!0},{title:"operation",dataIndex:"operation",render:function(e,a){return b(a)?c.a.createElement("span",null,c.a.createElement("a",{href:"javascript:;",onClick:function(){return k(a.key)},style:{marginRight:8}},"Save"),c.a.createElement(We.a,{title:"Sure to cancel?",onConfirm:v},c.a.createElement("a",null,"Cancel"))):c.a.createElement("a",{disabled:""!==d,onClick:function(){return function(e){t.setFieldsValue(Object(ie.a)({name:"",age:"",address:""},e)),p(e.key)}(a)}},"Edit")}}].map((function(e){return e.editable?Object(ie.a)(Object(ie.a)({},e),{},{onCell:function(t){return{record:t,inputType:"age"===e.dataIndex?"number":"text",dataIndex:e.dataIndex,title:e.title,editing:b(t)}}}):e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{onClick:function(){E(!0)},type:"primary"},"Add New User"),c.a.createElement(ue.a,{form:t,component:!1},c.a.createElement(Je.a,{className:"usertable",components:{body:{cell:et}},bordered:!0,dataSource:i,columns:y,rowClassName:"editable-row",pagination:{onChange:v}})),c.a.createElement($e,{showModel:f,onClose:function(){E(!1)}}))},at=E.a.Title,nt=(E.a.Paragraph,E.a.Text,function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"adduseragemain"},c.a.createElement("div",{className:"adduserdiv"},c.a.createElement(E.a,{className:"addusertitle"},c.a.createElement(at,{level:1,className:"addusertitle"},"Add User")),c.a.createElement(tt,{className:"usertable"})))}}]),a}(l.Component)),rt=(a(508),nt),ot=q.a.SubMenu,lt=f.a.Header,ct=f.a.Content,it=f.a.Sider,st=E.a.Title,ut=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e,t=c.a.createElement("span",null,"Signed as ","Lokesh Pamnani"),a=c.a.createElement(q.a,{mode:"inline",style:{height:"100%",borderRight:0}},c.a.createElement(q.a.Item,{key:"1",icon:c.a.createElement(Q.a,null)},c.a.createElement("span",null,"Settings"),c.a.createElement(u.b,{to:"/home"})),c.a.createElement(q.a.Item,{key:"2",icon:c.a.createElement($.a,null)},c.a.createElement("span",null,"Logout"),c.a.createElement(u.b,{to:"/weightage"})));return c.a.createElement("div",null,c.a.createElement(f.a,null,c.a.createElement(lt,{className:"header"},c.a.createElement(st,{className:"title-header",style:{color:"white",padding:"15px",float:"left"},level:3},"The Occasion"),c.a.createElement("div",{style:{float:"right"}},c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(st,{className:"title-header",style:{color:"white",padding:"15px",float:"left"},level:3},"Venue name"),c.a.createElement(K.a,{placement:"bottom",title:"Notifications",content:"content",trigger:"click"},c.a.createElement("span",{style:{marginRight:"20px"}},c.a.createElement(W.a,{dot:!0,style:{marginTop:"1.0px"}},c.a.createElement(X.a,{style:{fontSize:"1.5rem",color:"white",margin:"auto",marginTop:"1.0px"}})))),c.a.createElement(K.a,{placement:"bottomRight",title:t,content:a,trigger:"click"},c.a.createElement(J.a,{style:(e={float:"right"},Object(G.a)(e,"float","right"),Object(G.a)(e,"marginTop","1.0rem"),e),size:32,icon:c.a.createElement(w.a,null),onClick:function(){return console.log("click")}}))))),c.a.createElement(f.a,null,c.a.createElement(it,{width:200,className:"site-layout-background"},c.a.createElement(q.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},c.a.createElement(q.a.Item,{key:"1",icon:c.a.createElement(Z.a,null)},c.a.createElement("span",null,"Home"),c.a.createElement(u.b,{to:"/home"})),c.a.createElement(q.a.Item,{key:"2"},c.a.createElement("span",null,"Weightage"),c.a.createElement(u.b,{to:"/weightage"})),c.a.createElement(q.a.Item,{key:"3"},c.a.createElement("span",null,"Add User"),c.a.createElement(u.b,{to:"/adduser"})),c.a.createElement(q.a.Item,{key:"4"},"option4"),c.a.createElement(ot,{key:"sub2",icon:c.a.createElement(ee.a,null),title:"subnav 2"},c.a.createElement(q.a.Item,{key:"5"},"option5"),c.a.createElement(q.a.Item,{key:"6"},"option6"),c.a.createElement(q.a.Item,{key:"7"},"option7"),c.a.createElement(q.a.Item,{key:"8"},"option8")),c.a.createElement(ot,{key:"sub3",icon:c.a.createElement(te.a,null),title:"subnav 3"},c.a.createElement(q.a.Item,{key:"9"},"option9"),c.a.createElement(q.a.Item,{key:"10"},"option10"),c.a.createElement(q.a.Item,{key:"11"},"option11"),c.a.createElement(q.a.Item,{key:"12"},"option12")))),c.a.createElement(f.a,null,c.a.createElement(ct,{className:"site-layout-background",style:{background:"#ececec",margin:0,height:"100%"}},c.a.createElement(m.d,null,c.a.createElement(m.b,{path:"/home",component:Ue}),c.a.createElement(m.b,{path:"/",exact:!0,component:Ue}),c.a.createElement(m.b,{path:"/weightage",component:ze}),c.a.createElement(m.b,{path:"/adduser",component:rt})))))))}}]),a}(l.Component),mt=function(e){var t=e.session.userId;return{loggedIn:Boolean(t)}},dt=Object(m.g)(Object(N.b)(mt)((function(e){var t=e.loggedIn,a=e.path,n=e.component;return c.a.createElement(m.b,{path:a,render:function(e){return t?c.a.createElement(m.a,{to:"/home"}):c.a.createElement(n,e)}})}))),pt=Object(m.g)(Object(N.b)(mt)((function(e){var t=e.loggedIn,a=e.path,n=e.component;return c.a.createElement(m.b,{path:a,render:function(e){return t?c.a.createElement(n,e):c.a.createElement(m.a,{to:"/login"})}})})));var gt=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u.a,null,c.a.createElement(m.d,null,c.a.createElement(dt,{path:"/login",component:Y}),c.a.createElement(dt,{path:"/signup",component:z}),c.a.createElement(pt,{path:"/",component:ut}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ht=a(87),ft=a(269),Et={userId:null,username:null},bt={loading:!1,bookings:[],error:""},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKING_REQUEST":return Object(ie.a)(Object(ie.a)({},e),{},{loading:!0});case"FETCH_BOOKING_SUCCESS":return{loading:!1,bookings:t.payload,error:""};case"FETCH_BOOKING_ERROR":return{loading:!1,bookings:[],error:t.payload};default:return e}},kt=Object(ht.c)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.user;switch(Object.freeze(e),a){case"RECEIVE_CURRENT_USER":return n;case"LOGOUT_CURRENT_USER":return Et;default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.message,n=t.type;switch(Object.freeze(e),n){case"RECEIVE_ERRORS":return a;case"RECEIVE_CURRENT_USER":case"CLEAR_ERRORS":return"";default:return e}},bookingsReducer:vt}),yt=function(e){var t=function(e){return Object(ht.d)(kt,e,Object(ht.a)(ft.a))}(e);s.a.render(c.a.createElement(N.a,{store:t},c.a.createElement(u.a,null,c.a.createElement(gt,null))),document.getElementById("root")),window.getState=t.getState};Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=yt,e.next=3,P();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[278,1,2]]]);
//# sourceMappingURL=main.f85627f3.chunk.js.map