<template>
    <div class="relative px-20">
        <div class="relative my-24">
            <div class="flex justify-center items-center h-48 w-1/2 m-auto">
                <div class="absolute inset-0 h-48 bg-white bg-opacity-90"></div>
                <h1 class="relative font-bold text-5xl text-opcity-100">OpenGL渲染器​</h1>
            </div>
        </div>
        <div class="relative my-24">
            <h2 class="text-4xl text-center font-bold pb-8">目標
            </h2>
            <div class="flex items-center justify-center">
                <p class="text-center text-2xl w-1/2">輸入物件的obj檔、mtl檔以及textures，並用OpenGL實作出該物件在point light、direction light以及spot light下的渲染效果</p>
            </div>
        </div>
        <div class="relative my-24">
            <div class="flex justify-center my-12">            
                <div class="flex flex-col w-48 h-36 justify-center text-center items-center mr-24">
                    <h3 class="text-2xl font-bold pb-2"> 作者</h3>    
                    <p class="break-words">
                        吳少森 、吳昱霆教授
                    </p>
                </div>
                <div class="flex flex-col w-48 h-36 justify-center text-center items-center">
                    <h3 class="text-2xl font-bold pb-2"> 開發環境</h3>
                    <p class="break-words">
                        Visual Studio<br>
                        FreeGLUT
                    </p>
                </div>
            </div>
        </div>
        <div class="relative my-24">
            <h2 class="text-4xl text-center font-bold pb-8">實作流程
            </h2>
            <div class="flex items-center justify-center">
                <div class="flex flex-col items-start text-2xl">
                    <a href="#section1">A.讀檔並把物件處理成一個一個的三角形</a>
                    <a href="#section2">B.進入vertex shader，以及rasterizer​</a>
                    <a href="#section2">C.進入fragment shader，並用Phong reflection model實作出光線效果​</a>
                </div>
            </div>
        </div>
        <hr class="border-gray-200 my-20"/>
        <div class="relative px-20 my-24">
            <h2 class="text-3xl text-center font-bold pb-8">檔案介紹
            </h2>
            <div class="flex flex-col my-10 py-3">
                <div class="flex items-center justify-between px-24">
                    <div>
                    <h3 class="text-2xl font-bold">obj檔</h3>
                    <p class="break-words w-72">
                        mtllib(material library)->宣告mtl檔。<br>
                        v(vertex)->宣告vertex的三維座標。<br>
                        vt(vertex texture)->宣告texture的座標。<br>
                        vn(vertex normal)->宣告一個法向量。<br>
                        usemtl(use material)->宣告接下來的平面要用哪種mtl。<br>
                        f(face)->宣告一個至少由三個點組成平面，每個點會由P/T/N組成，分別是postion/texture/normal的index。<br>
                    </p>
                    </div>
                    <div class="w-3/5 flex justify-center">
                        <img src="../../assets/images/opengl_a.png" class="h-80 w-50" />
                        <img src="../../assets/images/opengl_b.png" class="h-80 w-50" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col my-10 py-3">
                <div class="flex items-center justify-between px-24">
                    <div>
                    <h3 class="text-2xl font-bold">mtl檔</h3>
                    <p class="break-words w-72">
                        newmtl(new material)->宣告接下來要定義一個新的mtl。<br>
                        Ns(specular exponent)->用來表示高光的大小。<br>
                        Ka(Ambient Coefficient)->用來表示環境光(無向光)的反射強度。<br>
                        Kd(Diffuse Coefficient)->用來表示有向光的漫射強度。<br>
                        Ks(Specular Coefficient)->用來表示有向光的反射強度。<br>
                        map_kd->宣告使用texture來表示Kd。<br>
                    </p>
                    </div>
                    <div class="w-3/5 flex justify-center">
                        <img src="../../assets/images/opengl_c.png"/>
                    </div>
                </div>
            </div>
            <div class="flex flex-col my-10 py-3">
                <div class="flex items-center justify-between px-24">
                    <div>
                    <h3 class="text-2xl font-bold">texture</h3>
                    <p class="break-words">
                        一張2d圖片<br>
                    </p>
                    </div>
                    <div class="w-3/5 flex justify-center">
                        <img src="../../assets/images/ionia.jpg" class="h-80 w-50"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative px-20 my-24" id="section1">
            <h2 class="text-3xl text-center font-bold pb-8">Process A
            </h2>
            <div class="flex flex-col my-10 py-3 px-20">
                <div class="flex items-center justify-between px-24">
                    <h3 class="text-2xl font-bold">step.1</h3>
                    <p class="break-words h-1/5 w-3/5">讀入material library(Ka、Kd、Ks、texture)、v、vt、vn。</p>
                </div>
            </div>
            <sp :step="'step.2'" :description="'讀入f並通過PTN的index得到vertex positon/texture/normal的值'" :imageSrc="image_f"></sp>
            <sp :step="'step.3'" :description="'如果f的點超過3個，就把f拆成多個三角形'" :imageSrc="image_g"></sp>
            <sp :step="'step.4'" :description="'找出物件的中心及三個維度的最長邊'" :imageSrc="image_h"></sp>
            <sp :step="'step.5'" :description="'以物件中心為原點，將每個面的position標準化成-0.5~0.5的值'" :imageSrc="image_k"></sp>
        </div>
        <div class="relative px-20 my-24" id="section2">
            <h2 class="text-3xl text-center font-bold pb-8">Process B
            </h2>
            <div class="flex flex-col my-10 py-3">
                <div class="flex items-center justify-between px-24">
                    <div>
                        <h3 class="text-2xl font-bold">step.1</h3>
                        <p class="break-words w-72">定義MVP(model-view-projection)矩陣。</p>
                    </div>
                    <p class="break-words h-1/5 w-3/5">
                        MVP = M*V*P。<br><br>
                        M(model matrix/world matrix)->把物件從object space轉成world space，包括位移、旋轉、縮放。<br><br>
                        V(view matrix)->把物件從world space轉成view space(以camera為原點的space)。<br><br>
                        P(project matrix)->把物件從view space轉成clip space，進行perspective projection把3D座標投影到2D。
                    </p>
                </div>
            </div>
            <div class="flex flex-col my-10 py-3">
                <div class="flex items-center justify-between px-24">
                    <div>
                    <h3 class="text-2xl font-bold">step.2</h3>
                    <p class="break-words w-72">
                        定義vertex shader。<br><br>
                        gl_Postion->把物件的座標從object space轉成clip space。<br>
                        interpPos->world space的座標。<br>
                        interpNor->把object space的法向量乘上normal matrix(world matrix的反矩陣再轉置)，得到物件在world space的法向量。<br>
                        interpTexcoord->texture的座標。
                    </p>
                    </div>
                    <div class="w-3/5 flex justify-center">
                        <img src="../../assets/images/opengl_i.png"/>
                    </div>
                </div>
            </div>
            <div class="flex flex-col my-10 py-3">
                <div class="flex items-center justify-between px-24">
                    <div>
                    <h3 class="text-2xl font-bold">step.3</h3>
                    <p class="break-words w-72">
                        rasterization。<br><br>
                        透過內插計算出三角形內每個pixel的postion、texture、normal。<br>
                        刪掉在螢幕範圍外的或是被擋住的pixel後，剩下的被稱為fragment並送入fragment shader。
                    </p>
                    </div>
                    <div class="w-2/5 flex justify-center">
                        <img src="../../assets/images/opengl_j.png"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative px-20 my-24" id="section2">
            <h2 class="text-3xl text-center font-bold pb-8">Process C
            </h2>
            <div class="flex flex-col my-10 py-3">
                <div class="flex items-center justify-between px-24">
                    <div>
                    <h3 class="text-2xl font-bold">step.1
                    </h3>
                    <p class="break-words w-72">
                        定義diffuse跟specular reflection的計算方法。
                    </p>
                    </div>
                    <div class="w-3/5 flex justify-center">
                        <img src="../../assets/images/opengl_l.png"/>
                    </div>
                </div>
            </div>
            <div class="flex flex-col my-10 py-3">
                <div class="flex items-center justify-between px-24">
                    <div>
                    <h3 class="text-2xl font-bold">step.2
                    </h3>
                    <p class="break-words w-72">
                        定義point light的計算方法。
                    </p>
                    </div>
                    <div class="w-3/5 flex justify-center">
                        <img src="../../assets/images/opengl_m.png"/>
                    </div>
                </div>
            </div>
            <div class="flex flex-col my-10 py-3">
                <div class="flex items-center justify-between px-24">
                    <div>
                    <h3 class="text-2xl font-bold">step.3
                    </h3>
                    <p class="break-words w-72">
                        定義direction light的計算方法。
                    </p>
                    </div>
                    <div class="w-3/5 flex justify-center">
                        <img src="../../assets/images/opengl_n.png"/>
                    </div>
                </div>
            </div>
            <div class="flex flex-col my-10 py-3">
                <div class="flex items-center justify-between px-24">
                    <div>
                    <h3 class="text-2xl font-bold">step.4
                    </h3>
                    <p class="break-words w-72">
                        定義spot light的計算方法。
                    </p>
                    </div>
                    <div class="w-3/5 flex justify-center">
                        <img src="../../assets/images/opengl_o.png"/>
                    </div>
                </div>
            </div>
            <div class="flex flex-col my-10 py-3">
                <div class="flex items-center justify-between px-24">
                    <div>
                    <h3 class="text-2xl font-bold">step.5
                    </h3>
                    <p class="break-words w-72">
                        把有向光源的影響以及環境光加總起來，就能算出該fragment的顏色。
                    </p>
                    </div>
                    <div class="w-3/5 flex justify-center">
                        <img src="../../assets/images/opengl_p.png"/>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border-gray-200"/>
        <div class="relative my-24" id="section2">
            <h2 class="text-4xl text-center font-bold my-12">成果展示</h2>
            <div class="flex flex-col items-center justify-center">
                <p class="text-xl text-center">紅點是point light，黃點是spot light</p>
                <div class="flex items-center justify-between w-3/5 py-12">
                    <img src="../../assets/images/opengl_q.png" class="h-1/5 w-2/5" />
                    <img src="../../assets/images/opengl_r.png" class="h-1/5 w-2/5" />
                </div>
                <div class="flex items-center justify-between w-3/5 py-12">
                    <img src="../../assets/images/opengl_s.png" class="h-1/5 w-2/5" />
                    <img src="../../assets/images/opengl_t.png" class="h-1/5 w-2/5" />
                </div>
                <div class="flex items-center justify-between w-3/5 py-12">
                    <img src="../../assets/images/opengl_u.png" class="h-1/5 w-2/5" />
                    <img src="../../assets/images/opengl_v.png" class="h-1/5 w-2/5" />
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
    import sp from '../helper/Step.vue'
    import image_c from '../../assets/images/opengl_c.png'
    import image_d from '../../assets/images/opengl_d.png'
    import image_e from '../../assets/images/opengl_e.png'
    import image_f from '../../assets/images/opengl_f.png'
    import image_g from '../../assets/images/opengl_g.png'
    import image_h from '../../assets/images/opengl_h.png'
    import image_i from '../../assets/images/opengl_i.png'
    import image_j from '../../assets/images/opengl_j.png'
    import image_k from '../../assets/images/opengl_k.png'
    import image_l from '../../assets/images/opengl_l.png'
    import image_m from '../../assets/images/opengl_l.png'
    import image_n from '../../assets/images/opengl_l.png'
    import image_o from '../../assets/images/opengl_l.png'
    import image_p from '../../assets/images/opengl_l.png'
</script>