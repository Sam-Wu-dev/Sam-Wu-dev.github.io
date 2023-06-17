<template>
    <div class="relative px-24">
        <div class="relative my-24">
            <div class="flex justify-center items-center h-48 bg-arduino bg-repeat-round w-10/12 m-auto">
                <div class="absolute inset-0 h-48 bg-white bg-opacity-75"></div>
                <h1 class="relative font-bold text-4xl text-opcity-100">Arduino音樂盒</h1>
            </div>
        </div>
        <div class="relative my-24">
            <h2 class="text-3xl text-center font-bold pb-8">目標
            </h2>
            <p class="text-center text-2xl">用python函式庫librosa把音檔轉成樂譜，並用arduino+蜂鳴器演奏</p>
        </div>
        <div class="relative my-24">
            <div class="flex justify-between px-72">            
                <div class="w-48 h-36 flex flex-col items-center justify-center text-center">
                    <h3 class="text-2xl font-bold">作者</h3>    
                    <p class="break-words">
                        吳少森 <br>
                        何定綸
                    </p>
                </div>
                <div class="w-48 h-36 flex flex-col items-center justify-center text-center">
                    <h3 class="text-2xl font-bold"> 開發環境</h3>
                    <p class="break-words">
                        Arduino IDE<br>
                        <div>
                            <a href="https://colab.research.google.com/drive/1FO6ADkOYnMjDNrF9012sjSVWdrtFRxdJ?usp=sharing" class="" target="blank">
                                <span class="text-blue-700">Google colab</span>
                            </a><br>
                        </div>
                    </p>
                </div>
                <div class="w-48 h-36 flex flex-col items-center justify-center text-center">
                    <h3 class="text-2xl font-bold"> 使用設備</h3>
                    <p class="break-words">
                        Arduino mega 2560<br>
                        蜂鳴器 * 1
                    </p>
                </div>
            </div>
        </div>
        <div class="relative px-20" id="section1">
            <h2 class="text-3xl text-center font-bold">實作流程
            </h2>
            <sp :step="'step.1'" :description="'把音檔轉成時頻圖(spectogram)'" :imageSrc="image_a"></sp>
            <sp :step="'step.2'" :description="'偵測onset frames'" :imageSrc="image_b"></sp>
            <sp :step="'step.3'" :description="'找出fundamental frequency'" :imageSrc="image_c"></sp>
            <sp :step="'step.4'" :description="'過濾掉不在onset範圍的值'" :imageSrc="image_d"></sp>
            <sp :step="'step.5'" :description="'把頻率轉成音符，並找出change frame跟計算frame gap，以得出樂譜'" :imageSrc="image_e"></sp>
        </div>
        <div class="relative pb-20" id="section2">
            <h2 class="text-3xl text-center font-bold py-20">成果展示</h2>
            <div class="flex items-center justify-center">
                <div class="flex items-center justify-center px-10">
                    origin:
                    <audio controls>
                        <source src="../../assets/audio/小星星20230401.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div class="flex items-center justify-center">
                    result:
                    <audio controls>
                        <source src="../../assets/audio/小星星20230401.wav" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import sp from './Step.vue'
    import image_a from '../../assets/images/spectogram.jpg'
    import image_b from '../../assets/images/onsetframes.jpg'
    import image_c from '../../assets/images/fundamentalfrequency.jpg'
    import image_d from '../../assets/images/onsetasmask.jpg'
    import image_e from '../../assets/images/result.jpg'
</script>

<style scoped>
    .bg-arduino {
        background-image: url(../.././assets/images/arduino.jpg);
    }
</style>