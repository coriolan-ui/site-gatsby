---
title: 'Installation'
layout: page
path: '/installation'

---

To install Coriolan UI use this command in your terminal:

    npm install coriolan-ui --save

Then just import Coriolan UI in your sass/scss stylesheet:

    @import '../node_modules/coriolan-ui/coriolan-ui';

Now you can add any available mixin:

    .container {
        @include clearfix;
    }

Ore even use any supported variable:

    .container {
        max-width: $XL;
    }
