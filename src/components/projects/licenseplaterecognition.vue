<template>
    <div class="relative px-20">
        <div class="flex items-center justify-between px-48 my-24">
            <img src="../../assets/images/ninja1.png" class=" h-48 w-48" />
            <img src="../../assets/images/kunai2.png" class=" h-8 w-24" />
            <h1 class="relative font-bold text-4xl text-opcity-100">車牌位置辨識器​</h1>
            <img src="../../assets/images/kunai1.png" class=" h-8 w-24" />
            <img src="../../assets/images/ninja2.png" class="h-48 w-48" />
        </div>
        <div class="relative my-24">
            <h2 class="text-3xl text-center font-bold pb-8">目標
            </h2>
            <p class="text-center text-2xl">把車牌中的每個數字在畫面中的位置分別標示出來</p>
        </div>
        <div class="relative my-24">
            <div class="flex justify-center my-12">            
                <div class="flex flex-col w-48 h-36 justify-center text-center items-center mr-24">
                    <h3 class="text-xl font-bold"> 作者</h3>    
                    <p class="break-words">
                        吳少森 、
                        陳柏翰 、
                        陳俊良 
                    </p>
                </div>
                <div class="flex flex-col w-48 h-36 justify-center text-center items-center">
                    <h3 class="text-xl font-bold"> 開發環境</h3>
                    <p class="break-words">
                        Matlab<br>
                    </p>
                </div>
            </div>
        </div>
        <div class="relative my-24">
            <h2 class="text-3xl text-center font-bold pb-8">實作流程
            </h2>
            <div class="flex items-center justify-center">
                <div class="flex flex-col items-start text-2xl">
                    <a href="#section1" class="pb-4">A.找出車牌的位置</a>
                    <a href="#section2">B.分割出每個字的位置​</a>
                </div>
            </div>
        </div>
        <hr class="border-gray-200 my-20"/>
        <div class="relative px-20" id="section1">
            <h2 class="text-3xl text-center font-bold pb-8">Process A
            </h2>
            <sp :step="'step.1'" :description="'載入原圖'" :imageSrc="image_a"></sp>
            <sp :step="'step.2'" :description="'把圖轉為灰階圖並用[-1 0 1; -1 0 1; -1 0 1]filter偵測縱向的邊緣'" :imageSrc="image_b"></sp>
            <sp :step="'step.3'" :description="'用Isomap演算法把圖轉為Binary，再用order filter去除雜訊'" :imageSrc="image_c"></sp>
            <sp :step="'step.4'" :description="'使用橫向的膨脹，再用imfill把空洞補齊'" :imageSrc="image_d"></sp>
            <sp :step="'step.5'" :description="'依序進行橫向的侵蝕與膨脹，直到只剩下大面積的區塊'" :imageSrc="image_e"></sp>
            <sp :step="'step.6'" :description="'透過長寬比以及與長方形的相似程度找出車牌位置'" :imageSrc="image_f"></sp>
        </div>
        <div class="relative px-20" id="section1">
            <h2 class="text-3xl text-center font-bold pb-8">Process B
            </h2>
            <sp :step="'step.1'" :description="'只留下車牌影像'" :imageSrc="image_g"></sp>
            <sp :step="'step.2'" :description="'用Isomap演算法把圖轉為Binary，再用median filter去除雜訊'" :imageSrc="image_h"></sp>
        </div>
        <div class="relative pb-20" id="section2">
            <h2 class="text-3xl text-center font-bold pb-20">成果展示</h2>
            <div class="flex items-center justify-center">
                <video class="h-1/8 w-2/5" controls>
                        <source src="../../assets/video/實際遊玩.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
    import sp from './Step.vue'
    import image_a from '../../assets/images/license_a.jpg'
    import image_b from '../../assets/images/license_b.png'
    import image_c from '../../assets/images/license_c.png'
    import image_d from '../../assets/images/license_d.png'
    import image_e from '../../assets/images/license_e.png'
    import image_f from '../../assets/images/license_f.png'
    import image_g from '../../assets/images/license_g.png'
    import image_h from '../../assets/images/license_h.png'
</script>