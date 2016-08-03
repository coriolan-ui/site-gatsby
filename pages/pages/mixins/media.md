---
id: 03
title: "Media"
layout: post
category: mixin
path: "/mixins/media/"
---

SCSS

    .media-usage {
        background: silver;

        @include media(S) {
            background: yellow;
        };

        @include media(M) {
            background: red;
        };

        @include media(L) {
            background: green;
        };

        @include media(XL) {
            background: blue;
        };
    }

CSS Output

    .media-usage {
        background: silver;
    }

    @media (min-width: 508px) {
        .media-usage {
            background: yellow;
        }
    }

    @media (min-width: 754px) {
        .media-usage {
            background: red;
        }
    }

    @media (min-width: 1054px) {
        .media-usage {
            background: green;
        }
    }

    @media (min-width: 1300px) {
        .media-usage {
            background: blue;
        }
    }
