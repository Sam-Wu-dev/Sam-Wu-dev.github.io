import{d as c,o as i,c as r,b as t,t as o,e as a,u as s,a as n,p as v,f as b,_ as u}from"./index-4e621020.js";const _="/assets/小星星20230401-91eb4bea.mp3",m="/assets/小星星20230401-44758b18.wav",g={class:"flex flex-col my-10 py-3 px-20"},f={class:"flex items-center justify-between px-60"},h={class:"text-2xl"},x={class:"break-words w-40"},y=["src"],d=c({__name:"Step",props:{step:{type:String,default:"?"},description:{type:String,default:"?"},imageSrc:{type:String,default:"/"}},setup(e){return(l,p)=>(i(),r("div",g,[t("div",f,[t("div",null,[t("h3",h,o(e.step),1),t("p",x,o(e.description),1)]),t("img",{src:e.imageSrc,class:"h-50 w-200"},null,8,y)])]))}}),S="/assets/spectogram-90955b38.jpg",w="/assets/onsetframes-d89b992b.jpg",j="/assets/fundamentalfrequency-0a9c169f.jpg",k="/assets/onsetasmask-e4725633.jpg",A="/assets/result-812cdbe8.jpg",I=e=>(v("data-v-be75da4e"),e=e(),b(),e),$={class:"relative px-20"},B=n('<div class="relative top-8" data-v-be75da4e><div class="flex justify-center items-center h-48 bg-arduino bg-repeat-round w-10/12 m-auto" data-v-be75da4e><div class="absolute inset-0 h-48 bg-white bg-opacity-75" data-v-be75da4e></div><h1 class="relative font-bold text-4xl text-opcity-100" data-v-be75da4e>Arduino音樂盒</h1></div></div><div class="relative top-8" data-v-be75da4e><div class="flex justify-between px-64 my-12" data-v-be75da4e><div class="w-48 h-36 text-center" data-v-be75da4e><h3 class="text-xl font-bold" data-v-be75da4e> 作者</h3><p class="break-words" data-v-be75da4e> 吳少森 <br data-v-be75da4e> 何定綸 </p></div><div class="w-48 h-36 text-center" data-v-be75da4e><h3 class="text-xl font-bold" data-v-be75da4e> 開發環境</h3><p class="break-words" data-v-be75da4e> Arduino IDE<br data-v-be75da4e><div data-v-be75da4e><a href="https://colab.research.google.com/drive/1FO6ADkOYnMjDNrF9012sjSVWdrtFRxdJ?usp=sharing" class="" target="blank" data-v-be75da4e><span class="text-blue-700" data-v-be75da4e>Google colab</span></a><br data-v-be75da4e></div></p></div><div class="w-48 h-36 text-center" data-v-be75da4e><h3 class="text-xl font-bold" data-v-be75da4e> 使用設備</h3><p class="break-words" data-v-be75da4e> Arduino mega 2560 * 1 Buzzer * 1 </p></div></div></div>',2),D={class:"relative px-20"},N=I(()=>t("h2",{class:"text-3xl text-center font-bold py-10"},"用python函式庫librosa把音檔轉成樂譜 ",-1)),V=n('<div class="relative pb-20" data-v-be75da4e><h2 class="text-3xl text-center font-bold py-20" data-v-be75da4e>用arduino+蜂鳴器演奏樂譜 </h2><div class="flex items-center justify-center" data-v-be75da4e><div class="flex items-center justify-center px-10" data-v-be75da4e> origin: <audio controls data-v-be75da4e><source src="'+_+'" type="audio/mpeg" data-v-be75da4e> Your browser does not support the audio element. </audio></div><div class="flex items-center justify-center" data-v-be75da4e> result: <audio controls data-v-be75da4e><source src="'+m+'" type="audio/mpeg" data-v-be75da4e> Your browser does not support the audio element. </audio></div></div></div>',1),F=c({__name:"Arduino",setup(e){return(l,p)=>(i(),r("div",$,[B,t("div",D,[N,a(d,{step:"step.1",description:"把音檔轉成時頻圖(spectogram)",imageSrc:s(S)},null,8,["step","description","imageSrc"]),a(d,{step:"step.2",description:"偵測onset frames",imageSrc:s(w)},null,8,["step","imageSrc"]),a(d,{step:"step.3",description:"找出fundamental frequency",imageSrc:s(j)},null,8,["step","imageSrc"]),a(d,{step:"step.4",description:"過濾掉不在onset範圍的值",imageSrc:s(k)},null,8,["step","imageSrc"]),a(d,{step:"step.5",description:"把頻率轉成音符，並找出change frame跟計算frame gap，以得出樂譜",imageSrc:s(A)},null,8,["step","imageSrc"])]),V]))}});const q=u(F,[["__scopeId","data-v-be75da4e"]]);export{q as default};
