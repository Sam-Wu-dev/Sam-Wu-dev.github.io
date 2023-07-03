<template>
    <div class="relative px-20">
        <div class="flex items-center justify-between px-24 my-24 h-48">
            <img src="../../assets/images/license_g.png" class="h-24 w-80" />
            <h1 class="relative font-bold text-5xl text-opcity-100 text-center">車牌位置辨識器​</h1>
            <img src="../../assets/images/license_l.png" class="h-24 w-80" />
        </div>
        <div class="relative my-24">
            <h2 class="text-4xl text-center font-bold pb-8">目標
            </h2>
            <p class="text-center text-2xl">把車牌中的每個數字在畫面中的位置分別標示出來</p>
        </div>
        <div class="relative my-24">
            <div class="flex justify-center my-12">            
                <div class="flex flex-col w-48 h-36 justify-center text-center items-center mr-24">
                    <h3 class="text-2xl font-bold pb-2"> 作者</h3>    
                    <p class="break-words">
                        吳少森 、
                        陳柏翰 、
                        陳俊良 
                    </p>
                </div>
                <div class="flex flex-col w-48 h-36 justify-center text-center items-center">
                    <h3 class="text-2xl font-bold pb-2"> 開發環境</h3>
                    <p class="break-words">
                        Matlab<br>
                    </p>
                </div>
            </div>
        </div>
        <div class="relative my-24">
            <h2 class="text-4xl text-center font-bold pb-8">實作流程
            </h2>
            <div class="flex items-center justify-center">
                <div class="flex flex-col items-start text-2xl">
                    <a href="#section1" class="pb-4">A.找出車牌的位置</a>
                    <a href="#section2">B.分割出每個字的位置​</a>
                </div>
            </div>
        </div>
        <hr class="border-gray-200 my-20"/>
        <div class="relative px-20 my-24" id="section1">
            <h2 class="text-3xl text-center font-bold pb-8">Process A
            </h2>
            <sp :step="'step.1'" :description="'載入原圖'" :imageSrc="image_a"></sp>
            <sp :step="'step.2'" :description="'把圖轉為灰階圖並用[-1 0 1; -1 0 1; -1 0 1]filter偵測縱向的邊緣'" :imageSrc="image_b"></sp>
            <sp :step="'step.3'" :description="'用imbinarize把圖轉為二值圖，再用order filter去除雜訊'" :imageSrc="image_c"></sp>
            <sp :step="'step.4'" :description="'使用橫向的膨脹，再用imfill把空洞補齊'" :imageSrc="image_d"></sp>
            <sp :step="'step.5'" :description="'依序進行橫向的侵蝕與膨脹，直到只剩下大面積的區塊'" :imageSrc="image_e"></sp>
            <sp :step="'step.6'" :description="'用bwconncomp找出bounding box'" :imageSrc="image_j"></sp>
            <sp :step="'step.7'" :description="'透過長寬比以及、寬度限制、高度限制以及與長方形的相似程度找出車牌位置的bounding box'" :imageSrc="image_f"></sp>
        </div>
        <div class="relative px-20 my-24" id="section2">
            <h2 class="text-3xl text-center font-bold pb-8">Process B
            </h2>
            <sp :step="'step.1'" :description="'用bounding box框出車牌影像'" :imageSrc="image_g"></sp>
            <sp :step="'step.2'" :description="'用imbinarize把圖轉為二值圖，再用imcomplement反轉黑白'" :imageSrc="image_h"></sp>
            <sp :step="'step.3'" :description="'用bwconncomp找出bounding box'" :imageSrc="image_k"></sp>
            <sp :step="'step.4'" :description="'透過面積以及與長方形的相似程度找出每個字的bounding box'" :imageSrc="image_l"></sp>
        </div>
        <hr class="border-gray-200"/>
        <div class="relative my-24">
            <h2 class="text-4xl text-center font-bold my-12">成果展示</h2>
            <div class="flex flex-col items-center justify-center">
                <div class="flex items-center justify-between w-3/5 py-12">
                    <p class="text-3xl text-center font-bold w-2/5"> 原圖 </p>
                    <p class="text-3xl text-center font-bold w-2/5"> Result </p>
                </div>
                <div class="flex items-center justify-between w-3/5 py-12">
                    <img :src="image_a" class="h-1/5 w-2/5" />
                    <img src="../../assets/images/license_p.png" class="h-1/5 w-2/5" />
                </div>
                <div class="flex items-center justify-between w-3/5 py-12">
                    <img src="../../assets/images/001.jpg" class="h-1/5 w-2/5" />
                    <img src="../../assets/images/license_m.png" class="h-1/5 w-2/5" />
                </div>
                <div class="flex items-center justify-between w-3/5 py-12">
                    <img src="../../assets/images/003.jpg" class="h-1/5 w-2/5" />
                    <img src="../../assets/images/license_n.png" class="h-1/5 w-2/5" />
                </div>
                <div class="flex items-center justify-between w-3/5 py-12">
                    <img src="../../assets/images/004.jpg" class="h-1/5 w-2/5" />
                    <img src="../../assets/images/license_o.png" class="h-1/5 w-2/5" />
                </div>
            </div>
            
        </div>
    </div>
</template>


<script lang="ts" setup>
    import sp from '../helper/Step.vue'
    import image_a from '../../assets/images/license_a.jpg'
    import image_b from '../../assets/images/license_b.png'
    import image_c from '../../assets/images/license_c.png'
    import image_d from '../../assets/images/license_d.png'
    import image_e from '../../assets/images/license_e.png'
    import image_f from '../../assets/images/license_f.png'
    import image_g from '../../assets/images/license_g.png'
    import image_h from '../../assets/images/license_h.png'
    import image_j from '../../assets/images/license_j.png'
    import image_k from '../../assets/images/license_k.png'
    import image_l from '../../assets/images/license_l.png'
</script>