import Vue from 'vue';
import 'core-js/es6/promise.js';   // Promise polyfill for IE
import 'core-js/fn/array/find.js'; // Array.find polyfill for IE
import App from './App.vue';
import router from './router';
import VueAnalytics from 'vue-analytics';
import Rollbar from 'vue-rollbar';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// Configure Rollbar for Client-side Error Logging
Vue.use(Rollbar, {
    accessToken: '2890fe06bd6c456b99b33bb2092dd846',
    captureUncaught: true,
    captureUnhandledRejections: true,
    enabled: IS_PRODUCTION,
    source_map_enabled: true,
    environment: process.env.NODE_ENV
});

Vue.config.errorHandler = function (err, vm, info) {
    Vue.rollbar.error(err, {
        vm,
        info
    });
};

// Configure Google Analytics
Vue.use(VueAnalytics, {
    id: 'UA-135518236-2',
    router: router,
    trackEvent: true,
    debug: IS_PRODUCTION ? {} : {
        // Enable analytics logging for development, but don't actually send info.
        // from: https://github.com/MatteoGabriele/vue-analytics/issues/15
        enabled: true,
        trace: true,
        sendHitTask: false // Do not actually send analytics events
    }
});

Vue.prototype.gapi = window.gapi;

Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 2
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

Vue.mixin({
    methods: {}
});
