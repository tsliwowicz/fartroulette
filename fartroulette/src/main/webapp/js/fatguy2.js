(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.fatguy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzvYyMAAAgsBIKPAAIAAh4IDmAAIAAiKICOAAIAAhSIAMAAIAIgEQAVgHAXgDQBHgHAwAyIgIgDIAAA4IAhAAIAACKIDfAAIAAB4IQtAAMAAAAsBgAhH4KIAIAAIgKgEIACAEgAjd4jIAHAAIACgCIgJACg");
	mask.setTransform(109.5,286.3);

	// Layer 1
	this.instance = new lib.spit();
	this.instance.setTransform(95.5,125.4,0.7,0.7,0,0,0,4.7,7.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).to({x:70.8,y:158},9,cjs.Ease.get(-1)).to({x:15.1,y:376.3},12).to({alpha:0},9).wait(24));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAAIgDgCIARAAIAAACIACAAIAAAAIgCAAQgDADgFAAQgDAAgDgDg");
	this.shape.setTransform(95.4,128.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIAAQgDAAgBgDIAWAAIAAACIADAAIgBABIgBAAQgFAEgGAAQgEAAgEgEg");
	this.shape_1.setTransform(95.4,128.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAAQgEgBgBgDIAbAAIAAADIAEAAIgBABIgCAAQgFAFgIAAQgFAAgFgFg");
	this.shape_2.setTransform(95.4,129.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAAQgEgBgCgEIAhAAIAAAEIAEAAIgBABIgDAAQgGAGgJAAQgGAAgGgGg");
	this.shape_3.setTransform(95.4,130.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAAQgFgBgCgFIAmAAIAAAEIAFAAIgCACIgCAAQgIAHgKAAQgHAAgHgHg");
	this.shape_4.setTransform(95.4,131.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAAQgFgCgDgFIArAAIAAAFIAGAAIgCACIgDAAQgIAIgMAAQgIAAgIgIg");
	this.shape_5.setTransform(95.4,131.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAAQgFgCgCgGIAvAAIAAAFIAGAAIgBACIgDABQgKAJgMAAQgKAAgKgJg");
	this.shape_6.setTransform(95.4,132.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAAQgGgDgCgGIA1AAIAAAGIAGAAIgBACIgEABQgKAKgOAAQgLAAgLgKg");
	this.shape_7.setTransform(95.4,133.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXABQgGgEgDgHIA6AAIAAAHIAHAAIgCACIgEACQgLAKgPAAQgMAAgMgKg");
	this.shape_8.setTransform(95.4,134.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZABQgHgEgDgIIA/AAIAAAHIAIAAIgCADIgEACQgNALgQAAQgNAAgNgLg");
	this.shape_9.setTransform(95.4,134.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbABQgIgFgDgIIBFAAIAAAIIAIAAIgCACIgFADQgNAMgSAAQgPAAgNgMg");
	this.shape_10.setTransform(95.4,135.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdABQgIgFgEgJIBKAAIAAAIIAJAAIgDADIgFADQgOANgTAAQgQAAgOgNg");
	this.shape_11.setTransform(95.4,136.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfABQgJgGgDgJIBOAAIAAAJIAJAAIgCADIgFADQgPAOgUAAQgSAAgPgOg");
	this.shape_12.setTransform(95.4,137.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghABQgKgGgDgKIBTAAIAAAKIAKAAIgCADIgGADQgQAPgVAAQgTAAgQgPg");
	this.shape_13.setTransform(95.4,137.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjABQgKgGgEgLIBZAAIAAAKIAKAAIgDADIgFAEQgRAQgXAAQgUAAgRgQg");
	this.shape_14.setTransform(95.4,138.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglABQgLgHgEgLIBeAAIAAALIALAAIgDADIgGAEQgSARgYAAQgVAAgSgRg");
	this.shape_15.setTransform(95.4,139.4);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:130.4}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6,p:{y:132.6}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9,p:{y:134.9}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12,p:{y:137.1}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_12,p:{y:129.5}}]},1).to({state:[{t:this.shape_9,p:{y:129.2}}]},1).to({state:[{t:this.shape_6,p:{y:128.8}}]},1).to({state:[{t:this.shape_3,p:{y:128.5}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},28).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(29).to({_off:false},0).wait(1).to({y:138},0).wait(1).to({y:136.7},0).wait(1).to({y:135.3},0).wait(1).to({y:133.9},0).wait(1).to({y:132.6},0).wait(1).to({y:131.2},0).wait(1).to({x:95.3,y:129.9},0).to({_off:true},1).wait(53));

	// eyes copy
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjHAPQgJgJAAgLQAAgHACgGIA5AAQACAGAAAHQAAALgJAJQgJAKgNAAQgLAAgKgKgACdAJQgJgJAAgLQAAgHACgGIA4AAQADAGAAAHQAAALgJAJQgJAKgNAAQgMAAgJgKg");
	this.shape_16.setTransform(98.4,85.7);

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(98.4,85.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.setTransform(98.4,95.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_1}]},7).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({_off:true,y:95.2},15).to({_off:false,y:85.7},7).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},15).to({_off:true,y:85.7},7).wait(54));

	// Layer 4
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DA8E5F").s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgGAGgHAAQgHAAgFgGg");
	this.shape_17.setTransform(137.8,114.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DA8E5F").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgJAAgGgHg");
	this.shape_18.setTransform(135.8,106.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DA8E5F").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
	this.shape_19.setTransform(72.9,122.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DA8E5F").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgIAIABQAJgBAHAIQAHAGAAAJQAAAJgHAHQgHAIgJgBQgIABgHgIg");
	this.shape_20.setTransform(56.6,115.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DA8E5F").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_21.setTransform(63,108.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhKAYQgqgGgBgSQAAgTAGgFQADgDADABIAMANQAXANA3gGQA1gFAuAQQAXAJALAKQgdgQgwAFQgRABgnAKQgNADgPAAQgOAAgRgDg");
	this.shape_22.setTransform(118.9,73.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAPAYQgngKgRgBQgugFgeAPIAigSQAtgQA1AFQA4AGAWgNQAMgGAAgHIAGACQAHAFgBATQAAASgrAGQgQADgOAAQgQAAgNgDg");
	this.shape_23.setTransform(78.2,73.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhkgOIDJAOQgZAKgnAEIgaABQg7AAg0gdg");
	this.shape_24.setTransform(116.5,83.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AglAOIg/gOIDJgOQg0Adg8AAIgagBg");
	this.shape_25.setTransform(79.8,83.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghAoQgPgMgDgTQAFANALAIQAMAIAPAAQARAAANgNQAOgOAAgRQAAgSgMgNQgMgMgQgCIAEgBQAVAAAQAQQAPAQAAAUQAAAVgPAQQgQAQgVAAQgSAAgPgNg");
	this.shape_26.setTransform(115.9,104.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAQgQAUAAIAFABQgQACgMAMQgMANAAASQAAARAOAOQANANARAAQAPAAAMgIQALgIAFgNQgDATgPAMQgPANgTAAQgUAAgQgQg");
	this.shape_27.setTransform(82.7,104.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhLAAIgdgaQAnAUAKAEQAhALAjADQAjADAggTQAQgKAJgMQgEANgOANQgcAZgxABIgFABQgrAAglgbg");
	this.shape_28.setTransform(97.6,142.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWAAQhHgRgnAPIAQgHQAVgIAXgCQBFgIAxAwQgegMgmgJg");
	this.shape_29.setTransform(95.3,129.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhMALQgjgMgUgWQAYASAiAJQAkALAlAAQAnAAAjgLQAigJAYgSQgUAWgjAMQgjANgqAAQgoAAgkgNg");
	this.shape_30.setTransform(99.6,106.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3,0,0,4).p("AHbioQgmgjgIhnQgEh2gHguQgJg4jDgPQhlgIhxAEQhwgEhlAIQjDAPgJA4QgHAugEB2QgIBngmAjQgeAcgVA2QgbBEAMA+QAiCyFBA2IgFApQgCAxALApQAhCFCUAHIAAABIABAAIAAgBQCUgHAhiFQAKgpgCgxIgEgpQFAg2AjiyQAMg9gbhFQgVg2gegcg");
	this.shape_31.setTransform(98.5,112.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ECA26E").s().p("AAAIkIAAgBQiUgHghiFQgLgpACgxIAFgpQlBg2giiyQgMg+AbhEQAVg2AegcQAmgjAIhnQAEh2AHguQAJg4DDgPQBlgIBwAEQBxgEBlAIQDDAPAJA4QAHAuAEB2QAIBnAmAjQAeAcAVA2QAbBFgMA9QgjCylAA2IAEApQACAxgKApQghCFiUAHIAAABg");
	this.shape_32.setTransform(98.5,112.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AFiF/Iilk5IlogUIi8BtIhwC7Ihjh5Qg6i8B7iYQA9hMBJgoQg9gngLhMQgDgYACgYIADgUIAUASQAiAYBEAfQBoAwB3gbQAhgHA/gSQA3gNAsACQB6AFBNAfQBlAnBlBnQBbBcgBCcQAABPgTA9Ih/DNg");
	this.shape_33.setTransform(99.9,57.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIgBQgSABgTAHIgPAIQAPgXAfgDQAOgBAMADQgBgRgPgMIgRgIQArgMAYA2QAMAYADAdQgQg5g1AHg");
	this.shape_34.setTransform(42.8,92.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B9754B").s().p("AAIBRQgYgIgSgZQgPgZgGgFQgOgPAEgiQAFgsAtgIQApgIAZArQAMAWAEAXIgfBEIACAOQgCAGgJAAQgHAAgMgEg");
	this.shape_35.setTransform(42.2,96.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AACCdQgpgOgbgaQgPgPgSgfIgMgUQgOgVgGglQgIgxAQglQAXg4BEgMQAOgDALAAQBIAAApBLQAVAmAGAqIACAJIgwBpQAGAWgLARQgMAVgdAAQgQAAgXgIgAgbiEQhGANgGBHQgEA0AVAeIAiA1QAWAcApAOQASAGAMAAQASAAAAgPIgFgQIAyhsQgFghgRggQghhBg4AAQgKAAgKACg");
	this.shape_36.setTransform(39.9,94);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ECA26E").s().p("AAMCBQgpgOgXgcIgig1QgVgeAFg0QAFhHBHgNQBDgMAmBFQAUAiAFAlIgxBsIAEAVQgDAKgPAAQgLAAgSgGg");
	this.shape_37.setTransform(39.9,94);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgugEQAZg2AqAMQgIADgJAFQgOAMgBARIAagCQAfADAPAXQgYgPgbgBQg2gHgQA5QACgdAMgYg");
	this.shape_38.setTransform(154.2,94.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B9754B").s().p("AglBPIACgOIgfhEIAQgtQAYgrAqAIQAtAIAFAsQAEAigPAPQgLASgJAMQgSAZgYAIQgMAEgHAAQgJAAgCgGg");
	this.shape_39.setTransform(154.8,98.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhRCQQgKgQAFgXIgvhpIABgJIAGgbQAIgdANgYQAqhLBHAAQALAAAOADQBEAMAXA4QAQAlgIAxQgGAlgNAVIgNAUQgSAfgPAPQgaAagqAOQgWAIgQAAQgdAAgNgVgAhRhFQgKAUgHAZQgDAMgBAIIAxBsIgEAQQgBAPATAAQAMAAARgGQApgOAXgcQANgQAVglQAUgfgEgzQgFhHhHgNQgJgCgLAAQg4AAghBBg");
	this.shape_40.setTransform(157,96);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ECA26E").s().p("Ag6B9IAEgVIgxhsIAFgXQAIgbAMgVQAnhFBCAMQBHANAFBHQAEAzgUAfQgVAlgNAQQgXAcgpAOQgSAGgLAAQgPAAgDgKg");
	this.shape_41.setTransform(157.1,96);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AjHAPQgJgJAAgLQAAgHACgGIA5AAQACAGAAAHQAAALgJAJQgJAKgNAAQgLAAgKgKgACdAJQgJgJAAgLQAAgHACgGIA4AAQADAGAAAHQAAALgJAJQgJAKgNAAQgMAAgJgKg");
	this.shape_42.setTransform(98.4,85.7);

	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.setTransform(98.5,91.6);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.setTransform(98.5,101.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_3}]},7).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({_off:true,y:101.1},15).to({_off:false,y:91.6},7).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},15).to({_off:true,y:91.6},7).wait(54));

	// Layer 1
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAbAdQg0gZgxgwIA2AgQA6AgAmAIIgFARQgRgDgbgNg");
	this.shape_43.setTransform(69,327.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhKAdQAlgJA7ggQAegRAXgPQgxAxg0AZIgsAPg");
	this.shape_44.setTransform(121.3,327.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIC/QAGgyAChMQACiJgRh6IAVCDQAVCqgaBYg");
	this.shape_45.setTransform(124.7,351.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhqgFIBNAFQBWABAygGQgiAFgrAEQgaACgTAAQg3AAgkgLg");
	this.shape_46.setTransform(140.2,366.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFhAIAUiBQgQB5ABCIQACBNAHAyIgJADQgahYAViqg");
	this.shape_47.setTransform(65.5,351.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgkAEIg+gHQAvAEBIgBQAtgBAhgEQgkALg3AAQgTAAgZgCg");
	this.shape_48.setTransform(50.2,366.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AA7AAQiagKhmAbIAhgLQAwgLAxgHQCcgVBtAzQg7gMhQgGg");
	this.shape_49.setTransform(98.7,232);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AB3AAQk3gXjMA5IBDgVQBggYBjgNQE5grDaBoQh2gZiggMg");
	this.shape_50.setTransform(98.4,228.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAvAgQhdgFhCgkIgQgXIBKAgQBaAhBcgDQgWADgdAAIgegBg");
	this.shape_51.setTransform(36.4,216.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAHAPQgrgEgNgOIALgMIAUAMQAbAMApAGIgSABIgZgBg");
	this.shape_52.setTransform(29.9,188.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ah6AeQBXABBVgfQAugPAbgRIgPAYQhCAkhdAFg");
	this.shape_53.setTransform(156.2,216.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AATgCQAOgHAGgGIALANQgNANgrAEIgrABQAogGAcgMg");
	this.shape_54.setTransform(162.2,188.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(3,0,0,4).p("ALPgYQA3hKgchqQgJghgQghIgPgaQABg/grgZQgOgIgRgCIgNgCQiagjhWjCQgbg8gRhFIgMg5IlEBJIlDhJIgMA5QgRBFgbA8QhWDCiaAjQgWAAgWAMQgrAZABA/IgPAaQgQAhgJAhQgcBqA2BKQgOAPgUAaQgoA2gaA7QhUC7BRCfQBZCsEJBbQDWBKD+ADQD/gDDWhKQEJhbBZisQBRifhUi7Qgbg7gng2g");
	this.shape_55.setTransform(95.5,217.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AnULhQkJhbhZisQhRieBUi8QAag7Aog2QAUgaAOgPQg2hKAchqQAJghAQggIAPgaQgBhAArgZQAWgMAWABQCagkBWjCQAbg8ARhFIAMg5IFDBKIFEhKIAMA5QARBFAbA8QBWDCCaAkIANABQARADAOAHQArAZgBBAIAPAaQAQAgAJAhQAcBqg3BKIAjApQAnA2AbA7QBUC8hRCeQhZCskJBbQjWBKj/ADQj+gDjWhKg");
	this.shape_56.setTransform(95.5,218);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(3,0,0,4).p("AjLJzQghg3gjhZQhHiygKinQgOjpBsi1QCHjiE+iCICHAWIAZGFIiHIug");
	this.shape_57.setTransform(38.5,192.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#ECA26E").s().p("AkPHmQhHiygKinQgOjpBsi1QCHjiE+iCICHAWIAZGFIiHIuImnEiQghg3gjhZg");
	this.shape_58.setTransform(38.5,192.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(3,0,0,4).p("ADMJzQAhg3AkhZQBGiyAKinQAPjphsi1QiIjik+iCIiHAWIgZGFICHIug");
	this.shape_59.setTransform(159.7,192.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#ECA26E").s().p("AjbFUIiHouIAZmFICHgWQE+CCCIDiQBsC1gPDpQgKCnhGCyQgkBZghA3g");
	this.shape_60.setTransform(159.7,192.1);

	this.instance_5 = new lib.Path_28();
	this.instance_5.setTransform(95.1,347.5,1,1,0,0,0,59.8,24.9);
	this.instance_5.alpha = 0.199;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(3,0,0,4).p("AAAjTQjWhFjAhEQk4hvhUg1IAQB8QAWCYAbCLQBXG8BnCZIAjAKQArAMAqAEQCFAOBAg8QgCg2AFhIQALiPAnhWIBPAMQBZAMAtgBQAvABA1gMQAagFARgHQAnBWALCPQAFBIgCA2QBAA8CFgOQBDgHA1gTQBniZBWm8QAbiLAWiYIARh8QhVA1k3BvQjABEjYBFg");
	this.shape_61.setTransform(95.1,319.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333CDE").s().p("ADnHZQADg3gFhHQgLiPgnhWQgRAGgbAGQg0AMgwgCQgtAChYgMIhQgMQgmBWgLCPQgFBHACA3QhAA7iFgOQgqgEgsgLIgjgKQhmiZhXm8QgbiLgWiZIgQh8QBUA1E4BvQC/BEDXBGQDXhGDBhEQE3hvBVg1IgRB8QgWCYgbCMQhWG8hnCZQg1AThEAGQgZADgXAAQhhAAg0gwg");
	this.shape_62.setTransform(95.1,320.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,0,0,4).p("AhKggIA4ADQA7AMAfAlIgUAMQgTgMgagMQgygVgfADg");
	this.shape_63.setTransform(43,377.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAIAJQgygWgeAEIAAgXIA3AEQA8ALAeAlIgTANQgUgNgagLg");
	this.shape_64.setTransform(42.9,377.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,0,0,4).p("AhKggIA4ADQA8AMAfAlIgUAMQgUgMgagMQgygVgfADg");
	this.shape_65.setTransform(45.2,375.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAIAJQgygWgfAEIAAgXIA4AEQA8ALAfAlIgUANQgUgNgagLg");
	this.shape_66.setTransform(45.1,375.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhpAeQhWgGg/gaIAvADQA4AFAyACQBCACBpgKQB2gMBDgTQgJALgbAMQg1AWhWAKQhLAIg6AAQgcAAgYgCg");
	this.shape_67.setTransform(46.4,389.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(3,0,0,4).p("AD/iRIgBDBQgCARgLAPQgiAxhoAHQiDAJhggIQhWgHgSgRQgSgQgFgPQgGgRAJgTQAKgYAigeQAmglAhgMQAegLALgQQABgBAIgXQADgJAMgPIAMgN");
	this.shape_68.setTransform(46.4,382);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AiiApQg3gFgagcIgOgZQAjAMCcALIDIgTQAwgFAtgQIAfgLIgNAZQgQAWgjAUQgkAUiCADIgxABQhIAAhFgFg");
	this.shape_69.setTransform(46.8,391.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FD2507").s().p("Ah8CLQhWgHgSgQQgSgQgFgPQgGgRAJgUQAKgXAigfQAmglAhgMQAegLALgQIAJgYQADgIAMgPIAMgNIE3AAIgBDAQgCASgLAPQgiAwhoAHQhGAFg6AAQg2AAgtgEg");
	this.shape_70.setTransform(46.4,381.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,0,0,4).p("ABLggQgZgCgeAGQg8ALgfAlIAUANIAtgYQAygWAfAEg");
	this.shape_71.setTransform(146.9,377.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhJAVQAgglA8gMQAegFAZACIAAAWQgfgDgyAVIgtAYg");
	this.shape_72.setTransform(147,377.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(1,0,0,4).p("ABLggQgZgCgeAGQg8ALgfAlIAUANIAtgYQAygWAfAEg");
	this.shape_73.setTransform(144.7,375.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhIAVQAfglA7gMQAfgFAYACIAAAWQgegDgyAVIguAYg");
	this.shape_74.setTransform(144.8,375);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhPAYQhWgKg1gWIgkgXQBDATB2AMQBpAKBCgCQBQgDBJgHQg/AahVAGQgZACgbAAQg7AAhLgIg");
	this.shape_75.setTransform(143.5,389.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(3,0,0,4).p("Aj+iRIABDBQACARALAPQAiAxBoAHQCDAJBggIQBWgHASgRQASgQAFgPQAGgRgJgTQgKgYgigeQgmglghgMQgegLgLgQQgBgBgIgXQgDgJgMgPIgMgN");
	this.shape_76.setTransform(143.5,382);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgbAtQiCgDglgUQgigUgRgWIgMgZIAeALQAuAQAxAFIDHATQAMAABJgGQBUgJAXgIIgPAZQgZAcg4AFQhFAFhIAAIgxgBg");
	this.shape_77.setTransform(143.2,391.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FD2507").s().p("AhmCKQhogHgigwQgLgPgCgSIgBjAIE3AAIAMANQAMAPADAIIAJAYQALAQAeALQAhAMAmAlQAiAfAKAXQAJAUgGARQgFAPgSAQQgSAQhWAHQgtAEg2AAQg6AAhGgFg");
	this.shape_78.setTransform(143.5,381.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.instance_5},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.3,216.3,195.7,382.2);


// symbols:
(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA8E5F").s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgGAGgHAAQgHAAgFgGg");
	this.shape.setTransform(39.3,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA8E5F").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgJAAgGgHg");
	this.shape_1.setTransform(37.4,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA8E5F").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
	this.shape_2.setTransform(-25.6,31.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA8E5F").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgIAIABQAJgBAHAIQAHAGAAAJQAAAJgHAHQgHAIgJgBQgIABgHgIg");
	this.shape_3.setTransform(-41.8,24.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DA8E5F").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_4.setTransform(-35.4,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhKAYQgqgGgBgSQAAgTAGgFQADgDADABIAMANQAXANA3gGQA1gFAuAQQAXAJALAKQgdgQgwAFQgRABgnAKQgNADgPAAQgOAAgRgDg");
	this.shape_5.setTransform(20.4,-17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAYQgngKgRgBQgugFgeAPIAigSQAtgQA1AFQA4AGAWgNQAMgGAAgHIAGACQAHAFgBATQAAASgrAGQgQADgOAAQgQAAgNgDg");
	this.shape_6.setTransform(-20.2,-17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhkgOIDJAOQgZAKgnAEIgaABQg7AAg0gdg");
	this.shape_7.setTransform(18,-8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglAOIg/gOIDJgOQg0Adg8AAIgagBg");
	this.shape_8.setTransform(-18.6,-8.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAoQgPgMgDgTQAFANALAIQAMAIAPAAQARAAANgNQAOgOAAgRQAAgSgMgNQgMgMgQgCIAEgBQAVAAAQAQQAPAQAAAUQAAAVgPAQQgQAQgVAAQgSAAgPgNg");
	this.shape_9.setTransform(17.4,13.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAQgQAUAAIAFABQgQACgMAMQgMANAAASQAAARAOAOQANANARAAQAPAAAMgIQALgIAFgNQgDATgPAMQgPANgTAAQgUAAgQgQg");
	this.shape_10.setTransform(-15.7,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhLAAIgdgaQAnAUAKAEQAhALAjADQAjADAggTQAQgKAJgMQgEANgOANQgcAZgxABIgFABQgrAAglgbg");
	this.shape_11.setTransform(-0.9,50.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAAQhHgRgnAPIAQgHQAVgIAXgCQBFgIAxAwQgegMgmgJg");
	this.shape_12.setTransform(-3.2,37.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhMALQgjgMgUgWQAYASAiAJQAkALAlAAQAnAAAjgLQAigJAYgSQgUAWgjAMQgjANgqAAQgoAAgkgNg");
	this.shape_13.setTransform(1.2,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,0,0,4).p("AHbioQgmgjgIhnQgEh2gHguQgJg4jDgPQhlgIhxAEQhwgEhlAIQjDAPgJA4QgHAugEB2QgIBngmAjQgeAcgVA2QgbBEAMA+QAiCyFBA2IgFApQgCAxALApQAhCFCUAHIAAABIABAAIAAgBQCUgHAhiFQAKgpgCgxIgEgpQFAg2AjiyQAMg9gbhFQgVg2gegcg");
	this.shape_14.setTransform(0,20.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECA26E").s().p("AAAIkIAAgBQiUgHghiFQgLgpACgxIAFgpQlBg2giiyQgMg+AbhEQAVg2AegcQAmgjAIhnQAEh2AHguQAJg4DDgPQBlgIBwAEQBxgEBlAIQDDAPAJA4QAHAuAEB2QAIBnAmAjQAeAcAVA2QAbBFgMA9QgjCylAA2IAEApQACAxgKApQghCFiUAHIAAABg");
	this.shape_15.setTransform(0,20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AFiF/Iilk5IlogUIi8BtIhwC7Ihjh5Qg6i8B7iYQA9hMBJgoQg9gngLhMQgDgYACgYIADgUIAUASQAiAYBEAfQBoAwB3gbQAhgHA/gSQA3gNAsACQB6AFBNAfQBlAnBlBnQBbBcgBCcQAABPgTA9Ih/DNg");
	this.shape_16.setTransform(1.5,-33.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIgBQgSABgTAHIgPAIQAPgXAfgDQAOgBAMADQgBgRgPgMIgRgIQArgMAYA2QAMAYADAdQgQg5g1AHg");
	this.shape_17.setTransform(-55.7,0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B9754B").s().p("AAIBRQgYgIgSgZQgPgZgGgFQgOgPAEgiQAFgsAtgIQApgIAZArQAMAWAEAXIgfBEIACAOQgCAGgJAAQgHAAgMgEg");
	this.shape_18.setTransform(-56.2,4.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AACCdQgpgOgbgaQgPgPgSgfIgMgUQgOgVgGglQgIgxAQglQAXg4BEgMQAOgDALAAQBIAAApBLQAVAmAGAqIACAJIgwBpQAGAWgLARQgMAVgdAAQgQAAgXgIgAgbiEQhGANgGBHQgEA0AVAeIAiA1QAWAcApAOQASAGAMAAQASAAAAgPIgFgQIAyhsQgFghgRggQghhBg4AAQgKAAgKACg");
	this.shape_19.setTransform(-58.5,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECA26E").s().p("AAMCBQgpgOgXgcIgig1QgVgeAFg0QAFhHBHgNQBDgMAmBFQAUAiAFAlIgxBsIAEAVQgDAKgPAAQgLAAgSgGg");
	this.shape_20.setTransform(-58.6,2.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgugEQAZg2AqAMQgIADgJAFQgOAMgBARIAagCQAfADAPAXQgYgPgbgBQg2gHgQA5QACgdAMgYg");
	this.shape_21.setTransform(55.8,2.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B9754B").s().p("AglBPIACgOIgfhEIAQgtQAYgrAqAIQAtAIAFAsQAEAigPAPQgLASgJAMQgSAZgYAIQgMAEgHAAQgJAAgCgGg");
	this.shape_22.setTransform(56.3,6.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhRCQQgKgQAFgXIgvhpIABgJIAGgbQAIgdANgYQAqhLBHAAQALAAAOADQBEAMAXA4QAQAlgIAxQgGAlgNAVIgNAUQgSAfgPAPQgaAagqAOQgWAIgQAAQgdAAgNgVgAhRhFQgKAUgHAZQgDAMgBAIIAxBsIgEAQQgBAPATAAQAMAAARgGQApgOAXgcQANgQAVglQAUgfgEgzQgFhHhHgNQgJgCgLAAQg4AAghBBg");
	this.shape_23.setTransform(58.6,4.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECA26E").s().p("Ag6B9IAEgVIgxhsIAFgXQAIgbAMgVQAnhFBCAMQBHANAFBHQAEAzgUAfQgVAlgNAQQgXAcgpAOQgSAGgLAAQgPAAgDgKg");
	this.shape_24.setTransform(58.7,4.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AjHAPQgJgJAAgLQAAgHACgGIA5AAQACAGAAAHQAAALgJAJQgJAKgNAAQgLAAgKgKgACdAJQgJgJAAgLQAAgHACgGIA4AAQADAGAAAHQAAALgJAJQgJAKgNAAQgMAAgJgKg");
	this.shape_25.setTransform(0,-5.9);

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72,-75.3,144.1,152.1);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA8E5F").s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgGAGgHAAQgHAAgFgGg");
	this.shape.setTransform(39.3,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA8E5F").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgJAAgGgHg");
	this.shape_1.setTransform(37.4,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DA8E5F").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
	this.shape_2.setTransform(-25.6,31.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA8E5F").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgIAIABQAJgBAHAIQAHAGAAAJQAAAJgHAHQgHAIgJgBQgIABgHgIg");
	this.shape_3.setTransform(-41.8,24.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DA8E5F").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_4.setTransform(-35.4,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhKAYQgqgGgBgSQAAgTAGgFQADgDADABIAMANQAXANA3gGQA1gFAuAQQAXAJALAKQgdgQgwAFQgRABgnAKQgNADgPAAQgOAAgRgDg");
	this.shape_5.setTransform(20.4,-17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAYQgngKgRgBQgugFgeAPIAigSQAtgQA1AFQA4AGAWgNQAMgGAAgHIAGACQAHAFgBATQAAASgrAGQgQADgOAAQgQAAgNgDg");
	this.shape_6.setTransform(-20.2,-17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhkgOIDJAOQgZAKgnAEIgaABQg7AAg0gdg");
	this.shape_7.setTransform(18,-8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglAOIg/gOIDJgOQg0Adg8AAIgagBg");
	this.shape_8.setTransform(-18.6,-8.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAoQgPgMgDgTQAFANALAIQAMAIAPAAQARAAANgNQAOgOAAgRQAAgSgMgNQgMgMgQgCIAEgBQAVAAAQAQQAPAQAAAUQAAAVgPAQQgQAQgVAAQgSAAgPgNg");
	this.shape_9.setTransform(17.4,13.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAQgQAUAAIAFABQgQACgMAMQgMANAAASQAAARAOAOQANANARAAQAPAAAMgIQALgIAFgNQgDATgPAMQgPANgTAAQgUAAgQgQg");
	this.shape_10.setTransform(-15.7,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhLAAIgdgaQAnAUAKAEQAhALAjADQAjADAggTQAQgKAJgMQgEANgOANQgcAZgxABIgFABQgrAAglgbg");
	this.shape_11.setTransform(-0.9,50.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAAQhHgRgoAPIARgHQAVgIAXgCQBFgIAwAwQgdgMgmgJg");
	this.shape_12.setTransform(-3.2,37.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhMALQgjgMgUgWQAYASAiAJQAkALAlAAQAnAAAjgLQAigJAYgSQgUAWgjAMQgjANgqAAQgoAAgkgNg");
	this.shape_13.setTransform(1.2,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,0,0,4).p("AHbioQgmgjgIhnQgEh2gHguQgJg4jDgPQhlgIhxAEQhwgEhlAIQjDAPgJA4QgHAugEB2QgIBngmAjQgeAcgVA2QgbBEAMA+QAiCyFBA2IgFApQgCAxALApQAhCFCUAHIAAABIABAAIAAgBQCUgHAhiFQAKgpgCgxIgEgpQFAg2AjiyQAMg9gbhFQgVg2gegcg");
	this.shape_14.setTransform(0,20.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECA26E").s().p("AAAIkIAAgBQiUgHghiFQgLgpACgxIAFgpQlBg2giiyQgMg+AbhEQAVg2AegcQAmgjAIhnQAEh2AHguQAJg4DDgPQBlgIBwAEQBxgEBlAIQDDAPAJA4QAHAuAEB2QAIBnAmAjQAeAcAVA2QAbBFgMA9QgjCylAA2IAEApQACAxgKApQghCFiUAHIAAABg");
	this.shape_15.setTransform(0,20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AFiF/Iilk5IlogUIi8BtIhwC7Ihjh5Qg6i8B7iYQA9hMBJgoQg9gngLhMQgDgYACgYIADgUIAUASQAiAYBEAfQBoAwB3gbQAhgHA/gSQA3gNAsACQB6AFBNAfQBlAnBlBnQBbBcgBCcQAABPgTA9Ih/DNg");
	this.shape_16.setTransform(1.5,-33.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIgBQgSABgTAHIgPAIQAPgXAfgDQAOgBAMADQgBgRgPgMIgRgIQArgMAYA2QAMAYADAdQgQg5g1AHg");
	this.shape_17.setTransform(-55.7,0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B9754B").s().p("AAIBRQgYgIgSgZQgPgZgGgFQgOgPAEgiQAFgsAtgIQApgIAZArQAMAWAEAXIgfBEIACAOQgCAGgJAAQgHAAgMgEg");
	this.shape_18.setTransform(-56.2,4.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AACCdQgpgOgbgaQgPgPgSgfIgMgUQgOgVgGglQgIgxAQglQAXg4BEgMQAOgDALAAQBIAAApBLQAVAmAGAqIACAJIgwBpQAGAWgLARQgMAVgdAAQgQAAgXgIgAgbiEQhGANgGBHQgEA0AVAeIAiA1QAWAcApAOQASAGAMAAQASAAAAgPIgFgQIAyhsQgFghgRggQghhBg4AAQgKAAgKACg");
	this.shape_19.setTransform(-58.5,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECA26E").s().p("AAMCBQgpgOgXgcIgig1QgVgeAFg0QAFhHBHgNQBDgMAmBFQAUAiAFAlIgxBsIAEAVQgDAKgPAAQgLAAgSgGg");
	this.shape_20.setTransform(-58.6,2.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgugEQAZg2AqAMQgIADgJAFQgOAMgBARIAagCQAfADAPAXQgYgPgbgBQg2gHgQA5QACgdAMgYg");
	this.shape_21.setTransform(55.8,2.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B9754B").s().p("AglBPIACgOIgfhEIAQgtQAYgrAqAIQAtAIAFAsQAEAigPAPQgLASgJAMQgSAZgYAIQgMAEgHAAQgJAAgCgGg");
	this.shape_22.setTransform(56.3,6.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhRCQQgKgQAFgXIgvhpIABgJIAGgbQAIgdANgYQAqhLBHAAQALAAAOADQBEAMAXA4QAQAlgIAxQgGAlgNAVIgNAUQgSAfgPAPQgaAagqAOQgWAIgQAAQgdAAgNgVgAhRhFQgKAUgHAZQgDAMgBAIIAxBsIgEAQQgBAPATAAQAMAAARgGQApgOAXgcQANgQAVglQAUgfgEgzQgFhHhHgNQgJgCgLAAQg4AAghBBg");
	this.shape_23.setTransform(58.6,4.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECA26E").s().p("Ag6B9IAEgVIgxhsIAFgXQAIgbAMgVQAnhFBCAMQBHANAFBHQAEAzgUAfQgVAlgNAQQgXAcgpAOQgSAGgLAAQgPAAgDgKg");
	this.shape_24.setTransform(58.7,4.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AjHAPQgJgJAAgLQAAgHACgGIA5AAQACAGAAAHQAAALgJAJQgJAKgMAAQgNAAgJgKgACdAJQgJgJAAgLQAAgHACgGIA4AAQADAGAAAHQAAALgJAJQgJAKgNAAQgMAAgJgKg");
	this.shape_25.setTransform(0,-5.9);

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72,-75.3,144.1,152.1);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjHAPQgJgJAAgLQAAgHACgGIA5AAQACAGAAAHQAAALgJAJQgJAKgNAAQgLAAgKgKgACdAJQgJgJAAgLQAAgHACgGIA4AAQADAGAAAHQAAALgJAJQgJAKgNAAQgMAAgJgKg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-2.5,41.9,5.2);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjHAPQgJgJAAgLQAAgHACgGIA5AAQACAGAAAHQAAALgJAJQgJAKgNAAQgLAAgKgKgACdAJQgJgJAAgLQAAgHACgGIA4AAQADAGAAAHQAAALgJAJQgJAKgNAAQgMAAgJgKg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-2.5,41.9,5.2);


(lib.spit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#138110").s().p("AgeAaQgTgBAAgKIAPACQATgBAMgLQAfgaAWgFQgkAagOAPQgKAMgRAAIgDgBg");
	this.shape.setTransform(5.8,9.9,0.5,0.5,-68.2,0,0,0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALgNQAhADAdAJQg5gGgxAJIgnAMQATgfBAAEg");
	this.shape_1.setTransform(3.4,8.2,0.5,0.5,-68.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiBA9QgZgZAAgkQAAgeAXgYQAXgZAkgDQASgCAXgBQBKAAA6AhQAeARAQASQAHAIAAAJQABAKgHAIQgJAMgPAAQgGAAgGgDQgVgJgVAAQgkAAgiAeQgdAmgoAAQgjAAgZgZgAhFg1QgXADgPAPQgRAQAAATQAAAYAQAPQAQARAXgBQAaABAVgbIAYgVQAggSAkAAQAbAAAbAKQgMgLgagPQgzgdhCABQgUAAgSABg");
	this.shape_2.setTransform(5.5,7.3,0.5,0.5,-68.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A9617").s().p("AhsAoQgQgQAAgXQAAgUARgQQAPgPAXgCQBTgKBAAgQAfAPAPAQQg2gXg1AWIgmAdQgWAbgaAAQgWAAgRgQg");
	this.shape_3.setTransform(5.5,7.3,0.5,0.5,-68.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.4,14.8);


(lib.Path_28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A1A").s().p("ADnDIQADg2gFhIQgLiNgnhWQgRAHgaAFQg1AMgwgBQgtABhYgMIhPgMQgoBWgKCNQgGBIADA2QhAA8iFgOQhDgHg2gTQgXgjgag4QBVATBKAAQByAAA7gwQAOg5gChGQgEiRhOhKQBHASBSARQClAiA0gCQA3ACCBgjQBBgSA2gSQhMBTgGCOQgCBFAMA2QA7AwByAAQBKAABVgTQgZA4gYAjQg2AThDAHQgZADgXAAQhhAAg0gxg");
	this.shape.setTransform(59.8,24.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,119.6,49.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;