requirejs.config({
    paths: {
        "jquery": "./js/lib/jquery-2.1.3",
        "velocity": "./js/lib/velocity",
        "velocity-ui": "./js/lib/velocity.ui",
        "pubsub": "./bower_components/pubsub-js/src/pubsub"
    },
    shim: {
        "velocity": {
            deps: [ "jquery" ]
        },
        "velocity-ui": {
            deps: [ "velocity" ]
        }
    }
});