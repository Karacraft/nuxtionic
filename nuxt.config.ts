// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/ionic'],
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
})
