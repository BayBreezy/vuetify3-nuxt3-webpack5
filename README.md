# Nuxt 3 + Webpack5 + Vuetify3

![Screenshot](/public/ss.png)

### Inspiration

Nuxt3(with Vite bundler) does not play well with Vuetify3 when customizing SASS variables. You would have to do a lot to get the app to run in dev mode.. When the app starts, hot realod was not so hot. Took like 20 seconds for a single change to show up after save. Then I remembered.. Nuxt3 can be bundled with Webpack5.. So I asked google how to use Nuxt3 with webpack.. I got this answer --> https://stackoverflow.com/questions/70721804/how-to-use-webpack-5-with-nuxt3-project.

### Big up

Big up the Vuetify & Nuxt team.. I know building free products for the public is hard especially when there is little to no money coming in.

### Stuff used

- Vuetify
- Nuxt
- Vueuse Sound
- Pixabay for the free sounds lol
- Apex chart
- This module/package --> https://www.npmjs.com/package/@nuxt/webpack-builder

### Issues

Currently, the only issue i have is this warning in the VSCode terminal:

```bash
[Vue warn]: Failed to resolve component: v-app                                                                                             08:18:47
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.
[Vue warn]: Failed to resolve component: v-main...
```

Not sure why this is showing up but it does not stop the app from working properly and it does not stop it in production. Maybe one day I will be good at vue and figure out what this warning means.
