function Phrases() {
  var PhrasesInit = function() {
    this.phrases = this.collection = [
      {
        preffix: "+1",
        suffix: "!",
        concat: false,
      },
      {
        preffix: "",
        suffix: "? E se de vez disso, a gente for estar fazendo outra coisa?",
        concat: true,
      },
      {
        preffix: "Também!",
        suffix: "",
        concat: false,
      },
      {
        preffix: "",
        suffix: "? Ah vá ráríró caváááálo.",
        concat: true,
      },
      {
        preffix: "",
        suffix: "? Não sei o que é isso.",
        concat: true,
      }
    ];

    var randomPhrase = new Chooser(this)

    this.phraseFor = function(subject) {
      var phrase = randomPhrase.next()
      var newPhrase = phrase.preffix
      if(phrase.concat)
        newPhrase = newPhrase + subject
      return newPhrase + phrase.suffix
    }
  }

  return new PhrasesInit();
}

Phrases.Phrase = function() {
  return {
    prefix: prefix,
    suffix: suffix,
    concat: concat
  }
}

function Chooser(collectionHolder) {
  var collection = collectionHolder.collection
  return {
    next: function() {
      var random = Math.floor(Math.random() * collection.length);
      return collection[random]
    }
  }
}

function Background(collection) {
  var BgInit = function() {
    this.backgrounds = this.collection = collection
  }
  return new BgInit();
}

function Opinator($scope) {
  var background = new Background([
      "bg0.jpg", "bg1.jpg",
      "bg2.jpg", "bg3.jpg",
    ])
  var phrases = new Phrases()
  var bgChooser = new Chooser(background)

  $scope.randomBackground = bgChooser.next()

  $scope.canShowCurrentOpinion = function() {
    return $scope.currentOpinion &&
      $scope.currentOpinion.length > 0
  }

  $scope.newSubject = function() {
    if($scope.subject.length == 0) {
      $scope.currentOpinion = ""
      return
    }
    $scope.currentOpinion = phrases.phraseFor($scope.subject)
  }
}
