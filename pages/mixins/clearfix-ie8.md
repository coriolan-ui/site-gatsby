---
id: 02
title: 'Clearfix IE8'
layout: post
category: mixin
---

SCSS Source

    Coming Soon

SCSS Sintaxis

    .container {
        @include clearfix-ie8;
    }

CSS Output

    .container {
        zoom: 1;
    }

    .container::before,
    .container::after {
        content: ".";
        display: block;
        height: 0;
        overflow: hidden;
    }

    .container::after {
        clear: both;
    }
    
