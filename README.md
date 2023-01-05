# Nuxt 3 & Ionic Framework Basic Starter
## Tab View
==ℹ️ Note== that all pages in [./pages/tabs] are under one tag **ion-page** tag to navigate properly.  
Still working on **Split Pane**

__Updates__
3 - Removed [./layouts] folder for now
2 - Split Pane working correctly
1 - Added application icon [/public/icon.png]

Added [Nuxt/Ionic Module](https://ionic.nuxtjs.org/getting-started) 
~~~js
npm install @nuxtjs/ionic -D
~~~
Add it to nuxt config
~~~js
[./nuxt.config.ts]
modules: ['@nuxtjs/ionic']
~~~
Add default layout with ion-app & ion-router-outlet
~~~js
[./layouts/default.vue]
<script setup>
</script>

<template>
    <ion-app>
        <ion-router-outlet />
    </ion-app>
</template>
~~~
To Use ionic.css, add it to nuxt.config.js
~~~js
[./nuxt.config.js]
css: ['~/assets/css/ionic.css'],
    ionic:{
    integrations:{

    },
    css:{
        core:true,
        basic:true,
        utilities:true
    },
    config:{

    }
}
~~~
Add eslint
~~~js
npm init @eslint/config
~~~