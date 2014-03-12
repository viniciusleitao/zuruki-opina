describe("Phrases", function() {
  var phrases = new Phrases()
  describe("add", function() {
    it("adds a new phrase to the collection", function() {
      phrases.add({preffix: "?", suffix: "Também!"})
      expect(phrases.all[0].preffix).toEqual("?")
    })
  })
})

describe("Phrases.Phrase", function() {
  it("uses constructor parameter as source of property values", function() {
    var phrase = Phrases.Phrase({preffix: "oi"})
    expect(phrase.preffix).toEqual("oi")
  })

  it("just ignores invalid properties", function() {
    var phrase = Phrases.Phrase({sua: "mae"})
    expect(phrase.sua).toBeUndefined()
  })

  describe("say", function() {
    var phrase = new Phrases.Phrase({
      preffix: "Holla.",
      suffix: "Yo soy el Zuruki!",
      concat: true,
    })

    it("uses preffix and suffix to form the new phrase", function() {
      var finalPhrase = "Holla. Linduxos. Yo soy el Zuruki!"
      expect(phrase.say("Linduxos.")).toEqual(finalPhrase)
    })

    it("ignores the subject when concat is `false`", function() {
      phrase.concat = false
      var finalPhrase = "Holla. Yo soy el Zuruki!"
      expect(phrase.say("Linduxos.")).toEqual(finalPhrase)
    })
  })
})

describe("Chooser", function() {
  var list = {collection: ["1", "2", "3"]}
  var chooser = new Chooser(list)
  var randomizer = {
    _random: "",
    upTo: null,
    random: function(upTo) {
      this.upTo = upTo
      return this._random
    },
    setRandom: function(random) { this._random = random },
  }

  beforeEach(function() {
    randomizer.upTo = null
  })

  describe("next", function(){
    it("uses the `randomizer.random` to retrieve the next random", function() {
      randomizer.setRandom(0)
      expect(chooser.next(randomizer)).toEqual("1")
    })

    it("passes `collection.length` to the `randomizer.random`", function() {
      chooser.next(randomizer)
      expect(randomizer.upTo).toEqual(list.collection.length)
    })
  })
})
