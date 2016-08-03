---
id: 02
title: "Ellipsis"
layout: post
category: mixin
path: "/mixins/ellipsis/"
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
