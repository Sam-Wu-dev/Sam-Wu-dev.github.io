import{d as c,o,c as n,b as e,t as s}from"./index-07a262a3.js";const i={class:"flex flex-col my-10 py-3 px-20"},a={class:"flex items-center justify-between px-60"},l={class:"text-2xl font-bold"},r={class:"break-words w-40"},d=["src"],m=c({__name:"Step",props:{step:{type:String,default:"?"},description:{type:String,default:"?"},imageSrc:{type:String,default:"/"}},setup(t){return(p,_)=>(o(),n("div",i,[e("div",a,[e("div",null,[e("h3",l,s(t.step),1),e("p",r,s(t.description),1)]),e("img",{src:t.imageSrc,class:"h-1/5 w-3/5"},null,8,d)])]))}});export{m as _};