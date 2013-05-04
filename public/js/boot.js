require.config({
  paths: {
    Bootstrap: '/js/bootstrap',
	Underscore: '/js/libs/underscore',
    Backbone: '/js/libs/backbone',
    Sockets: '/socket.io/socket.io',
    models: 'models',
    text: '/js/libs/text',
    templates: '../templates',

    SocialNetView: '/js/SocialNetView'
  },

  shim: {
    'Backbone': ['Underscore'],
    'SocialNet': ['Backbone','Bootstrap']
  }
});

require(['SocialNet'], function(SocialNet) {
  SocialNet.initialize();
});
