(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 230,
	height: 420,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.oldguy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,0,4).p("AhKAwIA3AmIBeiFIg3gmg");
	this.shape.setTransform(153.4,265.1,1,1,0,0,0,0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKAwIBeiFIA3AmIheCFg");
	this.shape_1.setTransform(153,265.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ak9PSIAAhaIAeAAQEhgBCCjNQBPh9AHioQAJjcABo+IAAodIAAgeIBagBIAAAfIAAIeQgBJAgJDdQgDBTgWBRQgfBzhBBYQifDak7AAgAECuyIAAIeQgCJAgIDaQgHCxhUCGQiKDZkyAAIAAAdQEsAACWjMQA9hUAehuQAVhOADhQQAIjbACpAIAAoeg");
	this.shape_2.setTransform(183.3,173.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BECCFE").s().p("AkfOWQEyAACLjZQBUiGAGixQAJjaABpAIAAoeIAeAAIAAIeQgCJAgIDbQgDBQgVBOQgeBug9BUQiWDMksAAg");
	this.shape_3.setTransform(183.3,173.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAHQgHgGAAgIIABgGIAsAHQAAAHgHAHQgHAGgJAAQgIAAgHgHg");
	this.shape_4.setTransform(92.8,144.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMADQgGgDgBgHIAnADQgFANgPAAQgGAAgGgGg");
	this.shape_5.setTransform(109.5,145.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAFQgJgGAAgLIAzAGQgCAHgHAGQgHAGgKAAQgJAAgHgIg");
	this.shape_6.setTransform(104.2,145.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAGQgIgGAAgKIAAgDIAzAHQgCAHgHAHQgIAGgJAAQgJAAgIgIg");
	this.shape_7.setTransform(98.2,145);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Aj+g8IBsAcQCbAfD2AKQhJAnhlAKQgaADgZAAQilAAh3h5g");
	this.shape_8.setTransform(101,144.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(60));

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAZAdQAFhHhCgzIAPALQAVATAPAWQAvBDg3BEQAQgbACgmg");
	this.shape_9.setTransform(127.3,136.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIgkQAYgSAdgFQg+ARgRA0QgJAbAEAXQgUg8Azgkg");
	this.shape_10.setTransform(77.6,132.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag1AAIhcAOQA6gnB5ARQA+AIAyAOQhbgZhsALg");
	this.shape_11.setTransform(102.3,82.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA0gEQA0ADAsAFQhagJhnAFIhmAIQBAgWCHAKg");
	this.shape_12.setTransform(101.1,85.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BCBCBC").s().p("AgBgOIgmghQApAKAXArQAMAWAEAUQgGgZgkglg");
	this.shape_13.setTransform(139.7,79.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BCBCBC").s().p("AgGgZIAAg8QAOA1gBA/QgBAhgEAWQgFgtgDhCg");
	this.shape_14.setTransform(147.2,99.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BCBCBC").s().p("AgihwIANAPQAPAUAKAYQAmBKgJBcg");
	this.shape_15.setTransform(150,89.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BCBCBC").s().p("AgbANQAYgrApgKQgTAOgTAUQgaAagLAVg");
	this.shape_16.setTransform(62.2,78.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BCBCBC").s().p("AgGAfQgBg/AOg1IAAA8QgDBCgFAtQgEgWgBghg");
	this.shape_17.setTransform(54.4,99.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BCBCBC").s().p("AgDg1QAKgYAPgUIANgPIhDDhQgJhcAmhKg");
	this.shape_18.setTransform(51.6,89.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,0,0,4).p("Ag7AKIAigPQAogKAoAZ");
	this.shape_19.setTransform(101.3,111);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,0,0,4).p("ABrAAQAAAsgfAgQggAfgsAAQgrAAgggfQgfggAAgsQAAgrAfgfQAgggArAAQAsAAAgAgQAfAfAAArg");
	this.shape_20.setTransform(117.3,112);

	this.instance = new lib.Path_23();
	this.instance.setTransform(117.4,112.1,1,1,0,0,0,10.8,10.8);
	this.instance.alpha = 0.5;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,0,0,4).p("ABrAAQAAAsgfAgQggAfgsAAQgrAAgggfQgfggAAgsQAAgrAfgfQAgggArAAQAsAAAgAgQAfAfAAArg");
	this.shape_21.setTransform(84.8,112);

	this.instance_1 = new lib.Path_25();
	this.instance_1.setTransform(84.9,112.1,1,1,0,0,0,10.8,10.8);
	this.instance_1.alpha = 0.5;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgogCQgWADgUAKIgPAKQBCg6BGAYQAkAMAXAWQhFgohFARg");
	this.shape_22.setTransform(84.8,105.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhhgQIAPAKQAUAIAWAFQBFARBFgoQgZASglAJQgVAGgSAAQgyAAgsghg");
	this.shape_23.setTransform(84.8,118.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhhgQIAPAKQAUAIAWAFQBFARBFgoQgZASglAJQgVAGgSAAQgyAAgsghg");
	this.shape_24.setTransform(117.3,118.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AApgCQhFgRhFAoIAQgOQAVgMAWgIQBGgYBCA6QgWgRgjgGg");
	this.shape_25.setTransform(117.3,105.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAIQgDgGAAgEIACgKIBAAFIABAFQAAAFgFAJIgMABQgXAAgYgFg");
	this.shape_26.setTransform(116.8,112.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgRAEQgJgEgDgKQAdAHAegCQgJAQgVAAQgJgBgIgGg");
	this.shape_27.setTransform(116.7,114);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfgEIAAgFIBDAFQgeALgpADQAEgJAAgFg");
	this.shape_28.setTransform(123.5,112.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghgMIBCAFIgBAIQAAAGACAGQgigIghgRg");
	this.shape_29.setTransform(110.2,111.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgdAMQgEgHAAgFIABgGIBAgFQACAEAAAHQAAAFgCAEQgVADgTAAIgVAAg");
	this.shape_30.setTransform(83.8,112);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgSAFQgIgFgEgHQAfACAegFQgEAKgIAEQgJAHgKAAQgJAAgJgGg");
	this.shape_31.setTransform(83.9,114.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgNABIgSgFIA9gFIgBAGQAAAGADAHQgYgDgVgGg");
	this.shape_32.setTransform(77.4,112.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgiACQAAgEgCgFIBJgFQgjASgmAIQACgFAAgHg");
	this.shape_33.setTransform(90.8,111.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeAaQgMgJgEgMQAFAJAKAGQALAEANAAQAPABAMgJQAMgJgBgKQAAgLgKgJQgKgIgOgBIADgBQATAAANAKQAOALABAMQgBAOgOAKQgNAKgTAAQgQAAgOgIg");
	this.shape_34.setTransform(119,129);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgfAYQgOgKAAgOQAAgNAOgKQANgKASAAIAEAAQgOABgKAJQgLAIAAAMQAAAKAMAJQAMAJAPAAQANAAALgGQAKgFAEgIQgDALgNAJQgNAIgRAAQgSAAgNgKg");
	this.shape_35.setTransform(85.2,129.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhMATQgjgVgUgoQAYAhAiAQQAjATAmAAQAnAAAjgTQAigQAYghQgUAogiAVQgkAYgqAAQgoAAgkgYg");
	this.shape_36.setTransform(102.1,132.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAQAdQgogJgQgCQgwgFgdAQIAiggQAughA1AFQA3AGAXgDQALgBABgCIAGAHQAGAKAAARQgBAVgqAGQgRACgOAAQgPAAgNgDg");
	this.shape_37.setTransform(81.8,97.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhKAeQgqgGgBgVQAAgRAGgKQADgFADgCIAMADQAXADA3gGQA1gFAuAhQAXAPALARQgdgQgvAFQgQACgpAJQgNADgPAAQgOAAgRgCg");
	this.shape_38.setTransform(120.4,97.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(3,0,0,4).p("AHdgTQgWgvgPhiQgNhvgHguQgOhThVg0QhvhFjSAAQjSAAhuBFQhVA0gOBTQgHAugNBvQgPBigWAvQg6B4BCCAQBMCSDNAzIAHAPQAKATARAQQA3AyBiAAQBgAAA3gyQAdgZAHgZQDNgzBMiSQBDh/g6h5g");
	this.shape_39.setTransform(101.2,121.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ECA26E").s().p("AiYHcQgSgQgJgTIgIgPQjNgzhLiSQhDiAA6h4QAWgvAPhiQANhvAHguQAOhTBVg0QBuhFDSAAQDSAABvBFQBVA0AOBTQAHAuANBvQAPBiAWAvQA6B5hDB/QhMCSjMAzQgJAZgbAZQg3AyhhAAQhiAAg2gyg");
	this.shape_40.setTransform(101.2,121.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgIgCQgSACgTAGIgPAIQAPgWAfgDQAOgCAMADQgBgRgPgLIgRgIQAsgMAXA1QAMAZADAdQgQg5g1AGg");
	this.shape_41.setTransform(47.3,116.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B9754B").s().p("AAIBRQgYgIgSgYQgPgZgGgGQgOgPAEgiQAFgsAtgIQAqgIAYAsQAMAVAEAYIgfBEIACANQgBAGgJAAQgIAAgMgEg");
	this.shape_42.setTransform(46.7,120.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AABCdQgpgOgagaQgPgPgTgfIgMgUQgNgVgGglQgIgyAQglQAYg3BCgNQAMgCAOAAQBHAAApBLQAVAmAHAqIABAJIgwBpQAGAWgKARQgMAVgeAAQgPAAgYgIgAgbiEQhHANgFBHQgEAyAUAgIAiA1QAXAbApAPQATAGAKAAQATAAgBgQIgEgPIAxhtQgFgggQggQghhBg4AAg");
	this.shape_43.setTransform(44.5,118.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ECA26E").s().p("AAMCBQgpgPgXgbIgig1QgUggAEgyQAFhHBHgNQBDgNAmBFQAUAiAFAlIgxBtIAEAVQgDAKgPAAQgLAAgSgGg");
	this.shape_44.setTransform(44.4,118.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgtgFQAXg1AsAMQgJACgIAGQgPALgBARIAagBQAfADAPAWQgYgOgcgCQg1gGgQA5QADgdAMgZg");
	this.shape_45.setTransform(154.7,118.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B9754B").s().p("AglBPIACgNIgfhEIAQgtQAZgsApAIQAtAIAFAsQAEAigOAPQgLASgKANQgSAYgYAIQgMAEgIAAQgJAAgBgGg");
	this.shape_46.setTransform(155.3,122.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhRCQQgKgRAGgWIgwhpIABgJQABgIAFgTQAIgdANgYQAphLBIAAQAOAAAMACQBCANAYA3QAQAlgIAyQgGAlgNAVIgMAUQgTAfgPAPQgaAagpAOQgXAIgQAAQgeAAgMgVgAhRhFQgKAUgHAYQgDAMgBAIIAxBtIgEAPQgBAQATAAQAKAAATgGQApgPAXgbQANgQAVglQAUgggEgyQgFhHhHgNIgUgCQg4AAghBBg");
	this.shape_47.setTransform(157.5,120.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ECA26E").s().p("Ag6B9IAEgVIgxhtIAFgWQAIgcAMgVQAnhFBCANQBHANAFBHQAEAygUAgQgVAlgNAQQgXAbgpAPQgSAGgLAAQgPAAgDgKg");
	this.shape_48.setTransform(157.6,120.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(3,0,0,4).p("AkVj5Qh/gZhRBCQhjBRAPDDIBjB4IBwi7IC9hrIFnAUIClE3IBaAgIB/jNQAAhMgahNQg0iciCgCQj1gDiFAFQhmAEg4gC");
	this.shape_49.setTransform(102.3,97.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AFjDjIilk3IlngUIi9BrIhwC7Ihjh4QgPjDBjhRQBRhCB/AZIBpgGQA4ACBmgEQCFgFD1ADQCCACA0CcQAaBNAABMIh/DNg");
	this.shape_50.setTransform(102.3,97.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_1},{t:this.shape_21},{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(60));

	// Layer 7
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(3,1,0,4).p("AH/lKIgJBKQgPBcggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJQhVgQgjgnQgTgUgFggQgGglASgdQAzhSDKAOQCIAJCcisQCaiqAli8");
	this.shape_51.setTransform(138.3,261.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#ECA26E").s().p("AltF5QhVgQgjgnQgTgUgFggQgGgkASgeQAzhRDKANQCIAJCcisQCaiqAli8IEQA4IgJBKQgPBbggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJg");
	this.shape_52.setTransform(138.3,261.5);

	this.instance_2 = new lib.Tween13("synched",0);
	this.instance_2.setTransform(138.3,261.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween14("synched",0);
	this.instance_3.setTransform(136.4,261.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween15("synched",0);
	this.instance_4.setTransform(140.3,263.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween16("synched",0);
	this.instance_5.setTransform(136.4,261.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween17("synched",0);
	this.instance_6.setTransform(140.3,263.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween18("synched",0);
	this.instance_7.setTransform(136.4,261.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween19("synched",0);
	this.instance_8.setTransform(140.3,263.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween20("synched",0);
	this.instance_9.setTransform(136.4,261.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween21("synched",0);
	this.instance_10.setTransform(140.3,263.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51}]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.shape_52},{t:this.shape_51}]},2).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,x:136.4},3).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},3).to({_off:true,x:140.3,y:263.5},3).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},3).to({_off:true,x:136.4,y:261.5},2).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},2).to({_off:true,x:140.3,y:263.5},3).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},3).to({_off:true,x:136.4,y:261.5},2).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},2).to({_off:true,x:140.3,y:263.5},3).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},3).to({_off:true,x:136.4,y:261.5},2).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25).to({_off:false},2).to({_off:true,x:140.3,y:263.5},3).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},3).to({_off:true,x:138.3,y:261.5},2).wait(28));

	// Layer 6
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(3,1,0,4).p("AoCl3IAKBQQARBhAhBaQBsEdDqBjQCNA9CSAZQBKANAsABIBOgIQBUgQAjgnQATgVAFgfQAGglgSgeQgzhRjKANQiMAKiPiMQiSiOgli3");
	this.shape_53.setTransform(54.1,263.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ECA26E").s().p("ACvFqQiSgZiNg9QjqhjhskdQghhagRhhIgKhQIEpAuQAlC3CSCOQCPCMCMgKQDKgNAzBRQASAegGAlQgFAfgTAVQgjAnhUAQIhOAIQgsgBhKgNg");
	this.shape_54.setTransform(54.1,263.5);

	this.instance_11 = new lib.Tween26("synched",0);
	this.instance_11.setTransform(54.2,263.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween27("synched",0);
	this.instance_12.setTransform(56.1,263.5);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween28("synched",0);
	this.instance_13.setTransform(53.5,264.8);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween29("synched",0);
	this.instance_14.setTransform(56.1,263.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53}]}).to({state:[{t:this.instance_11}]},29).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_11}]},3).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).to({_off:true,x:56.1},3).wait(6).to({_off:false,x:54.2},3).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({_off:false},3).to({_off:true,x:53.5,y:264.8},3).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(32).to({_off:false},3).to({_off:true,x:56.1,y:263.5},3).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(35).to({_off:false},3).to({_off:true,x:54.2},3).wait(19));

	// Layer 5
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A06724").s().p("AgDAAQAEgaAHgMIgOBMQgCgNAFgZg");
	this.shape_55.setTransform(80.5,333.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A06724").s().p("AAXB5Qg4gQAfgyQAWgmAvgcQgCgkg5gNQg3gNgUAeQAAARAcAqQAWAjgTAhQgaAVgigMQgdgLgbghQgaghgLgjQgLgnAMgaQAMgcBEgIQAzgGAzAGQA1AHBEAiQBJAkAGAeQAKAvhEAzQgzAngoAAQgLAAgLgDg");
	this.shape_56.setTransform(91.7,260.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#621F0B").s().p("AABgBIgRgDQADgFANAEIASAEIgDAFQgBAEgDAAQADgIgNgBg");
	this.shape_57.setTransform(79.1,322.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#824719").s().p("AggE6QgNgCgNgFQgFhbgrhAQgwhGhYgZQgvgOg8AGIhmANQBgjgCRibQA3AQBABEQA9BCA9AOQAIAGAXAGQAWAEAJgDQBAAMBRgkQBWglA2AGQBJCpABETQhCgqgUgLQg0gbgvgHQhdgNhJAtQhCApgnBTIgcgEg");
	this.shape_58.setTransform(82.7,288.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#824719").s().p("AiqErQhigfAVhsQAah/COiRQBOhPCChyQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAQA/AbAsQAeA0AuAhQhWBdg3BRQhGBogpB0Qg0Acg2AAQggAAgggKg");
	this.shape_59.setTransform(35.1,265.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#824719").s().p("AgnEcQhBgHg5gkQg6glgcg2Qgfg7AQg+IAQhMQAbhzBIhBQBQhJBrATQBUAPBBA1QBFA2AIBDQAMBchGB1Qg/BshCAmQgpAXgyAAQgNAAgOgCgAg3j0QhVAXg7BzQg9B0AeBjQAPAwA3AqQA3ApA6AIQBiAQBGhQQArgyA0h8QAHgHAEgTQAFgWgEgJQAJhchmhBQhHguhDAAQgaAAgaAGg");
	this.shape_60.setTransform(106.1,334.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#824719").s().p("Ah3EDQgZgMgUgWQgRgTgSggQgmhDgIhwQgKiEAxhDQA7hSCHAAQCFAABFBSQA7BGgBCCQgBB8g2BOQgqA9hbAVQggAHgdAAQg9AAg5gcgAhVjxQg2APgcAeQg3A5AFCBQAEB5AyBCQAsA7BgALQBfAMA9gxQBMg8AGiKQAFiAg3hAQgVgagkgSQgngVgsgFQgRgCgPAAQgoAAgmALg");
	this.shape_61.setTransform(49.9,323.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#824719").s().p("AAiFRQhbgRgthBQAHh7gXh7QgShhgph2QBtgcBLhpQALAeAuBgQAtBfAWA8QBMDHgvCIQgWA/hFAAQgQAAgTgDg");
	this.shape_62.setTransform(140.3,288);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgMgNQALgFAJAHQAMAHgGAMQgKAIgGAAQgTgEAJgZg");
	this.shape_63.setTransform(107.5,246.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgDAQQgRgEAHgZQALgFAKAHQALAHgFALIgJAGQgEADgCAAIgCAAg");
	this.shape_64.setTransform(77.8,240.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAKgSAPgEQAQgEAPATQAOASgLAWQgKAVgVAAIgEAAg");
	this.shape_65.setTransform(111.4,242.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAJgSAPgEQAQgEAPATQAPATgLAWQgKAUgVAAIgEAAg");
	this.shape_66.setTransform(81.7,236.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#824719").s().p("ABIE7QglgjhcgeQgGgGgTgEQgTgEgHADQhhgLg1AUQhIAbAaBTQkEhsAhkfIAJgrQABgPAGgPIAMgXQghgngEg2QgDgyAWgwQAWgxAngeQArggAxAAQBAAAA4AxQAIAHBOBYQANgTgTgUQgXgXAAgNQBQg2CeAhQChAiAvBTQgEAFggAPQgYALACASQAYgCAugaQAvgbAdgEQBFgJA1AmQAxAjASA8QATA9gUA5QgWA9g9AiQAIBig7BnQg3BghOAsQgjAUg6AHQhCAGggAFQA2hFg3g0gAAWCaQgSAYACAhQACAiAWAUQAYAXAngHQAZgEAQgZQAQgXAAgdQAAgfgSgUQgUgWgkAAQgiAAgUAbgAkDBRQgPALgFAKQgVAkANAhQAMAdAfANQAgANAbgNQAfgNAJgpQAIglgSgbQgVgdgrAAQgUAAgUAPgAERjeQg5AeAMAjQAOAcARATQBCBMA4AeQBZAuAlhZQAGgEADgSQAEgTgEgGQABg9gigqQgkguhCgFIgMAAQgvAAgxAagAnQlxQgpAkgJA3QgGAgAIAcQAIAgAVAMQAtAbB2guQBzgrAEgnQACgeg8gvQg/gyg0gCIgEAAQgvAAgnAjg");
	this.shape_67.setTransform(102.5,223);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#905D16").s().p("AAIgpQACAQgGAaQgEAcgIANg");
	this.shape_68.setTransform(75.9,332.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A06724").s().p("AAFgcQADAJgEAUQgEAVgFAHg");
	this.shape_69.setTransform(128.5,332.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A06724").s().p("Ah0DLQhRgsgQhBQgchvBJhuQBJhuBiAEIAIABQBYAFBAA4QA+A3gDBCQgEBVg9BZQg8BZhDARQgTAFgSAAQgzAAg6ggg");
	this.shape_70.setTransform(105.6,334.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A06724").s().p("AgoDlQhLgPgmg0QgkgygLhlQgNhwAqhBQAagnA1gRQAxgPA/AFQAoADAnASQApATAVAaQA4BFgRCEQgRCMhUAnQgtAUgwAAQgVAAgZgFg");
	this.shape_71.setTransform(49.6,323.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#621F0B").s().p("AgpD5Qg6gJg3gpQg3gpgPgwQgehkA9h0QA7hzBVgWQBcgYBiA/QBmBCgJBcIgMA4Qg0B8grAyQg7BDhNAAQgQAAgQgCgAioh+QhJBvAcBvQARBBBRAsQBQAsBBgSQBDgRA9hYQA9hZADhWQADhBg+g3Qg/g4hYgFIgIgCIgFAAQhgAAhHBqg");
	this.shape_72.setTransform(105.5,334.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#621F0B").s().p("AgWD5QhfgLgsg7QgyhCgEh5QgGiBA3g5QAdgeA1gPQA3gPA4AGQAsAFAnAVQAjASAWAaQA2BAgFCAQgFCKhMA8QgxAnhJAAQgPAAgUgCgAhdjbQg2ARgZAnQgqBBAMBwQAMBlAkAxQAmA1BKAPQBJAPBDgfQBTgmASiMQARiEg4hGQgVgagpgSQgogSgngDIgegCQguAAgkAMg");
	this.shape_73.setTransform(49.8,323.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAEgaQAEAIgEASQgEAVgFAGg");
	this.shape_74.setTransform(160,312.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#621F0B").s().p("AAAAEQgWgEgIgGIA9ALIgKACQgJAAgMgDg");
	this.shape_75.setTransform(89,273.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A06724").s().p("AgYgDQAHgDASAEQASACAGAGg");
	this.shape_76.setTransform(94.1,247.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgvA8QgVgUgCgiQgCggASgYQATgbAiAAQAjAAAUAXQARAUAAAeQAAAbgPAXQgQAZgaAFQgJACgGAAQgbAAgTgSgAgpATQgJAaATAFQAIAAAKgJQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgzQgNAEgKASQgKASAFAOQAGASAVAEQAZADAMgYQALgWgOgSQgNgQgOAAIgGABg");
	this.shape_77.setTransform(110.4,243.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZBGQgggNgLgdQgOgfAVgkQAGgKAPgLQATgPAUAAQAqAAAUAdQATAbgIAjQgJApgfANQgOAGgOAAQgNAAgQgGgAgpAUQgIAbASAEQAFAAAFgDIAIgGQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgyQgNAEgKASQgJASAFAOQAGATAVADQAZAEALgYQAMgVgPgTQgNgQgOAAIgGAAg");
	this.shape_78.setTransform(80.7,237.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgCAAQACgRAFgDIgHApQgEgFAEgQg");
	this.shape_79.setTransform(49.6,217);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A06724").s().p("AADgWQAEAGgEAQQgDATgEAEg");
	this.shape_80.setTransform(153.8,215.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A06724").s().p("AgGBXIgwgvQgdgZgQgQQgfghAHgYQAGgYAxgRQAtgPAjADQA2AEAfAlQAeAigCAsQgBAngUAgQgVAfgYACIgFABQgfAAgdgag");
	this.shape_81.setTransform(140.2,211.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A06724").s().p("AhpBhQgzg8ArhIQAshKBLAMQAtAHAjAhQAdAdATApQgvAwg4AVQgsASg1AAQgTAAgUgDg");
	this.shape_82.setTransform(65.9,194.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#621F0B").s().p("AAJBxQg1gehChMQgNgZgSgUQgMgjA5geQA3geAzAEQBBAFAlAuQAhAqAAA7IgKAvQgYA8gvAAQgYAAgfgRgAg+heQgxAQgHAYQgGAZAeAfQARASAcAYIAwAwQAgAbAigCQAYgCAUggQAVggABgnQABgsgdgiQgggkg2gFIgMAAQgeAAglANg");
	this.shape_83.setTransform(139.7,211.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#621F0B").s().p("Ah6BuQgWgNgIggQgHgcAFgfQAKg1ApglQAogkAxACQAyACA/AxQA9AwgDAcQgDAmh0ArQhIAdguAAQgaAAgQgJgAh3glQgrBJAzA8QBMAIA8gXQA4gWAvgwQgTgpgdgcQgjgigtgHQgJgCgKAAQg+AAgmBAg");
	this.shape_84.setTransform(66.5,194.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AC1OwIg3gMQiFgpgshsQgthvA9iYQADAAABgEIACgHIgUgEQgMgEgEAFQgGAhABAfIgSBWQghBihNAqQhHAnhvgHIgygLQh0gkgviSQgtiKAqiNQAHgYAPgWQALgQAWgZIgtAIQgaAEgVgCQgVgCgSgGQh+grAuihQAmiCCFiDQAjgkBMhCQBHg+AegfQgOhNAKg+IAIgnQAGggAMgOQgXgxgHghQgKgwALguQAOg3AognQAngmA1gPQA2gOA0AOQA3AOApAtQBeg3CpAjQCpAiBCBZQBogwBjBGQAsAfAXAuQAZAwgGAzIgMA3QgMAjgYAeQgQATggAdQABA4gVA9QgSA0geAtQASAvAoBXQApBXARAsQA+CggICVIgLA3QgUAzgkAaQglAcgygEQgZgDgOgFQgugSgYgVQAcBPguB8QgrBzhHBGQgmAkgzARQgpAOgtAAIgOAAgABJGTQhIBBgZB0QgHALgGAbQgFAaACAOQgQA+AfA6QAaA2A6AlQA5AlBBAHQBEAHA0gdQBCglA/hsQBGh4gMhbQgIhDhFg3QhBg0hUgPQgXgEgWAAQhRAAg/A5gAoiE5QgxBDAKCEQAIBzAmBCQASAhARASQAUAWAZANQBWAqBfgWQBbgVAqg9QA2hOABh9QABiCg7hGQhFhSiHgBQiHAAg7BSgAGAgqQApB0ATBjQAWB7gGB7QAtBBBcARQBkASAbhOQAuiIhLjJQgXg8gthdQgthggMgeQhNBphtAcgAj/DfQBZAZAwBGQArBAAFBaQANAGANACIAcAEQAnhTBCgpQBJgtBdANQAuAHA0AbQAVALBCAqQgBkVhKioQg1gFhWAjQhRAkhAgMIg+gNQg9gMg+hCQg/hFg3gPQiRCYhhDjIBngOIAfgBQApAAAiAKgAlmlqQiEByhNBPQiPCTgZB9QgVBsBhAfQBXAaBVgsQAqh0BGhoQA3hRBVhdQgughgeg0QgagsgRg/QAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABgABViuQA6ANACAlQgwAegXAlQgfAyA6AOQAvAOBCgwQBDgygKgyQgGgehIgkQhEghg4gHQgygHgyAHQhDAHgNAcQgMAaAMAoQAKAlAaAgQAbAiAeALQAfAMAagWQATgggWgkQgcgsABgQQANgVAhAAQANAAARADgABMj0IAzAKQBeAfAlAjQA3Azg2BFQAggFBCgFQA6gIAjgUQBOgrA3hhQA7hngIhhQA9gjAWg+QAUg6gTg8QgSg9gxgiQg1gmhFAJQgdADgvAbQguAbgYACQgCgTAYgLQAggOAEgFQgvhTihgiQiggihOA3QAAAMAVAYQATATgNAUQhMhYgIgIQg4gxhAABQgxAAgrAgQgnAegWAwQgWAxADAxQAEA2AhAnIgMAYQgGAOgBAPQgGAEgEARQgDARAEAFQghEhEEBsQgahSBIgcQAhgMAyAAQAdAAAkAEg");
	this.shape_85.setTransform(83.9,271.6);

	this.instance_15 = new lib.Tween33("synched",0);
	this.instance_15.setTransform(84,271.6);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween34("synched",0);
	this.instance_16.setTransform(84,269.6);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween35("synched",0);
	this.instance_17.setTransform(84,271.6);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween36("synched",0);
	this.instance_18.setTransform(84,269.6);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween37("synched",0);
	this.instance_19.setTransform(84,271.6);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween38("synched",0);
	this.instance_20.setTransform(84,269.6);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween39("synched",0);
	this.instance_21.setTransform(84,271.6);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]}).to({state:[{t:this.instance_15}]},18).to({state:[{t:this.instance_16}]},4).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_15}]},3).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(18).to({_off:false},0).to({_off:true,y:269.6},4).wait(14).to({_off:false,y:271.6},3).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(18).to({_off:false},4).to({_off:true,y:271.6},3).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(22).to({_off:false},3).to({_off:true,y:269.6},3).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(25).to({_off:false},3).to({_off:true,y:271.6},3).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(28).to({_off:false},3).to({_off:true,y:269.6},2).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(31).to({_off:false},2).to({_off:true,y:271.6},3).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(33).to({_off:false},3).to({_off:true},3).wait(21));

	// Layer 4
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("ABKDDQgRhghGiaIhHiLQBaBTAwCgQAZBRAFBBg");
	this.shape_86.setTransform(154.9,209.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhTDDQAGhBAYhRQAwigBZhTIhGCLQhHCagQBgg");
	this.shape_87.setTransform(41.2,209.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAvAhQhdgGhCgjIgPgYIBJAgQBaAhBcgDQgWADgdAAIgeAAg");
	this.shape_88.setTransform(47.6,241);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("Ah6AfQBXAABVgfQAugPAbgRIgQAYQhBAkhdAFg");
	this.shape_89.setTransform(148.7,241);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(3,0,0,4).p("AOnhZQA7lVj/j5QhPhOhlg7IhWgsIhjBDQgmhbgCAYIlCCrIk/irQgCgSgWAvIgrgdQikAziYB4QkwDvA7FVIEpAuQgBAcAIASQAGAOAXAcQhUA+hDBeQiGC7BRCeQBYCsEHBbQDTBJD9AEIAHAAQERgECjgwQDqhFBXipQBRiehojUQghhDgvhAIgpgyQA0hEgXhlg");
	this.shape_90.setTransform(96.2,236.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6E6C65").s().p("AAJNiQj9gEjThJQkHhbhYisQhRieCGi7QBDheBUg+QgXgcgGgOQgIgSABgcIkpguQg7lVEwjvQCYh4CkgzIArAdQAWgvACASIE/CrIFCirQACgYAmBbIBjhDIBWAsQBlA7BPBOQD/D5g7FVIkVg3QAXBlg0BEIApAyQAvBAAhBDQBoDUhRCeQhXCpjqBFQijAwkRAEg");
	this.shape_91.setTransform(96.2,236.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).wait(60));

	// Layer 1
	this.instance_22 = new lib.Path_1_1();
	this.instance_22.setTransform(204.8,48.6,1,1,0,0,0,10,26.5);
	this.instance_22.alpha = 0.5;

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(3,0,0,4).p("AC8C0QAAAygjAjQgjAjgyAAIiGAAQgyAAgjgjQgjgjAAgyIAAlnQAAgxAjgjQAjgkAyAAICGAAQAyAAAjAkQAjAjAAAxg");
	this.shape_92.setTransform(209.6,48.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BECCFE").s().p("AhDEsQgygBgigiQgkgkABgyIAAlmQgBgxAkgjQAigjAyAAICGAAQAyAAAkAjQAiAjABAxIAAFmQgBAygiAkQgkAigyABg");
	this.shape_93.setTransform(209.6,48.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AguBRIAAihIBdAAIAAChg");
	this.shape_94.setTransform(209.6,10.2);

	this.instance_23 = new lib.Path_4_1();
	this.instance_23.setTransform(165.5,166.8,1,1,0,0,0,11.3,10.4);
	this.instance_23.alpha = 0.199;

	this.instance_24 = new lib.Path_5();
	this.instance_24.setTransform(9.9,196.5,1,1,0,0,0,7.6,17.1);
	this.instance_24.alpha = 0.199;

	this.instance_25 = new lib.Path_6();
	this.instance_25.setTransform(42.4,206.3,1,1,0,0,0,5.5,12);
	this.instance_25.alpha = 0.5;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AA7AAQiagKhmAbIAhgLQAwgLAxgHQCcgVBtAzQg7gMhQgGg");
	this.shape_95.setTransform(101.2,256.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AB3AAQk3gXjMA5IBDgVQBggYBjgNQE5grDaBoQh2gZiggMg");
	this.shape_96.setTransform(100.9,252.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AhLAAIgdgZQAnAUAKAEQAhALAjADQAjADAggTQAQgLAJgLQgEANgOAMQgcAZgxABIgFAAQgrAAglgag");
	this.shape_97.setTransform(100.1,166.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(3,0,0,4).p("AOTj/QAAgxgjgjQgkgkgyAAI4yAAQgyAAglAkQgjAjAAAxIAAH/QAAAyAjAjQAkAjAzAAIYyAAQAzAAAjgjQAjgjAAgyg");
	this.shape_98.setTransform(95.5,188.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#5F3C15").s().p("AsYF4QgzAAgkgjQgjgjAAgyIAAn/QAAgxAjgjQAkgkAzAAIYyAAQAyAAAkAkQAjAjAAAxIAAH/QAAAygjAjQgkAjgyAAg");
	this.shape_99.setTransform(95.5,188.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(3,0,0,4).p("ADRgcImgAAIAAA4IGgAAg");
	this.shape_100.setTransform(149,380.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AjPAdIAAg5IGfAAIAAA5g");
	this.shape_101.setTransform(149,380.4);

	this.instance_26 = new lib.Path_1_0();
	this.instance_26.setTransform(167.4,332.1,1,1,0,0,0,7.8,8.7);
	this.instance_26.alpha = 0.5;

	this.instance_27 = new lib.Path_2_0();
	this.instance_27.setTransform(148.9,368.5,1,1,0,0,0,17.9,5);
	this.instance_27.alpha = 0.199;

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(3,0,0,4).p("ABdhzIi5AAQgvAAgjAiQghAiAAAvIAAB0IGgAAIAAh0QAAgvgigiQgigigwAAg");
	this.shape_102.setTransform(149,371.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#1F1F1F").s().p("AjPB0IAAh0QgBgvAjgiQAigiAvAAIC5AAQAwAAAiAiQAhAiAAAvIAAB0g");
	this.shape_103.setTransform(149,371.7);

	this.instance_28 = new lib.Path_4_0();
	this.instance_28.setTransform(135.4,332.1,1,1,0,0,0,5.2,8.7);
	this.instance_28.alpha = 0.5;

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(3,0,0,4).p("AEFmiIgGCXQgGC8AAC1QAADMhDA1QghAag9AJQgmAGhnAFQg4ACgjgbQgggYgRgyQgUg3gLijQgKidgahG");
	this.shape_104.setTransform(147.6,334);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#153617").s().p("AiQGDQgggYgRgyQgTg3gMijQgKidgahGIIJkXIgFCXQgHC8AAC1QAADMhDA1QghAag9AJQglAGhoAFIgIAAQgyAAghgZg");
	this.shape_105.setTransform(147.6,333.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(3,0,0,4).p("AjPgcIGgAAIAAA4ImgAAg");
	this.shape_106.setTransform(42.2,380.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AjPAdIAAg5IGfAAIAAA5g");
	this.shape_107.setTransform(42.2,380.4);

	this.instance_29 = new lib.Path_1();
	this.instance_29.setTransform(23.8,332.1,1,1,0,0,0,5.2,8.7);
	this.instance_29.alpha = 0.5;

	this.instance_30 = new lib.Path_2();
	this.instance_30.setTransform(42.2,368.5,1,1,0,0,0,17.9,5);
	this.instance_30.alpha = 0.199;

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(3,0,0,4).p("AhchzIC5AAQAwAAAiAiQAiAiAAAvIAAB0ImgAAIAAh0QAAgvAhgiQAjgiAvAAg");
	this.shape_108.setTransform(42.2,371.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1F1F1F").s().p("AjPB0IAAh0QAAgvAhgiQAigiAwAAIC5AAQAwAAAiAiQAhAiAAAvIAAB0g");
	this.shape_109.setTransform(42.2,371.7);

	this.instance_31 = new lib.Path_4();
	this.instance_31.setTransform(55.8,332.1,1,1,0,0,0,7.8,8.7);
	this.instance_31.alpha = 0.5;

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(3,0,0,4).p("AkDmiIAFCXQAGC8AAC1QAADMBDA1QAhAaA9AJQAmAGBnAFQA4ACAjgbQAggYARgyQAUg3ALijQALieAZhF");
	this.shape_110.setTransform(43.6,334);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#153617").s().p("AA2GcQhogFglgGQg+gJgggaQhEg1AAjMQAAi1gFi8IgGiXIIJEXQgaBFgLCeQgLCjgTA3QgSAygfAYQghAZgzAAIgHAAg");
	this.shape_111.setTransform(43.6,333.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AguQ9QgUgUAAgcMAAAggZQAAgdAUgUQATgTAbAAQAbAAAUATQAUAUAAAdMAAAAgZQAAAcgUAUQgUAUgbAAQgbAAgTgUg");
	this.shape_112.setTransform(10.7,307.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AguQ9QgUgUAAgcMAAAggZQAAgdAUgUQATgTAbAAQAbAAAVATQATAUAAAdMAAAAgZQAAAcgTAUQgVAUgbAAQgbAAgTgUg");
	this.shape_113.setTransform(180.3,307.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(3,0,0,4).p("AF3AzIrtAAIAAhlILtAAg");
	this.shape_114.setTransform(53.9,383.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#5F3C15").s().p("Al2AzIAAhlILtAAIAABlg");
	this.shape_115.setTransform(53.9,383.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(3,0,0,4).p("AF3AzIrtAAIAAhlILtAAg");
	this.shape_116.setTransform(137.2,383.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#5F3C15").s().p("Al2AzIAAhlILtAAIAABlg");
	this.shape_117.setTransform(137.2,383.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("Ak2AcIAAg3IJtAAIAAA3g");
	this.shape_118.setTransform(189.1,7.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgbLKIAA2TIA3AAIAAWTg");
	this.shape_119.setTransform(175.7,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_31},{t:this.shape_109},{t:this.shape_108},{t:this.instance_30},{t:this.instance_29},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.instance_28},{t:this.shape_103},{t:this.shape_102},{t:this.instance_27},{t:this.instance_26},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.instance_22}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.1,212,229.8,416.5);


// symbols:
(lib.Tween39 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A06724").s().p("AgDAAQAEgaAHgMIgOBMQgCgNAFgZg");
	this.shape.setTransform(-3.4,62.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A06724").s().p("AAXB5Qg4gQAfgyQAWgmAvgcQgCgkg5gNQg3gNgUAeQAAARAcAqQAWAjgTAhQgaAVgigMQgdgLgbghQgaghgLgjQgLgnAMgaQAMgcBEgIQAzgGAzAGQA1AHBEAiQBJAkAGAeQAKAvhEAzQgzAngoAAQgLAAgLgDg");
	this.shape_1.setTransform(7.7,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#621F0B").s().p("AABgBIgRgDQADgFANAEIASAEIgDAFQgBAEgDAAQADgIgNgBg");
	this.shape_2.setTransform(-4.8,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#824719").s().p("AggE6QgNgCgNgFQgFhbgrhAQgwhGhYgZQgvgOg8AGIhmANQBgjgCRibQA3AQBABEQA9BCA9AOQAIAGAXAGQAWAEAJgDQBAAMBRgkQBWglA2AGQBJCpABETQhCgqgUgLQg0gbgvgHQhdgNhJAtQhCApgnBTIgcgEg");
	this.shape_3.setTransform(-1.2,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#824719").s().p("AiqErQhigfAVhsQAah/COiRQBOhPCChyQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAQA/AbAsQAeA0AuAhQhWBdg3BRQhGBogpB0Qg0Acg2AAQggAAgggKg");
	this.shape_4.setTransform(-48.9,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#824719").s().p("AgnEcQhBgHg5gkQg6glgcg2Qgfg7AQg+IAQhMQAbhzBIhBQBQhJBrATQBUAPBBA1QBFA2AIBDQAMBchGB1Qg/BshCAmQgpAXgyAAQgNAAgOgCgAg3j0QhVAXg7BzQg9B0AeBjQAPAwA3AqQA3ApA6AIQBiAQBGhQQArgyA0h8QAHgHAEgTQAFgWgEgJQAJhchmhBQhHguhDAAQgaAAgaAGg");
	this.shape_5.setTransform(22.2,63.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#824719").s().p("Ah3EDQgZgMgUgWQgRgTgSggQgmhDgIhwQgKiEAxhDQA7hSCHAAQCFAABFBSQA7BGgBCCQgBB8g2BOQgqA9hbAVQggAHgdAAQg9AAg5gcgAhVjxQg2APgcAeQg3A5AFCBQAEB5AyBCQAsA7BgALQBfAMA9gxQBMg8AGiKQAFiAg3hAQgVgagkgSQgngVgsgFQgRgCgPAAQgoAAgmALg");
	this.shape_6.setTransform(-34,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#824719").s().p("AAiFRQhbgRgthBQAHh7gXh7QgShhgph2QBtgcBLhpQALAeAuBgQAtBfAWA8QBMDHgvCIQgWA/hFAAQgQAAgTgDg");
	this.shape_7.setTransform(56.3,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMgNQALgFAJAHQAMAHgGAMQgKAIgGAAQgTgEAJgZg");
	this.shape_8.setTransform(23.5,-24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAQQgRgEAHgZQALgFAKAHQALAHgFALIgJAGQgEADgCAAIgCAAg");
	this.shape_9.setTransform(-6.1,-30.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAKgSAPgEQAQgEAPATQAOASgLAWQgKAVgVAAIgEAAg");
	this.shape_10.setTransform(27.4,-29.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAJgSAPgEQAQgEAPATQAPATgLAWQgKAUgVAAIgEAAg");
	this.shape_11.setTransform(-2.2,-35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#824719").s().p("ABIE7QglgjhcgeQgGgGgTgEQgTgEgHADQhhgLg1AUQhIAbAaBTQkEhsAhkfIAJgrQABgPAGgPIAMgXQghgngEg2QgDgyAWgwQAWgxAngeQArggAxAAQBAAAA4AxQAIAHBOBYQANgTgTgUQgXgXAAgNQBQg2CeAhQChAiAvBTQgEAFggAPQgYALACASQAYgCAugaQAvgbAdgEQBFgJA1AmQAxAjASA8QATA9gUA5QgWA9g9AiQAIBig7BnQg3BghOAsQgjAUg6AHQhCAGggAFQA2hFg3g0gAAWCaQgSAYACAhQACAiAWAUQAYAXAngHQAZgEAQgZQAQgXAAgdQAAgfgSgUQgUgWgkAAQgiAAgUAbgAkDBRQgPALgFAKQgVAkANAhQAMAdAfANQAgANAbgNQAfgNAJgpQAIglgSgbQgVgdgrAAQgUAAgUAPgAERjeQg5AeAMAjQAOAcARATQBCBMA4AeQBZAuAlhZQAGgEADgSQAEgTgEgGQABg9gigqQgkguhCgFIgMAAQgvAAgxAagAnQlxQgpAkgJA3QgGAgAIAcQAIAgAVAMQAtAbB2guQBzgrAEgnQACgeg8gvQg/gyg0gCIgEAAQgvAAgnAjg");
	this.shape_12.setTransform(18.6,-48.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#905D16").s().p("AAIgpQACAQgGAaQgEAcgIANg");
	this.shape_13.setTransform(-8,61.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A06724").s().p("AAFgcQADAJgEAUQgEAVgFAHg");
	this.shape_14.setTransform(44.5,61.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A06724").s().p("Ah0DLQhRgsgQhBQgchvBJhuQBJhuBiAEIAIABQBYAFBAA4QA+A3gDBCQgEBVg9BZQg8BZhDARQgTAFgSAAQgzAAg6ggg");
	this.shape_15.setTransform(21.6,63.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A06724").s().p("AgoDlQhLgPgmg0QgkgygLhlQgNhwAqhBQAagnA1gRQAxgPA/AFQAoADAnASQApATAVAaQA4BFgRCEQgRCMhUAnQgtAUgwAAQgVAAgZgFg");
	this.shape_16.setTransform(-34.3,52);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#621F0B").s().p("AgpD5Qg6gJg3gpQg3gpgPgwQgehkA9h0QA7hzBVgWQBcgYBiA/QBmBCgJBcIgMA4Qg0B8grAyQg7BDhNAAQgQAAgQgCgAioh+QhJBvAcBvQARBBBRAsQBQAsBBgSQBDgRA9hYQA9hZADhWQADhBg+g3Qg/g4hYgFIgIgCIgFAAQhgAAhHBqg");
	this.shape_17.setTransform(21.6,63.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#621F0B").s().p("AgWD5QhfgLgsg7QgyhCgEh5QgGiBA3g5QAdgeA1gPQA3gPA4AGQAsAFAnAVQAjASAWAaQA2BAgFCAQgFCKhMA8QgxAnhJAAQgPAAgUgCgAhdjbQg2ARgZAnQgqBBAMBwQAMBlAkAxQAmA1BKAPQBJAPBDgfQBTgmASiMQARiEg4hGQgVgagpgSQgogSgngDIgegCQguAAgkAMg");
	this.shape_18.setTransform(-34.2,51.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAEgaQAEAIgEASQgEAVgFAGg");
	this.shape_19.setTransform(76,40.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#621F0B").s().p("AAAAEQgWgEgIgGIA9ALIgKACQgJAAgMgDg");
	this.shape_20.setTransform(5,1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A06724").s().p("AgYgDQAHgDASAEQASACAGAGg");
	this.shape_21.setTransform(10.2,-24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgvA8QgVgUgCgiQgCggASgYQATgbAiAAQAjAAAUAXQARAUAAAeQAAAbgPAXQgQAZgaAFQgJACgGAAQgbAAgTgSgAgpATQgJAaATAFQAIAAAKgJQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgzQgNAEgKASQgKASAFAOQAGASAVAEQAZADAMgYQALgWgOgSQgNgQgOAAIgGABg");
	this.shape_22.setTransform(26.4,-28);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZBGQgggNgLgdQgOgfAVgkQAGgKAPgLQATgPAUAAQAqAAAUAdQATAbgIAjQgJApgfANQgOAGgOAAQgNAAgQgGgAgpAUQgIAbASAEQAFAAAFgDIAIgGQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgyQgNAEgKASQgJASAFAOQAGATAVADQAZAEALgYQAMgVgPgTQgNgQgOAAIgGAAg");
	this.shape_23.setTransform(-3.3,-34.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCAAQACgRAFgDIgHApQgEgFAEgQg");
	this.shape_24.setTransform(-34.4,-54.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A06724").s().p("AADgWQAEAGgEAQQgDATgEAEg");
	this.shape_25.setTransform(69.9,-55.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A06724").s().p("AgGBXIgwgvQgdgZgQgQQgfghAHgYQAGgYAxgRQAtgPAjADQA2AEAfAlQAeAigCAsQgBAngUAgQgVAfgYACIgFABQgfAAgdgag");
	this.shape_26.setTransform(56.3,-60);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A06724").s().p("AhpBhQgzg8ArhIQAshKBLAMQAtAHAjAhQAdAdATApQgvAwg4AVQgsASg1AAQgTAAgUgDg");
	this.shape_27.setTransform(-18.1,-77.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#621F0B").s().p("AAJBxQg1gehChMQgNgZgSgUQgMgjA5geQA3geAzAEQBBAFAlAuQAhAqAAA7IgKAvQgYA8gvAAQgYAAgfgRgAg+heQgxAQgHAYQgGAZAeAfQARASAcAYIAwAwQAgAbAigCQAYgCAUggQAVggABgnQABgsgdgiQgggkg2gFIgMAAQgeAAglANg");
	this.shape_28.setTransform(55.7,-60.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#621F0B").s().p("Ah6BuQgWgNgIggQgHgcAFgfQAKg1ApglQAogkAxACQAyACA/AxQA9AwgDAcQgDAmh0ArQhIAdguAAQgaAAgQgJgAh3glQgrBJAzA8QBMAIA8gXQA4gWAvgwQgTgpgdgcQgjgigtgHQgJgCgKAAQg+AAgmBAg");
	this.shape_29.setTransform(-17.5,-77.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AC1OwIg3gMQiFgpgshsQgthvA9iYQADAAABgEIACgHIgUgEQgMgEgEAFQgGAhABAfIgSBWQghBihNAqQhHAnhvgHIgygLQh0gkgviSQgtiKAqiNQAHgYAPgWQALgQAWgZIgtAIQgaAEgVgCQgVgCgSgGQh+grAuihQAmiCCFiDQAjgkBMhCQBHg+AegfQgOhNAKg+IAIgnQAGggAMgOQgXgxgHghQgKgwALguQAOg3AognQAngmA1gPQA2gOA0AOQA3AOApAtQBeg3CpAjQCpAiBCBZQBogwBjBGQAsAfAXAuQAZAwgGAzIgMA3QgMAjgYAeQgQATggAdQABA4gVA9QgSA0geAtQASAvAoBXQApBXARAsQA+CggICVIgLA3QgUAzgkAaQglAcgygEQgZgDgOgFQgugSgYgVQAcBPguB8QgrBzhHBGQgmAkgzARQgpAOgtAAIgOAAgABJGTQhIBBgZB0QgHALgGAbQgFAaACAOQgQA+AfA6QAaA2A6AlQA5AlBBAHQBEAHA0gdQBCglA/hsQBGh4gMhbQgIhDhFg3QhBg0hUgPQgXgEgWAAQhRAAg/A5gAoiE5QgxBDAKCEQAIBzAmBCQASAhARASQAUAWAZANQBWAqBfgWQBbgVAqg9QA2hOABh9QABiCg7hGQhFhSiHgBQiHAAg7BSgAGAgqQApB0ATBjQAWB7gGB7QAtBBBcARQBkASAbhOQAuiIhLjJQgXg8gthdQgthggMgeQhNBphtAcgAj/DfQBZAZAwBGQArBAAFBaQANAGANACIAcAEQAnhTBCgpQBJgtBdANQAuAHA0AbQAVALBCAqQgBkVhKioQg1gFhWAjQhRAkhAgMIg+gNQg9gMg+hCQg/hFg3gPQiRCYhhDjIBngOIAfgBQApAAAiAKgAlmlqQiEByhNBPQiPCTgZB9QgVBsBhAfQBXAaBVgsQAqh0BGhoQA3hRBVhdQgughgeg0QgagsgRg/QAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABgABViuQA6ANACAlQgwAegXAlQgfAyA6AOQAvAOBCgwQBDgygKgyQgGgehIgkQhEghg4gHQgygHgyAHQhDAHgNAcQgMAaAMAoQAKAlAaAgQAbAiAeALQAfAMAagWQATgggWgkQgcgsABgQQANgVAhAAQANAAARADgABMj0IAzAKQBeAfAlAjQA3Azg2BFQAggFBCgFQA6gIAjgUQBOgrA3hhQA7hngIhhQA9gjAWg+QAUg6gTg8QgSg9gxgiQg1gmhFAJQgdADgvAbQguAbgYACQgCgTAYgLQAggOAEgFQgvhTihgiQiggihOA3QAAAMAVAYQATATgNAUQhMhYgIgIQg4gxhAABQgxAAgrAgQgnAegWAwQgWAxADAxQAEA2AhAnIgMAYQgGAOgBAPQgGAEgEARQgDARAEAFQghEhEEBsQgahSBIgcQAhgMAyAAQAdAAAkAEg");

	this.addChild(this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.6,-94.4,153.3,189);


(lib.Tween38 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A06724").s().p("AgDAAQAEgaAHgMIgOBMQgCgNAFgZg");
	this.shape.setTransform(-3.4,62.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A06724").s().p("AAXB5Qg4gQAfgyQAWgmAvgcQgCgkg5gNQg3gNgUAeQAAARAcAqQAWAjgTAhQgaAVgigMQgdgLgbghQgaghgLgjQgLgnAMgaQAMgcBEgIQAzgGAzAGQA1AHBEAiQBJAkAGAeQAKAvhEAzQgzAngoAAQgLAAgLgDg");
	this.shape_1.setTransform(7.7,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#621F0B").s().p("AABgBIgRgDQADgFANAEIASAEIgDAFQgBAEgDAAQADgIgNgBg");
	this.shape_2.setTransform(-4.8,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#824719").s().p("AggE6QgNgCgNgFQgFhbgrhAQgwhGhYgZQgvgOg8AGIhmANQBgjgCRibQA3AQBABEQA9BCA9AOQAIAGAXAGQAWAEAJgDQBAAMBRgkQBWglA2AGQBJCpABETQhCgqgUgLQg0gbgvgHQhdgNhJAtQhCApgnBTIgcgEg");
	this.shape_3.setTransform(-1.2,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#824719").s().p("AiqErQhigfAVhsQAah/COiRQBOhPCChyQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAQA/AbAsQAeA0AuAhQhWBdg3BRQhGBogpB0Qg0Acg2AAQggAAgggKg");
	this.shape_4.setTransform(-48.9,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#824719").s().p("AgnEcQhBgHg5gkQg6glgcg2Qgfg7AQg+IAQhMQAbhzBIhBQBQhJBrATQBUAPBBA1QBFA2AIBDQAMBchGB1Qg/BshCAmQgpAXgyAAQgNAAgOgCgAg3j0QhVAXg7BzQg9B0AeBjQAPAwA3AqQA3ApA6AIQBiAQBGhQQArgyA0h8QAHgHAEgTQAFgWgEgJQAJhchmhBQhHguhDAAQgaAAgaAGg");
	this.shape_5.setTransform(22.2,63.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#824719").s().p("Ah3EDQgZgMgUgWQgRgTgSggQgmhDgIhwQgKiEAxhDQA7hSCHAAQCFAABFBSQA7BGgBCCQgBB8g2BOQgqA9hbAVQggAHgdAAQg9AAg5gcgAhVjxQg2APgcAeQg3A5AFCBQAEB5AyBCQAsA7BgALQBfAMA9gxQBMg8AGiKQAFiAg3hAQgVgagkgSQgngVgsgFQgRgCgPAAQgoAAgmALg");
	this.shape_6.setTransform(-34,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#824719").s().p("AAiFRQhbgRgthBQAHh7gXh7QgShhgph2QBtgcBLhpQALAeAuBgQAtBfAWA8QBMDHgvCIQgWA/hFAAQgQAAgTgDg");
	this.shape_7.setTransform(56.3,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMgNQALgFAJAHQAMAHgGAMQgKAIgGAAQgTgEAJgZg");
	this.shape_8.setTransform(23.5,-24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAQQgRgEAHgZQALgFAKAHQALAHgFALIgJAGQgEADgCAAIgCAAg");
	this.shape_9.setTransform(-6.1,-30.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAKgSAPgEQAQgEAPATQAOASgLAWQgKAVgVAAIgEAAg");
	this.shape_10.setTransform(27.4,-29.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAJgSAPgEQAQgEAPATQAPATgLAWQgKAUgVAAIgEAAg");
	this.shape_11.setTransform(-2.2,-35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#824719").s().p("ABIE7QglgjhcgeQgGgGgTgEQgTgEgHADQhhgLg1AUQhIAbAaBTQkEhsAhkfIAJgrQABgPAGgPIAMgXQghgngEg2QgDgyAWgwQAWgxAngeQArggAxAAQBAAAA4AxQAIAHBOBYQANgTgTgUQgXgXAAgNQBQg2CeAhQChAiAvBTQgEAFggAPQgYALACASQAYgCAugaQAvgbAdgEQBFgJA1AmQAxAjASA8QATA9gUA5QgWA9g9AiQAIBig7BnQg3BghOAsQgjAUg6AHQhCAGggAFQA2hFg3g0gAAWCaQgSAYACAhQACAiAWAUQAYAXAngHQAZgEAQgZQAQgXAAgdQAAgfgSgUQgUgWgkAAQgiAAgUAbgAkDBRQgPALgFAKQgVAkANAhQAMAdAfANQAgANAbgNQAfgNAJgpQAIglgSgbQgVgdgrAAQgUAAgUAPgAERjeQg5AeAMAjQAOAcARATQBCBMA4AeQBZAuAlhZQAGgEADgSQAEgTgEgGQABg9gigqQgkguhCgFIgMAAQgvAAgxAagAnQlxQgpAkgJA3QgGAgAIAcQAIAgAVAMQAtAbB2guQBzgrAEgnQACgeg8gvQg/gyg0gCIgEAAQgvAAgnAjg");
	this.shape_12.setTransform(18.6,-48.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#905D16").s().p("AAIgpQACAQgGAaQgEAcgIANg");
	this.shape_13.setTransform(-8,61.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A06724").s().p("AAFgcQADAJgEAUQgEAVgFAHg");
	this.shape_14.setTransform(44.5,61.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A06724").s().p("Ah0DLQhRgsgQhBQgchvBJhuQBJhuBiAEIAIABQBYAFBAA4QA+A3gDBCQgEBVg9BZQg8BZhDARQgTAFgSAAQgzAAg6ggg");
	this.shape_15.setTransform(21.6,63.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A06724").s().p("AgoDlQhLgPgmg0QgkgygLhlQgNhwAqhBQAagnA1gRQAxgPA/AFQAoADAnASQApATAVAaQA4BFgRCEQgRCMhUAnQgtAUgwAAQgVAAgZgFg");
	this.shape_16.setTransform(-34.3,52);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#621F0B").s().p("AgpD5Qg6gJg3gpQg3gpgPgwQgehkA9h0QA7hzBVgWQBcgYBiA/QBmBCgJBcIgMA4Qg0B8grAyQg7BDhNAAQgQAAgQgCgAioh+QhJBvAcBvQARBBBRAsQBQAsBBgSQBDgRA9hYQA9hZADhWQADhBg+g3Qg/g4hYgFIgIgCIgFAAQhgAAhHBqg");
	this.shape_17.setTransform(21.6,63.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#621F0B").s().p("AgWD5QhfgLgsg7QgyhCgEh5QgGiBA3g5QAdgeA1gPQA3gPA4AGQAsAFAnAVQAjASAWAaQA2BAgFCAQgFCKhMA8QgxAnhJAAQgPAAgUgCgAhdjbQg2ARgZAnQgqBBAMBwQAMBlAkAxQAmA1BKAPQBJAPBDgfQBTgmASiMQARiEg4hGQgVgagpgSQgogSgngDIgegCQguAAgkAMg");
	this.shape_18.setTransform(-34.2,51.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAEgaQAEAIgEASQgEAVgFAGg");
	this.shape_19.setTransform(76,40.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#621F0B").s().p("AAAAEQgWgEgIgGIA9ALIgKACQgJAAgMgDg");
	this.shape_20.setTransform(5,1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A06724").s().p("AgYgDQAHgDASAEQASACAGAGg");
	this.shape_21.setTransform(10.2,-24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgvA8QgVgUgCgiQgCggASgYQATgbAiAAQAjAAAUAXQARAUAAAeQAAAbgPAXQgQAZgaAFQgJACgGAAQgbAAgTgSgAgpATQgJAaATAFQAIAAAKgJQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgzQgNAEgKASQgKASAFAOQAGASAVAEQAZADAMgYQALgWgOgSQgNgQgOAAIgGABg");
	this.shape_22.setTransform(26.4,-28);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZBGQgggNgLgdQgOgfAVgkQAGgKAPgLQATgPAUAAQAqAAAUAdQATAbgIAjQgJApgfANQgOAGgOAAQgNAAgQgGgAgpAUQgIAbASAEQAFAAAFgDIAIgGQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgyQgNAEgKASQgJASAFAOQAGATAVADQAZAEALgYQAMgVgPgTQgNgQgOAAIgGAAg");
	this.shape_23.setTransform(-3.3,-34.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCAAQACgRAFgDIgHApQgEgFAEgQg");
	this.shape_24.setTransform(-34.4,-54.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A06724").s().p("AADgWQAEAGgEAQQgDATgEAEg");
	this.shape_25.setTransform(69.9,-55.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A06724").s().p("AgGBXIgwgvQgdgZgQgQQgfghAHgYQAGgYAxgRQAtgPAjADQA2AEAfAlQAeAigCAsQgBAngUAgQgVAfgYACIgFABQgfAAgdgag");
	this.shape_26.setTransform(56.3,-60);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A06724").s().p("AhpBhQgzg8ArhIQAshKBLAMQAtAHAjAhQAdAdATApQgvAwg4AVQgsASg1AAQgTAAgUgDg");
	this.shape_27.setTransform(-18.1,-77.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#621F0B").s().p("AAJBxQg1gehChMQgNgZgSgUQgMgjA5geQA3geAzAEQBBAFAlAuQAhAqAAA7IgKAvQgYA8gvAAQgYAAgfgRgAg+heQgxAQgHAYQgGAZAeAfQARASAcAYIAwAwQAgAbAigCQAYgCAUggQAVggABgnQABgsgdgiQgggkg2gFIgMAAQgeAAglANg");
	this.shape_28.setTransform(55.7,-60.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#621F0B").s().p("Ah6BuQgWgNgIggQgHgcAFgfQAKg1ApglQAogkAxACQAyACA/AxQA9AwgDAcQgDAmh0ArQhIAdguAAQgaAAgQgJgAh3glQgrBJAzA8QBMAIA8gXQA4gWAvgwQgTgpgdgcQgjgigtgHQgJgCgKAAQg+AAgmBAg");
	this.shape_29.setTransform(-17.5,-77.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AC1OwIg3gMQiFgpgshsQgthvA9iYQADAAABgEIACgHIgUgEQgMgEgEAFQgGAhABAfIgSBWQghBihNAqQhHAnhvgHIgygLQh0gkgviSQgtiKAqiNQAHgYAPgWQALgQAWgZIgtAIQgaAEgVgCQgVgCgSgGQh+grAuihQAmiCCFiDQAjgkBMhCQBHg+AegfQgOhNAKg+IAIgnQAGggAMgOQgXgxgHghQgKgwALguQAOg3AognQAngmA1gPQA2gOA0AOQA3AOApAtQBeg3CpAjQCpAiBCBZQBogwBjBGQAsAfAXAuQAZAwgGAzIgMA3QgMAjgYAeQgQATggAdQABA4gVA9QgSA0geAtQASAvAoBXQApBXARAsQA+CggICVIgLA3QgUAzgkAaQglAcgygEQgZgDgOgFQgugSgYgVQAcBPguB8QgrBzhHBGQgmAkgzARQgpAOgtAAIgOAAgABJGTQhIBBgZB0QgHALgGAbQgFAaACAOQgQA+AfA6QAaA2A6AlQA5AlBBAHQBEAHA0gdQBCglA/hsQBGh4gMhbQgIhDhFg3QhBg0hUgPQgXgEgWAAQhRAAg/A5gAoiE5QgxBDAKCEQAIBzAmBCQASAhARASQAUAWAZANQBWAqBfgWQBbgVAqg9QA2hOABh9QABiCg7hGQhFhSiHgBQiHAAg7BSgAGAgqQApB0ATBjQAWB7gGB7QAtBBBcARQBkASAbhOQAuiIhLjJQgXg8gthdQgthggMgeQhNBphtAcgAj/DfQBZAZAwBGQArBAAFBaQANAGANACIAcAEQAnhTBCgpQBJgtBdANQAuAHA0AbQAVALBCAqQgBkVhKioQg1gFhWAjQhRAkhAgMIg+gNQg9gMg+hCQg/hFg3gPQiRCYhhDjIBngOIAfgBQApAAAiAKgAlmlqQiEByhNBPQiPCTgZB9QgVBsBhAfQBXAaBVgsQAqh0BGhoQA3hRBVhdQgughgeg0QgagsgRg/QAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABgABViuQA6ANACAlQgwAegXAlQgfAyA6AOQAvAOBCgwQBDgygKgyQgGgehIgkQhEghg4gHQgygHgyAHQhDAHgNAcQgMAaAMAoQAKAlAaAgQAbAiAeALQAfAMAagWQATgggWgkQgcgsABgQQANgVAhAAQANAAARADgABMj0IAzAKQBeAfAlAjQA3Azg2BFQAggFBCgFQA6gIAjgUQBOgrA3hhQA7hngIhhQA9gjAWg+QAUg6gTg8QgSg9gxgiQg1gmhFAJQgdADgvAbQguAbgYACQgCgTAYgLQAggOAEgFQgvhTihgiQiggihOA3QAAAMAVAYQATATgNAUQhMhYgIgIQg4gxhAABQgxAAgrAgQgnAegWAwQgWAxADAxQAEA2AhAnIgMAYQgGAOgBAPQgGAEgEARQgDARAEAFQghEhEEBsQgahSBIgcQAhgMAyAAQAdAAAkAEg");

	this.addChild(this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.6,-94.4,153.3,189);


(lib.Tween37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A06724").s().p("AgDAAQAEgaAHgMIgOBMQgCgNAFgZg");
	this.shape.setTransform(-3.4,62.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A06724").s().p("AAXB5Qg4gQAfgyQAWgmAvgcQgCgkg5gNQg3gNgUAeQAAARAcAqQAWAjgTAhQgaAVgigMQgdgLgbghQgaghgLgjQgLgnAMgaQAMgcBEgIQAzgGAzAGQA1AHBEAiQBJAkAGAeQAKAvhEAzQgzAngoAAQgLAAgLgDg");
	this.shape_1.setTransform(7.7,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#621F0B").s().p("AABgBIgRgDQADgFANAEIASAEIgDAFQgBAEgDAAQADgIgNgBg");
	this.shape_2.setTransform(-4.8,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#824719").s().p("AggE6QgNgCgNgFQgFhbgrhAQgwhGhYgZQgvgOg8AGIhmANQBgjgCRibQA3AQBABEQA9BCA9AOQAIAGAXAGQAWAEAJgDQBAAMBRgkQBWglA2AGQBJCpABETQhCgqgUgLQg0gbgvgHQhdgNhJAtQhCApgnBTIgcgEg");
	this.shape_3.setTransform(-1.2,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#824719").s().p("AiqErQhigfAVhsQAah/COiRQBOhPCChyQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAQA/AbAsQAeA0AuAhQhWBdg3BRQhGBogpB0Qg0Acg2AAQggAAgggKg");
	this.shape_4.setTransform(-48.9,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#824719").s().p("AgnEcQhBgHg5gkQg6glgcg2Qgfg7AQg+IAQhMQAbhzBIhBQBQhJBrATQBUAPBBA1QBFA2AIBDQAMBchGB1Qg/BshCAmQgpAXgyAAQgNAAgOgCgAg3j0QhVAXg7BzQg9B0AeBjQAPAwA3AqQA3ApA6AIQBiAQBGhQQArgyA0h8QAHgHAEgTQAFgWgEgJQAJhchmhBQhHguhDAAQgaAAgaAGg");
	this.shape_5.setTransform(22.2,63.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#824719").s().p("Ah3EDQgZgMgUgWQgRgTgSggQgmhDgIhwQgKiEAxhDQA7hSCHAAQCFAABFBSQA7BGgBCCQgBB8g2BOQgqA9hbAVQggAHgdAAQg9AAg5gcgAhVjxQg2APgcAeQg3A5AFCBQAEB5AyBCQAsA7BgALQBfAMA9gxQBMg8AGiKQAFiAg3hAQgVgagkgSQgngVgsgFQgRgCgPAAQgoAAgmALg");
	this.shape_6.setTransform(-34,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#824719").s().p("AAiFRQhbgRgthBQAHh7gXh7QgShhgph2QBtgcBLhpQALAeAuBgQAtBfAWA8QBMDHgvCIQgWA/hFAAQgQAAgTgDg");
	this.shape_7.setTransform(56.3,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMgNQALgFAJAHQAMAHgGAMQgKAIgGAAQgTgEAJgZg");
	this.shape_8.setTransform(23.5,-24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAQQgRgEAHgZQALgFAKAHQALAHgFALIgJAGQgEADgCAAIgCAAg");
	this.shape_9.setTransform(-6.1,-30.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAKgSAPgEQAQgEAPATQAOASgLAWQgKAVgVAAIgEAAg");
	this.shape_10.setTransform(27.4,-29.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAJgSAPgEQAQgEAPATQAPATgLAWQgKAUgVAAIgEAAg");
	this.shape_11.setTransform(-2.2,-35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#824719").s().p("ABIE7QglgjhcgeQgGgGgTgEQgTgEgHADQhhgLg1AUQhIAbAaBTQkEhsAhkfIAJgrQABgPAGgPIAMgXQghgngEg2QgDgyAWgwQAWgxAngeQArggAxAAQBAAAA4AxQAIAHBOBYQANgTgTgUQgXgXAAgNQBQg2CeAhQChAiAvBTQgEAFggAPQgYALACASQAYgCAugaQAvgbAdgEQBFgJA1AmQAxAjASA8QATA9gUA5QgWA9g9AiQAIBig7BnQg3BghOAsQgjAUg6AHQhCAGggAFQA2hFg3g0gAAWCaQgSAYACAhQACAiAWAUQAYAXAngHQAZgEAQgZQAQgXAAgdQAAgfgSgUQgUgWgkAAQgiAAgUAbgAkDBRQgPALgFAKQgVAkANAhQAMAdAfANQAgANAbgNQAfgNAJgpQAIglgSgbQgVgdgrAAQgUAAgUAPgAERjeQg5AeAMAjQAOAcARATQBCBMA4AeQBZAuAlhZQAGgEADgSQAEgTgEgGQABg9gigqQgkguhCgFIgMAAQgvAAgxAagAnQlxQgpAkgJA3QgGAgAIAcQAIAgAVAMQAtAbB2guQBzgrAEgnQACgeg8gvQg/gyg0gCIgEAAQgvAAgnAjg");
	this.shape_12.setTransform(18.6,-48.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#905D16").s().p("AAIgpQACAQgGAaQgEAcgIANg");
	this.shape_13.setTransform(-8,61.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A06724").s().p("AAFgcQADAJgEAUQgEAVgFAHg");
	this.shape_14.setTransform(44.5,61.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A06724").s().p("Ah0DLQhRgsgQhBQgchvBJhuQBJhuBiAEIAIABQBYAFBAA4QA+A3gDBCQgEBVg9BZQg8BZhDARQgTAFgSAAQgzAAg6ggg");
	this.shape_15.setTransform(21.6,63.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A06724").s().p("AgoDlQhLgPgmg0QgkgygLhlQgNhwAqhBQAagnA1gRQAxgPA/AFQAoADAnASQApATAVAaQA4BFgRCEQgRCMhUAnQgtAUgwAAQgVAAgZgFg");
	this.shape_16.setTransform(-34.3,52);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#621F0B").s().p("AgpD5Qg6gJg3gpQg3gpgPgwQgehkA9h0QA7hzBVgWQBcgYBiA/QBmBCgJBcIgMA4Qg0B8grAyQg7BDhNAAQgQAAgQgCgAioh+QhJBvAcBvQARBBBRAsQBQAsBBgSQBDgRA9hYQA9hZADhWQADhBg+g3Qg/g4hYgFIgIgCIgFAAQhgAAhHBqg");
	this.shape_17.setTransform(21.6,63.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#621F0B").s().p("AgWD5QhfgLgsg7QgyhCgEh5QgGiBA3g5QAdgeA1gPQA3gPA4AGQAsAFAnAVQAjASAWAaQA2BAgFCAQgFCKhMA8QgxAnhJAAQgPAAgUgCgAhdjbQg2ARgZAnQgqBBAMBwQAMBlAkAxQAmA1BKAPQBJAPBDgfQBTgmASiMQARiEg4hGQgVgagpgSQgogSgngDIgegCQguAAgkAMg");
	this.shape_18.setTransform(-34.2,51.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAEgaQAEAIgEASQgEAVgFAGg");
	this.shape_19.setTransform(76,40.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#621F0B").s().p("AAAAEQgWgEgIgGIA9ALIgKACQgJAAgMgDg");
	this.shape_20.setTransform(5,1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A06724").s().p("AgYgDQAHgDASAEQASACAGAGg");
	this.shape_21.setTransform(10.2,-24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgvA8QgVgUgCgiQgCggASgYQATgbAiAAQAjAAAUAXQARAUAAAeQAAAbgPAXQgQAZgaAFQgJACgGAAQgbAAgTgSgAgpATQgJAaATAFQAIAAAKgJQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgzQgNAEgKASQgKASAFAOQAGASAVAEQAZADAMgYQALgWgOgSQgNgQgOAAIgGABg");
	this.shape_22.setTransform(26.4,-28);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZBGQgggNgLgdQgOgfAVgkQAGgKAPgLQATgPAUAAQAqAAAUAdQATAbgIAjQgJApgfANQgOAGgOAAQgNAAgQgGgAgpAUQgIAbASAEQAFAAAFgDIAIgGQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgyQgNAEgKASQgJASAFAOQAGATAVADQAZAEALgYQAMgVgPgTQgNgQgOAAIgGAAg");
	this.shape_23.setTransform(-3.3,-34.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCAAQACgRAFgDIgHApQgEgFAEgQg");
	this.shape_24.setTransform(-34.4,-54.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A06724").s().p("AADgWQAEAGgEAQQgDATgEAEg");
	this.shape_25.setTransform(69.9,-55.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A06724").s().p("AgGBXIgwgvQgdgZgQgQQgfghAHgYQAGgYAxgRQAtgPAjADQA2AEAfAlQAeAigCAsQgBAngUAgQgVAfgYACIgFABQgfAAgdgag");
	this.shape_26.setTransform(56.3,-60);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A06724").s().p("AhpBhQgzg8ArhIQAshKBLAMQAtAHAjAhQAdAdATApQgvAwg4AVQgsASg1AAQgTAAgUgDg");
	this.shape_27.setTransform(-18.1,-77.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#621F0B").s().p("AAJBxQg1gehChMQgNgZgSgUQgMgjA5geQA3geAzAEQBBAFAlAuQAhAqAAA7IgKAvQgYA8gvAAQgYAAgfgRgAg+heQgxAQgHAYQgGAZAeAfQARASAcAYIAwAwQAgAbAigCQAYgCAUggQAVggABgnQABgsgdgiQgggkg2gFIgMAAQgeAAglANg");
	this.shape_28.setTransform(55.7,-60.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#621F0B").s().p("Ah6BuQgWgNgIggQgHgcAFgfQAKg1ApglQAogkAxACQAyACA/AxQA9AwgDAcQgDAmh0ArQhIAdguAAQgaAAgQgJgAh3glQgrBJAzA8QBMAIA8gXQA4gWAvgwQgTgpgdgcQgjgigtgHQgJgCgKAAQg+AAgmBAg");
	this.shape_29.setTransform(-17.5,-77.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AC1OwIg3gMQiFgpgshsQgthvA9iYQADAAABgEIACgHIgUgEQgMgEgEAFQgGAhABAfIgSBWQghBihNAqQhHAnhvgHIgygLQh0gkgviSQgtiKAqiNQAHgYAPgWQALgQAWgZIgtAIQgaAEgVgCQgVgCgSgGQh+grAuihQAmiCCFiDQAjgkBMhCQBHg+AegfQgOhNAKg+IAIgnQAGggAMgOQgXgxgHghQgKgwALguQAOg3AognQAngmA1gPQA2gOA0AOQA3AOApAtQBeg3CpAjQCpAiBCBZQBogwBjBGQAsAfAXAuQAZAwgGAzIgMA3QgMAjgYAeQgQATggAdQABA4gVA9QgSA0geAtQASAvAoBXQApBXARAsQA+CggICVIgLA3QgUAzgkAaQglAcgygEQgZgDgOgFQgugSgYgVQAcBPguB8QgrBzhHBGQgmAkgzARQgpAOgtAAIgOAAgABJGTQhIBBgZB0QgHALgGAbQgFAaACAOQgQA+AfA6QAaA2A6AlQA5AlBBAHQBEAHA0gdQBCglA/hsQBGh4gMhbQgIhDhFg3QhBg0hUgPQgXgEgWAAQhRAAg/A5gAoiE5QgxBDAKCEQAIBzAmBCQASAhARASQAUAWAZANQBWAqBfgWQBbgVAqg9QA2hOABh9QABiCg7hGQhFhSiHgBQiHAAg7BSgAGAgqQApB0ATBjQAWB7gGB7QAtBBBcARQBkASAbhOQAuiIhLjJQgXg8gthdQgthggMgeQhNBphtAcgAj/DfQBZAZAwBGQArBAAFBaQANAGANACIAcAEQAnhTBCgpQBJgtBdANQAuAHA0AbQAVALBCAqQgBkVhKioQg1gFhWAjQhRAkhAgMIg+gNQg9gMg+hCQg/hFg3gPQiRCYhhDjIBngOIAfgBQApAAAiAKgAlmlqQiEByhNBPQiPCTgZB9QgVBsBhAfQBXAaBVgsQAqh0BGhoQA3hRBVhdQgughgeg0QgagsgRg/QAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABgABViuQA6ANACAlQgwAegXAlQgfAyA6AOQAvAOBCgwQBDgygKgyQgGgehIgkQhEghg4gHQgygHgyAHQhDAHgNAcQgMAaAMAoQAKAlAaAgQAbAiAeALQAfAMAagWQATgggWgkQgcgsABgQQANgVAhAAQANAAARADgABMj0IAzAKQBeAfAlAjQA3Azg2BFQAggFBCgFQA6gIAjgUQBOgrA3hhQA7hngIhhQA9gjAWg+QAUg6gTg8QgSg9gxgiQg1gmhFAJQgdADgvAbQguAbgYACQgCgTAYgLQAggOAEgFQgvhTihgiQiggihOA3QAAAMAVAYQATATgNAUQhMhYgIgIQg4gxhAABQgxAAgrAgQgnAegWAwQgWAxADAxQAEA2AhAnIgMAYQgGAOgBAPQgGAEgEARQgDARAEAFQghEhEEBsQgahSBIgcQAhgMAyAAQAdAAAkAEg");

	this.addChild(this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.6,-94.4,153.3,189);


(lib.Tween36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A06724").s().p("AgDAAQAEgaAHgMIgOBMQgCgNAFgZg");
	this.shape.setTransform(-3.4,62.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A06724").s().p("AAXB5Qg4gQAfgyQAWgmAvgcQgCgkg5gNQg3gNgUAeQAAARAcAqQAWAjgTAhQgaAVgigMQgdgLgbghQgaghgLgjQgLgnAMgaQAMgcBEgIQAzgGAzAGQA1AHBEAiQBJAkAGAeQAKAvhEAzQgzAngoAAQgLAAgLgDg");
	this.shape_1.setTransform(7.7,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#621F0B").s().p("AABgBIgRgDQADgFANAEIASAEIgDAFQgBAEgDAAQADgIgNgBg");
	this.shape_2.setTransform(-4.8,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#824719").s().p("AggE6QgNgCgNgFQgFhbgrhAQgwhGhYgZQgvgOg8AGIhmANQBgjgCRibQA3AQBABEQA9BCA9AOQAIAGAXAGQAWAEAJgDQBAAMBRgkQBWglA2AGQBJCpABETQhCgqgUgLQg0gbgvgHQhdgNhJAtQhCApgnBTIgcgEg");
	this.shape_3.setTransform(-1.2,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#824719").s().p("AiqErQhigfAVhsQAah/COiRQBOhPCChyQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAQA/AbAsQAeA0AuAhQhWBdg3BRQhGBogpB0Qg0Acg2AAQggAAgggKg");
	this.shape_4.setTransform(-48.9,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#824719").s().p("AgnEcQhBgHg5gkQg6glgcg2Qgfg7AQg+IAQhMQAbhzBIhBQBQhJBrATQBUAPBBA1QBFA2AIBDQAMBchGB1Qg/BshCAmQgpAXgyAAQgNAAgOgCgAg3j0QhVAXg7BzQg9B0AeBjQAPAwA3AqQA3ApA6AIQBiAQBGhQQArgyA0h8QAHgHAEgTQAFgWgEgJQAJhchmhBQhHguhDAAQgaAAgaAGg");
	this.shape_5.setTransform(22.2,63.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#824719").s().p("Ah3EDQgZgMgUgWQgRgTgSggQgmhDgIhwQgKiEAxhDQA7hSCHAAQCFAABFBSQA7BGgBCCQgBB8g2BOQgqA9hbAVQggAHgdAAQg9AAg5gcgAhVjxQg2APgcAeQg3A5AFCBQAEB5AyBCQAsA7BgALQBfAMA9gxQBMg8AGiKQAFiAg3hAQgVgagkgSQgngVgsgFQgRgCgPAAQgoAAgmALg");
	this.shape_6.setTransform(-34,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#824719").s().p("AAiFRQhbgRgthBQAHh7gXh7QgShhgph2QBtgcBLhpQALAeAuBgQAtBfAWA8QBMDHgvCIQgWA/hFAAQgQAAgTgDg");
	this.shape_7.setTransform(56.3,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMgNQALgFAJAHQAMAHgGAMQgKAIgGAAQgTgEAJgZg");
	this.shape_8.setTransform(23.5,-24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAQQgRgEAHgZQALgFAKAHQALAHgFALIgJAGQgEADgCAAIgCAAg");
	this.shape_9.setTransform(-6.1,-30.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAKgSAPgEQAQgEAPATQAOASgLAWQgKAVgVAAIgEAAg");
	this.shape_10.setTransform(27.4,-29.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAJgSAPgEQAQgEAPATQAPATgLAWQgKAUgVAAIgEAAg");
	this.shape_11.setTransform(-2.2,-35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#824719").s().p("ABIE7QglgjhcgeQgGgGgTgEQgTgEgHADQhhgLg1AUQhIAbAaBTQkEhsAhkfIAJgrQABgPAGgPIAMgXQghgngEg2QgDgyAWgwQAWgxAngeQArggAxAAQBAAAA4AxQAIAHBOBYQANgTgTgUQgXgXAAgNQBQg2CeAhQChAiAvBTQgEAFggAPQgYALACASQAYgCAugaQAvgbAdgEQBFgJA1AmQAxAjASA8QATA9gUA5QgWA9g9AiQAIBig7BnQg3BghOAsQgjAUg6AHQhCAGggAFQA2hFg3g0gAAWCaQgSAYACAhQACAiAWAUQAYAXAngHQAZgEAQgZQAQgXAAgdQAAgfgSgUQgUgWgkAAQgiAAgUAbgAkDBRQgPALgFAKQgVAkANAhQAMAdAfANQAgANAbgNQAfgNAJgpQAIglgSgbQgVgdgrAAQgUAAgUAPgAERjeQg5AeAMAjQAOAcARATQBCBMA4AeQBZAuAlhZQAGgEADgSQAEgTgEgGQABg9gigqQgkguhCgFIgMAAQgvAAgxAagAnQlxQgpAkgJA3QgGAgAIAcQAIAgAVAMQAtAbB2guQBzgrAEgnQACgeg8gvQg/gyg0gCIgEAAQgvAAgnAjg");
	this.shape_12.setTransform(18.6,-48.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#905D16").s().p("AAIgpQACAQgGAaQgEAcgIANg");
	this.shape_13.setTransform(-8,61.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A06724").s().p("AAFgcQADAJgEAUQgEAVgFAHg");
	this.shape_14.setTransform(44.5,61.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A06724").s().p("Ah0DLQhRgsgQhBQgchvBJhuQBJhuBiAEIAIABQBYAFBAA4QA+A3gDBCQgEBVg9BZQg8BZhDARQgTAFgSAAQgzAAg6ggg");
	this.shape_15.setTransform(21.6,63.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A06724").s().p("AgoDlQhLgPgmg0QgkgygLhlQgNhwAqhBQAagnA1gRQAxgPA/AFQAoADAnASQApATAVAaQA4BFgRCEQgRCMhUAnQgtAUgwAAQgVAAgZgFg");
	this.shape_16.setTransform(-34.3,52);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#621F0B").s().p("AgpD5Qg6gJg3gpQg3gpgPgwQgehkA9h0QA7hzBVgWQBcgYBiA/QBmBCgJBcIgMA4Qg0B8grAyQg7BDhNAAQgQAAgQgCgAioh+QhJBvAcBvQARBBBRAsQBQAsBBgSQBDgRA9hYQA9hZADhWQADhBg+g3Qg/g4hYgFIgIgCIgFAAQhgAAhHBqg");
	this.shape_17.setTransform(21.6,63.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#621F0B").s().p("AgWD5QhfgLgsg7QgyhCgEh5QgGiBA3g5QAdgeA1gPQA3gPA4AGQAsAFAnAVQAjASAWAaQA2BAgFCAQgFCKhMA8QgxAnhJAAQgPAAgUgCgAhdjbQg2ARgZAnQgqBBAMBwQAMBlAkAxQAmA1BKAPQBJAPBDgfQBTgmASiMQARiEg4hGQgVgagpgSQgogSgngDIgegCQguAAgkAMg");
	this.shape_18.setTransform(-34.2,51.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAEgaQAEAIgEASQgEAVgFAGg");
	this.shape_19.setTransform(76,40.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#621F0B").s().p("AAAAEQgWgEgIgGIA9ALIgKACQgJAAgMgDg");
	this.shape_20.setTransform(5,1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A06724").s().p("AgYgDQAHgDASAEQASACAGAGg");
	this.shape_21.setTransform(10.2,-24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgvA8QgVgUgCgiQgCggASgYQATgbAiAAQAjAAAUAXQARAUAAAeQAAAbgPAXQgQAZgaAFQgJACgGAAQgbAAgTgSgAgpATQgJAaATAFQAIAAAKgJQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgzQgNAEgKASQgKASAFAOQAGASAVAEQAZADAMgYQALgWgOgSQgNgQgOAAIgGABg");
	this.shape_22.setTransform(26.4,-28);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZBGQgggNgLgdQgOgfAVgkQAGgKAPgLQATgPAUAAQAqAAAUAdQATAbgIAjQgJApgfANQgOAGgOAAQgNAAgQgGgAgpAUQgIAbASAEQAFAAAFgDIAIgGQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgyQgNAEgKASQgJASAFAOQAGATAVADQAZAEALgYQAMgVgPgTQgNgQgOAAIgGAAg");
	this.shape_23.setTransform(-3.3,-34.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCAAQACgRAFgDIgHApQgEgFAEgQg");
	this.shape_24.setTransform(-34.4,-54.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A06724").s().p("AADgWQAEAGgEAQQgDATgEAEg");
	this.shape_25.setTransform(69.9,-55.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A06724").s().p("AgGBXIgwgvQgdgZgQgQQgfghAHgYQAGgYAxgRQAtgPAjADQA2AEAfAlQAeAigCAsQgBAngUAgQgVAfgYACIgFABQgfAAgdgag");
	this.shape_26.setTransform(56.3,-60);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A06724").s().p("AhpBhQgzg8ArhIQAshKBLAMQAtAHAjAhQAdAdATApQgvAwg4AVQgsASg1AAQgTAAgUgDg");
	this.shape_27.setTransform(-18.1,-77.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#621F0B").s().p("AAJBxQg1gehChMQgNgZgSgUQgMgjA5geQA3geAzAEQBBAFAlAuQAhAqAAA7IgKAvQgYA8gvAAQgYAAgfgRgAg+heQgxAQgHAYQgGAZAeAfQARASAcAYIAwAwQAgAbAigCQAYgCAUggQAVggABgnQABgsgdgiQgggkg2gFIgMAAQgeAAglANg");
	this.shape_28.setTransform(55.7,-60.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#621F0B").s().p("Ah6BuQgWgNgIggQgHgcAFgfQAKg1ApglQAogkAxACQAyACA/AxQA9AwgDAcQgDAmh0ArQhIAdguAAQgaAAgQgJgAh3glQgrBJAzA8QBMAIA8gXQA4gWAvgwQgTgpgdgcQgjgigtgHQgJgCgKAAQg+AAgmBAg");
	this.shape_29.setTransform(-17.5,-77.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AC1OwIg3gMQiFgpgshsQgthvA9iYQADAAABgEIACgHIgUgEQgMgEgEAFQgGAhABAfIgSBWQghBihNAqQhHAnhvgHIgygLQh0gkgviSQgtiKAqiNQAHgYAPgWQALgQAWgZIgtAIQgaAEgVgCQgVgCgSgGQh+grAuihQAmiCCFiDQAjgkBMhCQBHg+AegfQgOhNAKg+IAIgnQAGggAMgOQgXgxgHghQgKgwALguQAOg3AognQAngmA1gPQA2gOA0AOQA3AOApAtQBeg3CpAjQCpAiBCBZQBogwBjBGQAsAfAXAuQAZAwgGAzIgMA3QgMAjgYAeQgQATggAdQABA4gVA9QgSA0geAtQASAvAoBXQApBXARAsQA+CggICVIgLA3QgUAzgkAaQglAcgygEQgZgDgOgFQgugSgYgVQAcBPguB8QgrBzhHBGQgmAkgzARQgpAOgtAAIgOAAgABJGTQhIBBgZB0QgHALgGAbQgFAaACAOQgQA+AfA6QAaA2A6AlQA5AlBBAHQBEAHA0gdQBCglA/hsQBGh4gMhbQgIhDhFg3QhBg0hUgPQgXgEgWAAQhRAAg/A5gAoiE5QgxBDAKCEQAIBzAmBCQASAhARASQAUAWAZANQBWAqBfgWQBbgVAqg9QA2hOABh9QABiCg7hGQhFhSiHgBQiHAAg7BSgAGAgqQApB0ATBjQAWB7gGB7QAtBBBcARQBkASAbhOQAuiIhLjJQgXg8gthdQgthggMgeQhNBphtAcgAj/DfQBZAZAwBGQArBAAFBaQANAGANACIAcAEQAnhTBCgpQBJgtBdANQAuAHA0AbQAVALBCAqQgBkVhKioQg1gFhWAjQhRAkhAgMIg+gNQg9gMg+hCQg/hFg3gPQiRCYhhDjIBngOIAfgBQApAAAiAKgAlmlqQiEByhNBPQiPCTgZB9QgVBsBhAfQBXAaBVgsQAqh0BGhoQA3hRBVhdQgughgeg0QgagsgRg/QAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABgABViuQA6ANACAlQgwAegXAlQgfAyA6AOQAvAOBCgwQBDgygKgyQgGgehIgkQhEghg4gHQgygHgyAHQhDAHgNAcQgMAaAMAoQAKAlAaAgQAbAiAeALQAfAMAagWQATgggWgkQgcgsABgQQANgVAhAAQANAAARADgABMj0IAzAKQBeAfAlAjQA3Azg2BFQAggFBCgFQA6gIAjgUQBOgrA3hhQA7hngIhhQA9gjAWg+QAUg6gTg8QgSg9gxgiQg1gmhFAJQgdADgvAbQguAbgYACQgCgTAYgLQAggOAEgFQgvhTihgiQiggihOA3QAAAMAVAYQATATgNAUQhMhYgIgIQg4gxhAABQgxAAgrAgQgnAegWAwQgWAxADAxQAEA2AhAnIgMAYQgGAOgBAPQgGAEgEARQgDARAEAFQghEhEEBsQgahSBIgcQAhgMAyAAQAdAAAkAEg");

	this.addChild(this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.6,-94.4,153.3,189);


(lib.Tween35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A06724").s().p("AgDAAQAEgaAHgMIgOBMQgCgNAFgZg");
	this.shape.setTransform(-3.4,62.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A06724").s().p("AAXB5Qg4gQAfgyQAWgmAvgcQgCgkg5gNQg3gNgUAeQAAARAcAqQAWAjgTAhQgaAVgigMQgdgLgbghQgaghgLgjQgLgnAMgaQAMgcBEgIQAzgGAzAGQA1AHBEAiQBJAkAGAeQAKAvhEAzQgzAngoAAQgLAAgLgDg");
	this.shape_1.setTransform(7.7,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#621F0B").s().p("AABgBIgRgDQADgFANAEIASAEIgDAFQgBAEgDAAQADgIgNgBg");
	this.shape_2.setTransform(-4.8,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#824719").s().p("AggE6QgNgCgNgFQgFhbgrhAQgwhGhYgZQgvgOg8AGIhmANQBgjgCRibQA3AQBABEQA9BCA9AOQAIAGAXAGQAWAEAJgDQBAAMBRgkQBWglA2AGQBJCpABETQhCgqgUgLQg0gbgvgHQhdgNhJAtQhCApgnBTIgcgEg");
	this.shape_3.setTransform(-1.2,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#824719").s().p("AiqErQhigfAVhsQAah/COiRQBOhPCChyQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAQA/AbAsQAeA0AuAhQhWBdg3BRQhGBogpB0Qg0Acg2AAQggAAgggKg");
	this.shape_4.setTransform(-48.9,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#824719").s().p("AgnEcQhBgHg5gkQg6glgcg2Qgfg7AQg+IAQhMQAbhzBIhBQBQhJBrATQBUAPBBA1QBFA2AIBDQAMBchGB1Qg/BshCAmQgpAXgyAAQgNAAgOgCgAg3j0QhVAXg7BzQg9B0AeBjQAPAwA3AqQA3ApA6AIQBiAQBGhQQArgyA0h8QAHgHAEgTQAFgWgEgJQAJhchmhBQhHguhDAAQgaAAgaAGg");
	this.shape_5.setTransform(22.2,63.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#824719").s().p("Ah3EDQgZgMgUgWQgRgTgSggQgmhDgIhwQgKiEAxhDQA7hSCHAAQCFAABFBSQA7BGgBCCQgBB8g2BOQgqA9hbAVQggAHgdAAQg9AAg5gcgAhVjxQg2APgcAeQg3A5AFCBQAEB5AyBCQAsA7BgALQBfAMA9gxQBMg8AGiKQAFiAg3hAQgVgagkgSQgngVgsgFQgRgCgPAAQgoAAgmALg");
	this.shape_6.setTransform(-34,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#824719").s().p("AAiFRQhbgRgthBQAHh7gXh7QgShhgph2QBtgcBLhpQALAeAuBgQAtBfAWA8QBMDHgvCIQgWA/hFAAQgQAAgTgDg");
	this.shape_7.setTransform(56.3,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMgNQALgFAJAHQAMAHgGAMQgKAIgGAAQgTgEAJgZg");
	this.shape_8.setTransform(23.5,-24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAQQgRgEAHgZQALgFAKAHQALAHgFALIgJAGQgEADgCAAIgCAAg");
	this.shape_9.setTransform(-6.1,-30.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAKgSAPgEQAQgEAPATQAOASgLAWQgKAVgVAAIgEAAg");
	this.shape_10.setTransform(27.4,-29.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAJgSAPgEQAQgEAPATQAPATgLAWQgKAUgVAAIgEAAg");
	this.shape_11.setTransform(-2.2,-35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#824719").s().p("ABIE7QglgjhcgeQgGgGgTgEQgTgEgHADQhhgLg1AUQhIAbAaBTQkEhsAhkfIAJgrQABgPAGgPIAMgXQghgngEg2QgDgyAWgwQAWgxAngeQArggAxAAQBAAAA4AxQAIAHBOBYQANgTgTgUQgXgXAAgNQBQg2CeAhQChAiAvBTQgEAFggAPQgYALACASQAYgCAugaQAvgbAdgEQBFgJA1AmQAxAjASA8QATA9gUA5QgWA9g9AiQAIBig7BnQg3BghOAsQgjAUg6AHQhCAGggAFQA2hFg3g0gAAWCaQgSAYACAhQACAiAWAUQAYAXAngHQAZgEAQgZQAQgXAAgdQAAgfgSgUQgUgWgkAAQgiAAgUAbgAkDBRQgPALgFAKQgVAkANAhQAMAdAfANQAgANAbgNQAfgNAJgpQAIglgSgbQgVgdgrAAQgUAAgUAPgAERjeQg5AeAMAjQAOAcARATQBCBMA4AeQBZAuAlhZQAGgEADgSQAEgTgEgGQABg9gigqQgkguhCgFIgMAAQgvAAgxAagAnQlxQgpAkgJA3QgGAgAIAcQAIAgAVAMQAtAbB2guQBzgrAEgnQACgeg8gvQg/gyg0gCIgEAAQgvAAgnAjg");
	this.shape_12.setTransform(18.6,-48.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#905D16").s().p("AAIgpQACAQgGAaQgEAcgIANg");
	this.shape_13.setTransform(-8,61.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A06724").s().p("AAFgcQADAJgEAUQgEAVgFAHg");
	this.shape_14.setTransform(44.5,61.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A06724").s().p("Ah0DLQhRgsgQhBQgchvBJhuQBJhuBiAEIAIABQBYAFBAA4QA+A3gDBCQgEBVg9BZQg8BZhDARQgTAFgSAAQgzAAg6ggg");
	this.shape_15.setTransform(21.6,63.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A06724").s().p("AgoDlQhLgPgmg0QgkgygLhlQgNhwAqhBQAagnA1gRQAxgPA/AFQAoADAnASQApATAVAaQA4BFgRCEQgRCMhUAnQgtAUgwAAQgVAAgZgFg");
	this.shape_16.setTransform(-34.3,52);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#621F0B").s().p("AgpD5Qg6gJg3gpQg3gpgPgwQgehkA9h0QA7hzBVgWQBcgYBiA/QBmBCgJBcIgMA4Qg0B8grAyQg7BDhNAAQgQAAgQgCgAioh+QhJBvAcBvQARBBBRAsQBQAsBBgSQBDgRA9hYQA9hZADhWQADhBg+g3Qg/g4hYgFIgIgCIgFAAQhgAAhHBqg");
	this.shape_17.setTransform(21.6,63.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#621F0B").s().p("AgWD5QhfgLgsg7QgyhCgEh5QgGiBA3g5QAdgeA1gPQA3gPA4AGQAsAFAnAVQAjASAWAaQA2BAgFCAQgFCKhMA8QgxAnhJAAQgPAAgUgCgAhdjbQg2ARgZAnQgqBBAMBwQAMBlAkAxQAmA1BKAPQBJAPBDgfQBTgmASiMQARiEg4hGQgVgagpgSQgogSgngDIgegCQguAAgkAMg");
	this.shape_18.setTransform(-34.2,51.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAEgaQAEAIgEASQgEAVgFAGg");
	this.shape_19.setTransform(76,40.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#621F0B").s().p("AAAAEQgWgEgIgGIA9ALIgKACQgJAAgMgDg");
	this.shape_20.setTransform(5,1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A06724").s().p("AgYgDQAHgDASAEQASACAGAGg");
	this.shape_21.setTransform(10.2,-24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgvA8QgVgUgCgiQgCggASgYQATgbAiAAQAjAAAUAXQARAUAAAeQAAAbgPAXQgQAZgaAFQgJACgGAAQgbAAgTgSgAgpATQgJAaATAFQAIAAAKgJQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgzQgNAEgKASQgKASAFAOQAGASAVAEQAZADAMgYQALgWgOgSQgNgQgOAAIgGABg");
	this.shape_22.setTransform(26.4,-28);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZBGQgggNgLgdQgOgfAVgkQAGgKAPgLQATgPAUAAQAqAAAUAdQATAbgIAjQgJApgfANQgOAGgOAAQgNAAgQgGgAgpAUQgIAbASAEQAFAAAFgDIAIgGQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgyQgNAEgKASQgJASAFAOQAGATAVADQAZAEALgYQAMgVgPgTQgNgQgOAAIgGAAg");
	this.shape_23.setTransform(-3.3,-34.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCAAQACgRAFgDIgHApQgEgFAEgQg");
	this.shape_24.setTransform(-34.4,-54.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A06724").s().p("AADgWQAEAGgEAQQgDATgEAEg");
	this.shape_25.setTransform(69.9,-55.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A06724").s().p("AgGBXIgwgvQgdgZgQgQQgfghAHgYQAGgYAxgRQAtgPAjADQA2AEAfAlQAeAigCAsQgBAngUAgQgVAfgYACIgFABQgfAAgdgag");
	this.shape_26.setTransform(56.3,-60);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A06724").s().p("AhpBhQgzg8ArhIQAshKBLAMQAtAHAjAhQAdAdATApQgvAwg4AVQgsASg1AAQgTAAgUgDg");
	this.shape_27.setTransform(-18.1,-77.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#621F0B").s().p("AAJBxQg1gehChMQgNgZgSgUQgMgjA5geQA3geAzAEQBBAFAlAuQAhAqAAA7IgKAvQgYA8gvAAQgYAAgfgRgAg+heQgxAQgHAYQgGAZAeAfQARASAcAYIAwAwQAgAbAigCQAYgCAUggQAVggABgnQABgsgdgiQgggkg2gFIgMAAQgeAAglANg");
	this.shape_28.setTransform(55.7,-60.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#621F0B").s().p("Ah6BuQgWgNgIggQgHgcAFgfQAKg1ApglQAogkAxACQAyACA/AxQA9AwgDAcQgDAmh0ArQhIAdguAAQgaAAgQgJgAh3glQgrBJAzA8QBMAIA8gXQA4gWAvgwQgTgpgdgcQgjgigtgHQgJgCgKAAQg+AAgmBAg");
	this.shape_29.setTransform(-17.5,-77.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AC1OwIg3gMQiFgpgshsQgthvA9iYQADAAABgEIACgHIgUgEQgMgEgEAFQgGAhABAfIgSBWQghBihNAqQhHAnhvgHIgygLQh0gkgviSQgtiKAqiNQAHgYAPgWQALgQAWgZIgtAIQgaAEgVgCQgVgCgSgGQh+grAuihQAmiCCFiDQAjgkBMhCQBHg+AegfQgOhNAKg+IAIgnQAGggAMgOQgXgxgHghQgKgwALguQAOg3AognQAngmA1gPQA2gOA0AOQA3AOApAtQBeg3CpAjQCpAiBCBZQBogwBjBGQAsAfAXAuQAZAwgGAzIgMA3QgMAjgYAeQgQATggAdQABA4gVA9QgSA0geAtQASAvAoBXQApBXARAsQA+CggICVIgLA3QgUAzgkAaQglAcgygEQgZgDgOgFQgugSgYgVQAcBPguB8QgrBzhHBGQgmAkgzARQgpAOgtAAIgOAAgABJGTQhIBBgZB0QgHALgGAbQgFAaACAOQgQA+AfA6QAaA2A6AlQA5AlBBAHQBEAHA0gdQBCglA/hsQBGh4gMhbQgIhDhFg3QhBg0hUgPQgXgEgWAAQhRAAg/A5gAoiE5QgxBDAKCEQAIBzAmBCQASAhARASQAUAWAZANQBWAqBfgWQBbgVAqg9QA2hOABh9QABiCg7hGQhFhSiHgBQiHAAg7BSgAGAgqQApB0ATBjQAWB7gGB7QAtBBBcARQBkASAbhOQAuiIhLjJQgXg8gthdQgthggMgeQhNBphtAcgAj/DfQBZAZAwBGQArBAAFBaQANAGANACIAcAEQAnhTBCgpQBJgtBdANQAuAHA0AbQAVALBCAqQgBkVhKioQg1gFhWAjQhRAkhAgMIg+gNQg9gMg+hCQg/hFg3gPQiRCYhhDjIBngOIAfgBQApAAAiAKgAlmlqQiEByhNBPQiPCTgZB9QgVBsBhAfQBXAaBVgsQAqh0BGhoQA3hRBVhdQgughgeg0QgagsgRg/QAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABgABViuQA6ANACAlQgwAegXAlQgfAyA6AOQAvAOBCgwQBDgygKgyQgGgehIgkQhEghg4gHQgygHgyAHQhDAHgNAcQgMAaAMAoQAKAlAaAgQAbAiAeALQAfAMAagWQATgggWgkQgcgsABgQQANgVAhAAQANAAARADgABMj0IAzAKQBeAfAlAjQA3Azg2BFQAggFBCgFQA6gIAjgUQBOgrA3hhQA7hngIhhQA9gjAWg+QAUg6gTg8QgSg9gxgiQg1gmhFAJQgdADgvAbQguAbgYACQgCgTAYgLQAggOAEgFQgvhTihgiQiggihOA3QAAAMAVAYQATATgNAUQhMhYgIgIQg4gxhAABQgxAAgrAgQgnAegWAwQgWAxADAxQAEA2AhAnIgMAYQgGAOgBAPQgGAEgEARQgDARAEAFQghEhEEBsQgahSBIgcQAhgMAyAAQAdAAAkAEg");

	this.addChild(this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.6,-94.4,153.3,189);


(lib.Tween34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A06724").s().p("AgDAAQAEgaAHgMIgOBMQgCgNAFgZg");
	this.shape.setTransform(-3.4,62.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A06724").s().p("AAXB5Qg4gQAfgyQAWgmAvgcQgCgkg5gNQg3gNgUAeQAAARAcAqQAWAjgTAhQgaAVgigMQgdgLgbghQgaghgLgjQgLgnAMgaQAMgcBEgIQAzgGAzAGQA1AHBEAiQBJAkAGAeQAKAvhEAzQgzAngoAAQgLAAgLgDg");
	this.shape_1.setTransform(7.7,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#621F0B").s().p("AABgBIgRgDQADgFANAEIASAEIgDAFQgBAEgDAAQADgIgNgBg");
	this.shape_2.setTransform(-4.8,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#824719").s().p("AggE6QgNgCgNgFQgFhbgrhAQgwhGhYgZQgvgOg8AGIhmANQBgjgCRibQA3AQBABEQA9BCA9AOQAIAGAXAGQAWAEAJgDQBAAMBRgkQBWglA2AGQBJCpABETQhCgqgUgLQg0gbgvgHQhdgNhJAtQhCApgnBTIgcgEg");
	this.shape_3.setTransform(-1.2,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#824719").s().p("AiqErQhigfAVhsQAah/COiRQBOhPCChyQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAQA/AbAsQAeA0AuAhQhWBdg3BRQhGBogpB0Qg0Acg2AAQggAAgggKg");
	this.shape_4.setTransform(-48.9,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#824719").s().p("AgnEcQhBgHg5gkQg6glgcg2Qgfg7AQg+IAQhMQAbhzBIhBQBQhJBrATQBUAPBBA1QBFA2AIBDQAMBchGB1Qg/BshCAmQgpAXgyAAQgNAAgOgCgAg3j0QhVAXg7BzQg9B0AeBjQAPAwA3AqQA3ApA6AIQBiAQBGhQQArgyA0h8QAHgHAEgTQAFgWgEgJQAJhchmhBQhHguhDAAQgaAAgaAGg");
	this.shape_5.setTransform(22.2,63.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#824719").s().p("Ah3EDQgZgMgUgWQgRgTgSggQgmhDgIhwQgKiEAxhDQA7hSCHAAQCFAABFBSQA7BGgBCCQgBB8g2BOQgqA9hbAVQggAHgdAAQg9AAg5gcgAhVjxQg2APgcAeQg3A5AFCBQAEB5AyBCQAsA7BgALQBfAMA9gxQBMg8AGiKQAFiAg3hAQgVgagkgSQgngVgsgFQgRgCgPAAQgoAAgmALg");
	this.shape_6.setTransform(-34,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#824719").s().p("AAiFRQhbgRgthBQAHh7gXh7QgShhgph2QBtgcBLhpQALAeAuBgQAtBfAWA8QBMDHgvCIQgWA/hFAAQgQAAgTgDg");
	this.shape_7.setTransform(56.3,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMgNQALgFAJAHQAMAHgGAMQgKAIgGAAQgTgEAJgZg");
	this.shape_8.setTransform(23.5,-24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAQQgRgEAHgZQALgFAKAHQALAHgFALIgJAGQgEADgCAAIgCAAg");
	this.shape_9.setTransform(-6.1,-30.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAKgSAPgEQAQgEAPATQAOASgLAWQgKAVgVAAIgEAAg");
	this.shape_10.setTransform(27.4,-29.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAJgSAPgEQAQgEAPATQAPATgLAWQgKAUgVAAIgEAAg");
	this.shape_11.setTransform(-2.2,-35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#824719").s().p("ABIE7QglgjhcgeQgGgGgTgEQgTgEgHADQhhgLg1AUQhIAbAaBTQkEhsAhkfIAJgrQABgPAGgPIAMgXQghgngEg2QgDgyAWgwQAWgxAngeQArggAxAAQBAAAA4AxQAIAHBOBYQANgTgTgUQgXgXAAgNQBQg2CeAhQChAiAvBTQgEAFggAPQgYALACASQAYgCAugaQAvgbAdgEQBFgJA1AmQAxAjASA8QATA9gUA5QgWA9g9AiQAIBig7BnQg3BghOAsQgjAUg6AHQhCAGggAFQA2hFg3g0gAAWCaQgSAYACAhQACAiAWAUQAYAXAngHQAZgEAQgZQAQgXAAgdQAAgfgSgUQgUgWgkAAQgiAAgUAbgAkDBRQgPALgFAKQgVAkANAhQAMAdAfANQAgANAbgNQAfgNAJgpQAIglgSgbQgVgdgrAAQgUAAgUAPgAERjeQg5AeAMAjQAOAcARATQBCBMA4AeQBZAuAlhZQAGgEADgSQAEgTgEgGQABg9gigqQgkguhCgFIgMAAQgvAAgxAagAnQlxQgpAkgJA3QgGAgAIAcQAIAgAVAMQAtAbB2guQBzgrAEgnQACgeg8gvQg/gyg0gCIgEAAQgvAAgnAjg");
	this.shape_12.setTransform(18.6,-48.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#905D16").s().p("AAIgpQACAQgGAaQgEAcgIANg");
	this.shape_13.setTransform(-8,61.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A06724").s().p("AAFgcQADAJgEAUQgEAVgFAHg");
	this.shape_14.setTransform(44.5,61.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A06724").s().p("Ah0DLQhRgsgQhBQgchvBJhuQBJhuBiAEIAIABQBYAFBAA4QA+A3gDBCQgEBVg9BZQg8BZhDARQgTAFgSAAQgzAAg6ggg");
	this.shape_15.setTransform(21.6,63.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A06724").s().p("AgoDlQhLgPgmg0QgkgygLhlQgNhwAqhBQAagnA1gRQAxgPA/AFQAoADAnASQApATAVAaQA4BFgRCEQgRCMhUAnQgtAUgwAAQgVAAgZgFg");
	this.shape_16.setTransform(-34.3,52);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#621F0B").s().p("AgpD5Qg6gJg3gpQg3gpgPgwQgehkA9h0QA7hzBVgWQBcgYBiA/QBmBCgJBcIgMA4Qg0B8grAyQg7BDhNAAQgQAAgQgCgAioh+QhJBvAcBvQARBBBRAsQBQAsBBgSQBDgRA9hYQA9hZADhWQADhBg+g3Qg/g4hYgFIgIgCIgFAAQhgAAhHBqg");
	this.shape_17.setTransform(21.6,63.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#621F0B").s().p("AgWD5QhfgLgsg7QgyhCgEh5QgGiBA3g5QAdgeA1gPQA3gPA4AGQAsAFAnAVQAjASAWAaQA2BAgFCAQgFCKhMA8QgxAnhJAAQgPAAgUgCgAhdjbQg2ARgZAnQgqBBAMBwQAMBlAkAxQAmA1BKAPQBJAPBDgfQBTgmASiMQARiEg4hGQgVgagpgSQgogSgngDIgegCQguAAgkAMg");
	this.shape_18.setTransform(-34.2,51.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAEgaQAEAIgEASQgEAVgFAGg");
	this.shape_19.setTransform(76,40.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#621F0B").s().p("AAAAEQgWgEgIgGIA9ALIgKACQgJAAgMgDg");
	this.shape_20.setTransform(5,1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A06724").s().p("AgYgDQAHgDASAEQASACAGAGg");
	this.shape_21.setTransform(10.2,-24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgvA8QgVgUgCgiQgCggASgYQATgbAiAAQAjAAAUAXQARAUAAAeQAAAbgPAXQgQAZgaAFQgJACgGAAQgbAAgTgSgAgpATQgJAaATAFQAIAAAKgJQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgzQgNAEgKASQgKASAFAOQAGASAVAEQAZADAMgYQALgWgOgSQgNgQgOAAIgGABg");
	this.shape_22.setTransform(26.4,-28);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZBGQgggNgLgdQgOgfAVgkQAGgKAPgLQATgPAUAAQAqAAAUAdQATAbgIAjQgJApgfANQgOAGgOAAQgNAAgQgGgAgpAUQgIAbASAEQAFAAAFgDIAIgGQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgyQgNAEgKASQgJASAFAOQAGATAVADQAZAEALgYQAMgVgPgTQgNgQgOAAIgGAAg");
	this.shape_23.setTransform(-3.3,-34.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCAAQACgRAFgDIgHApQgEgFAEgQg");
	this.shape_24.setTransform(-34.4,-54.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A06724").s().p("AADgWQAEAGgEAQQgDATgEAEg");
	this.shape_25.setTransform(69.9,-55.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A06724").s().p("AgGBXIgwgvQgdgZgQgQQgfghAHgYQAGgYAxgRQAtgPAjADQA2AEAfAlQAeAigCAsQgBAngUAgQgVAfgYACIgFABQgfAAgdgag");
	this.shape_26.setTransform(56.3,-60);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A06724").s().p("AhpBhQgzg8ArhIQAshKBLAMQAtAHAjAhQAdAdATApQgvAwg4AVQgsASg1AAQgTAAgUgDg");
	this.shape_27.setTransform(-18.1,-77.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#621F0B").s().p("AAJBxQg1gehChMQgNgZgSgUQgMgjA5geQA3geAzAEQBBAFAlAuQAhAqAAA7IgKAvQgYA8gvAAQgYAAgfgRgAg+heQgxAQgHAYQgGAZAeAfQARASAcAYIAwAwQAgAbAigCQAYgCAUggQAVggABgnQABgsgdgiQgggkg2gFIgMAAQgeAAglANg");
	this.shape_28.setTransform(55.7,-60.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#621F0B").s().p("Ah6BuQgWgNgIggQgHgcAFgfQAKg1ApglQAogkAxACQAyACA/AxQA9AwgDAcQgDAmh0ArQhIAdguAAQgaAAgQgJgAh3glQgrBJAzA8QBMAIA8gXQA4gWAvgwQgTgpgdgcQgjgigtgHQgJgCgKAAQg+AAgmBAg");
	this.shape_29.setTransform(-17.5,-77.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AC1OwIg3gMQiFgpgshsQgthvA9iYQADAAABgEIACgHIgUgEQgMgEgEAFQgGAhABAfIgSBWQghBihNAqQhHAnhvgHIgygLQh0gkgviSQgtiKAqiNQAHgYAPgWQALgQAWgZIgtAIQgaAEgVgCQgVgCgSgGQh+grAuihQAmiCCFiDQAjgkBMhCQBHg+AegfQgOhNAKg+IAIgnQAGggAMgOQgXgxgHghQgKgwALguQAOg3AognQAngmA1gPQA2gOA0AOQA3AOApAtQBeg3CpAjQCpAiBCBZQBogwBjBGQAsAfAXAuQAZAwgGAzIgMA3QgMAjgYAeQgQATggAdQABA4gVA9QgSA0geAtQASAvAoBXQApBXARAsQA+CggICVIgLA3QgUAzgkAaQglAcgygEQgZgDgOgFQgugSgYgVQAcBPguB8QgrBzhHBGQgmAkgzARQgpAOgtAAIgOAAgABJGTQhIBBgZB0QgHALgGAbQgFAaACAOQgQA+AfA6QAaA2A6AlQA5AlBBAHQBEAHA0gdQBCglA/hsQBGh4gMhbQgIhDhFg3QhBg0hUgPQgXgEgWAAQhRAAg/A5gAoiE5QgxBDAKCEQAIBzAmBCQASAhARASQAUAWAZANQBWAqBfgWQBbgVAqg9QA2hOABh9QABiCg7hGQhFhSiHgBQiHAAg7BSgAGAgqQApB0ATBjQAWB7gGB7QAtBBBcARQBkASAbhOQAuiIhLjJQgXg8gthdQgthggMgeQhNBphtAcgAj/DfQBZAZAwBGQArBAAFBaQANAGANACIAcAEQAnhTBCgpQBJgtBdANQAuAHA0AbQAVALBCAqQgBkVhKioQg1gFhWAjQhRAkhAgMIg+gNQg9gMg+hCQg/hFg3gPQiRCYhhDjIBngOIAfgBQApAAAiAKgAlmlqQiEByhNBPQiPCTgZB9QgVBsBhAfQBXAaBVgsQAqh0BGhoQA3hRBVhdQgughgeg0QgagsgRg/QAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABgABViuQA6ANACAlQgwAegXAlQgfAyA6AOQAvAOBCgwQBDgygKgyQgGgehIgkQhEghg4gHQgygHgyAHQhDAHgNAcQgMAaAMAoQAKAlAaAgQAbAiAeALQAfAMAagWQATgggWgkQgcgsABgQQANgVAhAAQANAAARADgABMj0IAzAKQBeAfAlAjQA3Azg2BFQAggFBCgFQA6gIAjgUQBOgrA3hhQA7hngIhhQA9gjAWg+QAUg6gTg8QgSg9gxgiQg1gmhFAJQgdADgvAbQguAbgYACQgCgTAYgLQAggOAEgFQgvhTihgiQiggihOA3QAAAMAVAYQATATgNAUQhMhYgIgIQg4gxhAABQgxAAgrAgQgnAegWAwQgWAxADAxQAEA2AhAnIgMAYQgGAOgBAPQgGAEgEARQgDARAEAFQghEhEEBsQgahSBIgcQAhgMAyAAQAdAAAkAEg");

	this.addChild(this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.6,-94.4,153.3,189);


(lib.Tween33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A06724").s().p("AgDAAQAEgaAHgMIgOBMQgCgNAFgZg");
	this.shape.setTransform(-3.4,62.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A06724").s().p("AAXB5Qg4gQAfgyQAWgmAvgcQgCgkg5gNQg3gNgUAeQAAARAcAqQAWAjgTAhQgaAVgigMQgdgLgbghQgaghgLgjQgLgnAMgaQAMgcBEgIQAzgGAzAGQA1AHBEAiQBJAkAGAeQAKAvhEAzQgzAngoAAQgLAAgLgDg");
	this.shape_1.setTransform(7.7,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#621F0B").s().p("AABgBIgRgDQADgFANAEIASAEIgDAFQgBAEgDAAQADgIgNgBg");
	this.shape_2.setTransform(-4.8,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#824719").s().p("AggE6QgNgCgNgFQgFhbgrhAQgwhGhYgZQgvgOg8AGIhmANQBgjgCRibQA3AQBABEQA9BCA9AOQAIAGAXAGQAWAEAJgDQBAAMBRgkQBWglA2AGQBJCpABETQhCgqgUgLQg0gbgvgHQhdgNhJAtQhCApgnBTIgcgEg");
	this.shape_3.setTransform(-1.2,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#824719").s().p("AiqErQhigfAVhsQAah/COiRQBOhPCChyQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQAQA/AbAsQAeA0AuAhQhWBdg3BRQhGBogpB0Qg0Acg2AAQggAAgggKg");
	this.shape_4.setTransform(-48.9,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#824719").s().p("AgnEcQhBgHg5gkQg6glgcg2Qgfg7AQg+IAQhMQAbhzBIhBQBQhJBrATQBUAPBBA1QBFA2AIBDQAMBchGB1Qg/BshCAmQgpAXgyAAQgNAAgOgCgAg3j0QhVAXg7BzQg9B0AeBjQAPAwA3AqQA3ApA6AIQBiAQBGhQQArgyA0h8QAHgHAEgTQAFgWgEgJQAJhchmhBQhHguhDAAQgaAAgaAGg");
	this.shape_5.setTransform(22.2,63.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#824719").s().p("Ah3EDQgZgMgUgWQgRgTgSggQgmhDgIhwQgKiEAxhDQA7hSCHAAQCFAABFBSQA7BGgBCCQgBB8g2BOQgqA9hbAVQggAHgdAAQg9AAg5gcgAhVjxQg2APgcAeQg3A5AFCBQAEB5AyBCQAsA7BgALQBfAMA9gxQBMg8AGiKQAFiAg3hAQgVgagkgSQgngVgsgFQgRgCgPAAQgoAAgmALg");
	this.shape_6.setTransform(-34,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#824719").s().p("AAiFRQhbgRgthBQAHh7gXh7QgShhgph2QBtgcBLhpQALAeAuBgQAtBfAWA8QBMDHgvCIQgWA/hFAAQgQAAgTgDg");
	this.shape_7.setTransform(56.3,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMgNQALgFAJAHQAMAHgGAMQgKAIgGAAQgTgEAJgZg");
	this.shape_8.setTransform(23.5,-24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAQQgRgEAHgZQALgFAKAHQALAHgFALIgJAGQgEADgCAAIgCAAg");
	this.shape_9.setTransform(-6.1,-30.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAKgSAPgEQAQgEAPATQAOASgLAWQgKAVgVAAIgEAAg");
	this.shape_10.setTransform(27.4,-29.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAnQgXgEgGgSQgFgQAKgQQAJgSAPgEQAQgEAPATQAPATgLAWQgKAUgVAAIgEAAg");
	this.shape_11.setTransform(-2.2,-35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#824719").s().p("ABIE7QglgjhcgeQgGgGgTgEQgTgEgHADQhhgLg1AUQhIAbAaBTQkEhsAhkfIAJgrQABgPAGgPIAMgXQghgngEg2QgDgyAWgwQAWgxAngeQArggAxAAQBAAAA4AxQAIAHBOBYQANgTgTgUQgXgXAAgNQBQg2CeAhQChAiAvBTQgEAFggAPQgYALACASQAYgCAugaQAvgbAdgEQBFgJA1AmQAxAjASA8QATA9gUA5QgWA9g9AiQAIBig7BnQg3BghOAsQgjAUg6AHQhCAGggAFQA2hFg3g0gAAWCaQgSAYACAhQACAiAWAUQAYAXAngHQAZgEAQgZQAQgXAAgdQAAgfgSgUQgUgWgkAAQgiAAgUAbgAkDBRQgPALgFAKQgVAkANAhQAMAdAfANQAgANAbgNQAfgNAJgpQAIglgSgbQgVgdgrAAQgUAAgUAPgAERjeQg5AeAMAjQAOAcARATQBCBMA4AeQBZAuAlhZQAGgEADgSQAEgTgEgGQABg9gigqQgkguhCgFIgMAAQgvAAgxAagAnQlxQgpAkgJA3QgGAgAIAcQAIAgAVAMQAtAbB2guQBzgrAEgnQACgeg8gvQg/gyg0gCIgEAAQgvAAgnAjg");
	this.shape_12.setTransform(18.6,-48.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#905D16").s().p("AAIgpQACAQgGAaQgEAcgIANg");
	this.shape_13.setTransform(-8,61.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A06724").s().p("AAFgcQADAJgEAUQgEAVgFAHg");
	this.shape_14.setTransform(44.5,61.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A06724").s().p("Ah0DLQhRgsgQhBQgchvBJhuQBJhuBiAEIAIABQBYAFBAA4QA+A3gDBCQgEBVg9BZQg8BZhDARQgTAFgSAAQgzAAg6ggg");
	this.shape_15.setTransform(21.6,63.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A06724").s().p("AgoDlQhLgPgmg0QgkgygLhlQgNhwAqhBQAagnA1gRQAxgPA/AFQAoADAnASQApATAVAaQA4BFgRCEQgRCMhUAnQgtAUgwAAQgVAAgZgFg");
	this.shape_16.setTransform(-34.3,52);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#621F0B").s().p("AgpD5Qg6gJg3gpQg3gpgPgwQgehkA9h0QA7hzBVgWQBcgYBiA/QBmBCgJBcIgMA4Qg0B8grAyQg7BDhNAAQgQAAgQgCgAioh+QhJBvAcBvQARBBBRAsQBQAsBBgSQBDgRA9hYQA9hZADhWQADhBg+g3Qg/g4hYgFIgIgCIgFAAQhgAAhHBqg");
	this.shape_17.setTransform(21.6,63.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#621F0B").s().p("AgWD5QhfgLgsg7QgyhCgEh5QgGiBA3g5QAdgeA1gPQA3gPA4AGQAsAFAnAVQAjASAWAaQA2BAgFCAQgFCKhMA8QgxAnhJAAQgPAAgUgCgAhdjbQg2ARgZAnQgqBBAMBwQAMBlAkAxQAmA1BKAPQBJAPBDgfQBTgmASiMQARiEg4hGQgVgagpgSQgogSgngDIgegCQguAAgkAMg");
	this.shape_18.setTransform(-34.2,51.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAEgaQAEAIgEASQgEAVgFAGg");
	this.shape_19.setTransform(76,40.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#621F0B").s().p("AAAAEQgWgEgIgGIA9ALIgKACQgJAAgMgDg");
	this.shape_20.setTransform(5,1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A06724").s().p("AgYgDQAHgDASAEQASACAGAGg");
	this.shape_21.setTransform(10.2,-24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgvA8QgVgUgCgiQgCggASgYQATgbAiAAQAjAAAUAXQARAUAAAeQAAAbgPAXQgQAZgaAFQgJACgGAAQgbAAgTgSgAgpATQgJAaATAFQAIAAAKgJQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgzQgNAEgKASQgKASAFAOQAGASAVAEQAZADAMgYQALgWgOgSQgNgQgOAAIgGABg");
	this.shape_22.setTransform(26.4,-28);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZBGQgggNgLgdQgOgfAVgkQAGgKAPgLQATgPAUAAQAqAAAUAdQATAbgIAjQgJApgfANQgOAGgOAAQgNAAgQgGgAgpAUQgIAbASAEQAFAAAFgDIAIgGQAGgNgMgHQgGgEgHAAQgEAAgFACgAAFgyQgNAEgKASQgJASAFAOQAGATAVADQAZAEALgYQAMgVgPgTQgNgQgOAAIgGAAg");
	this.shape_23.setTransform(-3.3,-34.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCAAQACgRAFgDIgHApQgEgFAEgQg");
	this.shape_24.setTransform(-34.4,-54.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A06724").s().p("AADgWQAEAGgEAQQgDATgEAEg");
	this.shape_25.setTransform(69.9,-55.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A06724").s().p("AgGBXIgwgvQgdgZgQgQQgfghAHgYQAGgYAxgRQAtgPAjADQA2AEAfAlQAeAigCAsQgBAngUAgQgVAfgYACIgFABQgfAAgdgag");
	this.shape_26.setTransform(56.3,-60);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A06724").s().p("AhpBhQgzg8ArhIQAshKBLAMQAtAHAjAhQAdAdATApQgvAwg4AVQgsASg1AAQgTAAgUgDg");
	this.shape_27.setTransform(-18.1,-77.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#621F0B").s().p("AAJBxQg1gehChMQgNgZgSgUQgMgjA5geQA3geAzAEQBBAFAlAuQAhAqAAA7IgKAvQgYA8gvAAQgYAAgfgRgAg+heQgxAQgHAYQgGAZAeAfQARASAcAYIAwAwQAgAbAigCQAYgCAUggQAVggABgnQABgsgdgiQgggkg2gFIgMAAQgeAAglANg");
	this.shape_28.setTransform(55.7,-60.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#621F0B").s().p("Ah6BuQgWgNgIggQgHgcAFgfQAKg1ApglQAogkAxACQAyACA/AxQA9AwgDAcQgDAmh0ArQhIAdguAAQgaAAgQgJgAh3glQgrBJAzA8QBMAIA8gXQA4gWAvgwQgTgpgdgcQgjgigtgHQgJgCgKAAQg+AAgmBAg");
	this.shape_29.setTransform(-17.5,-77.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AC1OwIg3gMQiFgpgshsQgthvA9iYQADAAABgEIACgHIgUgEQgMgEgEAFQgGAhABAfIgSBWQghBihNAqQhHAnhvgHIgygLQh0gkgviSQgtiKAqiNQAHgYAPgWQALgQAWgZIgtAIQgaAEgVgCQgVgCgSgGQh+grAuihQAmiCCFiDQAjgkBMhCQBHg+AegfQgOhNAKg+IAIgnQAGggAMgOQgXgxgHghQgKgwALguQAOg3AognQAngmA1gPQA2gOA0AOQA3AOApAtQBeg3CpAjQCpAiBCBZQBogwBjBGQAsAfAXAuQAZAwgGAzIgMA3QgMAjgYAeQgQATggAdQABA4gVA9QgSA0geAtQASAvAoBXQApBXARAsQA+CggICVIgLA3QgUAzgkAaQglAcgygEQgZgDgOgFQgugSgYgVQAcBPguB8QgrBzhHBGQgmAkgzARQgpAOgtAAIgOAAgABJGTQhIBBgZB0QgHALgGAbQgFAaACAOQgQA+AfA6QAaA2A6AlQA5AlBBAHQBEAHA0gdQBCglA/hsQBGh4gMhbQgIhDhFg3QhBg0hUgPQgXgEgWAAQhRAAg/A5gAoiE5QgxBDAKCEQAIBzAmBCQASAhARASQAUAWAZANQBWAqBfgWQBbgVAqg9QA2hOABh9QABiCg7hGQhFhSiHgBQiHAAg7BSgAGAgqQApB0ATBjQAWB7gGB7QAtBBBcARQBkASAbhOQAuiIhLjJQgXg8gthdQgthggMgeQhNBphtAcgAj/DfQBZAZAwBGQArBAAFBaQANAGANACIAcAEQAnhTBCgpQBJgtBdANQAuAHA0AbQAVALBCAqQgBkVhKioQg1gFhWAjQhRAkhAgMIg+gNQg9gMg+hCQg/hFg3gPQiRCYhhDjIBngOIAfgBQApAAAiAKgAlmlqQiEByhNBPQiPCTgZB9QgVBsBhAfQBXAaBVgsQAqh0BGhoQA3hRBVhdQgughgeg0QgagsgRg/QAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABgABViuQA6ANACAlQgwAegXAlQgfAyA6AOQAvAOBCgwQBDgygKgyQgGgehIgkQhEghg4gHQgygHgyAHQhDAHgNAcQgMAaAMAoQAKAlAaAgQAbAiAeALQAfAMAagWQATgggWgkQgcgsABgQQANgVAhAAQANAAARADgABMj0IAzAKQBeAfAlAjQA3Azg2BFQAggFBCgFQA6gIAjgUQBOgrA3hhQA7hngIhhQA9gjAWg+QAUg6gTg8QgSg9gxgiQg1gmhFAJQgdADgvAbQguAbgYACQgCgTAYgLQAggOAEgFQgvhTihgiQiggihOA3QAAAMAVAYQATATgNAUQhMhYgIgIQg4gxhAABQgxAAgrAgQgnAegWAwQgWAxADAxQAEA2AhAnIgMAYQgGAOgBAPQgGAEgEARQgDARAEAFQghEhEEBsQgahSBIgcQAhgMAyAAQAdAAAkAEg");

	this.addChild(this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.6,-94.4,153.3,189);


(lib.Tween29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AoCl3IAKBQQARBhAhBaQBsEdDqBjQCNA9CSAZQBKANAsABIBOgIQBUgQAjgnQATgVAFgfQAGglgSgeQgzhRjKANQiMAKiPiMQiSiOgli3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("ACvFqQiSgZiNg9QjqhjhskdQghhagRhhIgKhQIEpAuQAlC3CSCOQCPCMCMgKQDKgNAzBRQASAegGAlQgFAfgTAVQgjAnhUAQIhOAIQgsgBhKgNg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.1,-39.1,106.2,78.4);


(lib.Tween28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AoCl3IAKBQQARBhAhBaQBsEdDqBjQCNA9CSAZQBKANAsABIBOgIQBUgQAjgnQATgVAFgfQAGglgSgeQgzhRjKANQiMAKiPiMQiSiOgli3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("ACvFqQiSgZiNg9QjqhjhskdQghhagRhhIgKhQIEpAuQAlC3CSCOQCPCMCMgKQDKgNAzBRQASAegGAlQgFAfgTAVQgjAnhUAQIhOAIQgsgBhKgNg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.1,-39.1,106.2,78.4);


(lib.Tween27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AoCl3IAKBQQARBhAhBaQBsEdDqBjQCNA9CSAZQBKANAsABIBOgIQBUgQAjgnQATgVAFgfQAGglgSgeQgzhRjKANQiMAKiPiMQiSiOgli3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("ACvFqQiSgZiNg9QjqhjhskdQghhagRhhIgKhQIEpAuQAlC3CSCOQCPCMCMgKQDKgNAzBRQASAegGAlQgFAfgTAVQgjAnhUAQIhOAIQgsgBhKgNg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.1,-39.1,106.2,78.4);


(lib.Tween26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AoCl3IAKBQQARBhAhBaQBsEdDqBjQCNA9CSAZQBKANAsABIBOgIQBUgQAjgnQATgVAFgfQAGglgSgeQgzhRjKANQiMAKiPiMQiSiOgli3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("ACvFqQiSgZiNg9QjqhjhskdQghhagRhhIgKhQIEpAuQAlC3CSCOQCPCMCMgKQDKgNAzBRQASAegGAlQgFAfgTAVQgjAnhUAQIhOAIQgsgBhKgNg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.1,-39.1,106.2,78.4);


(lib.Tween21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AH/lKIgJBKQgPBcggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJQhVgQgjgnQgTgUgFggQgGglASgdQAzhSDKAOQCIAJCcisQCaiqAli8");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("AltF5QhVgQgjgnQgTgUgFggQgGgkASgeQAzhRDKANQCIAJCcisQCaiqAli8IEQA4IgJBKQgPBbggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-40.1,105.4,80.4);


(lib.Tween20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AH/lKIgJBKQgPBcggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJQhVgQgjgnQgTgUgFggQgGglASgdQAzhSDKAOQCIAJCcisQCaiqAli8");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("AltF5QhVgQgjgnQgTgUgFggQgGgkASgeQAzhRDKANQCIAJCcisQCaiqAli8IEQA4IgJBKQgPBbggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-40.1,105.4,80.4);


(lib.Tween19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AH/lKIgJBKQgPBcggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJQhVgQgjgnQgTgUgFggQgGglASgdQAzhSDKAOQCIAJCcisQCaiqAli8");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("AltF5QhVgQgjgnQgTgUgFggQgGgkASgeQAzhRDKANQCIAJCcisQCaiqAli8IEQA4IgJBKQgPBbggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-40.1,105.4,80.4);


(lib.Tween18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AH/lKIgJBKQgPBcggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJQhVgQgjgnQgTgUgFggQgGglASgdQAzhSDKAOQCIAJCcisQCaiqAli8");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("AltF5QhVgQgjgnQgTgUgFggQgGgkASgeQAzhRDKANQCIAJCcisQCaiqAli8IEQA4IgJBKQgPBbggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-40.1,105.4,80.4);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AH/lKIgJBKQgPBcggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJQhVgQgjgnQgTgUgFggQgGglASgdQAzhSDKAOQCIAJCcisQCaiqAli8");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("AltF5QhVgQgjgnQgTgUgFggQgGgkASgeQAzhRDKANQCIAJCcisQCaiqAli8IEQA4IgJBKQgPBbggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-40.1,105.4,80.4);


(lib.Tween16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AH/lKIgJBKQgPBcggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJQhVgQgjgnQgTgUgFggQgGglASgdQAzhSDKAOQCIAJCcisQCaiqAli8");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("AltF5QhVgQgjgnQgTgUgFggQgGgkASgeQAzhRDKANQCIAJCcisQCaiqAli8IEQA4IgJBKQgPBbggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-40.1,105.4,80.4);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AH/lKIgJBKQgPBcggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJQhVgQgjgnQgTgUgFggQgGglASgdQAzhSDKAOQCIAJCcisQCaiqAli8");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("AltF5QhVgQgjgnQgTgUgFggQgGgkASgeQAzhRDKANQCIAJCcisQCaiqAli8IEQA4IgJBKQgPBbggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-40.1,105.4,80.4);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AH/lKIgJBKQgPBcggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJQhVgQgjgnQgTgUgFggQgGglASgdQAzhSDKAOQCIAJCcisQCaiqAli8");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("AltF5QhVgQgjgnQgTgUgFggQgGgkASgeQAzhRDKANQCIAJCcisQCaiqAli8IEQA4IgJBKQgPBbggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-40.1,105.4,80.4);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,0,4).p("AH/lKIgJBKQgPBcggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJQhVgQgjgnQgTgUgFggQgGglASgdQAzhSDKAOQCIAJCcisQCaiqAli8");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECA26E").s().p("AltF5QhVgQgjgnQgTgUgFggQgGgkASgeQAzhRDKANQCIAJCcisQCaiqAli8IEQA4IgJBKQgPBbggBUQhoELjqBjQiNA8iSAaIh2AOQgjAAgqgJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-40.1,105.4,80.4);


(lib.Path_25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F5").s().p("AhLBMQgfggAAgsQAAgrAfggQAggfArAAQAsAAAgAfQAfAgAAArQAAAsgfAgQggAfgsAAQgrAAgggfg");
	this.shape.setTransform(10.8,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.5,21.5);


(lib.Path_23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F5").s().p("AhLBMQgfggAAgsQAAgrAfggQAggfArAAQAsAAAgAfQAfAgAAArQAAAsgfAgQggAfgsAAQgrAAgggfg");
	this.shape.setTransform(10.8,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.5,21.5);


(lib.Path_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAbQAhhjAvguQAHAkgKAwQgUBfhTA6QAJgpARgzg");
	this.shape.setTransform(5.5,12);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,24);


(lib.Path_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6AvQAhiIBOhQQAaAtgEBBQgGCAiQBlQABg2AQhFg");
	this.shape.setTransform(7.6,17.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.3,34.1);


(lib.Path_4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAoBSQg4gIggggQgkgjgRg5QgJgegCgXQBiAxBIBTQAlAqARAgQgNgOg7gHg");
	this.shape.setTransform(11.3,10.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.6,20.8);


(lib.Path_4_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgphWQAIAXATAYQAbAjAkAKQgTgCgUAFQgxAOgJBAg");
	this.shape.setTransform(5.2,8.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0,10,17.5);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgTgFgUACQAkgKAagjQAUgYAIgXIAHCtQgJhAgxgOg");
	this.shape.setTransform(7.8,8.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.9,0,10,17.5);


(lib.Path_2_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiyAxQAAgpAdgbQAdgdApAAICfAAQApAAAdAdQAdAbAAApg");
	this.shape.setTransform(18,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,10);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiyAxQAAgpAdgbQAdgdApAAICfAAQApAAAdAdQAdAbAAApg");
	this.shape.setTransform(18,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,10);


(lib.Path_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F5").s().p("AAAEJQgoAAgdggQgdgfAAgsIAAk7QAAgsAdggQAdgfAoAAIBjAAQgnABgdAeQgdAgAAAsIAAE7QAAAsAdAfQAdAfAnABg");
	this.shape.setTransform(10,26.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,53);


(lib.Path_1_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgTgFgUACQAkgKAagjQAUgYAIgXIAHCtQgJhAgxgOg");
	this.shape.setTransform(7.8,8.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.9,0,10,17.5);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgphWQAIAXATAYQAbAjAkAKQgTgCgUAFQgxAOgJBAg");
	this.shape.setTransform(5.2,8.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0,10,17.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;