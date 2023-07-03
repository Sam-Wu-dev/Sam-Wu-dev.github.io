import{_ as e}from"./Step.vue_vue_type_script_setup_true_lang-ea1364c1.js";import{f as o,o as a,c as l,a as c,b as s,u as t,d as i}from"./index-efad7d57.js";const r="/assets/ninja1-3c02fa09.png",n="/assets/kunai2-d752aed6.png",d="/assets/kunai1-c84da868.png",p="/assets/ninja2-f3b22b9c.png",x="/assets/bodykeypoint-7c157d30.png",m="/assets/資料蒐集-46736c95.mp4",f="/assets/實際遊玩-50dd5603.mp4",v="/assets/menu-91e4e338.png",h="/assets/fcn-3c12ae4c.png",_="/assets/hitbox-21694777.jpg",b="/assets/playtime-bf57b54f.png",g="/assets/finishpage-f4922785.png",u="/assets/throwdetector-6df0c258.gif",y={class:"relative px-20"},w=i('<div class="flex items-center justify-between px-48 my-24"><img src="'+r+'" class="h-48 w-48"><img src="'+n+'" class="h-8 w-24"><h1 class="relative font-bold text-5xl text-opcity-100 text-center">非接觸式街機遊戲​ –Ninja Strike Master​</h1><img src="'+d+'" class="h-8 w-24"><img src="'+p+'" class="h-48 w-48"></div><div class="relative my-24"><h2 class="text-4xl text-center font-bold pb-8">目標 </h2><p class="text-center text-2xl">使用非接觸式的方式遊玩丟球遊戲機台</p></div><div class="relative my-24"><div class="flex justify-between px-64 my-12"><div class="flex flex-col w-48 h-36 justify-center text-center items-center"><h3 class="text-2xl font-bold pb-2"> 作者</h3><p class="break-words"> 吳少森 、 陳柏翰 <br> 陳俊良 、 何定綸 </p></div><div class="flex flex-col w-48 h-36 justify-center text-center items-center"><h3 class="text-2xl font-bold pb-2"> 開發環境</h3><p class="break-words"> Unity<br> Google colab<br></p></div><div class="flex flex-col w-48 h-36 justify-center text-center items-center"><h3 class="text-xl font-bold"> 使用設備</h3><p class="break-words"> 有鏡頭的筆電 <br> 220cm * 110cm 的顯示器 </p></div></div></div><div class="relative my-24"><h2 class="text-4xl text-center font-bold pb-8">實作流程 </h2><div class="flex items-center justify-center"><div class="flex flex-col items-start text-2xl"><a href="#section1" class="pb-4">A.訓練一個模型，其輸入為丟球過程的身體特徵點，輸出為預測落點</a><a href="#section2">B.在Unity用該模型做出非接觸式街機遊戲​</a></div></div></div><hr class="border-gray-200 my-20">',5),j={class:"relative px-20",id:"section1"},S=i('<h2 class="text-3xl text-center font-bold">Process A </h2><div class="flex flex-col my-10 py-3 px-20"><div class="flex items-center justify-between px-24"><div><h3 class="text-2xl font-bold">step.1</h3><p class="break-words w-40">使用人體姿態辨識工具Openpose來抓取身體特徵點</p></div><div class="w-3/5 flex justify-center"><img src="'+x+'" class="h-80 w-50"></div></div></div>',2),k=i('<div class="flex flex-col my-10 py-3 px-20"><div class="flex items-center justify-between px-24"><div><h3 class="text-2xl font-bold">step.3</h3><p class="break-words w-40">蒐集訓練資料</p></div><video class="h-1/5 w-3/5" controls><source src="'+m+'" type="video/mp4"> Your browser does not support the video tag. </video></div></div>',1),N={class:"relative px-20",id:"section2"},B=c("h2",{class:"text-3xl text-center font-bold"},"Process B",-1),V={class:"flex flex-col my-10 py-3 px-20"},A=i('<div class="relative pb-20" id="section2"><h2 class="text-4xl text-center font-bold pb-20">成果展示</h2><div class="flex items-center justify-center"><video class="h-1/8 w-2/5" controls><source src="'+f+'" type="video/mp4"> Your browser does not support the video tag. </video></div></div>',1),E=o({__name:"NinjaStrikeMaster",setup(C){return(M,P)=>(a(),l("div",y,[w,c("div",j,[S,s(e,{step:"step.2",description:"透過觀察丟球動作找出丟球結束幀",imageSrc:t(u)},null,8,["step","imageSrc"]),k,s(e,{step:"step.4",description:"訓練Fully Connected Network",imageSrc:t(h)},null,8,["step","imageSrc"])]),c("div",N,[B,c("div",V,[s(e,{step:"計分方法",description:"打到黑忍者的normal hit box +1分，critical hit box +2分，打到白忍者-1分",imageSrc:t(_)},null,8,["imageSrc"]),s(e,{step:"主畫面",description:"向左丟球開始遊戲，向右丟球進入練習模式",imageSrc:t(v)},null,8,["imageSrc"]),s(e,{step:"遊戲畫面",description:"計時60秒，忍者會隨機移動，黑白忍者每隔一段時間會互換位置",imageSrc:t(b)},null,8,["imageSrc"]),s(e,{step:"結算畫面",description:"向左丟球回主畫面，向右丟球進入新一輪的遊戲",imageSrc:t(g)},null,8,["imageSrc"])])]),A]))}});export{E as default};