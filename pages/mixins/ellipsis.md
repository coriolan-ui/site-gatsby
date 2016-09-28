---
id: 03
title: 'Ellipsis'
layout: post
category: mixin
---

SCSS

    .title {
        @include ellipsis;
    }

CSS Output

    .title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
    }
