<template>
  <pj>
    <template v-slot:head>
      <div class="bg-rabbit m-auto flex h-48 w-10/12 items-center justify-center  bg-center" style="background-size: contain;">
        <div class="absolute inset-0 h-72 bg-white bg-opacity-75"></div>
        <h1 class="text-opcity-100 relative text-5xl font-bold">OpenGL渲染器</h1>
      </div>
    </template>
    <template v-slot:target> 在不同的光源中，渲染出3D物件的材質和紋理 </template>
    <template v-slot:author> 吳昱霆教授、吳少森 </template>
    <template v-slot:environment>
      <p class="break-words">
        Visual Studio<br />
        FreeGLUT
      </p>
    </template>
    <template v-slot:language> C++ </template>
    <template v-slot:free> <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-center mb-8">File Introduction</h1>

    <div class="grid md:grid-cols-2 gap-8">
        <!-- OBJ Files -->
        <div class="bg-white shadow-lg rounded-lg p-6">
            <h2 class="text-xl font-semibold mb-4">OBJ Files</h2>
            <p class="text-gray-700">Describes the structure of OBJ files, including:</p>
            <ul class="list-disc list-inside text-gray-600">
                <li>Material library declarations (mtllib)</li>
                <li>Vertex coordinates (v)</li>
                <li>Texture coordinates (vt)</li>
                <li>Vertex normals (vn)</li>
                <li>Material usage (usemtl)</li>
                <li>Face definitions (f) that comprise position, texture, and normal indices.</li>
            </ul>
        </div>

        <!-- MTL Files -->
        <div class="bg-white shadow-lg rounded-lg p-6">
            <h2 class="text-xl font-semibold mb-4">MTL Files</h2>
            <p class="text-gray-700">Outlines the format of MTL files, specifying:</p>
            <ul class="list-disc list-inside text-gray-600">
                <li>New materials (newmtl)</li>
                <li>Specular exponent (Ns)</li>
                <li>Ambient (Ka)</li>
                <li>Diffuse (Kd)</li>
                <li>Specular (Ks) coefficients</li>
                <li>Texture mapping (map_kd) for diffuse reflection.</li>
            </ul>
        </div>
    </div>

    <div class="mt-8">
        <!-- Textures -->
        <div class="bg-white shadow-lg rounded-lg p-6">
            <h2 class="text-xl font-semibold mb-4">Textures</h2>
            <p class="text-gray-700">Briefly mentions the role of 2D images (textures) in the rendering process.</p>
        </div>
    </div>
</div>
 </template>
    <template v-slot:process>
      <div class="max-w-6xl mx-auto px-4 py-8">

    <!-- Process Overview -->
    <div class="mb-10">
        <h2 class="text-2xl font-semibold mb-6">Process Overview</h2>
        <ol class="list-decimal list-inside space-y-4 text-lg">
            <li>Reading Files and Processing Objects into Triangles: The initial step involves reading the file and processing the objects into individual triangles.</li>
            <li>Entering Vertex Shader and Rasterizer: The process then moves into the vertex shader and rasterizer stages.</li>
            <li>Entering Fragment Shader with Phong Reflection Model: Finally, the fragment shader is applied, utilizing the Phong reflection model to achieve realistic lighting effects.</li>
        </ol>
    </div>

    <!-- Detailed Process Steps -->
    <div>
        <h2 class="text-2xl font-semibold mb-6">Detailed Process Steps</h2>
        
        <!-- Process A -->
        <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 class="text-xl font-semibold mb-4">Process A - Preparation</h3>
            <p class="mb-4">Reading material libraries, vertex coordinates (v), texture coordinates (vt), and vertex normals (vn). Converting faces (f) into vertices by their position, texture, and normal indices. If a face consists of more than three points, it is split into multiple triangles. Identifying the object's center and the longest edge across three dimensions. Normalizing each face's position around the object's center to values between -0.5 and 0.5.</p>
        </div>

        <!-- Process B -->
        <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 class="text-xl font-semibold mb-4">Process B - Vertex Shader and Rasterization</h3>
            <p class="mb-4">Defining the Model-View-Projection (MVP) matrix to transform objects from object space to clip space. Implementing the vertex shader to convert object coordinates to clip space, interpolate positions, normals, and texture coordinates. Rasterization process interpolates the positions, textures, and normals of pixels within a triangle, discarding pixels outside the screen or obscured by other objects, leaving fragments for the fragment shader.</p>
        </div>

        <!-- Process C -->
        <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-4">Process C - Fragment Shader and Lighting</h3>
            <p>Defining methods for calculating diffuse and specular reflections. Calculating the effects of point lights, directional lights, and spotlights. Summing the effects of directed light sources and ambient light to determine the color of each fragment.</p>
        </div>
    </div>
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
<style scoped>
.bg-rabbit {
  background-image: url(../.././assets/images/rabbit.png);
}
</style>