import{d as o,r as l,c as n,a as r,t as c,b as p,M as u,F as m,o as d}from"./index-yVXPpDU7.js";const i={style:{"text-align":"center"}},V=o({__name:"MapPageView",setup(_){const e=l();return(t,a)=>(d(),n(m,null,[r("h1",i,c(e.value??"select to show the name of the area"),1),p(u,{class:"map",url:`./maps/${t.$route.params.map}.json`,selected:e.value,"onUpdate:selected":a[0]||(a[0]=s=>e.value=s)},null,8,["url","selected"])],64))}});export{V as default};