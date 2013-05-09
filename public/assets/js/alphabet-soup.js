(function() {
  $(function() {
    return $("#alphabet-soup").alphabet_soup();
  });

}).call(this);
(function() {
  var $, config, methods,
    __slice = [].slice;

  $ = jQuery;

  config = {
    container: false,
    letter_count: 1000,
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    transitions: ["linear", "ease", "easIn", "easeOut", "easeInOut", "easeInQuad", "easeInCubic", "easeInQuart", "easeInQuint", "easeInSine", "easeInExpo", "easeInCirc", "easeInBack", "easeOutQuad", "easeOutCubic", "easeOutQuart", "easeOutQuint", "easeOutSine", "easeOutExpo", "easeOutCirc", "easeOutBack", "easeInOutQuad", "easeInOutCubic", "easeInOutQuart", "easeInOutQuint", "easeInOutSine", "easeInOutExpo", "easeInOutCirc", "easeInOutBack"]
  };

  methods = {
    init: function(options) {
      config.container = $(this);
      return methods.create_letters();
    },
    create_letters: function() {
      var letter_el, _results;

      _results = [];
      while (config.letter_count -= 1) {
        letter_el = $("<span>" + (methods.get_random_letter()) + "</span>");
        letter_el.addClass(methods.get_random_array_item(config.transitions));
        _results.push(config.container.append(letter_el));
      }
      return _results;
    },
    get_random_letter: function() {
      return methods.get_random_array_item(config.alphabet);
    },
    get_random_array_item: function(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
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
