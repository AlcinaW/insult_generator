function InsultCtrl(insultService) {   
	this.insultService = insultService;
   	this.insult = this.insultService.generateInsult();
}

app.controller('InsultCtrl', InsultCtrl);

InsultCtrl.prototype.replaceInsult = function(){
   	this.insult = this.insultService.generateInsult();
   	
}