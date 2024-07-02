---
layout: default
title: 图片轮播
---

<!-- 引入样式表 -->
<link rel="stylesheet" href="{{ '/assets/styles.css' | relative_url }}">

<div class="carousel">
    <div class="carousel-container">
        <img src="{{ '/assets/image-20240608125112494.png' | relative_url }}" alt="image 1" class="carousel-image">
        <img src="{{ '/assets/image-20240608125301969.png' | relative_url }}" alt="image 2" class="carousel-image">
        <img src="{{ '/assets/image-20240608125932120.png' | relative_url }}" alt="image 3" class="carousel-image">
    </div>
    <div class="carousel-controls">
        <button class="prev" onclick="prevSlide()">&#10094;</button>
        <div class="carousel-indicator">
            <span id="current-slide">1</span> / <span id="total-slides">3</span>
        </div>
        <button class="next" onclick="nextSlide()">&#10095;</button>
    </div>
</div>

<!-- 引入脚本文件 -->
<script src="{{ '/assets/script.js' | relative_url }}"></script>

