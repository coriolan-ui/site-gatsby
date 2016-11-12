---
id: 01
title: 'Clearfix'
layout: post
category: mixin
---

SCSS Source

    Coming Soon

SCSS Sintaxis

    .container {
        @include clearfix;
    }

CSS Output

    .container::after {
        clear: both;
        content: '';
        display: table;
    }
