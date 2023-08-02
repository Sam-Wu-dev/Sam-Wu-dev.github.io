<template>
  <pj>
    <template v-slot:head>
      <div class="my-24 flex items-center justify-between px-48">
        <img src="../../assets/images/ninja1.png" class="h-48 w-48" />
        <img src="../../assets/images/kunai2.png" class="h-8 w-24" />
        <h1 class="text-opcity-100 relative text-center text-5xl font-bold">
          非接觸式街機遊戲-Ninja Strike Master
        </h1>
        <img src="../../assets/images/kunai1.png" class="h-8 w-24" />
        <img src="../../assets/images/ninja2.png" class="h-48 w-48" />
      </div>
    </template>
    <template v-slot:target> 使用非接觸式的方式遊玩丟球遊戲機台 </template>
    <template v-slot:author>
      吳少森 、 陳柏翰 <br />
      陳俊良 、 何定綸
    </template>
    <template v-slot:environment>
      Unity<br />
      Google colab<br />
    </template>
    <template v-slot:language>
      C#<br />
      Python<br />
    </template>
    <template v-slot:process>
      <h2 class="my-20 text-center text-2xl font-bold">
        Process A: 訓練一個模型，其輸入為丟球過程的身體特徵點，輸出為預測落點
      </h2>
      <sp :step="'step.1'" :description="'使用人體姿態辨識工具Openpose來抓取身體特徵點'">
        <img src="../../assets/images/bodykeypoint.png" class="w-50 h-80" />
      </sp>
      <sp :step="'step.2'" :description="'透過觀察丟球動作找出丟球結束幀'">
        <img src="../../assets/images/throwdetector.gif" class="h-1/5 w-3/5" />
      </sp>
      <sp :step="'step.3'" :description="'蒐集訓練資料'">
        <video class="h-1/5 w-3/5" controls>
          <source src="../../assets/video/資料蒐集.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </sp>
      <sp :step="'step.4'" :description="'訓練Fully Connected Network'">
        <img src="../../assets/images/fcn.png" class="h-1/5 w-3/5" />
      </sp>
      <h2 class="my-20 text-center text-2xl font-bold">
        Process B: 在Unity用該模型做出非接觸式街機遊戲
      </h2>
      <sp
        :step="'計分方法'"
        :description="'打到黑忍者的normal hit box +1分，critical hit box +2分，打到白忍者-1分'"
        ><img src="../../assets/images/hitbox.jpg" class="h-1/5 w-3/5"
      /></sp>
      <sp :step="'主畫面'" :description="'向左丟球開始遊戲，向右丟球進入練習模式'"
        ><img src="../../assets/images/menu.png" class="h-1/5 w-3/5"
      /></sp>
      <sp
        :step="'遊戲畫面'"
        :description="'計時60秒，忍者會隨機移動，黑白忍者每隔一段時間會互換位置'"
        ><img src="../../assets/images/playtime.png" class="h-1/5 w-3/5"
      /></sp>
      <sp :step="'結算畫面'" :description="'向左丟球回主畫面，向右丟球進入新一輪的遊戲'"
        ><img src="../../assets/images/finishpage.png" class="h-1/5 w-3/5"
      /></sp>
    </template>
    <template v-slot:result>
      <div class="flex items-center justify-center">
        <video class="h-1/8 w-2/5" controls>
          <source src="../../assets/video/實際遊玩.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </template>
  </pj>
</template>
<script lang="ts" setup>
import pj from '../helper/ProjectLayout.vue'
import sp from '../helper/StepTwo.vue'
</script>
