(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,s,n){},69:function(e,s,n){},84:function(e,s,n){},85:function(e,s,n){},86:function(e,s,n){},87:function(e,s,n){},88:function(e,s,n){},89:function(e,s,n){},90:function(e,s,n){},91:function(e,s,n){},92:function(e,s,n){"use strict";n.r(s);var t=n(1),i=n(0),a=n.n(i),c=n(21),r=n.n(c),o=n(34),l=n(45),d=n(22),m=n(23),h=(n(69),n(108)),j=n(114);function u(e){var s=e.children,n=e.window,i=Object(h.a)({target:n?n():void 0});return Object(t.jsx)(j.a,{style:{position:"fixed"},appear:!1,direction:"down",in:!i,children:s})}function b(e){var s=Object(i.useState)(!1),n=Object(l.a)(s,2),a=n[0],c=n[1],r=function(){return c(!1)};return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(u,Object(o.a)(Object(o.a)({},e),{},{children:Object(t.jsx)("nav",{className:"navbar",children:Object(t.jsxs)("div",{className:"navbar-container",children:[Object(t.jsx)(d.b,{to:"/",className:"navbar-logo",onClick:r,children:"ansonjwhe"}),Object(t.jsx)("div",{className:"menu-icon",onClick:function(){return c(!a)},children:Object(t.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(t.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(m.a,{smooth:!0,to:"/#",className:"nav-links",onClick:r,children:"About"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(m.a,{smooth:!0,to:"/#experiences",className:"nav-links",onClick:r,children:"Experiences"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(m.a,{smooth:!0,to:"/#projects",className:"nav-links",onClick:r,children:"Projects"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(m.a,{smooth:!0,to:"/resume#",className:"nav-links",onClick:r,children:"Resume"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(m.a,{smooth:!0,to:"/music#",className:"nav-links",onClick:r,children:"Music"})})]})]})})}))})}n(20);var p=n(112),g=n(11),f=n.n(g);n(84);function x(){return Object(t.jsxs)("div",{className:"hero-container",children:[Object(t.jsx)(f.a,{top:!0,children:Object(t.jsx)(p.a,{alt:"Profile Photo",id:"avatar",src:"/images/self.jpg"})}),Object(t.jsx)(f.a,{top:!0,children:Object(t.jsx)("h1",{children:"Hey! I'm Anson He"})}),Object(t.jsx)(f.a,{bottom:!0,children:Object(t.jsx)("p",{children:"I'm an aspiring developer studying Computing and Financial Management at the University of Waterloo."})}),Object(t.jsx)(f.a,{bottom:!0,children:Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{class:"social-icons",children:[Object(t.jsx)("a",{class:"social-icon-link email",href:"mailto:ansonjwhe@gmail.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Email",children:Object(t.jsx)("i",{class:"far fa-envelope"})}),Object(t.jsx)("a",{class:"social-icon-link linkedin",href:"https://www.linkedin.com/in/ansonjwhe/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:Object(t.jsx)("i",{class:"fab fa-linkedin"})}),Object(t.jsx)("a",{class:"social-icon-link github",href:"https://github.com/ansonjwhe",target:"_blank",rel:"noopener noreferrer","aria-label":"Github",children:Object(t.jsx)("i",{class:"fab fa-github"})}),Object(t.jsx)("a",{class:"social-icon-link instagram",href:"https://www.instagram.com/ansonjwhe/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:Object(t.jsx)("i",{class:"fab fa-instagram"})})]})})})]})}n(85);var O=n(111),v=n(113),w=n(19),y=n(41),k=n(42),I=n(43),C=n(44);n(86);function N(e){var s;return"Experiences"===e.header?s=Object(t.jsx)("img",{id:"card-img",src:e.imgsrc,alt:e.name+" Image"}):"Projects"===e.header&&(s=Object(t.jsxs)("div",{id:"icon-container",children:[e.devpost&&Object(t.jsx)("a",{href:e.devpost,target:"_blank",rel:"noopener noreferrer",children:Object(t.jsx)("img",{class:"icon-item",src:"/images/devpost.png",alt:"devpost"})}),Object(t.jsx)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",children:Object(t.jsx)("img",{class:"icon-item",src:"/images/github.png",alt:"github"})})]})),Object(t.jsx)(f.a,{bottom:!0,cascade:!0,children:Object(t.jsxs)("div",{id:"card-container",children:[Object(t.jsx)("h3",{id:"card-name",children:e.name}),s,Object(t.jsx)("p",{id:"card-desc",children:e.desc})]})})}n(87),n(37),n(38),n(39),n(40);function M(e){var s=e.data.map((function(s){return Object(t.jsx)(O.a,{class:"swiper-slide",children:Object(t.jsx)(N,{header:e.header,name:s.name,imgsrc:s.imgsrc,github:s.github,devpost:s.devpost,desc:s.desc})})}));return Object(t.jsx)("div",{id:"slider-container",children:Object(t.jsx)(v.a,{id:"slider-container",loop:!0,slidesPerView:3,spaceBetween:10,navigation:!0,pagination:{clickable:!0},setWrapperSize:!0,onSwiper:function(e){return console.log(e)},onSlideChange:function(){return console.log("slide change")},grabCursor:!0,children:s})})}function E(e){return Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)(f.a,{right:!0,cascade:!0,children:Object(t.jsx)("h1",{children:e.header})}),Object(t.jsx)(M,{header:e.header,data:e.data})]})}w.a.use([y.a,k.a,I.a,C.a]);n(88);function F(){return Object(t.jsx)("div",{id:"footer-container",children:Object(t.jsx)(f.a,{bottom:!0,cascade:!0,children:Object(t.jsx)("h3",{id:"footer",children:"\xa9 2021 Anson He"})})})}function P(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(x,{}),Object(t.jsx)("div",{id:"experiences",children:Object(t.jsx)(E,{header:"Experiences",data:[{name:"Eco Club",imgsrc:"/images/ecoclub.jpg",desc:"As the President of the Eco Club, I helped reestablish the club by attracting over 30 new members and leading weekly eco-friendly initiatives."},{name:"DECA",imgsrc:"/images/deca.jpg",desc:"I competed in DECA for all 4 years of high school, qualifying for provincials every year, and finally achieving Provincial Champion status in the STDM event in my last year!"},{name:"Music Council",imgsrc:"/images/music.jpg",desc:"As a 3-time winner of the Best Percussionist award, I was selected as a Music Council Executive and helped organize fun events for my school's music department."},{name:"Kumon",imgsrc:"/images/kumon.jpg",desc:"During my 4 years at Kumon, I served as both a Reading Master and a Primary Instructor, teaching students Math and English and conducting student orientation sessions."},{name:"WATonomous",imgsrc:"/images/watonomous.jpg",desc:"As a core member of external sponsorship, I help raise funding for WATonomous, University of Waterloo's one and only autonomous vehicle student design team."}]})}),Object(t.jsx)("div",{id:"projects",children:Object(t.jsx)(E,{header:"Projects",data:[{name:"BadGIF",github:"https://github.com/ansonjwhe/BadGIF",devpost:"https://devpost.com/software/badgif",desc:"I helped develop a discord bot that analyzes the sentiment of user messages using GCP's NL API to send a GIF of the opposite emotion and track and display user sentiment data through a MERN Stack application."},{name:"ohmi",github:"https://github.com/ansonjwhe/ohmi",devpost:"https://devpost.com/software/ohmi",desc:"I helped build a web app using React that allows users to synchronously send, receive, and claim favours from friends in real time using Firebase's Cloud Firestore and authentication features."},{name:"MazeTD",github:"https://github.com/ansonjwhe/MazeTD",desc:"I designed and created a maze-building tower defense game in Java, where enemy pathing is dynamically determined by the maze created with user-placed towers using the breadth-first search algorithm."},{name:"Bomberman",github:"https://github.com/ansonjwhe/NESBomberman",desc:"Inspired by the original NES Bomberman (1983), I created my own Bomberman Game in Turing with seamless frame-by-frame sprite animation to scratch that nostalgic itch."}]})}),Object(t.jsx)(F,{})]})}n(89);function A(){return Object(t.jsxs)("div",{id:"resume-container",children:[Object(t.jsx)(f.a,{top:!0,children:Object(t.jsx)("h1",{children:"My Current Resume"})}),Object(t.jsx)(f.a,{bottom:!0,children:Object(t.jsx)("iframe",{title:"current resume",src:"https://drive.google.com/file/d/1Kj5OGoMfIXsr1FeRq8OkJgA4rbITFt_P/preview",frameborder:"0",allowfullscreen:!0,allow:"fullscreen"})})]})}function S(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(A,{})})}n(90);function z(e){var s=[{title:"Chromatic Fur Elise",embed:"https://musescore.com/user/9899696/scores/6208985/embed",link:"https://musescore.com/user/9899696/scores/6208985/s/2GjHVH"},{title:"Frostlands",embed:"https://musescore.com/user/9899696/scores/6208986/embed",link:"https://musescore.com/user/9899696/scores/6208986/s/Z39qz_"},{title:"A Rainy Day",embed:"https://musescore.com/user/9899696/scores/5525729/embed",link:"https://musescore.com/user/9899696/scores/5525729/s/KqZ1rj"},{title:"Autumn Breeze",embed:"https://musescore.com/user/9899696/scores/6112041/embed",link:"https://musescore.com/user/9899696/scores/6112041/s/4g8OPw"},{title:"Whistle in the Drizzle",embed:"https://musescore.com/user/9899696/scores/6112082/embed",link:"https://musescore.com/user/9899696/scores/6112082/s/7UpS3M"},{title:"Studio Ghibli Mallet Quartet",embed:"https://musescore.com/user/9899696/scores/5101227/embed",link:"https://musescore.com/user/9899696/scores/5101227/s/qaMtMr"}].map((function(e){return Object(t.jsx)(O.a,{class:"swiper-slide",children:Object(t.jsx)("iframe",{title:e.title,src:e.embed,frameborder:"0",allowfullscreen:!0,allow:"autoplay; fullscreen"})})}));return Object(t.jsx)("div",{id:"music-slider-container",children:Object(t.jsx)(v.a,{loop:!0,slidesPerView:1,navigation:!0,pagination:{clickable:!0},setWrapperSize:!0,onSwiper:function(e){return console.log(e)},onSlideChange:function(){return console.log("slide change")},children:s})})}w.a.use([y.a,k.a,I.a,C.a]);n(91);function B(){return Object(t.jsx)(f.a,{left:!0,cascade:!0,children:Object(t.jsxs)("div",{id:"music-container",children:[Object(t.jsx)("h1",{children:"Musical Compositions"}),Object(t.jsx)("p",{children:"I love music! Whether it is listening to music while I work, playing as a percussionist in my highschool band, improvising on my piano at home, or composing my next musical piece\u2014music is more than just a hobby to me. It is how I relax, how I stay motivated, and how I express my creativity!"}),Object(t.jsxs)("p",{children:["You can find all my compositions and arrangments below or on my musescore profile: ",Object(t.jsx)("a",{href:"https://musescore.com/user/9899696",target:"_blank",rel:"noreferrer noopener",children:"ansonjwhe"})]}),Object(t.jsx)(z,{})]})})}function G(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(B,{})})}var _=n(8);function D(){return Object(t.jsx)("div",{id:"site-container",children:Object(t.jsxs)(d.a,{onUpdate:function(){var e=window.location.hash;""!==e&&setTimeout((function(){var s=e.replace("#",""),n=document.getElementById(s);n&&n.scrollIntoView()}),0)},children:[Object(t.jsx)(b,{}),Object(t.jsxs)(_.c,{children:[Object(t.jsx)(_.a,{path:"/",exact:!0,component:P}),Object(t.jsx)(_.a,{path:"/resume",component:S}),Object(t.jsx)(_.a,{path:"/music",component:G})]})]})})}r.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(D,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.a338f0ca.chunk.js.map