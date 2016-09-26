var gplay = require('google-play-scraper');
var count=0;
gplay.app({appId: 'com.whatsapp'})
  .then(function(app){
  	count=app.reviews;
    console.log('Retrieved application: ' + app.reviews
    	);
  })
  .catch(function(e){
    console.log('There was an error fetching the application!');
  });
  console.log(count);
for (i = 0; i < count/40; i++) { 
	console.log(i)
	   gplay.reviews({
	  page : i,
	  sort: gplay.sort.RATING
	}).then(function(apps){
	  console.log(apps.reviews)
	  console.log(apps);
	  console.log('Retrieved ' + apps.length + ' reviews!');
	}).catch(function(e){
	  console.log('There was an error fetching the reviews!');
	});
}
