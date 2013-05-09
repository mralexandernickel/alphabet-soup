(function() {
  $(function() {
    return console.log("domready");
  });

}).call(this);
(function() {
  var $, methods, options,
    __slice = [].slice;

  $ = jQuery;

  options = {
    container: false,
    alphabet: []
  };

  methods = {
    init: function() {}
  };

  $.fn.alphabet_soup = function() {
    var method, options;

    method = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (methods[method]) {
      return methods[method].apply(this, options);
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error("Method " + method + " doesn't exist in the Alphabet Soup!");
    }
  };

}).call(this);
