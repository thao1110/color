/**
 *  @name custom social-share
 *  @description description
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 *    destroy
 */
;(function($, window, undefined) {
  'use strict';

  var pluginName = 'add-parallax';
  
  function addPosition() {
    $('.img1').parallax('50%', 1.1);
    $('.img2').parallax('50%', 0.1);
    $('.img3').parallax('50%', 0.4);
  }

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }


  Plugin.prototype = {
    init: function() {
      // addPosition.call(this);
      // addPosition.apply(this);
      addPosition();
    },
    add: function() {
      // this.options.timeout
    },
    destroy: function() {
      $.removeData(this.element[0], pluginName);
    }
  };

  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {
    timeout: 3000,
  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]();
  });

}(jQuery, window));
  