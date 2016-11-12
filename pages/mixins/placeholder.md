---
id: 05
title: 'Placeholder'
layout: post
category: mixin
---

SCSS Source

    Coming Soon

SCSS Sintaxis

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
