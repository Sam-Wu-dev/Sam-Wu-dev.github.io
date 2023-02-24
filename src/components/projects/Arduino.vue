<template>
    <div class="relative">
        <div class="relative top-8">
            <div class="flex justify-center items-center h-48 bg-arduino bg-repeat-round w-10/12 m-auto">
                <div class="absolute inset-0 h-48 bg-white bg-opacity-75"></div>
                <h1 class="relative font-bold text-4xl text-opcity-100">用python將音檔轉成樂譜並用Arduino+蜂鳴器演奏</h1>
            </div>
        </div>
        <div class="relative top-8">
            <div class="flex justify-between px-64 my-12">            
                <div class="w-48 h-36 text-center">
                    <h3 class="text-xl font-bold"> 作者</h3>    
                    <p class="break-words">
                        吳少森 <br>
                        何定綸
                    </p>
                </div>
                <div class="w-48 h-36 text-center">
                    <h3 class="text-xl font-bold"> 開發環境</h3>
                    <p class="break-words">
                        Arduino IDE<br>
                        Python <br>
                    </p>
                </div>
                <div class="w-48 h-36 text-center">
                    <h3 class="text-xl font-bold"> 使用設備</h3>
                    <p class="break-words">
                        Arduino mega 2560 * 1
                        Buzzer * 1
                    </p>
                </div>
            </div>
        </div>
        
        <div class="relative">
            <h2 class="text-3xl text-center font-bold">Process A: 用python函式庫librosa把音檔轉成樂譜
            </h2>
            <div class="flex flex-col my-10 py-3 px-20">
                <div class="flex items-center justify-center">
                    <div>
                        <h3 class="text-2xl">step.1</h3>
                        <p class="break-words w-40">偵測onset frames(音量脈衝)</p>
                    </div>
                    <img src="../../assets/images/onset.jpg" class="w-1/2 h-80"/>
                </div>
                <div class="flex items-center justify-center">
                    <div>
                        <h3 class="text-2xl">step.2</h3>
                        <p class="break-words w-40">將聲音訊號轉成音名(C-D-E-F-G-A-B)</p>
                    </div>
                    <img src="../../assets/images/chroma.jpg" class="w-1/2 h-80"/>
                </div>
                <div class="flex items-center justify-center">
                    <div>
                        <h3 class="text-2xl">step.3</h3>
                        <p class="break-words w-40">將聲音訊號轉成頻域,並找出fundamental frequency</p>
                    </div>
                    <img src="../../assets/images/f0.jpg" class="w-1/2 h-80"/>
                </div>
                <div class="flex items-center justify-center">
                    <div>
                        <h3 class="text-2xl">step.4</h3>
                        <p class="break-words w-40">找出onset frames的頻率,並計算它們的持續時間,產生能讓arduino的蜂鳴器演奏的樂譜</p>
                    </div>
                    <img src="../../assets/images/playlist.jpg" class="w-1/2"/>
                </div>
            </div>
            <h2 class="text-3xl text-center font-bold">Process B:用arduino+蜂鳴器演奏音樂
            </h2>
            <div>

            </div>
        </div>
        <div class="relative">
            <h2 class="text-2xl text-center font-bold">Result</h2>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
    .bg-arduino {
        background-image: url(../.././assets/images/arduino.jpg);
    }
</style>