describe("Phrases", function() {
  var phrases = new Phrases()
  describe("add", function() {
    it("adds a new phrase to the collection", function() {
      phrases.add({preffix: "?", suffix: "Também!"})
      expect(phrases.all[0].preffix).toEqual("?")
    })
  })
})
