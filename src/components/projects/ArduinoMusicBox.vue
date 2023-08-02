<template>
  <pj>
    <template v-slot:head>
      <div class="bg-arduino m-auto flex h-48 w-10/12 items-center justify-center bg-repeat-round">
        <div class="absolute inset-0 h-48 bg-white bg-opacity-75"></div>
        <h1 class="text-opcity-100 relative text-5xl font-bold">Arduino音樂盒</h1>
      </div>
    </template>
    <template v-slot:target> 用python函式庫librosa把音檔轉成樂譜，並用arduino+蜂鳴器演奏 </template>
    <template v-slot:author
      >吳少森 <br />
      何定綸
    </template>
    <template v-slot:environment> Arduino IDE<br />Google colab </template>
    <template v-slot:language
      >C++ <br />
      Python
    </template>
    <template v-slot:process>
      <sp :step="'step.1'" :description="'把音檔轉成時頻圖(spectogram)'">
        <img src="../../assets/images/spectogram.jpg" class="h-1/5 w-3/5" />
      </sp>
      <sp :step="'step.2'" :description="'偵測onset frames'">
        <img src="../../assets/images/onsetframes.jpg" class="h-1/5 w-3/5" />
      </sp>
      <sp :step="'step.3'" :description="'找出fundamental frequency'">
        <img src="../../assets/images/fundamentalfrequency.jpg" class="h-1/5 w-3/5" />
      </sp>
      <sp :step="'step.4'" :description="'過濾掉不在onset範圍的值'">
        <img src="../../assets/images/onsetasmask.jpg" class="h-1/5 w-3/5" />
      </sp>
      <sp
        :step="'step.5'"
        :description="'把頻率轉成音符，並找出change frame跟計算frame gap，以得出樂譜'"
        ><img src="../../assets/images/result.jpg" class="h-1/5 w-3/5"
      /></sp>
    </template>
    <template v-slot:result>
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center px-10">
          origin:
          <audio controls>
            <source src="../../assets/audio/小星星20230401.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div class="flex items-center justify-center">
          result:
          <audio controls>
            <source src="../../assets/audio/小星星20230401.wav" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </template>
  </pj>
</template>
<script lang="ts" setup>
import pj from '../helper/ProjectLayout.vue'
import sp from '../helper/StepTwo.vue'
</script>
<style scoped>
.bg-arduino {
  background-image: url(../.././assets/images/arduino.jpg);
}
</style>
