<template>
  <pj>
    <template v-slot:head>
      <div class="bg-rabbit m-auto flex h-48 w-10/12 items-center justify-center  bg-center" style="background-size: contain;">
        <div class="absolute inset-0 h-72 bg-white bg-opacity-75"></div>
        <h1 class="text-opcity-100 relative text-5xl font-bold">車牌位置辨識器</h1>
      </div>
    </template>
    <template v-slot:target> 把車牌中的每個數字在畫面中的位置分別標示出來 </template>
    <template v-slot:author> 吳少森 <br /> 陳柏翰 <br /> 陳俊良 </template>
    <template v-slot:environment> Matlab Online </template>
    <template v-slot:language> Matlab </template>
    <template v-slot:process>
      <h2 class="my-20 text-center text-2xl font-bold">Process A: 找出車牌的bounding box</h2>
      <sp :step="'step.1'" :description="'載入原圖'">
        <img src="../../assets/images/license_a.jpg" class="h-1/5 w-3/5" />
      </sp>
      <sp
        :step="'step.2'"
        :description="'把圖轉為灰階圖並用[-1 0 1; -1 0 1; -1 0 1]filter偵測縱向的邊緣'"
      >
        <img src="../../assets/images/license_b.png" class="h-1/5 w-3/5" />
      </sp>
      <sp :step="'step.3'" :description="'用imbinarize把圖轉為二值圖，再用order filter去除雜訊'">
        <img src="../../assets/images/license_c.png" class="h-1/5 w-3/5" />
      </sp>
      <sp :step="'step.4'" :description="'使用橫向的膨脹，再用imfill把空洞補齊'">
        <img src="../../assets/images/license_d.png" class="h-1/5 w-3/5" />
      </sp>
      <sp :step="'step.5'" :description="'依序進行橫向的侵蝕與膨脹，直到只剩下大面積的區塊'">
        <img src="../../assets/images/license_e.png" class="h-1/5 w-3/5" />
      </sp>
      <sp :step="'step.6'" :description="'用bwconncomp找出bounding box'">
        <img src="../../assets/images/license_j.png" class="h-1/5 w-3/5" />
      </sp>
      <sp
        :step="'step.7'"
        :description="'透過長寬比以及、寬度限制、高度限制以及與長方形的相似程度找出車牌位置的bounding box'"
      >
        <img src="../../assets/images/license_f.png" class="h-1/5 w-3/5" />
      </sp>
      <h2 class="my-20 text-center text-2xl font-bold">Process B: 找出每個字的bounding box</h2>
      <sp :step="'step.1'" :description="'用bounding box框出車牌影像'">
        <img src="../../assets/images/license_g.png" class="h-1/5 w-3/5" />
      </sp>
      <sp :step="'step.2'" :description="'用imbinarize把圖轉為二值圖，再用imcomplement反轉黑白'">
        <img src="../../assets/images/license_h.png" class="h-1/5 w-3/5" />
      </sp>
      <sp :step="'step.3'" :description="'用bwconncomp找出白色區塊的bounding box'">
        <img src="../../assets/images/license_k.png" class="h-1/5 w-3/5" />
      </sp>
      <sp :step="'step.4'" :description="'透過面積以及與長方形的相似程度找出每個字的bounding box'">
        <img src="../../assets/images/license_l.png" class="h-1/5 w-3/5" />
      </sp>
    </template>
    <template v-slot:result>
      <div class="flex flex-col items-center justify-center">
        <div class="flex w-3/5 items-center justify-between py-12">
          <p class="w-2/5 text-center text-3xl font-bold">原圖</p>
          <p class="w-2/5 text-center text-3xl font-bold">Result</p>
        </div>
        <div class="flex w-3/5 items-center justify-between py-12">
          <img src="../../assets/images/license_a.jpg" class="h-1/5 w-2/5" />
          <img src="../../assets/images/license_p.png" class="h-1/5 w-2/5" />
        </div>
        <div class="flex w-3/5 items-center justify-between py-12">
          <img src="../../assets/images/001.jpg" class="h-1/5 w-2/5" />
          <img src="../../assets/images/license_m.png" class="h-1/5 w-2/5" />
        </div>
        <div class="flex w-3/5 items-center justify-between py-12">
          <img src="../../assets/images/003.jpg" class="h-1/5 w-2/5" />
          <img src="../../assets/images/license_n.png" class="h-1/5 w-2/5" />
        </div>
        <div class="flex w-3/5 items-center justify-between py-12">
          <img src="../../assets/images/004.jpg" class="h-1/5 w-2/5" />
          <img src="../../assets/images/license_o.png" class="h-1/5 w-2/5" />
        </div>
      </div>
    </template>
  </pj>
</template>
<script lang="ts" setup>
import pj from '../helper/ProjectLayout.vue'
import sp from '../helper/StepTwo.vue'
</script>
