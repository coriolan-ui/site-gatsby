---
title: 'Installation'
layout: page
path: '/installation/'

---

To install Coriolan UI use this command in your terminal:

    npm install coriolan-ui --save

After `mpm i` just import Coriolan UI in your sass/scss stylesheet from `node_modules` folder:

    @import '../node_modules/coriolan-ui/coriolan-ui';

Now you can add any available mixin in your sass/scss stylesheet:

    .container {
        @include clearfix;
    }

Or even use any supported variable in your fucking sass/scss stylesheet:

    .container {
        max-width: $XL;
    }
