window.Vue = require('vue');

require('vue-resource');

// Set true if you want to show the error message while on dev

Vue.config.debug = false;

// Fetch token in the meta tag in order to process token based request

Vue.http.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');

window._ = require('underscore');

// Load ladda button loading state spinner

window.Ladda = require('ladda');

window.laddaButton = Ladda.bind('button[type=submit]');

// Load the rest of the files needed in my vue application

require('./client'); // For client socket, used for real time activities

require('./core');

new Vue({

    el: '#hris',

});
