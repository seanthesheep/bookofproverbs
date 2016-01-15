var UI = require('ui');
var ajax = require('ajax');


ajax(
  {
    url: "http://www.seansullivan.ninja/verseoftheday/randomverse.json",
    type: 'json'
    
  },
    
  function(data) {
    
    
    var L = data.verses.length;
    var whichVerse = Math.floor(Math.random()*(L-1));
    var randVerse = data.verses[whichVerse];
    var showVerse = JSON.stringify(randVerse);
    
   
    var resultsCard = new UI.Card({
      font: "Gothic 14",
      text: "Gothic 14",
      scrollable: true,
      body: showVerse
  });


  resultsCard.show();
},
    
  function(error, status, request) {
    console.log('The ajax request failed: ' + error);
  }
);

  


