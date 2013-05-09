(function() {
  $(function() {
    return $("#alphabet-soup").alphabet_soup();
  });

}).call(this);
(function() {
  var $, config, methods, _i, _j, _results, _results1,
    __slice = [].slice;

  $ = jQuery;

  config = {
    container: false,
    letter_count: 1000,
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    transitions: ["linear", "ease", "easeIn", "easeOut", "easeInOut", "easeInQuad", "easeInCubic", "easeInQuart", "easeInQuint", "easeInSine", "easeInExpo", "easeInCirc", "easeInBack", "easeOutQuad", "easeOutCubic", "easeOutQuart", "easeOutQuint", "easeOutSine", "easeOutExpo", "easeOutCirc", "easeOutBack", "easeInOutQuad", "easeInOutCubic", "easeInOutQuart", "easeInOutQuint", "easeInOutSine", "easeInOutExpo", "easeInOutCirc", "easeInOutBack"],
    initial_positions: (function() {
      _results1 = [];
      for (_j = -100; _j <= -1; _j++){ _results1.push(_j); }
      return _results1;
    }).apply(this).concat((function() {
      _results = [];
      for (_i = 100; _i <= 200; _i++){ _results.push(_i); }
      return _results;
    }).apply(this))
  };

  methods = {
    init: function(options) {
      config.container = $(this);
      return methods.create_letters();
    },
    create_letters: function() {
      var letter_el;

      while (config.letter_count -= 1) {
        letter_el = $("<span>" + (methods.get_random_letter()) + "</span>");
        letter_el.addClass(methods.get_random_array_item(config.transitions));
        letter_el.css({
          top: "" + (methods.get_random_array_item(config.initial_positions)) + "%",
          left: "" + (methods.get_random_array_item(config.initial_positions)) + "%"
        });
        config.container.append(letter_el);
      }
      return methods.show_letters();
    },
    show_letters: function() {
      return setTimeout(function() {
        var letter, _k, _len, _ref, _results2;

        _ref = config.container.children();
        _results2 = [];
        for (_k = 0, _len = _ref.length; _k < _len; _k++) {
          letter = _ref[_k];
          _results2.push($(letter).css({
            top: "50%",
            left: "50%"
          }));
        }
        return _results2;
      }, 2000);
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
