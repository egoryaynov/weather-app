(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{38:function(n,e,t){},39:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(1),i=t.n(c),a=t(15),s=t.n(a),o=t(11),u=t(2),l=t(6),j=t(3),f=function(n){return n.currentWeather.currentCity},d=function(n){return n.currentWeather.error&&n.currentWeather.error.message},p=function(n){return n.currentWeather.isFetching},b=function(n){return n.favorites.favorites},h=function(n){return n.favorites.isFetching},x=function(n){return n.favorites.favoritesWeather},v="#D6D7DA",O="#F6F6F8",m="#424242",g="#D6D7DA",y="'Carmen Sans', -apple-system, BlinkMacSystemFont, serif",w="'Roboto', serif",F=t.p+"static/media/search.b0ced60d.svg",N=t(4),k=t.n(N),S=t(7),M=t(5),z="02aa4385a4870233b2daa4f663c30d92",T=function(){var n=Object(S.a)(k.a.mark((function n(e){var t;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(z,"&units=metric"));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),E=function(){var n=Object(S.a)(k.a.mark((function n(e){var t;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?id=".concat(e,"&appid=").concat(z,"&units=metric"));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),W=function(){var n=Object(S.a)(k.a.mark((function n(e){var t;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openweathermap.org/data/2.5/forecast?id=".concat(e,"&appid=").concat(z,"&units=metric&cnt=48"));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),D=function(n,e){return"http://openweathermap.org/img/wn/".concat(n,"@").concat(e,".png")},C=function(n){return 1===n.length?"0"+n:n},I=function(n){return C(String(n))},_=function(){var n=Object(S.a)(k.a.mark((function n(e){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R(E,e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),L=function(){var n=Object(S.a)(k.a.mark((function n(e){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R(T,e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),R=function(){var n=Object(S.a)(k.a.mark((function n(e,t){var r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(t);case 2:if(200!==(r=n.sent).cod){n.next=5;break}return n.abrupt("return",A(r));case 5:return n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),A=function(n){var e=n.snow||null,t=n.rain||null,r=n.weather.map((function(n){return Object(M.a)(Object(M.a)({},n),{},{icon2x:D(n.icon,"2x"),icon4x:D(n.icon,"4x")})}));return{cod:n.cod,city:{id:n.id,name:n.name,country:n.sys.country,sunset:G(n.sys.sunset),sunrise:G(n.sys.sunrise),timezone:n.timezone},date:H(),weather:r,temp:{currentTemp:Math.round(n.main.temp),tempMin:Math.round(n.main.temp_min),tempMax:Math.round(n.main.temp_max),feelsLike:Math.round(n.main.feels_like)},pressure:n.main.pressure,humidity:n.main.humidity,visibility:(n.visibility/1e3).toFixed(2),wind:Object(M.a)({},n.wind),clouds:n.clouds.all,snow:e&&e["1h"],rain:t&&t["1h"]}},H=function(){var n=new Date;return{hours:n.getHours(),weekDay:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()]}},G=function(n){var e=new Date(1e3*n),t=e.getHours(),r=1===e.getMinutes().toString().length?"0"+e.getMinutes():e.getMinutes();return"".concat(t,":").concat(r)},J="currentWeather/SET_WEATHER",B="currentWeather/SET_ERROR",V="currentWeather/SET_IS_FETCHING",P={currentCity:null,error:null,isFetching:!1},q=function(n){return{type:J,payload:n}},K=function(n){return{type:B,error:n}},U=function(n){return{type:V,fetched:n}},Y=function(n,e){return function(){var t=Object(S.a)(k.a.mark((function t(r){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(q()),r(U(!0)),t.next=4,n(e);case 4:200===(c=t.sent).cod?r(q(c)):r(K(c)),r(U(!1));case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case J:return Object(M.a)(Object(M.a)({},n),{},{currentCity:e.payload||null});case B:return Object(M.a)(Object(M.a)({},n),{},{error:e.error});case V:return Object(M.a)(Object(M.a)({},n),{},{isFetching:e.fetched});default:return n}};function Q(){var n=Object(u.a)(["\n  width: 110px;\n  font-family: ",";\n  font-size: 1.2rem;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding-left: 5px;\n"]);return Q=function(){return n},n}var X=j.b.input(Q(),w),$=function(){var n=i.a.useState(""),e=Object(o.a)(n,2),t=e[0],c=e[1],a=Object(l.b)();return Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:F,alt:"Search"}),Object(r.jsx)(X,{type:"text",autoFocus:!0,placeholder:"Search for places....",value:t,onChange:function(n){c(n.target.value)},onKeyPress:function(n){var e;"Enter"===n.key&&a((e=t,function(){var n=Object(S.a)(k.a.mark((function n(t){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(Y(L,e));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))}})]})},nn=t.p+"static/media/menu-bar.4b5d8302.svg";function en(){var n=Object(u.a)(["\n  background-color: transparent;\n  outline: none;\n  border: none;\n  cursor: pointer;\n"]);return en=function(){return n},n}var tn=j.b.button(en()),rn=function(n){var e=n.className,t=n.setMustShowFavorite,c=n.mustShowFavorite;return Object(r.jsx)(tn,{className:e,onClick:function(){return t(!c)},children:Object(r.jsx)("img",{src:nn,alt:"Open favorites"})})};function cn(){var n=Object(u.a)(["\n  padding: 0;\n  width: 200px;\n  height: 200px;\n"]);return cn=function(){return n},n}var an=j.b.div(cn()),sn=function(n){var e=n.currentWeather;return Object(r.jsx)(an,{children:Object(r.jsx)("img",{src:e.icon4x,alt:e.main})})};function on(){var n=Object(u.a)(["\n  text-align: center;\n  margin: -40px 0 0 0;\n  padding: 0;\n  width: 220px;\n\n  span.temp {\n    margin-right: 28px;\n    font-size: 5.5rem;\n    position: relative;\n  }\n\n  span.deg {\n    font-size: 2.4rem;\n    position: absolute;\n    top: 10px;\n    right: -25px;\n  }\n"]);return on=function(){return n},n}var un=j.b.div(on()),ln=function(n){var e=n.currentTemp;return Object(r.jsx)(un,{children:Object(r.jsxs)("span",{className:"temp",children:[e,Object(r.jsx)("span",{className:"deg",children:"\u2103"})]})})};function jn(){var n=Object(u.a)(["\n  margin-top: 3px;\n  font-size: 1.4rem;\n\n  span.time {\n    color: ",";\n  }\n"]);return jn=function(){return n},n}var fn=j.b.div(jn(),g),dn=function(n){var e=n.date;return Object(r.jsxs)(fn,{children:[Object(r.jsx)("span",{className:"weekDay",children:e.weekDay+", "}),Object(r.jsx)("span",{className:"time",children:e.hours+":00"})]})};function pn(){var n=Object(u.a)(["\n  border: none;\n  outline: none;\n  width: 125px;\n  height: 1px;\n  background-color: #48484aa6;\n  margin: 40px 0 25px;\n"]);return pn=function(){return n},n}var bn=j.b.hr(pn());function hn(){var n=Object(u.a)(["\n  width: 115px;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  .item {\n    height: 30px;\n    position: relative;\n\n    &:not(:last-child) {\n      margin-bottom: 15px;\n    }\n  }\n\n  img {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    top: -8px;\n    left: -40px;\n  }\n\n  span {\n    font-size: 1.1rem;\n    color: ",";\n  }\n"]);return hn=function(){return n},n}var xn=j.b.div(hn(),m),vn=function(n){var e=n.weather;return Object(r.jsx)(xn,{children:e.map((function(n){return Object(r.jsxs)("div",{className:"item",children:[Object(r.jsx)("img",{src:n.icon2x,alt:n.description}),Object(r.jsx)("span",{children:n.description})]},n.id)}))})},On=t.p+"static/media/star.1d547ab3.svg",mn=t.p+"static/media/filled-star.b7287eed.svg";function gn(){var n=Object(u.a)(["\n  width: 18px;\n  height: 17px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n"]);return gn=function(){return n},n}function yn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n"]);return yn=function(){return n},n}var wn=j.b.img(yn()),Fn=j.b.button(gn()),Nn=function(n){var e=n.isFavorite,t=n.cityID,c=n.toggleFavorite;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Fn,{onClick:function(){return c(t)},children:e?Object(r.jsx)(wn,{src:mn,alt:"Is favorite"}):Object(r.jsx)(wn,{src:On,alt:"Not is favorite"})})})};function kn(){var n=Object(u.a)(["\n  font-family: ",";\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  margin-top: 30px;\n  position: absolute;\n  bottom: 20px;\n\n  span.country {\n    text-transform: uppercase;\n    margin-right: 10px;\n    margin-left: 3px;\n  }\n"]);return kn=function(){return n},n}var Sn=j.b.div(kn(),w),Mn=function(n){var e=n.cityInfo,t=n.isFavorite,c=n.toggleFavorite;return Object(r.jsxs)(Sn,{children:[Object(r.jsx)("span",{children:e.name+","}),Object(r.jsx)("span",{className:"country",children:e.country}),Object(r.jsx)(Nn,{isFavorite:t,cityID:e.id,toggleFavorite:c})]})},zn=function(n){var e=n.currentCity,t=n.isFavorite,c=n.toggleFavorite;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(sn,{currentWeather:e.weather[0]}),Object(r.jsx)(ln,{currentTemp:e.temp.currentTemp}),Object(r.jsx)(dn,{date:e.date}),Object(r.jsx)(bn,{}),Object(r.jsx)(vn,{weather:e.weather}),Object(r.jsx)(Mn,{isFavorite:t,toggleFavorite:c,cityInfo:e.city})]})},Tn=t.p+"static/media/preloader.9f90125c.svg";function En(){var n=Object(u.a)(["\n  width: 30px;\n  height: 30px;\n"]);return En=function(){return n},n}var Wn=j.b.img(En()),Dn=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(Wn,{src:Tn,alt:"Loading..."})})},Cn=t(23),In=t(13),_n="favorites",Ln=function(){return localStorage.getItem(_n)},Rn=function(n){localStorage.setItem(_n,JSON.stringify(n))},An="favorite/GET_FAVORITES",Hn="favorite/GET_FAVORITES_WEATHER",Gn="favorite/SET_IS_FETCHING",Jn={favorites:[],favoritesWeather:[],errorMessage:null,isFetching:!1},Bn=function(n){return{type:Hn,favoritesWeather:n}},Vn=function(n){return{type:Gn,fetched:n}},Pn=function(){return function(n){var e=Ln();e&&n(function(n){return{type:An,favorites:n}}(JSON.parse(e)))}},qn=function(n){return function(e){var t=Ln();if(t){var r=JSON.parse(t);0===(r=r.filter((function(e){return e!==n}))).length?localStorage.removeItem(_n):Rn(r),e(Pn())}}},Kn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Jn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case An:return Object(M.a)(Object(M.a)({},n),{},{favorites:Object(In.a)(e.favorites)});case Hn:return Object(M.a)(Object(M.a)({},n),{},{favoritesWeather:Object(In.a)(e.favoritesWeather)});case Gn:return Object(M.a)(Object(M.a)({},n),{},{isFetching:e.fetched});default:return n}};function Un(){var n=Object(u.a)(["\n  color: red;\n"]);return Un=function(){return n},n}function Yn(){var n=Object(u.a)(["\n  position: absolute;\n  padding: 0;\n  right: 0;\n"]);return Yn=function(){return n},n}function Zn(){var n=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n\n  span {\n    font-size: 1rem;\n    color: ",";\n  }\n"]);return Zn=function(){return n},n}function Qn(){var n=Object(u.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n"]);return Qn=function(){return n},n}function Xn(){var n=Object(u.a)(["\n  flex-basis: 220px;\n  padding-top: 20px;\n"]);return Xn=function(){return n},n}var $n=j.b.div(Xn()),ne=j.b.div(Qn()),ee=j.b.div(Zn(),g),te=Object(j.b)(rn)(Yn()),re=j.b.div(Un()),ce=function(){return Object(r.jsx)(ee,{children:Object(r.jsx)("span",{children:"City is not selected"})})},ie=function(n){var e=n.setMustShowFavorite,t=n.mustShowFavorite,c=Object(l.c)(f),a=Object(l.c)(d),s=Object(l.c)(p),u=Object(l.c)(b),j=Object(l.b)(),h=i.a.useState(!1),x=Object(o.a)(h,2),v=x[0],O=x[1];i.a.useEffect((function(){c&&(j(K(null)),O(u.includes(c.city.id)))}),[u,c]);return Object(r.jsx)($n,{children:Object(r.jsxs)(ne,{children:[Object(r.jsx)($,{}),Object(r.jsx)(te,{mustShowFavorite:t,setMustShowFavorite:e}),s&&Object(r.jsx)(Dn,{}),c&&Object(r.jsx)(zn,{currentCity:c,isFavorite:v,toggleFavorite:function(n){var e;v?(j(qn(n)),O(!1)):(j((e=n,function(n){var t=Ln(),r=JSON.parse(t)||[];r.push(e),Rn(r),n(Pn())})),O(!0))}}),!c&&!a&&!s&&Object(r.jsx)(ce,{}),a&&Object(r.jsx)(re,{children:Object(r.jsx)("span",{children:a})})]})})};function ae(){var n=Object(u.a)(["\n  width: 55px;\n"]);return ae=function(){return n},n}function se(){var n=Object(u.a)(["\n  width: 120px;\n"]);return se=function(){return n},n}function oe(){var n=Object(u.a)(["\n  border-radius: 10px;\n  background-color: #FFFDF9;\n  height: 40px;\n"]);return oe=function(){return n},n}var ue=j.b.div(oe()),le=Object(j.b)(ue)(se()),je=Object(j.b)(ue)(ae());function fe(){var n=Object(u.a)(["\n  span.night-temp {\n    color: ",";\n  }\n"]);return fe=function(){return n},n}function de(){var n=Object(u.a)(["\n  text-align: center;\n  padding: 10px;\n  height: 70px;\n\n  img {\n    width: 40px;\n    height: 40px;\n  }\n"]);return de=function(){return n},n}function pe(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return pe=function(){return n},n}var be=j.b.div(pe()),he=Object(j.b)(je)(de()),xe=j.b.div(fe(),g),ve=function(n){var e=n.forecast,t=n.isFetching,c=n.currentTemp,a=n.currentWeatherIcon,s=i.a.useMemo((function(){if(e)return[{weekDay:e[0].weekDay,temp:{day:!1!==!!e[0].temp.day?c:NaN,night:e[0].temp.night},icon2x:a}].concat(Object(In.a)(e.slice(1)))}),[e,c,a]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"title",children:"Forecast"}),t||!s?Object(r.jsx)(Dn,{}):Object(r.jsx)(be,{children:s.map((function(n){return Object(r.jsxs)(he,{children:[Object(r.jsx)("span",{children:n.weekDay}),Object(r.jsx)("img",{src:n.icon2x,alt:n.weekDay+" forecast"}),Object(r.jsxs)(xe,{children:[Object(r.jsx)("span",{className:"day-temp",children:isNaN(n.temp.day)?"-":n.temp.day}),Object(r.jsx)("span",{children:" / "}),Object(r.jsx)("span",{className:"night-temp",children:isNaN(n.temp.night)?"-":n.temp.night})]})]},n.weekDay)}))})]})};function Oe(){var n=Object(u.a)(["\n  height: 100px;\n  padding: 12px;\n\n  h3.block-title {\n    color: ",";\n    margin: 0;\n  }\n\n  .content {\n    height: 80px;\n    display: flex;\n\n    &.center {\n      align-items: center;\n    }\n\n    &.flex-end {\n      flex-direction: column;\n      justify-content: flex-end;\n    }\n  }\n\n  .caption {\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin: 0;\n  }\n\n  .value-with-unit {\n    .value {\n      font-size: 3rem;\n    }\n\n    .unit {\n      font-size: 1.5rem;\n    }\n  }\n"]);return Oe=function(){return n},n}var me=Object(j.b)(le)(Oe(),g);function ge(){var n=Object(u.a)(["\n"]);return ge=function(){return n},n}var ye=Object(j.b)(me)(ge()),we=function(n){var e=n.humidity;return Object(r.jsxs)(ye,{children:[Object(r.jsx)("h3",{className:"block-title",children:"Humidity"}),Object(r.jsx)("div",{className:"content center",children:Object(r.jsxs)("div",{className:"value-with-unit",children:[Object(r.jsx)("span",{className:"value",children:e}),Object(r.jsx)("span",{className:"unit",children:" %"})]})})]})};function Fe(){var n=Object(u.a)(["\n  .content {\n    .value {\n      font-size: 2rem;\n    }\n\n    .unit {\n      font-size: 1.2rem;\n    }\n  }\n"]);return Fe=function(){return n},n}var Ne=Object(j.b)(me)(Fe()),ke=function(n){var e=n.snow,t=n.rain;return Object(r.jsxs)(Ne,{children:[Object(r.jsx)("h3",{className:"block-title",children:"Precipitation"}),Object(r.jsxs)("div",{className:"content center",children:[!e&&!t&&Object(r.jsx)("span",{children:"No precipitation"}),e&&Object(r.jsxs)("span",{children:["Snow:",Object(r.jsxs)("span",{className:"value",children:[" ",e]}),Object(r.jsx)("span",{className:"unit",children:"mm"})]}),t&&Object(r.jsxs)("span",{children:["Rain:",Object(r.jsxs)("span",{className:"value",children:[" ",t]}),Object(r.jsx)("span",{className:"unit",children:"mm"})]})]})]})},Se=t.p+"static/media/sunrise.ef25fa2a.svg",Me=t.p+"static/media/sunset.a5d0773c.svg";function ze(){var n=Object(u.a)(["\n  .content {\n    p {\n      margin: 0;\n      display: flex;\n      align-items: center;\n      font-size: 1.5rem;\n\n      &:nth-child(1) {\n        margin-bottom: 7px;\n      }\n\n      img {\n        width: 25px;\n        height: 25px;\n        margin-left: 15px;\n      }\n    }\n  }\n"]);return ze=function(){return n},n}var Te=Object(j.b)(me)(ze()),Ee=function(n){var e=n.sunset,t=n.sunrise;return Object(r.jsxs)(Te,{children:[Object(r.jsx)("h3",{className:"block-title",children:"Sunrise & Sunset"}),Object(r.jsxs)("div",{className:"content flex-end",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:t}),Object(r.jsx)("img",{src:Se,alt:"Sunrise"})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:e}),Object(r.jsx)("img",{src:Me,alt:"Sunset"})]})]})]})};function We(){var n=Object(u.a)(["\n  .content {\n    .value {\n      font-size: 1.5rem;\n    }\n  }\n"]);return We=function(){return n},n}var De=Object(j.b)(me)(We()),Ce=function(n){var e=n.tempMin,t=n.tempMax,c=n.feelsLike;return Object(r.jsxs)(De,{children:[Object(r.jsx)("h3",{className:"block-title",children:"Temperature"}),Object(r.jsxs)("div",{className:"content flex-end",children:[Object(r.jsxs)("span",{children:["min: ",Object(r.jsxs)("span",{className:"value",children:[e," \u2103"]})]}),Object(r.jsxs)("span",{children:["max: ",Object(r.jsxs)("span",{className:"value",children:[t," \u2103"]})]}),Object(r.jsxs)("span",{children:["Feels like: ",Object(r.jsxs)("span",{className:"value",children:[c," \u2103"]})]})]})]})};function Ie(){var n=Object(u.a)(["\n"]);return Ie=function(){return n},n}var _e=Object(j.b)(me)(Ie()),Le=function(n){var e=n.visibility;return Object(r.jsxs)(_e,{children:[Object(r.jsx)("h3",{className:"block-title",children:"Visibility"}),Object(r.jsx)("div",{className:"content center",children:Object(r.jsxs)("div",{className:"value-with-unit",children:[Object(r.jsx)("span",{className:"value",children:e}),Object(r.jsx)("span",{className:"unit",children:" km"})]})})]})};function Re(){var n=Object(u.a)(["\n  margin-left: 10px;\n  \n  svg {\n    width: 25px;\n    height: 25px;\n    fill: ","\n  }\n\n  #arrow {\n    transform-origin: center;\n    transform-box: fill-box;\n    transform: rotate(","deg);\n  }\n"]);return Re=function(){return n},n}var Ae=j.b.div(Re(),m,(function(n){return n.degrees})),He=function(n){var e=n.degrees;return Object(r.jsx)(Ae,{degrees:e,children:Object(r.jsx)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490 490",children:Object(r.jsxs)("g",{children:[Object(r.jsx)("path",{d:"M245,490c135.31,0,245-109.69,245-245C490,109.69,380.31,0,245,0S0,109.69,0,245C0,380.31,109.69,490,245,490z M245,30.625\r c118.206,0,214.375,96.168,214.375,214.375c0,118.206-96.169,214.375-214.375,214.375c-118.207,0-214.375-96.169-214.375-214.375\r C30.625,126.793,126.793,30.625,245,30.625z"}),Object(r.jsx)("path",{id:"arrow",d:"M388.428,371.511L245,72.551l-143.428,298.96L245,279.522L388.428,371.511z M175.848,287.49L245,143.352l69.152,144.138\r l-52.618-33.747L245,243.139l-16.534,10.604L175.848,287.49z"})]})})})};function Ge(){var n=Object(u.a)(["\n  .content {\n    height: 72px;\n  }\n\n  .wind {\n    &-title {\n      display: flex;\n    }\n  }\n"]);return Ge=function(){return n},n}var Je=Object(j.b)(me)(Ge()),Be=function(n){var e=n.degrees,t=n.windSpeed;return Object(r.jsxs)(Je,{degrees:e,children:[Object(r.jsxs)("div",{className:"wind-title",children:[Object(r.jsx)("h3",{className:"block-title",children:"Wind Status"}),Object(r.jsx)(He,{degrees:e})]}),Object(r.jsxs)("div",{className:"content flex-end",children:[Object(r.jsx)("p",{className:"caption",children:"Speed:"}),Object(r.jsxs)("div",{className:"value-with-unit",children:[Object(r.jsx)("span",{className:"value",children:t}),Object(r.jsx)("span",{className:"unit",children:" m/s"})]})]})]})};function Ve(){var n=Object(u.a)(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 1fr 1fr 1fr;\n"]);return Ve=function(){return n},n}var Pe=j.b.div(Ve()),qe=function(n){var e=n.currentCity;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:"title",children:"Current Weather"}),Object(r.jsxs)(Pe,{children:[Object(r.jsx)(Be,{degrees:e.wind.deg,windSpeed:e.wind.speed}),Object(r.jsx)(Ee,{sunrise:e.city.sunrise,sunset:e.city.sunset}),Object(r.jsx)(Le,{visibility:e.visibility}),Object(r.jsx)(we,{humidity:e.humidity}),Object(r.jsx)(Ce,{tempMin:e.temp.tempMin,tempMax:e.temp.tempMax,feelsLike:e.temp.feelsLike}),Object(r.jsx)(ke,{rain:e.rain,snow:e.snow})]})]})};function Ke(){var n=Object(u.a)(["\n  margin-left: -20px;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 30px;\n    height: 30px;\n  }\n"]);return Ke=function(){return n},n}function Ue(){var n=Object(u.a)(["\n  margin-left: -11px;\n  margin-top: 10px;\n\n  span {\n    font-size: 1.4rem;\n    font-weight: bold;\n    position: relative;\n\n    span.deg {\n      font-size: 1rem;\n      position: absolute;\n      top: 2px;\n      right: -1.2rem;\n    }\n  }\n"]);return Ue=function(){return n},n}function Ye(){var n=Object(u.a)(["\n  span {\n    text-align: center;\n    display: block;\n    font-size: 1.2rem;\n  }\n\n  span.country {\n    color: ",";\n  }\n"]);return Ye=function(){return n},n}function Ze(){var n=Object(u.a)(["\n  padding: 10px 0;\n  height: 95px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: 0.2s;\n\n  &:hover {\n    border-color: #867f7f;\n  }\n"]);return Ze=function(){return n},n}function Qe(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 15px;\n  height: calc(100% - 60px);\n  overflow-y: scroll;\n"]);return Qe=function(){return n},n}var Xe=j.b.div(Qe()),$e=Object(j.b)(le)(Ze()),nt=j.b.div(Ye(),g),et=j.b.div(Ue()),tt=j.b.div(Ke()),rt=function(n){var e=n.favorites,t=n.getFavoritesWeather,c=n.onSelectFavorite,a=Object(l.c)(h),s=Object(l.c)(x);return i.a.useEffect((function(){t(e,s)}),[e]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:"title",children:"Favorites"}),a?Object(r.jsx)(Dn,{}):Object(r.jsx)(Xe,{children:s.map((function(n){return Object(r.jsxs)($e,{onClick:function(){return c(n)},children:[Object(r.jsxs)(nt,{children:[Object(r.jsx)("span",{className:"city",children:n.city.name}),Object(r.jsx)("span",{className:"country",children:n.city.country})]}),Object(r.jsx)(et,{children:Object(r.jsxs)("span",{children:[n.temp.currentTemp,Object(r.jsx)("span",{className:"deg",children:"\u2103"})]})}),Object(r.jsxs)(tt,{children:[Object(r.jsx)("img",{src:n.weather[0].icon2x,alt:n.weather[0].main}),Object(r.jsx)("span",{children:n.weather[0].main})]})]},n.city.id)}))})]})},ct=function(){var n=Object(S.a)(k.a.mark((function n(e){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=it,n.next=3,W(e);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),it=function(n){var e=at(n.list[0].dt_txt),t=[];return n.list.forEach((function(n){var t=e[n.dt_txt.split(" ")[0]];t&&t.push(n)})),Object.keys(e).forEach((function(n){t.push(st(e[n],n))})),t},at=function(n){for(var e,t=n.split(" ")[0].split("-")[2],r={},c=0;c<5;c++){var i=new Date(n.split(" ")[0]);i.setDate(+t+c);var a=I(i.getDate()),s=(e=i.getMonth(),C(String(e+1)));r["".concat(i.getFullYear(),"-").concat(s,"-").concat(a)]=[]}return r},st=function(n,e){var t=n.filter((function(n){return"d"===n.sys.pod})),r=n.filter((function(n){return"n"===n.sys.pod})),c=Math.round(ot(t)/t.length),i=Math.round(ot(r)/r.length),a=ut(t.length>0?t:r);return{weekDay:lt(e),temp:{day:c,night:i},icon2x:a}},ot=function(n){return n.reduce((function(n,e){return n+e.main.temp}),0)},ut=function(n){return D(n[Math.floor(n.length/2)].weather[0].icon,"2x")},lt=function(n){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(n).getDay()]},jt="GET_FORECAST",ft="SET_IS_FETCHING",dt={forecast:null,isFetching:!1},pt=function(n){return{type:jt,forecast:n}},bt=function(n){return{type:ft,fetched:n}},ht=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case jt:return Object(M.a)(Object(M.a)({},n),{},{forecast:e.forecast});case ft:return Object(M.a)(Object(M.a)({},n),{},{isFetching:e.fetched});default:return n}},xt=function(n){return n.forecastWeather.forecast},vt=function(n){return n.forecastWeather.isFetching};function Ot(){var n=Object(u.a)(["\n  padding: 0 30px;\n  height: 100%;\n\n  h2.title {\n    font-size: 1.6rem;\n  }\n"]);return Ot=function(){return n},n}function mt(){var n=Object(u.a)(["\n  background-color: ",";\n  flex: 1;\n"]);return mt=function(){return n},n}var gt=j.b.div(mt(),O),yt=j.b.div(Ot()),wt=function(n){var e=n.mustShowFavorite,t=Object(l.c)(f),c=Object(l.c)(b),a=Object(l.c)(xt),s=Object(l.c)(vt),o=Object(l.b)();return i.a.useEffect((function(){var n;t&&o((n=t.city.id,function(){var e=Object(S.a)(k.a.mark((function e(t){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(bt(!0)),e.next=3,ct(n);case 3:r=e.sent,t(pt(r)),t(bt(!1));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()))}),[t]),Object(r.jsx)(gt,{children:Object(r.jsxs)(yt,{children:[e&&Object(r.jsx)(rt,{favorites:c,getFavoritesWeather:function(n,e){o(function(n,e){return function(){var t=Object(S.a)(k.a.mark((function t(r){var c,i,a,s,o;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r(Vn(!0)),c=Object(In.a)(e),i=c.map((function(n){return n.city.id})),0===n.length){t.next=28;break}a=Object(Cn.a)(n),t.prev=5,a.s();case 7:if((s=a.n()).done){t.next=20;break}if(o=s.value,0!==e.length&&i.includes(o)){t.next=17;break}return t.t0=c,t.next=13,_(o);case 13:t.t1=t.sent,t.t0.push.call(t.t0,t.t1),t.next=18;break;case 17:0!==e.length&&n.length<e.length&&(c=n.map((function(n){return e.filter((function(e){return n===e.city.id}))[0]})));case 18:t.next=7;break;case 20:t.next=25;break;case 22:t.prev=22,t.t2=t.catch(5),a.e(t.t2);case 25:return t.prev=25,a.f(),t.finish(25);case 28:r(Bn(c)),r(Vn(!1));case 30:case"end":return t.stop()}}),t,null,[[5,22,25,28]])})));return function(n){return t.apply(this,arguments)}}()}(n,e))},onSelectFavorite:function(n){o(q(n))}}),t&&!e&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ve,{forecast:a,isFetching:s,currentWeatherIcon:t.weather[0].icon2x,currentTemp:t.temp.currentTemp}),Object(r.jsx)(qe,{currentCity:t})]})]})})},Ft=function(n){return n.initialization.isFetching},Nt="initialization/INITIALIZED_SUCCESS",kt={initialized:!1,isFetching:!0},St=function(){return function(n){n(Pn()),n({type:Nt})}},Mt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Nt:return Object(M.a)(Object(M.a)({},n),{},{initialized:!0,isFetching:!1});default:return n}};function zt(){var n=Object(u.a)(["\n  width: 730px;\n  height: 500px;\n  border-radius: 50px;\n  background-color: #fff;\n  position: absolute;\n  top: 50%;\n  bottom: 50%;\n  left: 50%;\n  right: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  overflow: hidden;\n"]);return zt=function(){return n},n}var Tt=j.b.div(zt()),Et=function(){var n=i.a.useState(!1),e=Object(o.a)(n,2),t=e[0],c=e[1],a=Object(l.c)(Ft),s=Object(l.b)();return i.a.useEffect((function(){s(St())}),[s]),a?Object(r.jsx)(Dn,{}):Object(r.jsxs)(Tt,{children:[Object(r.jsx)(ie,{setMustShowFavorite:c,mustShowFavorite:t}),Object(r.jsx)(wt,{mustShowFavorite:t})]})},Wt=t(8),Dt=t(24),Ct=Object(Wt.c)({initialization:Mt,forecastWeather:ht,currentWeather:Z,favorites:Kn}),It=Object(Wt.e)(Ct,Object(Wt.d)(Object(Wt.a)(Dt.a)));t(38),t(39);function _t(){var n=Object(u.a)(["\n  html {\n    font-size: 10px;\n  }\n\n  body {\n    margin: 0;\n    font-family: ",";\n    font-weight: normal;\n    color: ",";\n    background-color: ",";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    box-sizing: border-box;\n  }\n"]);return _t=function(){return n},n}var Lt=Object(j.a)(_t(),y,m,v);s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsxs)(l.a,{store:It,children:[Object(r.jsx)(Lt,{}),Object(r.jsx)(Et,{})]})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.80ffec6c.chunk.js.map