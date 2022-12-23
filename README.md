# Nuxt 3 & Ionic Framework Basic Starter

Added Nuxt/Ionic Module
Follow [Getting Started](https://ionic.nuxtjs.org/getting-started)  

    npm install @nuxtjs/ionic -D

Add it to nuxt config

    [./nuxt.config.ts]
     modules: ['@nuxtjs/ionic']

Add default layout with ion-app & ion-router-outlet

    [./layouts/default.vue]
    <script setup>
    </script>

    <template>
        <ion-app>
            <ion-router-outlet />
        </ion-app>
    </template>

To Use ionic.css, add it to nuxt.config.js

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

Add eslint

    npm init @eslint/config