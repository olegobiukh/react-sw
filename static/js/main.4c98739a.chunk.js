(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(17),c=a.n(s),i=a(36),l=(a(27),a(38)),o=a(37),u=a(20),m=a(35),p=a(7),h=a(8),d=a(10),f=a(9),g=a(11),b=a(5),v=a.n(b),E=a(12),y=function(){var e=Object(E.a)(v.a.mark(function e(t){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://swapi.co/api/").concat(t,"/"));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(E.a)(v.a.mark(function e(t,a){var r,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://swapi.co/api/").concat(t,"/").concat(a,"/"));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(E.a)(v.a.mark(function e(t){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x={people:{name:{title:"name",isSortable:!0,isSearchable:!0},height:{title:"height",isSortable:!0},birth_year:{title:"birth year"}},films:{title:{title:"name",isSortable:!0,isSearchable:!0},episode_id:{title:"episode",isSortable:!0},opening_crawl:{title:"opening crawl"},release_date:{title:"release",isSortable:!0}},planets:{name:{title:"name",isSortable:!0,isSearchable:!0},diameter:{title:"diameter",isSortable:!0},terrain:{title:"terrain"}},species:{name:{title:"name",isSortable:!0,isSearchable:!0},average_lifespan:{title:"average lifespan",isSortable:!0},skin_colors:{title:"terrain"}},starships:{name:{title:"name",isSortable:!0,isSearchable:!0},cost_in_credits:{title:"cost (credits)",isSortable:!0},model:{title:"model"}},vehicles:{name:{title:"name",isSortable:!0,isSearchable:!0},cost_in_credits:{title:"cost (credits)",isSortable:!0},model:{title:"model"}}},O=["created","edited","url","homeworld"],j=["characters","pilots","residents","people","films","planets","species","starships","vehicles"],_=a(18),P=function(e){var t=e.config,a=e.api,r=e.onHeaderClick;return n.a.createElement("tr",{className:"thead-dark"},a&&Object.entries(t[a]).map(function(e){var t=Object(_.a)(e,2),s=t[0],c=t[1];return n.a.createElement("th",{key:s,className:c.isSortable?"sortable-column":"",onClick:function(){return r(a,s)}},c.title)}))},S=function(e){var t=e.prop,a=e.index,r=e.api,s=e.item;return n.a.createElement("td",null,"name"===t||"title"===t?n.a.createElement(l.a,{to:"/".concat(r,"/").concat(a)},s[t]):s[t])},N=function(e){var t=e.visibleItems,a=e.config,r=e.api;return t&&t.map(function(e){return n.a.createElement("tr",{key:e.url},Object.keys(a[r]).map(function(t){var a=e.url.match(/\d+/g)[0];return n.a.createElement(S,{key:t,prop:t,index:a,api:r,item:e})}))})},C=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={sortColumn:null,sortAsc:!0,api:""},a.handleHeaderClick=function(e,t){a.props.config[e][t].isSortable&&a.setState(function(e){var a=e.sortColumn,r=e.sortAsc;return{sortColumn:t,sortAsc:a!==t||!r}})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.api,r=t.data,s=t.config,c=this.state.sortAsc?1:-1,i=this.state.sortColumn?r.sort(function(t,a){var r=t[e.state.sortColumn],n=a[e.state.sortColumn];return"number"===typeof r?c*(r-n):c*r.localeCompare(n)}):r;return n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement(P,{config:s,api:a,onHeaderClick:this.handleHeaderClick})),n.a.createElement("tbody",null,n.a.createElement(N,{config:s,api:a,visibleItems:i})))}}]),t}(r.Component),L=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={data:[],config:x,api:""},a.updatePageFromURL=function(){var e=a.props.match.params.api;e!==a.state.api&&y(e).then(function(t){a.setState({data:t,api:e})})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.updatePageFromURL()}},{key:"componentDidUpdate",value:function(){this.updatePageFromURL()}},{key:"render",value:function(){var e=this.state.api,t=this.state.data.results||[];return e?n.a.createElement(C,{api:e,data:t,config:x}):n.a.createElement("div",{className:"loading"})}}]),t}(r.Component),A=a(19),D=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={configCategories:null,data:null,api:"",id:"",content:null},a.handleBigImgError=function(e){e.target.onError=null,e.target.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg",e.target.height="400",e.target.width="100"},a.handleImgError=function(e){e.target.onError=null,e.target.src="https://starwars-visualguide.com/assets/img/placeholder-small.jpg"},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(){var e=this.props.match.params,t=e.id,a=e.api;this.state.id===t&&this.state.api===a||this.loadData()}},{key:"loadData",value:function(){var e=Object(E.a)(v.a.mark(function e(){var t,a,r,n,s,c,i,l,o,u,m,p;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params,a=t.api,r=t.id,e.next=3,k(a,r);case 3:if(n=e.sent,e.t0=n.hasOwnProperty("films"),!e.t0){e.next=9;break}return e.next=8,Promise.all(n.films.map(function(e){return w(e)}));case 8:e.t0=e.sent;case 9:if(s=e.t0,e.t1=n.hasOwnProperty("species"),!e.t1){e.next=15;break}return e.next=14,Promise.all(n.species.map(function(e){return w(e)}));case 14:e.t1=e.sent;case 15:if(c=e.t1,e.t2=n.hasOwnProperty("vehicles"),!e.t2){e.next=21;break}return e.next=20,Promise.all(n.vehicles.map(function(e){return w(e)}));case 20:e.t2=e.sent;case 21:if(i=e.t2,e.t3=n.hasOwnProperty("starships"),!e.t3){e.next=27;break}return e.next=26,Promise.all(n.starships.map(function(e){return w(e)}));case 26:e.t3=e.sent;case 27:if(l=e.t3,e.t4=n.hasOwnProperty("characters"),!e.t4){e.next=33;break}return e.next=32,Promise.all(n.characters.map(function(e){return w(e)}));case 32:e.t4=e.sent;case 33:if(o=e.t4,e.t5=n.hasOwnProperty("people"),!e.t5){e.next=39;break}return e.next=38,Promise.all(n.people.map(function(e){return w(e)}));case 38:e.t5=e.sent;case 39:if(u=e.t5,e.t6=n.hasOwnProperty("residents"),!e.t6){e.next=45;break}return e.next=44,Promise.all(n.residents.map(function(e){return w(e)}));case 44:e.t6=e.sent;case 45:if(m=e.t6,e.t7=n.hasOwnProperty("planets"),!e.t7){e.next=51;break}return e.next=50,Promise.all(n.planets.map(function(e){return w(e)}));case 50:e.t7=e.sent;case 51:p=e.t7,this.setState({id:r,api:a,data:Object(A.a)({},n,{films:s||[],species:c||[],vehicles:i||[],starships:l||[],characters:o||[],planets:p||[],people:u||[],residents:m||[]})});case 53:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.data,a=this.state,r=a.api,s=a.id;return n.a.createElement("div",null,n.a.createElement("div",{className:"Page"},n.a.createElement("div",{className:"Page__img-big"},n.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/".concat("people"!==r?r:"characters","/").concat(s,".jpg"),alt:"star wars",onError:this.handleBigImgError.bind(this)})),n.a.createElement("div",{className:"Page__data"},t?Object.keys(t).map(function(e,a){if(!O.includes(e)&&!j.includes(e)&&"unknown"!==t[e])return"name"===e||"title"===e?n.a.createElement("h1",{key:a},t[e]):n.a.createElement("p",{key:e},n.a.createElement("span",{className:"opening_crawl"===e?"Page__key":""},e,":"),t[e])}):n.a.createElement("div",{className:"loading"}))),n.a.createElement("div",{className:"grid"},t&&j.map(function(a,r){return t.hasOwnProperty(a)&&0!==t[a].length&&n.a.createElement("div",{key:r,className:"Page-Category"},n.a.createElement("div",{className:"Page-Category__title"},n.a.createElement("strong",null,"Related ",a)),t[a].map(function(t,r){var s=t.url?t.url.match(/\d+/g)[0]:t.match(/\d+/g)[0];return n.a.createElement("div",{key:r,className:"Page-Category__box"},n.a.createElement("img",{className:"Page-Category__image",src:"https://starwars-visualguide.com/assets/img/".concat(/(people|pilots|residents)/gi.test(a)?"characters":a,"/").concat(s,".jpg"),alt:"Star Wars",onError:e.handleImgError.bind(e)}),n.a.createElement("p",null,n.a.createElement(l.a,{to:"/".concat(/(characters|people|pilots|residents)/gi.test(a)?"people":a,"/").concat(s)},t.name||t.title)))}))})))}}]),t}(r.Component),I=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"grid"},Object.keys(x).map(function(e,t){return n.a.createElement(l.a,{key:t,to:"/".concat(e),className:"List__item"},n.a.createElement("span",{className:"List__title"},e),n.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/categories/".concat("people"!==e?e:"character",".jpg"),alt:"Star Wars"}))})))},F=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"stars"}),n.a.createElement("div",{className:"twinkling"}),n.a.createElement("div",{className:"Catalog"},n.a.createElement(l.a,{to:"/",className:"Logo"},n.a.createElement("div",{className:"Logo__title"},"star"),n.a.createElement("div",{className:"Logo__title"},"wars")),n.a.createElement(o.a,null,n.a.createElement(u.a,{exact:!0,path:"/",render:function(){return n.a.createElement(m.a,{to:"/home",component:I})}}),n.a.createElement(u.a,{exact:!0,path:"/home",component:I}),n.a.createElement(u.a,{exact:!0,path:"/:api",component:L}),n.a.createElement(u.a,{exact:!0,path:"/:api/:id",component:D}))))},U=(a(33),document.getElementById("root"));c.a.render(n.a.createElement(i.a,{basename:"/react-sw"},n.a.createElement(F,null)),U)}},[[21,1,2]]]);
//# sourceMappingURL=main.4c98739a.chunk.js.map