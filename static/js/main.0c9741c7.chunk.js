(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(8),l=c.n(n),i=(c(14),c(0));function r(){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("span",{className:"navbar-brand",children:"React Movies"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsx)("ul",{className:"navbar-nav",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"https://github.com/OmetovVlad/react_movies",target:"_blank",children:"Git repository"})})})})]})})}function o(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("footer",{className:"pt-4 my-md-5 pt-md-5 border-top",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-12 col-md",children:Object(i.jsx)("small",{className:"d-block mb-3 text-muted",children:"\xa9 2020-2021"})}),Object(i.jsxs)("div",{className:"col-6 col-md",children:[Object(i.jsx)("h5",{children:"My GitHub"}),Object(i.jsx)("ul",{className:"list-unstyled text-small",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"text-muted",href:"https://github.com/OmetovVlad",target:"_blank",children:"OmetovVlad"})})})]}),Object(i.jsxs)("div",{className:"col-6 col-md",children:[Object(i.jsx)("h5",{children:"My site"}),Object(i.jsx)("ul",{className:"list-unstyled text-small",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"text-muted",href:"https://ometov.ru/",target:"_blank",children:"ometov.ru"})})})]}),Object(i.jsxs)("div",{className:"col-6 col-md",children:[Object(i.jsx)("h5",{children:"My VK"}),Object(i.jsx)("ul",{className:"list-unstyled text-small",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{className:"text-muted",href:"https://vk.com/ometovvlad",target:"_blank",children:"ometovvlad"})})})]})]})})})}var d=c(2),j=c(3),m=c(4),h=c(6),b=c(5),v=c(9);function u(e){var t=e.Title,c=e.Year,s=(e.imdbId,e.Type),a=e.Poster;return Object(i.jsx)("div",{className:"mb-3 col-4",children:Object(i.jsxs)("div",{className:"movie card",children:["N/A"===a?Object(i.jsx)("img",{src:"https://via.placeholder.com/300x428?text=".concat(t)}):Object(i.jsx)("img",{src:a,alt:t}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h4",{className:"card-title",children:t}),Object(i.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:c}),Object(i.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:s})]})]})})}function x(e){var t=e.movies,c=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:c.length?c.map((function(e){return Object(i.jsx)(u,Object(v.a)({},e),e.imdbId)})):Object(i.jsx)("h4",{children:"\u041f\u0443\u0441\u0442\u043e"})})})})}function O(){return Object(i.jsx)("div",{className:"d-flex justify-content-center",children:Object(i.jsx)("div",{className:"spinner-border",role:"status",children:Object(i.jsx)("span",{className:"sr-only",children:"Loading..."})})})}var p=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(e){var s;return Object(d.a)(this,c),(s=t.call(this,e)).handleKey=function(e){"Enter"===e.key&&s.props.searchMovies(s.state.search,s.state.type)},s.handleFilter=function(e){s.setState((function(){return{type:e.target.value}}),(function(){s.props.searchMovies(s.state.search,s.state.type)}))},s.state={search:"",type:"all"},s}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"form-row",children:[Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("input",{type:"search",className:"form-control",placeholder:"Search",onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey})}),Object(i.jsx)("div",{className:"col-12 mt-3",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-1",children:Object(i.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(i.jsx)("input",{type:"radio",id:"all",name:"type",className:"custom-control-input",value:"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(i.jsx)("label",{className:"custom-control-label",htmlFor:"all",children:"All"})]})}),Object(i.jsx)("div",{className:"col-1",children:Object(i.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(i.jsx)("input",{type:"radio",id:"movie",name:"type",className:"custom-control-input",value:"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(i.jsx)("label",{className:"custom-control-label",htmlFor:"movie",children:"Movies"})]})}),Object(i.jsx)("div",{className:"col-1",children:Object(i.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(i.jsx)("input",{type:"radio",id:"series",name:"type",className:"custom-control-input",value:"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(i.jsx)("label",{className:"custom-control-label",htmlFor:"series",children:"Series"})]})})]})})]})})}}]),c}(a.a.Component),N="43c722b6",y=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(e){var s;return Object(d.a)(this,c),(s=t.call(this,e)).state={movies:[],loading:!0},s.searchMovies=s.searchMovies.bind(Object(m.a)(s)),s}return Object(j.a)(c,[{key:"searchMovies",value:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";fetch("https://www.omdbapi.com/?apikey=".concat(N,"&s=").concat(e).concat("all"!==c?"&type=".concat(c):"")).then((function(e){return e.json()})).then((function(e){return t.setState({movies:e.Search,loading:!1})}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=".concat(N,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,c=e.loading;return Object(i.jsx)("main",{style:{padding:"30px 0"},children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(p,{searchMovies:this.searchMovies}),c?Object(i.jsx)(O,{}):Object(i.jsx)(x,{movies:t})]})})}}]),c}(a.a.Component);var f=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r,{}),Object(i.jsx)(y,{}),Object(i.jsx)(o,{})]})};l.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0c9741c7.chunk.js.map