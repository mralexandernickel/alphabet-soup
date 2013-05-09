$ = jQuery

config =
  # the plate
  container: false
  # number of letters in the soup
  letter_count: 1000
  # letters which are used to generate the soup
  alphabet: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  # transitions supported by less-easing
  transitions: [
    "linear",
    "ease",
    "easeIn",
    "easeOut",
    "easeInOut",
    "easeInQuad",
    "easeInCubic",
    "easeInQuart",
    "easeInQuint",
    "easeInSine",
    "easeInExpo",
    "easeInCirc",
    "easeInBack",
    "easeOutQuad",
    "easeOutCubic",
    "easeOutQuart",
    "easeOutQuint",
    "easeOutSine",
    "easeOutExpo",
    "easeOutCirc",
    "easeOutBack",
    "easeInOutQuad",
    "easeInOutCubic",
    "easeInOutQuart",
    "easeInOutQuint",
    "easeInOutSine",
    "easeInOutExpo",
    "easeInOutCirc",
    "easeInOutBack"
    ]
  # defines the initial position of the letters... these options/css-classes are defined in alphabet-soup.less
  initial_position: "top-left"

methods =
  init: (options) ->
    config.container = $(this)
    methods.create_letters()
  
  create_letters: ->
    while config.letter_count -= 1
      letter_el = $("<span>#{methods.get_random_letter()}</span>")
      letter_el.addClass "#{methods.get_random_array_item config.transitions} #{config.initial_position}"
      $(document.body).append letter_el
  
  get_random_letter: -> methods.get_random_array_item config.alphabet
  
  get_random_array_item: (array) -> array[Math.floor(Math.random()*array.length)]

$.fn.alphabet_soup = (method,options...) ->
  if methods[method]
    methods[method].apply this, options
  else if typeof method is "object" or not method
    methods.init.apply this, arguments
  else
    $.error "Method #{method} doesn't exist in the Alphabet Soup!"