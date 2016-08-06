---
id: 01
title: 'Clearfix'
layout: post
category: mixin
---

SCSS

    .container {
        @include clearfix;
    }

CSS Output

    .container::after {
        clear: both;
        content: '';
        display: table;
    }
