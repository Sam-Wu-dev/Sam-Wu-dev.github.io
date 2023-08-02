<template>
  <pj>
    <template v-slot:head>
      <div class="relative my-24">
        <div class="m-auto flex h-48 w-1/2 items-center justify-center">
          <div class="absolute inset-0 h-48 bg-white bg-opacity-90"></div>
          <h1 class="text-opcity-100 relative text-5xl font-bold">OpenGL渲染器</h1>
        </div>
      </div>
    </template>
    <template v-slot:target> 在不同的光源中，渲染出3D物件的材質和紋理 </template>
    <template v-slot:author> 吳少森 、 吳昱霆教授 </template>
    <template v-slot:environment>
      <p class="break-words">
        Visual Studio<br />
        FreeGLUT
      </p>
    </template>
    <template v-slot:language> C++ </template>
    <template v-slot:process>
      <div class="flex items-center justify-center">
        <div class="flex flex-col items-start text-2xl">
          <a href="#section1">A.讀檔並把物件處理成一個一個的三角形</a>
          <a href="#section2">B.進入vertex shader，以及rasterizer</a>
          <a href="#section3">C.進入fragment shader，並用Phong reflection model實作出光線效果</a>
        </div>
      </div>
      <div class="relative my-24 px-20">
        <h2 class="pb-8 text-center text-3xl font-bold">檔案介紹</h2>
        <div class="my-10 flex flex-col py-3">
          <div class="flex items-center justify-between px-24">
            <div>
              <h3 class="text-2xl font-bold">obj檔</h3>
              <p class="w-72 break-words">
                mtllib(material library)->宣告mtl檔。<br />
                v(vertex)->宣告vertex的三維座標。<br />
                vt(vertex texture)->宣告texture的座標。<br />
                vn(vertex normal)->宣告一個法向量。<br />
                usemtl(use material)->宣告接下來的平面要用哪種mtl。<br />
                f(face)->宣告一個至少由三個點組成平面，每個點會由P/T/N組成，分別是postion/texture/normal的index。<br />
              </p>
            </div>
            <div class="flex w-3/5 justify-center">
              <img src="../../assets/images/opengl_a.png" class="w-50 h-80" />
              <img src="../../assets/images/opengl_b.png" class="w-50 h-80" />
            </div>
          </div>
        </div>
        <div class="my-10 flex flex-col py-3">
          <div class="flex items-center justify-between px-24">
            <div>
              <h3 class="text-2xl font-bold">mtl檔</h3>
              <p class="w-72 break-words">
                newmtl(new material)->宣告接下來要定義一個新的mtl。<br />
                Ns(specular exponent)->用來表示高光的大小。<br />
                Ka(Ambient Coefficient)->用來表示環境光(無向光)的反射強度。<br />
                Kd(Diffuse Coefficient)->用來表示有向光的漫射強度。<br />
                Ks(Specular Coefficient)->用來表示有向光的反射強度。<br />
                map_kd->宣告使用texture來表示Kd。<br />
              </p>
            </div>
            <div class="flex w-3/5 justify-center">
              <img src="../../assets/images/opengl_c.png" />
            </div>
          </div>
        </div>
        <div class="my-10 flex flex-col py-3">
          <div class="flex items-center justify-between px-24">
            <div>
              <h3 class="text-2xl font-bold">texture</h3>
              <p class="break-words">一張2d圖片<br /></p>
            </div>
            <div class="flex w-3/5 justify-center">
              <img src="../../assets/images/ionia.jpg" class="w-50 h-80" />
            </div>
          </div>
        </div>
      </div>
      <div class="relative my-24" id="section1">
        <h2 class="pb-8 text-center text-3xl font-bold">Process A</h2>
        <div class="my-10 flex flex-col py-3 px-20">
          <div class="flex items-center justify-between px-24">
            <h3 class="text-2xl font-bold">step.1</h3>
            <p class="h-1/5 w-3/5 break-words">
              讀入material library(Ka、Kd、Ks、texture)、v、vt、vn。
            </p>
          </div>
        </div>
        <sp
          :step="'step.2'"
          :description="'讀入f並通過PTN的index得到vertex positon/texture/normal的值'"
          ><img src="../../assets/images/opengl_f.png" class="h-1/5 w-3/5"
        /></sp>
        <sp :step="'step.3'" :description="'如果f的點超過3個，就把f拆成多個三角形'"
          ><img src="../../assets/images/opengl_g.png" class="h-1/5 w-3/5"
        /></sp>
        <sp :step="'step.4'" :description="'找出物件的中心及三個維度的最長邊'"
          ><img src="../../assets/images/opengl_h.png" class="h-1/5 w-3/5"
        /></sp>
        <sp
          :step="'step.5'"
          :description="'以物件中心為原點，將每個面的position標準化成-0.5~0.5的值'"
          ><img src="../../assets/images/opengl_k.png" class="h-1/5 w-3/5"
        /></sp>
      </div>
      <div class="relative my-24 px-20" id="section2">
        <h2 class="pb-8 text-center text-3xl font-bold">Process B</h2>
        <div class="my-10 flex flex-col py-3">
          <div class="flex items-center justify-between px-24">
            <div>
              <h3 class="text-2xl font-bold">step.1</h3>
              <p class="w-72 break-words">定義MVP(model-view-projection)矩陣。</p>
            </div>
            <p class="h-1/5 w-3/5 break-words">
              MVP = M*V*P。<br /><br />
              M(model matrix/world matrix)->把物件從object space轉成world
              space，包括位移、旋轉、縮放。<br /><br />
              V(view matrix)->把物件從world space轉成view space(以camera為原點的space)。<br /><br />
              P(project matrix)->把物件從view space轉成clip space，進行perspective
              projection把3D座標投影到2D。
            </p>
          </div>
        </div>
        <div class="my-10 flex flex-col py-3">
          <div class="flex items-center justify-between px-24">
            <div>
              <h3 class="text-2xl font-bold">step.2</h3>
              <p class="w-72 break-words">
                定義vertex shader。<br /><br />
                gl_Postion->把物件的座標從object space轉成clip space。<br />
                interpPos->world space的座標。<br />
                interpNor->把object space的法向量乘上normal matrix(world
                matrix的反矩陣再轉置)，得到物件在world space的法向量。<br />
                interpTexcoord->texture的座標。
              </p>
            </div>
            <div class="flex w-3/5 justify-center">
              <img src="../../assets/images/opengl_i.png" />
            </div>
          </div>
        </div>
        <div class="my-10 flex flex-col py-3">
          <div class="flex items-center justify-between px-24">
            <div>
              <h3 class="text-2xl font-bold">step.3</h3>
              <p class="w-72 break-words">
                rasterization。<br /><br />
                透過內插計算出三角形內每個pixel的postion、texture、normal。<br />
                刪掉在螢幕範圍外的或是被擋住的pixel後，剩下的被稱為fragment並送入fragment shader。
              </p>
            </div>
            <div class="flex w-2/5 justify-center">
              <img src="../../assets/images/opengl_j.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="relative my-24" id="section3">
        <h2 class="pb-8 text-center text-3xl font-bold">Process C</h2>
        <sp :step="'step.1'" :description="'定義diffuse跟specular reflection的計算方法。'"
          ><img src="../../assets/images/opengl_l.png" class="h-1/5 w-3/5"
        /></sp>
        <sp :step="'step.2'" :description="'定義point light的計算方法。'"
          ><img src="../../assets/images/opengl_m.png" class="h-1/5 w-3/5"
        /></sp>
        <sp :step="'step.3'" :description="'定義direction light的計算方法。'"
          ><img src="../../assets/images/opengl_n.png" class="h-1/5 w-3/5"
        /></sp>
        <sp :step="'step.4'" :description="'定義spot light的計算方法。'"
          ><img src="../../assets/images/opengl_o.png" class="h-1/5 w-3/5"
        /></sp>
        <sp
          :step="'step.5'"
          :description="'把有向光源的影響以及環境光加總起來，就能算出該fragment的顏色。'"
          ><img src="../../assets/images/opengl_p.png" class="h-1/5 w-3/5"
        /></sp>
      </div>
    </template>
    <template v-slot:result>
      <div class="flex flex-col items-center justify-center">
        <p class="text-center text-xl">紅點是point light，黃點是spot light</p>
        <div class="flex w-3/5 items-center justify-between py-12">
          <img src="../../assets/images/opengl_q.png" class="h-1/5 w-2/5" />
          <img src="../../assets/images/opengl_r.png" class="h-1/5 w-2/5" />
        </div>
        <div class="flex w-3/5 items-center justify-between py-12">
          <img src="../../assets/images/opengl_s.png" class="h-1/5 w-2/5" />
          <img src="../../assets/images/opengl_t.png" class="h-1/5 w-2/5" />
        </div>
        <div class="flex w-3/5 items-center justify-between py-12">
          <img src="../../assets/images/opengl_u.png" class="h-1/5 w-2/5" />
          <img src="../../assets/images/opengl_v.png" class="h-1/5 w-2/5" />
        </div>
      </div>
    </template>
  </pj>
</template>

<script lang="ts" setup>
import sp from '../helper/StepTwo.vue'
import pj from '../helper/ProjectLayout.vue'
</script>
