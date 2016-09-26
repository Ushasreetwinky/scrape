gplay = require('google-play-scraper');
 
gplay.reviews({
  appId: 'com.mojang.minecraftpe',
  page: 0,
  sort: gplay.sort.RATING
}).then(function(apps){
  console.log('Retrieved ' + apps.length + ' reviews!');
}).catch(function(e){
  console.log('There was an error fetching the reviews!');
});