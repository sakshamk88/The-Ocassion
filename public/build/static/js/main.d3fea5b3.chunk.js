(this["webpackJsonpthe-occasion"]=this["webpackJsonpthe-occasion"]||[]).push([[0],{244:function(e,t,a){e.exports=a.p+"static/media/loginpic.c40f4025.png"},278:function(e,t,a){e.exports=a(509)},283:function(e,t,a){},284:function(e,t,a){},305:function(e,t,a){},368:function(e,t,a){},369:function(e,t,a){},475:function(e,t,a){},494:function(e,t,a){},495:function(e,t,a){},506:function(e,t,a){},509:function(e,t,a){"use strict";a.r(t);var n=a(45),r=a.n(n),o=a(71),l=a(0),c=a.n(l),i=a(10),s=a.n(i),u=(a(283),a(284),a(36)),m=a(29),d=a(38),p=a(39),g=a(42),h=a(41),E=a(510),f=a(518),b=a(117),v=a(66),k=a(511),y=a(512),C=a(523),O=a(62),S=a(33),j=a(527),w=a(528),R=a(244),I=a.n(R),N=a(52),_=a(64),x=a.n(_),B="http://localhost:5001",U={headers:{"Content-Type":"application/json"}};x.a.defaults.withCredentials=!0;var T=function(e){console.log(e),fetch(B+"/api/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})},F=function(e){return x.a.post(B+"/api/session",JSON.stringify(e),U)},P=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,n,o,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(B+"/api/session",{credentials:"include"});case 2:return t=e.sent,console.log("response is ",t),e.prev=4,e.next=7,t.json();case 7:n=e.sent,console.log("the out put ",n),o=n.userId,l=n.username,c={userId:o,username:l},console.log("user is ",c),c&&(a={session:c}),console.log("preloaded state is in try  ",a),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),a={};case 19:return console.log("preloaded state is ",a),e.abrupt("return",a);case 21:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}(),M=function(e){return{type:"RECEIVE_ERRORS",message:e.message}},H=function(e){return{type:"RECEIVE_CURRENT_USER",user:e}},D=(a(305),E.a.Header),L=E.a.Content,V=f.a.Title,q=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleUsernameInput=function(e){n.setState({username:e.target.value})},n.handlePasswordInput=function(e){n.setState({password:e.target.value})},n.handleLogin=function(){var e={email:n.state.username,password:n.state.password};return n.props.login(e),c.a.createElement(m.a,{to:"/"})},n.state={username:"",password:""},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(E.a,null,c.a.createElement(D,{className:"header"},c.a.createElement(V,{className:"title-header",style:{color:"white",padding:"15px"},level:3},"The Occasion")),c.a.createElement(L,{className:"content"},c.a.createElement(b.a,null,c.a.createElement(v.a,{span:11},c.a.createElement("img",{id:"login-pic",src:I.a})),c.a.createElement(k.a,{type:"vertical",style:{height:"100%"}}),c.a.createElement(v.a,{className:"login-title",span:11},c.a.createElement(V,{level:3},"LogIn"),c.a.createElement(y.a,{direction:"vertical"},c.a.createElement(C.a,{className:"input-login",onChange:function(t){return e.handleUsernameInput(t)},placeholder:"Enter your username",prefix:c.a.createElement(j.a,{className:"site-form-item-icon"}),suffix:c.a.createElement(O.a,{title:"Extra information"},c.a.createElement(w.a,{style:{color:"rgba(0,0,0,.45)"}}))}),c.a.createElement(C.a.Password,{onChange:function(t){return e.handlePasswordInput(t)},className:"input-login",placeholder:"input password"}),c.a.createElement(S.a,{onClick:this.handleLogin,className:"header",type:"primary",block:!0},"LogIn"),c.a.createElement(u.b,{to:"/signup"},"Signup")))))))}}]),a}(l.Component),A=Object(N.b)((function(e){return{errors:e.errors}}),(function(e){return{login:function(t){return e(function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:F(e).then((function(e){if(console.log(e),"OK"===e.statusText)return a(H(e.data))})).catch((function(e){return console.log("error comes",e.response),a(M({message:"LOGIN_ERROR"}))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(q),G=Object(N.b)((function(e){return{errors:e.errors}}),(function(e){return{signup:function(t){return e(function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:return n=t.sent,t.next=5,n.json();case 5:if(o=t.sent,!n.ok){t.next=8;break}return t.abrupt("return",a(H(o)));case 8:return t.abrupt("return",a(M(o)));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.errors,a=e.signup;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Signup"),c.a.createElement("p",null,t),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={username:e.target[0].value,email:e.target[1].value,password:e.target[2].value};a(t)}},c.a.createElement("label",null,"Username:",c.a.createElement("input",{type:"text",name:"username"})),c.a.createElement("label",null,"Email:",c.a.createElement("input",{type:"email",name:"email"})),c.a.createElement("label",null,"Password:",c.a.createElement("input",{type:"password",name:"password"})),c.a.createElement("input",{type:"submit",value:"Submit"})),c.a.createElement(u.b,{to:"/login"},"Login"))})),Y=(a(367),a(368),a(95)),z=a(514),K=a(526),W=a(515),J=a(532),Q=a(533),$=a(534),X=a(535),Z=a(536),ee=a(537),te=a(257),ae=a(517),ne=a(145),re=a(521),oe=a(525),le=a(47),ce=a(164),ie=a(34),se=a(84),ue=a(520),me=a(519),de=a(522),pe=a(124),ge=a(58),he=a.n(ge),Ee={headers:{"Content-Type":"application/json"}};x.a.defaults.withCredentials=!0;var fe=function(e){return x.a.get("http://localhost:5001"+e)},be=function(e,t){return x.a.post("http://localhost:5001"+e,JSON.stringify(t),Ee)},ve=function(e,t){return x.a.put("http://localhost:5001"+e,JSON.stringify(t),Ee)},ke=a(252);a(274);ke.a.config({top:100});var ye,Ce,Oe,Se=function(e){ke.a.success(e)},je=function(e){ke.a.error("ERR: "+e)},we=(a(369),se.a.Option),Re=["DD/MM/YYYY","DD/MM/YY"],Ie=c.a.createElement(ue.a.Item,{name:"prefix",noStyle:!0},c.a.createElement(se.a,{style:{width:70}},c.a.createElement(we,{value:"91"},"+91"),c.a.createElement(we,{value:"86"},"+86"),c.a.createElement(we,{value:"87"},"+87"))),Ne=function(e){var t=e.onCreate,a=e.onCancel,n=(e.date,e.loading),r=e.setState,o=e.state,i=e.modelload,s=e.isbooked,u=e.form,m=e.cancelButtonLoading,d=e.onCancelBooking;Object(l.useEffect)((function(){u.setFieldsValue(o)}));var p=function(e){null!==e&&void 0!==e&&(console.log("in the if block0",e),e instanceof he.a?r(Object(ie.a)(Object(ie.a)({},o),{},{Booking_date:e})):r(Object(ie.a)(Object(ie.a)({},o),{},Object(ce.a)({},e.target.name,e.target.value))))},g=function(){u.validateFields().then((function(e){u.resetFields(),t(e)})).catch((function(e){console.log("Validate Failed:",e)}))};return c.a.createElement(me.a,{visible:!0,title:"Booking Form",cancelText:"Cancel",onCancel:a,footer:[c.a.createElement(S.a,{key:"back",onClick:a},"Return"),s?c.a.createElement(S.a,{key:"submit",type:"primary",loading:n,onClick:g,disabled:i},"Update"):c.a.createElement(S.a,{key:"submit",type:"primary",loading:n,onClick:g,disabled:i},"Book")]},c.a.createElement(te.a,{tip:"Loading...",spinning:i},c.a.createElement(ue.a,{form:u,layout:"vertical",name:"form_in_modal"},c.a.createElement(ue.a.Item,{name:"Customer_Name",label:"Customer Name",rules:[{required:!0,message:"Please input the Customer name!"}]},c.a.createElement(C.a,{name:"Customer_Name",onChange:p})),c.a.createElement(ue.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}]},c.a.createElement(C.a,{name:"phone",addonBefore:Ie,style:{width:"100%"},onChange:p})),c.a.createElement(ue.a.Item,{name:"Occasion",label:"Ocassion",rules:[{required:!0,message:"Please input the  Occasion"}]},c.a.createElement(C.a,{name:"Occasion",onChange:p})),c.a.createElement(ue.a.Item,{name:"Booking_date",label:"Booking Date",style:{display:"inline-block",width:"calc(50% - 8px)"},rules:[{required:!0,message:"Please input the booking date"}]},c.a.createElement(de.a,{disabled:!s,name:"Booking_date",format:Re,onChange:p})),c.a.createElement(ue.a.Item,{name:"paid",label:"Advance Paid (in rupees)"},c.a.createElement(C.a,{name:"paid",onChange:p})),c.a.createElement(ue.a.Item,{name:"Due",label:"Due (in rupees)"},c.a.createElement(C.a,{name:"Due",onChange:p})),c.a.createElement(ue.a.Item,{name:"Booking_type",label:"Booking type",className:"collection-create-form_last-form-item"},c.a.createElement(pe.default.Group,{name:"Booking_type",onChange:p},c.a.createElement(pe.default,{value:"Provisional"},"Provisional"),c.a.createElement(pe.default,{value:"paid"},"Paid"))),c.a.createElement(ue.a.Item,{name:"Comments",label:"Comments",onChange:p},c.a.createElement(C.a,{name:"Comments"})),s?c.a.createElement(ue.a.Item,{name:"Cancel_booking"},c.a.createElement(S.a,{type:"text",size:"large",danger:!0,loading:m,onClick:d},"Cancel Booking")):null)))},_e=function(e){var t=Object(l.useState)(!0),a=Object(le.a)(t,2),n=a[0],r=(a[1],Object(l.useState)(!1)),o=Object(le.a)(r,2),i=o[0],s=o[1],u=Object(l.useState)(!1),m=Object(le.a)(u,2),d=m[0],p=m[1],g=Object(l.useState)(!1),h=Object(le.a)(g,2),E=h[0],f=h[1],b=Object(l.useState)({Customer_Name:"",phone:"",Occasion:"",Booking_date:e.date,paid:"",Due:"",Booking_type:"Provisional",Comments:""}),v=Object(le.a)(b,2),k=v[0],y=v[1],C=Object(l.useState)(!0),O=Object(le.a)(C,2),S=O[0],j=O[1],w=ue.a.useForm(),R=Object(le.a)(w,1)[0];Object(l.useEffect)((function(){var t,a={},n=(e.date&&e.date.format("YYYY-MM-DD")).split("-");a.day=n[2],a.month=n[1],a.year=n[0],(t=a,fe("api/bookings/isbooked?day=".concat(encodeURIComponent(t.day),"&month=").concat(encodeURIComponent(t.month),"&year=").concat(encodeURIComponent(t.year)))).then((function(t){var a;ye=t.data.isBooked,Ce=t.data.bookingId,f(t.data.isBooked),ye?(a=Ce,fe("api/bookings/".concat(a))).then((function(t){y(Object(ie.a)(Object(ie.a)({},k),{},{Customer_Name:t.data.customerName,phone:t.data.phoneNo,Occasion:t.data.ocassion,Booking_date:e.date,paid:t.data.paid,Due:t.data.due,Booking_type:"paid",Comments:t.data.comments})),j(!1)})):j(!1)}))}),[]);return c.a.createElement("div",null,c.a.createElement(Ne,{visible:n,onCreate:function(t){var a,n;s(!0),E?(a=Ce,n=k,ve("api/bookings/".concat(a),n)).then((function(){e.onClose(),s(!1),Se("Booking Succesfully Updated!!!")})).catch((function(e){return je(e.response.data)})):function(e){return be("api/bookings",e)}(k).then((function(){e.onClose(),s(!1),Se("Booking Successful!!!")})).catch((function(e){return je(e.response.data)}))},date:e.date,loading:i,cancelButtonLoading:d,setState:y,state:k,modelload:S,setModelload:j,isbooked:E,form:R,onCancelBooking:function(){s(!0),p(!0)},onCancel:function(){e.onClose()}}))},xe=(a(475),function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getListData=function(e){var t={},a=n.props.bookings;if(a.bookings)if(e.date()<=15){for(var r=0;r<Math.ceil(a.bookings.length/2);r++)if(parseInt(a.bookings[r].date)===e.date()&&parseInt(a.bookings[r].month)===e.month()+1){t.weightage=a.bookings[r].weight,a.bookings[r].isBooked&&(t.bookings=a.bookings[r].booking);break}}else for(var o=Math.ceil(a.bookings.length/2);o<a.bookings.length;o++)if(parseInt(a.bookings[o].date)===e.date()&&parseInt(a.bookings[o].month)===e.month()+1){t.weightage=a.bookings[o].weight,a.bookings[o].isBooked&&(t.bookings=a.bookings[o].booking);break}return t},n.dateCellRender=function(e){var t=n.getListData(e);return t.bookings?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"divcustom",style:{height:"100%",width:"100%",background:"#40a9ff",opacity:"90"},onMouseEnter:function(){return n.handleMouseHover(e._d)},onMouseLeave:function(){return n.handleMouseHover("")}},new String(n.state.isHovering).valueOf()===new String(e._d).valueOf()?c.a.createElement(re.a,{className:"weightage",type:"circle",percent:t.weightage,width:60}):c.a.createElement("ul",{className:"events"},c.a.createElement("li",null,c.a.createElement(K.a,{status:"error",text:t.bookings.customerName})),c.a.createElement("li",null,c.a.createElement(K.a,{status:"error",text:t.bookings.ocassion}))))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"divcustom",style:{height:"100%",width:"100%"},onMouseEnter:function(){return n.handleMouseHover(e._d)},onMouseLeave:function(){return n.handleMouseHover("")}},new String(n.state.isHovering).valueOf()===new String(e._d).valueOf()&&c.a.createElement(re.a,{className:"weightage",type:"circle",percent:t.weightage,width:70,format:function(e){return"".concat(e,"%Rise")}})))},n.getMonthData=function(e){if(8===e.month())return 1394},n.monthCellRender=function(e){var t=n.getMonthData(e);return t?c.a.createElement("div",{className:"notes-month"},c.a.createElement("section",null,t),c.a.createElement("span",null,"Backlog number")):null},n.onClose=function(){n.setState({showForm:!1,dateSelected:""})},n.onSelect=function(e){n.setState({showForm:!0,dateSelected:e})},n.onPanelChange=function(e,t){n.props.fetchBookingsFunction(e.month()+1,e.year())},n.handleMouseHover=n.handleMouseHover.bind(Object(ne.a)(n)),n.state={showForm:!1,isHovering:"",dateSelected:"",loading:!1},n}return Object(p.a)(a,[{key:"handleMouseHover",value:function(e){var t=this;this.setState((function(){return t.toggleHoverState(e)}))}},{key:"toggleHoverState",value:function(e){return{isHovering:e}}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(oe.a,{dateCellRender:this.dateCellRender,monthCellRender:this.monthCellRender,onSelect:this.onSelect,onPanelChange:this.onPanelChange}),this.state.showForm&&c.a.createElement(_e,{date:this.state.dateSelected,onClose:this.onClose}))}}]),a}(l.Component)),Be=function(e){return function(t){t({type:"FETCH_BOOKING_REQUEST"}),function(e){return fe("api/bookings?month=".concat(encodeURIComponent(e.month),"&year=").concat(encodeURIComponent(e.year)))}(e).then((function(e){var a=e.data;t(function(e){return{type:"FETCH_BOOKING_SUCCESS",payload:e}}(a))})).catch((function(e){var a=e.response.data;t({type:"FETCH_BOOKING_ERROR",payload:a})}))}},Ue=f.a.Paragraph,Te=0,Fe=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).fetchAllBookings=function(e,t){e&&t&&(n.setState({month:e,year:t}),Te=1),Te+=1,n.props.fetchBookings(e||n.state.month,t||n.state.year)},n.onChange=function(e){n.setState({Notes:e})},n.state={Notes:"Make notes that u remember",error:!!n.props.bookings.error,month:he()().month()+1,year:(new Date).getFullYear()},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.fetchAllBookings(null,null),Oe=setInterval((function(){e.fetchAllBookings()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(Oe)}},{key:"render",value:function(){return this.state.error?je(this.props.boookings.error):c.a.createElement(c.a.Fragment,null,c.a.createElement(te.a,{tip:"Loading...",spinning:1===Te&&this.props.bookings.loading},c.a.createElement(b.a,{gutter:15,style:{padding:"15px",height:"100%"}},c.a.createElement(v.a,{span:18},c.a.createElement(xe,{bookings:this.props.bookings.bookings,fetchBookingsFunction:this.fetchAllBookings})),c.a.createElement(v.a,{span:6},c.a.createElement(b.a,null,c.a.createElement(ae.a,{title:"Notes",bordered:!1,style:{width:"100%",height:"370px"}},c.a.createElement(Ue,{editable:{onChange:this.onChange}},this.state.Notes))),c.a.createElement("br",null),c.a.createElement(b.a,null,c.a.createElement(ae.a,{title:"Statistics in Month",bordered:!1,style:{width:"100%"}},this.props.bookings.bookings.stats&&c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("strong",null,"Booked")," - ",this.props.bookings.bookings.stats.booked),c.a.createElement("p",null,c.a.createElement("strong",null,"Available")," - ",this.props.bookings.bookings.stats.available),c.a.createElement("p",null,c.a.createElement("strong",null,"Provisinal Bookings")," - 17"),c.a.createElement("p",null,c.a.createElement("strong",null,"Cancelled ")," - ",this.props.bookings.bookings.stats.cancelled)),c.a.createElement(k.a,{orientation:"left"},"Date Wieghtage"),c.a.createElement("p",null,c.a.createElement("strong",null,"High")," - 5"),c.a.createElement("p",null,c.a.createElement("strong",null,"Medium")," - 15"),c.a.createElement("p",null,c.a.createElement("strong",null,"Low")," - 10")))))))}}]),a}(l.Component),Pe=Object(N.b)((function(e){var t=e.bookingsReducer;return console.log(t),{bookings:t}}),(function(e){return{fetchBookings:function(t,a){return e(Be({month:t,year:a}))}}}))(Fe),Me=(a(494),Pe),He=a(529),De=a(530),Le=a(531),Ve=se.a.Option,qe=de.a.RangePicker,Ae=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).refreshPage=function(){window.location.reload()},n.increase=function(){var e=n.state.percent+10;e>100&&(e=100),n.setState({percent:e})},n.decline=function(){var e=n.state.percent-10;e<0&&(e=0),n.setState({percent:e})},n.onChangeRangePicker=function(e){n.setState({rangepicker:e})},n.onChangeDatePicker=function(e){n.setState({datepicker:e})},n.onChangeSelect=function(e){n.setState({type:e})},n.verfication=function(){return n.state.rangepicker||n.state.datepicker?n.state.percent<=0?(je("percentage is required"),n.setState({error:!0,errorMessage:"percentage is required"}),!1):null!==n.state.type||(je("Choose type"),n.setState({error:!0,errorMessage:"Choose type"}),!1):(je("one of the datepicker is required to fill"),n.setState({error:!0,errorMessage:"one of the datepicker is required to fill"}),!1)},n.onClickButton=function(){(n.setState({error:!1}),n.verfication())&&(n.setState({loadingButton:!0}),function(e){return ve("api/weight",e)}({rangepicker:n.state.rangepicker,datepicker:n.state.datepicker,percent:n.state.percent,type:n.state.type}).then((function(e){Se("Weightage assign successfully!!!!")})).catch((function(e){console.log(e.response.data),je(e.response.data)})).finally((function(){n.setState({loadingButton:!1})})))},n.state={rangepicker:null,datepicker:null,percent:0,type:null,error:!1,errorMessage:"",loadingButton:!1},n}return Object(p.a)(a,[{key:"render",value:function(){return console.log(this.state.rangepicker),c.a.createElement("div",{className:"Weightagemain"},c.a.createElement("div",{className:"weightagediv"},c.a.createElement(y.a,{direction:"vertical",size:20},c.a.createElement(y.a,{direction:"horizontal",size:20},c.a.createElement(y.a,{direction:"vertical",size:2},c.a.createElement(qe,{onChange:this.onChangeRangePicker}),c.a.createElement("h1",null," OR"),c.a.createElement(de.a,{onChange:this.onChangeDatePicker})),c.a.createElement("div",null,c.a.createElement(re.a,{type:"circle",percent:this.state.percent}),c.a.createElement(S.a.Group,null,c.a.createElement(S.a,{onClick:this.decline,icon:c.a.createElement(He.a,null)}),c.a.createElement(S.a,{onClick:this.increase,icon:c.a.createElement(De.a,null)}))),c.a.createElement(se.a,{defaultValue:"choose type",style:{width:180},onChange:this.onChangeSelect},c.a.createElement(Ve,{value:"Rise"},"Rise"),c.a.createElement(Ve,{value:"fall"},"Fall")),c.a.createElement("br",null)),this.state.error?c.a.createElement(O.a,{title:this.state.errorMessage,placement:"bottom",color:"red",onClick:this.onClickButton},c.a.createElement(S.a,{type:"primary",danger:!0,size:"large",icon:c.a.createElement(Le.a,null)}," save ")):c.a.createElement(S.a,{type:"primary",size:"large",onClick:this.onClickButton,loading:this.state.loadingButton},"Save"))))}}]),a}(l.Component),Ge=(a(495),Ae),Ye=a(272),ze=a(275),Ke=a(513),We=a(516),Je=function(e){var t=e.visible,a=e.onCreate,n=e.onCancel,r=ue.a.useForm(),o=Object(le.a)(r,1)[0];return c.a.createElement(me.a,{visible:t,title:"Create a new User",okText:"OK",cancelText:"Cancel",onCancel:n,onOk:function(){o.validateFields().then((function(e){o.resetFields(),a(e)})).catch((function(e){console.log("Validate Failed:",e)}))}},c.a.createElement(ue.a,{form:o,layout:"vertical",name:"form_in_modal",initialValues:{modifier:"public"}},c.a.createElement(ue.a.Item,{name:"user_name",label:"Name",rules:[{required:!0,message:"Please input the name of user !"}]},c.a.createElement(C.a,null)),c.a.createElement(ue.a.Item,{name:"mobile_no",label:"Mobile No.",rules:[{required:!0,message:"Please input your Mobile no.!"}]},c.a.createElement(C.a,null)),c.a.createElement(ue.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your username!"}]},c.a.createElement(C.a,null)),c.a.createElement(ue.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},c.a.createElement(C.a.Password,null))))},Qe=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).setVisible=function(e){n.setState({visible:e})},n.onCreate=function(e){console.log("Received values of form: ",e),n.props.save(null,e).then((function(e){Se("New User Created!!!")})).catch((function(e){console.log(e.response)})),n.setVisible(!1)},n.state={visible:!1},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(Je,{visible:this.props.showModel,onCreate:this.onCreate,onCancel:function(){e.props.onClose()}}))}}]),a}(l.Component),$e=function(e){return t="api/users/".concat(e),x.a.delete("http://localhost:5001"+t);var t},Xe=function(e){return be("api/users",e)},Ze=function(e){return function(e){e({type:"FETCH_USERS_REQUEST"}),fe("api/users").then((function(t){var a=t.data;e(function(e){return{type:"FETCH_USERS_SUCCESS",payload:e}}(a))})).catch((function(t){var a=t.response.data;e({type:"FETCH_USERS_ERROR",payload:a})}))}},et=se.a.Option,tt=function(e){var t=e.editing,a=e.dataIndex,n=e.title,r=e.inputType,o=(e.record,e.index,e.children),l=Object(ze.a)(e,["editing","dataIndex","title","inputType","record","index","children"]),i="select"===r?c.a.createElement(se.a,null,c.a.createElement(et,{value:"user"},"User"),c.a.createElement(et,{value:"admin"},"Admin")):c.a.createElement(C.a,null);return c.a.createElement("td",l,t?c.a.createElement(ue.a.Item,{name:a,style:{margin:0},rules:[{required:!0,message:"Please Input ".concat(n,"!")}]},i):o)},at=Object(N.b)((function(e){return{users:e.usersReducer}}),(function(e){return{fetchUsers:function(){return e(Ze())}}}))((function(e){var t=e.fetchUsers,a=e.users,n=ue.a.useForm(),i=Object(le.a)(n,1)[0],s=Object(l.useState)(a.users),u=Object(le.a)(s,2),m=(u[0],u[1]),d=Object(l.useState)(""),p=Object(le.a)(d,2),g=p[0],h=p[1],E=Object(l.useState)(!1),f=Object(le.a)(E,2),b=f[0],v=f[1],k=function(e){return e.key===g};Object(l.useEffect)((function(){t()}),[]);var y=function(e){i.setFieldsValue(Object(ie.a)({name:"",email:"",phoneNo:"",role:""},e)),h(e.key)},C=function(){h("")},O=function(){var e=Object(o.a)(r.a.mark((function e(t,n){var o,l,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.validateFields();case 3:if(o=e.sent,l=Object(Ye.a)(a.users),!((c=l.findIndex((function(e){return t===e.key})))>-1)){e.next=14;break}s=l[c],l.splice(c,1,Object(ie.a)(Object(ie.a)({},s),o)),m(l),h(""),console.log(l,"daa is there"),e.next=15;break;case 14:return e.abrupt("return",Xe(n));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log("Validate Failed:",e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,a){return e.apply(this,arguments)}}(),j=[{title:"Name",dataIndex:"name",width:"15%",editable:!0},{title:"Email",dataIndex:"email",width:"15%",editable:!0},{title:"PhoneNo",dataIndex:"phoneNo",width:"15%",editable:!0},{title:"Role",dataIndex:"role",width:"15%",editable:!0},{title:"operation",dataIndex:"operation",render:function(e,t){return k(t)?c.a.createElement("span",null,c.a.createElement("a",{onClick:function(){return O(t.key)},style:{marginRight:8}},"Save"),c.a.createElement(Ke.a,{title:"Sure to cancel?",onConfirm:C},c.a.createElement("a",null,"Cancel"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{disabled:""!==g,onClick:function(){return y(t)},style:{marginRight:15}},"Edit"),c.a.createElement("a",{disabled:""!==g||!t.isDelete,onClick:function(){return function(e){$e(e.id)}(t)},style:{marginRight:15}},"Delete"),c.a.createElement("a",{onClick:function(){return y(t)}},"ChangePassword"))}}].map((function(e){return e.editable?Object(ie.a)(Object(ie.a)({},e),{},{onCell:function(t){return{record:t,inputType:"role"===e.dataIndex?"select":"text",dataIndex:e.dataIndex,title:e.title,editing:k(t)}}}):e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a,{onClick:function(){v(!0)},type:"primary"},"Add New User"),c.a.createElement(ue.a,{form:i,component:!1},c.a.createElement(We.a,{className:"usertable",components:{body:{cell:tt}},bordered:!0,loading:a.loading,dataSource:a.users,columns:j,rowClassName:"editable-row",pagination:{onChange:C}})),c.a.createElement(Qe,{showModel:b,onClose:function(){v(!1)},save:O}))})),nt=f.a.Title,rt=(f.a.Paragraph,f.a.Text,function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"adduseragemain"},c.a.createElement("div",{className:"adduserdiv"},c.a.createElement(f.a,{className:"addusertitle"},c.a.createElement(nt,{level:1,className:"addusertitle"},"Add User")),c.a.createElement(at,{className:"usertable"})))}}]),a}(l.Component)),ot=(a(506),rt),lt=Y.a.SubMenu,ct=E.a.Header,it=E.a.Content,st=E.a.Sider,ut=f.a.Title,mt=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=c.a.createElement("span",null,"Signed as ","Lokesh Pamnani"),t=c.a.createElement(Y.a,{mode:"inline",style:{height:"100%",borderRight:0}},c.a.createElement(Y.a.Item,{key:"1",icon:c.a.createElement(J.a,null)},c.a.createElement("span",null,"Settings"),c.a.createElement(u.b,{to:"/home"})),c.a.createElement(Y.a.Item,{key:"2",icon:c.a.createElement(Q.a,null)},c.a.createElement("span",null,"Logout"),c.a.createElement(u.b,{to:"/weightage"})));return c.a.createElement("div",null,c.a.createElement(E.a,null,c.a.createElement(ct,{className:"header"},c.a.createElement(ut,{className:"title-header",style:{color:"white",padding:"15px",float:"left"},level:3},"The Occasion"),c.a.createElement("div",{style:{float:"right"}},c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(ut,{className:"title-header",style:{color:"white",padding:"15px",float:"left"},level:3},"Venue name"),c.a.createElement(z.a,{placement:"bottom",title:"Notifications",content:"content",trigger:"click"},c.a.createElement("span",{style:{marginRight:"20px"}},c.a.createElement(K.a,{dot:!0,style:{marginTop:"1.0px"}},c.a.createElement($.a,{style:{fontSize:"1.5rem",color:"white",margin:"auto",marginTop:"1.0px"}})))),c.a.createElement(z.a,{placement:"bottomRight",title:e,content:t,trigger:"click"},c.a.createElement(W.a,{style:{float:"right",marginTop:"1.0rem"},size:32,icon:c.a.createElement(j.a,null),onClick:function(){return console.log("click")}}))))),c.a.createElement(E.a,null,c.a.createElement(st,{width:200,className:"site-layout-background"},c.a.createElement(Y.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},c.a.createElement(Y.a.Item,{key:"1",icon:c.a.createElement(X.a,null)},c.a.createElement("span",null,"Home"),c.a.createElement(u.b,{to:"/home"})),c.a.createElement(Y.a.Item,{key:"2"},c.a.createElement("span",null,"Weightage"),c.a.createElement(u.b,{to:"/weightage"})),c.a.createElement(Y.a.Item,{key:"3"},c.a.createElement("span",null,"Add User"),c.a.createElement(u.b,{to:"/adduser"})),c.a.createElement(Y.a.Item,{key:"4"},"option4"),c.a.createElement(lt,{key:"sub2",icon:c.a.createElement(Z.a,null),title:"subnav 2"},c.a.createElement(Y.a.Item,{key:"5"},"option5"),c.a.createElement(Y.a.Item,{key:"6"},"option6"),c.a.createElement(Y.a.Item,{key:"7"},"option7"),c.a.createElement(Y.a.Item,{key:"8"},"option8")),c.a.createElement(lt,{key:"sub3",icon:c.a.createElement(ee.a,null),title:"subnav 3"},c.a.createElement(Y.a.Item,{key:"9"},"option9"),c.a.createElement(Y.a.Item,{key:"10"},"option10"),c.a.createElement(Y.a.Item,{key:"11"},"option11"),c.a.createElement(Y.a.Item,{key:"12"},"option12")))),c.a.createElement(E.a,null,c.a.createElement(it,{className:"site-layout-background",style:{background:"#ececec",margin:0,height:"100%"}},c.a.createElement(m.d,null,c.a.createElement(m.b,{path:"/home",component:Me}),c.a.createElement(m.b,{path:"/",exact:!0,component:Me}),c.a.createElement(m.b,{path:"/weightage",component:Ge}),c.a.createElement(m.b,{path:"/adduser",component:ot})))))))}}]),a}(l.Component),dt=function(e){var t=e.session.userId,a=e.errors;return{loggedIn:Boolean(t),loginError:"LOGIN_ERROR"===a}},pt=Object(m.g)(Object(N.b)(dt)((function(e){var t=e.loggedIn,a=e.path,n=e.component,r=e.loginError;return c.a.createElement(m.b,{path:a,render:function(e){return t?c.a.createElement(m.a,{to:"/home"}):r?c.a.createElement(m.a,{to:"/autherror"}):c.a.createElement(n,e)}})}))),gt=Object(m.g)(Object(N.b)(dt)((function(e){var t=e.loggedIn,a=e.path,n=e.component;return c.a.createElement(m.b,{path:a,render:function(e){return t?c.a.createElement(n,e):c.a.createElement(m.a,{to:"/login"})}})}))),ht=a(524),Et=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement(ht.a,{title:"You are not authenticated or wrong Login credentials",extra:c.a.createElement(S.a,{type:"primary",key:"console",href:"/login"},"Go Login")})}}]),a}(l.Component);var ft=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u.a,null,c.a.createElement(m.d,null,c.a.createElement(pt,{path:"/login",component:A}),c.a.createElement(pt,{path:"/signup",component:G}),c.a.createElement(m.b,{exact:!0,path:"/autherror",component:Et}),c.a.createElement(gt,{path:"/",component:mt}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var bt=a(89),vt=a(269),kt={userId:null,username:null},yt={loading:!1,bookings:[],error:""},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKING_REQUEST":return Object(ie.a)(Object(ie.a)({},e),{},{loading:!0});case"FETCH_BOOKING_SUCCESS":return{loading:!1,bookings:t.payload,error:""};case"FETCH_BOOKING_ERROR":return{loading:!1,bookings:[],error:t.payload};default:return e}},Ot={loading:!1,users:[],error:""},St=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS_REQUEST":return Object(ie.a)(Object(ie.a)({},e),{},{loading:!0});case"FETCH_USERS_SUCCESS":return{loading:!1,users:t.payload,error:""};case"FETCH_USERS_ERROR":return{loading:!1,users:[],error:t.payload};default:return e}},jt=Object(bt.c)({session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.user;switch(Object.freeze(e),a){case"RECEIVE_CURRENT_USER":return n;case"LOGOUT_CURRENT_USER":return kt;default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.message,n=t.type;switch(Object.freeze(e),n){case"RECEIVE_ERRORS":return a;case"RECEIVE_CURRENT_USER":case"CLEAR_ERRORS":return"";default:return e}},bookingsReducer:Ct,usersReducer:St}),wt=function(e){var t=function(e){return Object(bt.d)(jt,e,Object(bt.a)(vt.a))}(e);s.a.render(c.a.createElement(N.a,{store:t},c.a.createElement(u.a,null,c.a.createElement(ft,null))),document.getElementById("root")),window.getState=t.getState};Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=wt,e.next=3,P();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[278,1,2]]]);
//# sourceMappingURL=main.d3fea5b3.chunk.js.map