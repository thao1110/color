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

  var pluginName = 'link';

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var that = this;
      if (Site.isMobile()) {
        return;
      }
      this.element.on('click', function() {
        that.showMessage();
      });
    },
    showMessage: function(str) {
      alert(str || this.options.message);
    },
    destroy: function() {
      this.element.off('click');
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
    // $('[data-' + pluginName + ']')[pluginName]('showMessage', 'new message');
  });

}(jQuery, window));
  