function Phrases() {
  function PhrasesInit() {
    this.all = []

    this.add = function(options) {
      var phrase = new Phrases.Phrase(options)
      this.all.push(phrase)
    }
  }

  return new PhrasesInit();
}

Phrases.Phrase = function(options) {
  return {
    preffix: options.preffix || "",
    suffix: options.suffix || "",
    concat: options.concat || false,
    say: function(what) {
      var newPhrase = this.preffix
      if(this.concat) {
        newPhrase += " " + what
      }
      return newPhrase +" "+ this.suffix
    }
  }
}

function Chooser(list) {
  var defaultRandomizer = {
    random: function(upTo) {
      return Math.floor(Math.random() * upTo)
    }
  }

  return {
    collection: list.collection,
    next: function(randomizer) {
      var randomizer = randomizer || defaultRandomizer
      var idx = randomizer.random(this.collection.length)
      return this.collection[idx]
    }
  }
}
