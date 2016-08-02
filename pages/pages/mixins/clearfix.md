---
id: 01
title: "Clearfix"
layout: post
category: mixin
path: "/mixins/clearfix"
---

SCSS

    .container {
        @include clearfix;
    }

CSS Output

    .container::after {
        clear: both;
        content: "";
        display: table;
    }
