app.filter('capitalized', function() {
    return function(input, all) {
      return (input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
  });


// VERSION 2

// function titleCase(){
// 	return function(inputString){
// 		for (index in inputString){
// 			if(inputString[index])
// 		}
// 	}
// }

// app.filter('titleCase', titleCase);