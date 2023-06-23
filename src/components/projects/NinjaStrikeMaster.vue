<template>
    <div class="relative px-20">
        <div class="flex items-center justify-between px-48 my-24">
            <img src="../../assets/images/ninja1.png" class=" h-48 w-48" />
            <img src="../../assets/images/kunai2.png" class=" h-8 w-24" />
            <h1 class="relative font-bold text-5xl text-opcity-100 text-center">非接觸式街機遊戲​
–Ninja Strike Master​</h1>
            <img src="../../assets/images/kunai1.png" class=" h-8 w-24" />
            <img src="../../assets/images/ninja2.png" class="h-48 w-48" />
        </div>
        <div class="relative my-24">
            <h2 class="text-4xl text-center font-bold pb-8">目標
            </h2>
            <p class="text-center text-2xl">使用非接觸式的方式遊玩丟球遊戲機台</p>
        </div>
        <div class="relative my-24">
            <div class="flex justify-between px-64 my-12">            
                <div class="flex flex-col w-48 h-36 justify-center text-center items-center">
                    <h3 class="text-xl font-bold"> 作者</h3>    
                    <p class="break-words">
                        吳少森 、
                        陳柏翰 <br>
                        陳俊良 、
                        何定綸
                    </p>
                </div>
                <div class="flex flex-col w-48 h-36 justify-center text-center items-center">
                    <h3 class="text-xl font-bold"> 開發環境</h3>
                    <p class="break-words">
                        Unity<br>
                        Google colab<br>
                    </p>
                </div>
                <div class="flex flex-col w-48 h-36 justify-center text-center items-center">
                    <h3 class="text-xl font-bold"> 使用設備</h3>
                    <p class="break-words">
                        有鏡頭的筆電 <br>
                        220cm * 110cm 的顯示器
                    </p>
                </div>
            </div>
        </div>
        <div class="relative my-24">
            <h2 class="text-4xl text-center font-bold pb-8">實作流程
            </h2>
            <div class="flex items-center justify-center">
                <div class="flex flex-col items-start text-2xl">
                    <a href="#section1" class="pb-4">A.訓練一個模型，其輸入為丟球過程的身體特徵點，輸出為預測落點</a>
                    <a href="#section2">B.在Unity用該模型做出非接觸式街機遊戲​</a>
                </div>
            </div>
        </div>
        <hr class="border-gray-200 my-20"/>
        <div class="relative px-20" id="section1">
            <h2 class="text-3xl text-center font-bold">Process A
            </h2>
            <div class="flex flex-col my-10 py-3 px-20">
                <div class="flex items-center justify-between px-60">
                    <div>
                    <h3 class="text-2xl font-bold">step.1</h3>
                    <p class="break-words w-40">使用人體姿態辨識工具Openpose來抓取身體特徵點</p>
                    </div>
                    <div class="w-3/5 flex justify-center">
                        <img src="../../assets/images/bodykeypoint.png" class="h-80 w-50" />
                    </div>
                </div>
            </div>
            <!-- <sp :step="'step.1'" :description="'使用人體姿態辨識工具Openpose來抓取身體特徵點'" :imageSrc="image_a"></sp> -->
            <sp :step="'step.2'" :description="'透過觀察丟球動作找出丟球結束幀'" :imageSrc="image_h"></sp>
            <div class="flex flex-col my-10 py-3 px-20">
                <div class="flex items-center justify-between px-60">
                    <div>
                    <h3 class="text-2xl font-bold">step.3</h3>
                    <p class="break-words w-40">蒐集訓練資料</p>
                    </div>
                    <video class="h-1/5 w-3/5" controls>
                        <source src="../../assets/video/資料蒐集.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <sp :step="'step.4'" :description="'訓練Fully Connected Network'" :imageSrc="image_d"></sp>
        </div>
        <div class="relative px-20" id="section2">
            <h2 class="text-3xl text-center font-bold">Process B</h2>
            <div class="flex flex-col my-10 py-3 px-20">
                <sp :step="'計分方法'" :description="'打到黑忍者的normal hit box +1分，critical hit box +2分，打到白忍者-1分'" :imageSrc="image_e"></sp>
                <sp :step="'主畫面'" :description="'向左丟球開始遊戲，向右丟球進入練習模式'" :imageSrc="image_c"></sp>
                <sp :step="'遊戲畫面'" :description="'計時60秒，忍者會隨機移動，黑白忍者每隔一段時間會互換位置'" :imageSrc="image_f"></sp>
                <sp :step="'結算畫面'" :description="'向左丟球回主畫面，向右丟球進入新一輪的遊戲'" :imageSrc="image_g"></sp>
            </div>
        </div>
        <div class="relative pb-20" id="section2">
            <h2 class="text-4xl text-center font-bold pb-20">成果展示</h2>
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
    import sp from '../helper/Step.vue'
    import image_c from '../../assets/images/menu.png'
    import image_d from '../../assets/images/fcn.png'
    import image_e from '../../assets/images/hitbox.jpg'
    import image_f from '../../assets/images/playtime.png'
    import image_g from '../../assets/images/finishpage.png'
    import image_h from '../../assets/images/throwdetector.gif'
</script>