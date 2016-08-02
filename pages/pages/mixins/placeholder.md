---
id: 04
title: "Placeholder"
layout: post
category: mixin
path: "/mixins/placeholder"
---

SCSS

    textarea {
        width: 100%;
        font-size: 16px;

        @include placeholder {
            font-size: 12px;
        }
    }

CSS Output

    textarea {
        width: 100%;
        font-size: 16px;
    }

    textarea::-webkit-input-placeholder {
        font-size: 12px;
    }

    textarea::-moz-placeholder {
        font-size: 12px;
    }

    textarea:-moz-placeholder {
        font-size: 12px;
    }

    textarea:-ms-input-placeholder {
        font-size: 12px;
    }
