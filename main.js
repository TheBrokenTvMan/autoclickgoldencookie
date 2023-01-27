Game.registerMod("auto click golden cookies mod",{
	init:function(){
		Game.Notify(`开启自动点击黄金饼干!`, '', [16,5]);
		
		setInterval(function() { 
			Game.shimmers.forEach(function(shimmer) { 
				if (shimmer.type == "golden") { shimmer.pop() } 
			}) 
		}, 500);
	},
	save:function(){
	},
	load:function(str){
	},
});
