
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Instructions.
 */
function Instructions() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Instructions_proto = Object.create(Phaser.State.prototype);
Instructions.prototype = Instructions_proto;
Instructions.prototype.constructor = Instructions;

Instructions.prototype.init = function () {
	
	this.myInit();
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	
};

Instructions.prototype.preload = function () {
	
	this.myPreload();
	
	this.load.pack('graphics', 'assets/pack.json');
	
};

Instructions.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'bg');
	
	var _how = this.add.sprite(0.0, 200.0, 'how1');
	
	this.add.sprite(0.0, 0.0, 'howToPlayTitle');
	
	
	
	// fields
	
	this.fHow = _how;
	
	
	this.myCreate();
	
};

/* --- end generated code --- */
// -- user code here --
Instructions.prototype.myInit = function () {
	
};

Instructions.prototype.myPreload = function () {

	
};


Instructions.prototype.update = function () {
	
	
	
};


Instructions.prototype.myCreate = function (instructions) {
	this.game.sound.mute = true;
	this.fHow.inputEnabled = true;
	this.factor = -640; 
	
	this.startButton = this.game.add.button(this.factor, 855.0, 'playBtn', startGame, this, 2, 1, 0);
	this.startButton.anchor.set(0.5);
	
	this.fHow.events.onInputUp.add(function(pointer) {
		
		console.log("clicking");
		move1 = this.game.add.tween(this.fHow);
		move1.onComplete.addOnce(factorChange, this);
		move1.to({x:this.factor}, 1000, Phaser.Easing.Bounce.Out);
		move1.start();
		
		
		 pigArrives = this.game.add.tween( this.startButton);
		    
		    pigArrives.to({x:this.factor + 960}, 1000, Phaser.Easing.Bounce.Out);

		    pigArrives.start();
		
		    
		
		function factorChange(){
			switch (this.factor){
			
			case -640:
				this.factor = 0;
				break;
			case 0:
				this.factor = -640;
				break;
				
			
			}
			
		}
		
	}, this);  
	
	
	function startGame(){
 		
		  this.game.state.start('Level1');
	 
	  } 
	 
	    
	
	
};

