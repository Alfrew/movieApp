"use strict";(self.webpackChunkmovieApp=self.webpackChunkmovieApp||[]).push([[10],{5010:(D,h,s)=>{s.r(h),s.d(h,{DiscoverModule:()=>Q});var c=s(6814),m=s(3573),a=s(4239),e=s(5879),d=s(4478),g=s(8780),v=s(7578);const u=function(t){return{"background-image":t}};function _(t,o){if(1&t&&(e.TgZ(0,"div",8)(1,"div",9)(2,"h3"),e._uU(3,"Welcome!"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Millions of movies, TV shows and people to discover. Explore now."),e.qZA()()()),2&t){const i=e.oxw();e.Q6J("ngStyle",e.VKq(1,u,"url("+i.imgPathStatus+i.random.backdrop_path+")"))}}const p=function(t){return["/browse/movies",t]};function f(t,o){if(1&t&&e._UZ(0,"app-element-card",13),2&t){const i=o.$implicit;e.Q6J("card",i)("routerLink",e.VKq(2,p,i.id))}}function T(t,o){if(1&t&&(e.TgZ(0,"app-ma-section",10)(1,"div",11),e.YNc(2,f,1,4,"app-element-card",12),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("ngForOf",i.movieCardNowPlaying)}}function w(t,o){if(1&t&&e._UZ(0,"app-element-card",13),2&t){const i=o.$implicit;e.Q6J("card",i)("routerLink",e.VKq(2,p,i.id))}}function S(t,o){if(1&t&&(e.TgZ(0,"app-ma-section",14)(1,"div",11),e.YNc(2,w,1,4,"app-element-card",12),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("ngForOf",i.movieCardUpcoming)}}function L(t,o){if(1&t&&e._UZ(0,"app-element-card",13),2&t){const i=o.$implicit;e.Q6J("card",i)("routerLink",e.VKq(2,p,i.id))}}function P(t,o){if(1&t&&(e.TgZ(0,"app-ma-section",15)(1,"div",11),e.YNc(2,L,1,4,"app-element-card",12),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("ngForOf",i.movieCardTop)}}function x(t,o){if(1&t&&e._UZ(0,"app-element-card",13),2&t){const i=o.$implicit;e.Q6J("card",i)("routerLink",e.VKq(2,p,i.id))}}function C(t,o){if(1&t&&(e.TgZ(0,"app-ma-section",16)(1,"div",11),e.YNc(2,x,1,4,"app-element-card",12),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("ngForOf",i.movieCardPopular)}}const l=function(t){return["/browse/shows",t]};function M(t,o){if(1&t&&e._UZ(0,"app-element-card",13),2&t){const i=o.$implicit;e.Q6J("card",i)("routerLink",e.VKq(2,l,i.id))}}function O(t,o){if(1&t&&(e.TgZ(0,"app-ma-section",17)(1,"div",11),e.YNc(2,M,1,4,"app-element-card",12),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("ngForOf",i.showCardOnTheAir)}}function y(t,o){if(1&t&&e._UZ(0,"app-element-card",13),2&t){const i=o.$implicit;e.Q6J("card",i)("routerLink",e.VKq(2,l,i.id))}}function Z(t,o){if(1&t&&(e.TgZ(0,"app-ma-section",18)(1,"div",11),e.YNc(2,y,1,4,"app-element-card",12),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("ngForOf",i.showCardTop)}}function b(t,o){if(1&t&&e._UZ(0,"app-element-card",13),2&t){const i=o.$implicit;e.Q6J("card",i)("routerLink",e.VKq(2,l,i.id))}}function J(t,o){if(1&t&&(e.TgZ(0,"app-ma-section",19)(1,"div",11),e.YNc(2,b,1,4,"app-element-card",12),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("ngForOf",i.showCardPopular)}}const V=[{path:"",component:(()=>{class t{constructor(i,n,r){this.appStatusSRV=i,this.movieSRV=n,this.showSRV=r,this.imgPathStatus=a.Zm,this.filters={include_adult:!1,language:"en-US",page:1,sort_by:"popularity.desc"},this.movieCardNowPlaying=[],this.movieCardPopular=[],this.movieCardTop=[],this.movieCardUpcoming=[],this.movieGenreList=[],this.showCardAiringToday=[],this.showCardOnTheAir=[],this.showCardPopular=[],this.showCardTop=[],this.showGenreList=[]}ngOnInit(){this.getRandomMovie()}getMovieById(i){this.appStatusSRV.showSpinner(),this.movieSRV.getMovieById(i).subscribe({next:n=>{this.random=n},complete:()=>{this.random?.backdrop_path?this.getMovieGenreList():this.getRandomMovie()},error:()=>{this.getRandomMovie()}})}getMovieGenreList(){this.movieSRV.getMovieGenresList().subscribe({next:i=>{this.movieGenreList=i.genres},complete:()=>{this.getShowGenreList()},error:()=>{this.getShowGenreList()}})}getMovieListNowPlaying(){this.movieSRV.getMovieList(this.filters,"nowPlaying").subscribe({next:i=>{this.movieCardNowPlaying=a.On.mapMovieToCard(i.results,this.movieGenreList)},complete:()=>{this.getMovieListUpcoming()},error:()=>{this.getMovieListUpcoming()}})}getMovieListPopular(){this.movieSRV.getMovieList(this.filters,"popular").subscribe({next:i=>{this.movieCardPopular=a.On.mapMovieToCard(i.results,this.movieGenreList)},complete:()=>{this.getShowListOnTheAir()},error:()=>{this.getShowListOnTheAir()}})}getMovieListTop(){this.movieSRV.getMovieList(this.filters,"top").subscribe({next:i=>{this.movieCardTop=a.On.mapMovieToCard(i.results,this.movieGenreList)},complete:()=>{this.getMovieListPopular()},error:()=>{this.getMovieListPopular()}})}getMovieListUpcoming(){this.movieSRV.getMovieList(this.filters,"upcoming").subscribe({next:i=>{this.movieCardUpcoming=a.On.mapMovieToCard(i.results,this.movieGenreList)},complete:()=>{this.getMovieListTop()},error:()=>{this.getMovieListTop()}})}getRandomMovie(){let i=a.On.getRandomIntFromInterval(0,5e3);this.getMovieById(i)}getShowGenreList(){this.showSRV.getShowGenresList().subscribe({next:i=>{this.showGenreList=i.genres},complete:()=>{this.getMovieListNowPlaying()},error:()=>{this.getMovieListNowPlaying()}})}getShowListOnTheAir(){this.showSRV.getShowList(this.filters,"onTheAir").subscribe({next:i=>{this.showCardOnTheAir=a.On.mapShowToCard(i.results,this.showGenreList)},complete:()=>{this.getShowListTop()},error:()=>{this.getShowListTop()}})}getShowListPopular(){this.showSRV.getShowList(this.filters,"popular").subscribe({next:i=>{this.showCardPopular=a.On.mapShowToCard(i.results,this.showGenreList)},complete:()=>{this.appStatusSRV.hideSpinner()},error:()=>{this.appStatusSRV.hideSpinner()}})}getShowListTop(){this.showSRV.getShowList(this.filters,"top").subscribe({next:i=>{this.showCardTop=a.On.mapShowToCard(i.results,this.showGenreList)},complete:()=>{this.getShowListPopular()},error:()=>{this.getShowListPopular()}})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(a.lB),e.Y36(d.uE),e.Y36(d.Xt))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:8,vars:8,consts:[["class","discover-header-wrapper overlay-black",3,"ngStyle",4,"ngIf"],["sectionTitle","Now playing Movies",4,"ngIf"],["sectionTitle","Upcoming movies",4,"ngIf"],["sectionTitle","Top Rated movies",4,"ngIf"],["sectionTitle","Popular movies",4,"ngIf"],["sectionTitle","Shows On Air",4,"ngIf"],["sectionTitle","Top Shows",4,"ngIf"],["sectionTitle","Popular Shows",4,"ngIf"],[1,"discover-header-wrapper","overlay-black",3,"ngStyle"],[1,"discover-header-container"],["sectionTitle","Now playing Movies"],[1,"media-flex"],[3,"card","routerLink",4,"ngFor","ngForOf"],[3,"card","routerLink"],["sectionTitle","Upcoming movies"],["sectionTitle","Top Rated movies"],["sectionTitle","Popular movies"],["sectionTitle","Shows On Air"],["sectionTitle","Top Shows"],["sectionTitle","Popular Shows"]],template:function(n,r){1&n&&(e.YNc(0,_,6,3,"div",0),e.YNc(1,T,3,1,"app-ma-section",1),e.YNc(2,S,3,1,"app-ma-section",2),e.YNc(3,P,3,1,"app-ma-section",3),e.YNc(4,C,3,1,"app-ma-section",4),e.YNc(5,O,3,1,"app-ma-section",5),e.YNc(6,Z,3,1,"app-ma-section",6),e.YNc(7,J,3,1,"app-ma-section",7)),2&n&&(e.Q6J("ngIf",r.random),e.xp6(1),e.Q6J("ngIf",r.movieCardNowPlaying.length>0),e.xp6(1),e.Q6J("ngIf",r.movieCardUpcoming.length>0),e.xp6(1),e.Q6J("ngIf",r.movieCardTop.length>0),e.xp6(1),e.Q6J("ngIf",r.movieCardPopular.length>0),e.xp6(1),e.Q6J("ngIf",r.showCardOnTheAir.length>0),e.xp6(1),e.Q6J("ngIf",r.showCardTop.length>0),e.xp6(1),e.Q6J("ngIf",r.showCardPopular.length>0))},dependencies:[c.sg,c.O5,c.PC,m.rH,g.H,v.I],styles:[".discover-header-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;aspect-ratio:16/9;background-position:top center;background-repeat:no-repeat;background-size:contain;border-radius:16px;margin-bottom:20px;width:100%;overflow:hidden;color:#fff}.discover-header-container[_ngcontent-%COMP%]{position:relative;z-index:1;margin:0 auto;padding:0 48px}.discover-header-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:3rem;margin:0}.discover-header-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;margin:0}"]})}return t})()}];let A=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(V),m.Bz]})}return t})();var I=s(1614),N=s(8189),R=s(8822);let Q=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[c.ez,A,I.T,N.$,R.e]})}return t})()}}]);