(function() {
  $(function() {
    return $("#alphabet-soup").alphabet_soup();
  });

}).call(this);
(function() {
  var $, config, methods, _i, _j, _k, _l, _m, _results, _results1, _results2, _results3, _results4,
    __slice = [].slice;

  $ = jQuery;

  config = {
    container: false,
    letter_count: 1000,
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    transitions: ["linear", "ease", "easeIn", "easeOut", "easeInOut", "easeInQuad", "easeInCubic", "easeInQuart", "easeInQuint", "easeInSine", "easeInExpo", "easeInCirc", "easeInBack", "easeOutQuad", "easeOutCubic", "easeOutQuart", "easeOutQuint", "easeOutSine", "easeOutExpo", "easeOutCirc", "easeOutBack", "easeInOutQuad", "easeInOutCubic", "easeInOutQuart", "easeInOutQuint", "easeInOutSine", "easeInOutExpo", "easeInOutCirc", "easeInOutBack"],
    initial_positions: (function() {
      _results1 = [];
      for (_j = -100; _j <= -5; _j++){ _results1.push(_j); }
      return _results1;
    }).apply(this).concat((function() {
      _results = [];
      for (_i = 105; _i <= 200; _i++){ _results.push(_i); }
      return _results;
    }).apply(this)),
    visible_positions_top: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
    visible_positions_left: (function() {
      _results2 = [];
      for (_k = 0; _k <= 100; _k++){ _results2.push(_k); }
      return _results2;
    }).apply(this),
    font_sizes: (function() {
      _results3 = [];
      for (_l = 6; _l < 72; _l++){ _results3.push(_l); }
      return _results3;
    }).apply(this),
    rotate_degrees: (function() {
      _results4 = [];
      for (_m = 0; _m <= 360; _m++){ _results4.push(_m); }
      return _results4;
    }).apply(this)
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
          left: "" + (methods.get_random_array_item(config.initial_positions)) + "%",
          "font-size": "" + (methods.get_random_array_item(config.font_sizes)) + "px",
          "-webkit-transform": "rotate(" + (methods.get_random_rotate()) + "deg)"
        });
        config.container.append(letter_el);
      }
      return methods.show_letters();
    },
    show_letters: function() {
      return setTimeout(function() {
        var letter, _len, _n, _ref, _results5;

        _ref = config.container.children();
        _results5 = [];
        for (_n = 0, _len = _ref.length; _n < _len; _n++) {
          letter = _ref[_n];
          _results5.push($(letter).css({
            top: "" + (methods.get_random_array_item(config.visible_positions_top)) + "%",
            left: "" + (methods.get_random_array_item(config.visible_positions_left)) + "%",
            "font-size": "" + (methods.get_random_array_item(config.font_sizes)) + "px"
          }));
        }
        return _results5;
      }, 2000);
    },
    get_random_letter: function() {
      return methods.get_random_array_item(config.alphabet);
    },
    get_random_rotate: function() {
      return methods.get_random_array_item(config.rotate_degrees);
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
