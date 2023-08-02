import{_ as l,p as i}from"./StepTwo.vue_vue_type_script_setup_true_lang-507fb2fb.js";import{f as o,o as r,g as n,w as t,e,a as s,b as c}from"./index-95c8f507.js";const a="/assets/opengl_a-261bf2d1.png",p="/assets/opengl_b-b440cbd5.png",d="/assets/opengl_c-5e3508af.png",_="/assets/ionia-c2ccfa14.jpg",f="/assets/opengl_f-00bb0e9c.png",m="/assets/opengl_g-1f78ee96.png",x="/assets/opengl_h-61dcce66.png",b="/assets/opengl_k-c5362dac.png",g="/assets/opengl_i-f52f911c.png",h="/assets/opengl_j-f6b1ba78.png",u="/assets/opengl_l-283c78c5.png",w="/assets/opengl_m-7ff6a043.png",v="/assets/opengl_n-182b3702.png",y="/assets/opengl_o-10fd9c20.png",j="/assets/opengl_p-b15f9b77.png",k="/assets/opengl_q-3f27d34f.png",P="/assets/opengl_r-9a6e825f.png",C="/assets/opengl_s-c9068f06.png",V="/assets/opengl_t-02c5f70f.png",K="/assets/opengl_u-6446e618.png",N="/assets/opengl_v-447fad0e.png",B=s("div",{class:"relative my-24"},[s("div",{class:"m-auto flex h-48 w-1/2 items-center justify-center"},[s("div",{class:"absolute inset-0 h-48 bg-white bg-opacity-90"}),s("h1",{class:"text-opcity-100 relative text-5xl font-bold"},"OpenGL渲染器")])],-1),T=s("p",{class:"break-words"},[e(" Visual Studio"),s("br"),e(" FreeGLUT ")],-1),D=s("div",{class:"flex items-center justify-center"},[s("div",{class:"flex flex-col items-start text-2xl"},[s("a",{href:"#section1"},"A.讀檔並把物件處理成一個一個的三角形"),s("a",{href:"#section2"},"B.進入vertex shader，以及rasterizer"),s("a",{href:"#section3"},"C.進入fragment shader，並用Phong reflection model實作出光線效果")])],-1),M=s("div",{class:"relative my-24 px-20"},[s("h2",{class:"pb-8 text-center text-3xl font-bold"},"檔案介紹"),s("div",{class:"my-10 flex flex-col py-3"},[s("div",{class:"flex items-center justify-between px-24"},[s("div",null,[s("h3",{class:"text-2xl font-bold"},"obj檔"),s("p",{class:"w-72 break-words"},[e(" mtllib(material library)->宣告mtl檔。"),s("br"),e(" v(vertex)->宣告vertex的三維座標。"),s("br"),e(" vt(vertex texture)->宣告texture的座標。"),s("br"),e(" vn(vertex normal)->宣告一個法向量。"),s("br"),e(" usemtl(use material)->宣告接下來的平面要用哪種mtl。"),s("br"),e(" f(face)->宣告一個至少由三個點組成平面，每個點會由P/T/N組成，分別是postion/texture/normal的index。"),s("br")])]),s("div",{class:"flex w-3/5 justify-center"},[s("img",{src:a,class:"w-50 h-80"}),s("img",{src:p,class:"w-50 h-80"})])])]),s("div",{class:"my-10 flex flex-col py-3"},[s("div",{class:"flex items-center justify-between px-24"},[s("div",null,[s("h3",{class:"text-2xl font-bold"},"mtl檔"),s("p",{class:"w-72 break-words"},[e(" newmtl(new material)->宣告接下來要定義一個新的mtl。"),s("br"),e(" Ns(specular exponent)->用來表示高光的大小。"),s("br"),e(" Ka(Ambient Coefficient)->用來表示環境光(無向光)的反射強度。"),s("br"),e(" Kd(Diffuse Coefficient)->用來表示有向光的漫射強度。"),s("br"),e(" Ks(Specular Coefficient)->用來表示有向光的反射強度。"),s("br"),e(" map_kd->宣告使用texture來表示Kd。"),s("br")])]),s("div",{class:"flex w-3/5 justify-center"},[s("img",{src:d})])])]),s("div",{class:"my-10 flex flex-col py-3"},[s("div",{class:"flex items-center justify-between px-24"},[s("div",null,[s("h3",{class:"text-2xl font-bold"},"texture"),s("p",{class:"break-words"},[e("一張2d圖片"),s("br")])]),s("div",{class:"flex w-3/5 justify-center"},[s("img",{src:_,class:"w-50 h-80"})])])])],-1),A={class:"relative my-24",id:"section1"},G=s("h2",{class:"pb-8 text-center text-3xl font-bold"},"Process A",-1),L=s("div",{class:"my-10 flex flex-col py-3 px-20"},[s("div",{class:"flex items-center justify-between px-24"},[s("h3",{class:"text-2xl font-bold"},"step.1"),s("p",{class:"h-1/5 w-3/5 break-words"}," 讀入material library(Ka、Kd、Ks、texture)、v、vt、vn。 ")])],-1),z=s("img",{src:f,class:"h-1/5 w-3/5"},null,-1),O=s("img",{src:m,class:"h-1/5 w-3/5"},null,-1),S=s("img",{src:x,class:"h-1/5 w-3/5"},null,-1),q=s("img",{src:b,class:"h-1/5 w-3/5"},null,-1),F=s("div",{class:"relative my-24 px-20",id:"section2"},[s("h2",{class:"pb-8 text-center text-3xl font-bold"},"Process B"),s("div",{class:"my-10 flex flex-col py-3"},[s("div",{class:"flex items-center justify-between px-24"},[s("div",null,[s("h3",{class:"text-2xl font-bold"},"step.1"),s("p",{class:"w-72 break-words"},"定義MVP(model-view-projection)矩陣。")]),s("p",{class:"h-1/5 w-3/5 break-words"},[e(" MVP = M*V*P。"),s("br"),s("br"),e(" M(model matrix/world matrix)->把物件從object space轉成world space，包括位移、旋轉、縮放。"),s("br"),s("br"),e(" V(view matrix)->把物件從world space轉成view space(以camera為原點的space)。"),s("br"),s("br"),e(" P(project matrix)->把物件從view space轉成clip space，進行perspective projection把3D座標投影到2D。 ")])])]),s("div",{class:"my-10 flex flex-col py-3"},[s("div",{class:"flex items-center justify-between px-24"},[s("div",null,[s("h3",{class:"text-2xl font-bold"},"step.2"),s("p",{class:"w-72 break-words"},[e(" 定義vertex shader。"),s("br"),s("br"),e(" gl_Postion->把物件的座標從object space轉成clip space。"),s("br"),e(" interpPos->world space的座標。"),s("br"),e(" interpNor->把object space的法向量乘上normal matrix(world matrix的反矩陣再轉置)，得到物件在world space的法向量。"),s("br"),e(" interpTexcoord->texture的座標。 ")])]),s("div",{class:"flex w-3/5 justify-center"},[s("img",{src:g})])])]),s("div",{class:"my-10 flex flex-col py-3"},[s("div",{class:"flex items-center justify-between px-24"},[s("div",null,[s("h3",{class:"text-2xl font-bold"},"step.3"),s("p",{class:"w-72 break-words"},[e(" rasterization。"),s("br"),s("br"),e(" 透過內插計算出三角形內每個pixel的postion、texture、normal。"),s("br"),e(" 刪掉在螢幕範圍外的或是被擋住的pixel後，剩下的被稱為fragment並送入fragment shader。 ")])]),s("div",{class:"flex w-2/5 justify-center"},[s("img",{src:h})])])])],-1),U={class:"relative my-24",id:"section3"},$=s("h2",{class:"pb-8 text-center text-3xl font-bold"},"Process C",-1),E=s("img",{src:u,class:"h-1/5 w-3/5"},null,-1),H=s("img",{src:w,class:"h-1/5 w-3/5"},null,-1),I=s("img",{src:v,class:"h-1/5 w-3/5"},null,-1),J=s("img",{src:y,class:"h-1/5 w-3/5"},null,-1),Q=s("img",{src:j,class:"h-1/5 w-3/5"},null,-1),R=s("div",{class:"flex flex-col items-center justify-center"},[s("p",{class:"text-center text-xl"},"紅點是point light，黃點是spot light"),s("div",{class:"flex w-3/5 items-center justify-between py-12"},[s("img",{src:k,class:"h-1/5 w-2/5"}),s("img",{src:P,class:"h-1/5 w-2/5"})]),s("div",{class:"flex w-3/5 items-center justify-between py-12"},[s("img",{src:C,class:"h-1/5 w-2/5"}),s("img",{src:V,class:"h-1/5 w-2/5"})]),s("div",{class:"flex w-3/5 items-center justify-between py-12"},[s("img",{src:K,class:"h-1/5 w-2/5"}),s("img",{src:N,class:"h-1/5 w-2/5"})])],-1),es=o({__name:"OpenGL",setup(W){return(X,Y)=>(r(),n(i,null,{head:t(()=>[B]),target:t(()=>[e(" 在不同的光源中，渲染出3D物件的材質和紋理 ")]),author:t(()=>[e(" 吳少森 、 吳昱霆教授 ")]),environment:t(()=>[T]),language:t(()=>[e(" C++ ")]),process:t(()=>[D,M,s("div",A,[G,L,c(l,{step:"step.2",description:"讀入f並通過PTN的index得到vertex positon/texture/normal的值"},{default:t(()=>[z]),_:1}),c(l,{step:"step.3",description:"如果f的點超過3個，就把f拆成多個三角形"},{default:t(()=>[O]),_:1}),c(l,{step:"step.4",description:"找出物件的中心及三個維度的最長邊"},{default:t(()=>[S]),_:1}),c(l,{step:"step.5",description:"以物件中心為原點，將每個面的position標準化成-0.5~0.5的值"},{default:t(()=>[q]),_:1})]),F,s("div",U,[$,c(l,{step:"step.1",description:"定義diffuse跟specular reflection的計算方法。"},{default:t(()=>[E]),_:1}),c(l,{step:"step.2",description:"定義point light的計算方法。"},{default:t(()=>[H]),_:1}),c(l,{step:"step.3",description:"定義direction light的計算方法。"},{default:t(()=>[I]),_:1}),c(l,{step:"step.4",description:"定義spot light的計算方法。"},{default:t(()=>[J]),_:1}),c(l,{step:"step.5",description:"把有向光源的影響以及環境光加總起來，就能算出該fragment的顏色。"},{default:t(()=>[Q]),_:1})])]),result:t(()=>[R]),_:1}))}});export{es as default};
