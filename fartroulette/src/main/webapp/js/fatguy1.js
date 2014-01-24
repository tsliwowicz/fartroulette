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
(lib.fatguy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHACgGIA2AAQADAGAAAHQAAALgJAJQgJAKgMAAQgLAAgJgKg");
	this.shape.setTransform(116.3,85.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHADgGIA2AAQACAGAAAHQAAALgJAJQgJAKgMAAQgLAAgJgKg");
	this.shape_1.setTransform(115.9,85.4);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHADgGIA1AAQADAGAAAHQAAALgJAJQgJAKgMAAQgLAAgJgKg");
	this.shape_2.setTransform(115.5,85.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHACgGIA3AAQACAGAAAHQAAALgJAJQgJAKgMAAQgLAAgJgKg");
	this.shape_3.setTransform(115.1,85.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHADgGIA1AAQADAGAAAHQAAALgJAJQgJAKgMAAQgKAAgKgKg");
	this.shape_4.setTransform(114.7,85.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHACgGIA3AAQACAGAAAHQAAALgJAJQgJAKgMAAQgKAAgKgKg");
	this.shape_5.setTransform(114.3,85.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHADgGIA2AAQACAGAAAHQAAALgJAJQgJAKgMAAQgKAAgKgKg");
	this.shape_6.setTransform(113,85.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:115.1,y:85.3}}]},1).to({state:[{t:this.shape_4,p:{x:114.7,y:85.3}}]},1).to({state:[{t:this.shape_5,p:{x:114.3,y:85.3}}]},1).to({state:[{t:this.shape_4,p:{x:113.8,y:85.2}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{x:113,y:85.1}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},20).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},20).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{x:119.5,y:85.8}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4,p:{x:118.7,y:85.7}}]},1).to({state:[{t:this.shape_5,p:{x:118.3,y:85.7}}]},1).to({state:[{t:this.shape_4,p:{x:117.9,y:85.6}}]},1).to({state:[{t:this.shape_3,p:{x:117.5,y:85.6}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:true},1).wait(6).to({_off:false,x:113.4,y:85.2},0).to({_off:true},1).wait(1).to({_off:false,x:112.6,y:85.1},0).to({_off:true},1).wait(56).to({_off:false,x:119.9,y:85.9},0).to({_off:true},1).wait(1).to({_off:false,x:119.1,y:85.8},0).to({_off:true},1).wait(4).to({_off:false,x:117.1,y:85.5},0).to({_off:true},1).wait(1).to({_off:false,x:116.3,y:85.4},0).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false,x:112.2,y:85.1},0).wait(21).to({x:112.7},0).wait(1).to({x:113.3,y:85.2},0).wait(1).to({x:113.8},0).wait(1).to({x:114.4,y:85.3},0).wait(1).to({x:114.9,y:85.4},0).wait(1).to({x:115.4},0).wait(1).to({x:116,y:85.5},0).wait(1).to({x:116.5},0).wait(1).to({x:117.1,y:85.6},0).wait(1).to({x:117.6},0).wait(1).to({x:118.1,y:85.7},0).wait(1).to({x:118.7,y:85.8},0).wait(1).to({x:119.2},0).wait(1).to({x:119.8,y:85.9},0).wait(1).to({x:120.3},0).wait(20).to({_off:true},1).wait(8).to({_off:false,x:116.7,y:85.5},0).to({_off:true},1).wait(11));

	// eyes copy
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHACgGIA3AAQACAGAAAHQAAALgJAJQgJAKgMAAQgKAAgKgKg");
	this.shape_7.setTransform(80.5,86);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHACgGIA2AAQADAGAAAHQAAALgJAJQgJAKgMAAQgLAAgJgKg");
	this.shape_8.setTransform(80,86.1);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHADgGIA1AAQADAGAAAHQAAALgJAJQgJAKgMAAQgKAAgKgKg");
	this.shape_9.setTransform(79.6,86.1);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHADgGIA2AAQACAGAAAHQAAALgJAJQgJAKgMAAQgKAAgKgKg");
	this.shape_10.setTransform(79.1,86.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHACgGIA3AAQACAGAAAHQAAALgJAJQgJAKgMAAQgLAAgJgKg");
	this.shape_11.setTransform(78.6,86.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHADgGIA2AAQACAGAAAHQAAALgJAJQgJAKgMAAQgLAAgJgKg");
	this.shape_12.setTransform(76.7,86.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAMQgJgJAAgLQAAgHADgGIA1AAQADAGAAAHQAAALgJAJQgJAKgMAAQgLAAgJgKg");
	this.shape_13.setTransform(84.3,85.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_7}]},4).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10,p:{x:79.1,y:86.1}}]},1).to({state:[{t:this.shape_11,p:{x:78.6,y:86.2}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_12,p:{x:76.7,y:86.3}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},20).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10,p:{x:77,y:86.2}}]},1).to({state:[{t:this.shape_11,p:{x:77.6,y:86.1}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_12,p:{x:80.1,y:85.8}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10,p:{x:82.5,y:85.5}}]},1).to({state:[{t:this.shape_11,p:{x:83.1,y:85.4}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},20).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_11,p:{x:83.6,y:85.4}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_12,p:{x:82.7,y:85.6}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_10,p:{x:81.8,y:85.8}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_7}]},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4).to({_off:true},1).wait(8).to({_off:false,x:76.3,y:86.3},0).to({_off:true},1).wait(28).to({_off:false,x:80.7,y:85.7},0).to({_off:true},1).wait(27).to({_off:false,x:84.5,y:85.3},0).to({_off:true},1).wait(8).to({_off:false,x:80.5,y:86},0).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(5).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:78.2,y:86.2},0).wait(1).to({x:77.7},0).to({_off:true},1).wait(3).to({_off:false,x:75.8,y:86.4},0).wait(20).to({_off:true},1).wait(3).to({_off:false,x:78.2,y:86.1},0).wait(1).to({x:78.9,y:86},0).to({_off:true},1).wait(3).to({_off:false,x:81.3,y:85.7},0).to({_off:true},1).wait(3).to({_off:false,x:83.7,y:85.3},0).to({_off:true},1).wait(25).to({_off:false,x:83.2,y:85.5},0).to({_off:true},1).wait(1).to({_off:false,x:82.3,y:85.7},0).to({_off:true},1).wait(1).to({_off:false,x:81.4,y:85.9},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(6).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:77.2,y:86.3},0).to({_off:true},1).wait(23).to({_off:false,x:76.4},0).to({_off:true},1).wait(4).to({_off:false,x:79.5,y:85.9},0).to({_off:true},1).wait(3).to({_off:false,x:81.9,y:85.6},0).to({_off:true},1).wait(4).to({_off:false,x:85,y:85.2},0).wait(20).to({_off:true},1).wait(1).to({_off:false,x:84.1,y:85.3},0).to({_off:true},1).wait(6).to({_off:false,x:80.9,y:85.9},0).to({_off:true},1).wait(11));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DA8E5F").s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgGAGgHAAQgHAAgFgGg");
	this.shape_14.setTransform(137.8,114.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DA8E5F").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgJAAgGgHg");
	this.shape_15.setTransform(135.8,106.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DA8E5F").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
	this.shape_16.setTransform(72.9,122.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DA8E5F").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgIAIABQAJgBAHAIQAHAGAAAJQAAAJgHAHQgHAIgJgBQgIABgHgIg");
	this.shape_17.setTransform(56.6,115.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DA8E5F").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_18.setTransform(63,108.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAbAdQg0gZgxgwIA2AgQA6AgAmAIIgFARQgRgDgbgNg");
	this.shape_19.setTransform(69,327.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhKAdQAlgJA7ggQAegRAXgPQgxAxg0AZIgsAPg");
	this.shape_20.setTransform(121.3,327.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIC/QAGgyAChMQACiJgRh6IAVCDQAVCqgaBYg");
	this.shape_21.setTransform(124.7,351.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhqgFIBNAFQBWABAygGQgiAFgrAEQgaACgTAAQg3AAgkgLg");
	this.shape_22.setTransform(140.2,366.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFhAIAUiBQgQB5ABCIQACBNAHAyIgJADQgahYAViqg");
	this.shape_23.setTransform(65.5,351.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkAEIg+gHQAvAEBIgBQAtgBAhgEQgkALg3AAQgTAAgZgCg");
	this.shape_24.setTransform(50.2,366.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AA7AAQiagKhmAbIAhgLQAwgLAxgHQCcgVBtAzQg7gMhQgGg");
	this.shape_25.setTransform(98.7,232);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AB3AAQk3gXjMA5IBDgVQBggYBjgNQE5grDaBoQh2gZiggMg");
	this.shape_26.setTransform(98.4,228.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAvAgQhdgFhCgkIgQgXIBKAgQBaAhBcgDQgWADgdAAIgegBg");
	this.shape_27.setTransform(36.4,216.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAHAPQgrgEgNgOIALgMIAUAMQAbAMApAGIgSABIgZgBg");
	this.shape_28.setTransform(29.9,188.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ah6AeQBXABBVgfQAugPAbgRIgPAYQhCAkhdAFg");
	this.shape_29.setTransform(156.2,216.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AATgCQAOgHAGgGIALANQgNANgrAEIgrABQAogGAcgMg");
	this.shape_30.setTransform(162.2,188.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhKAYQgqgGgBgSQAAgTAGgFQADgDADABIAMANQAXANA3gGQA1gFAuAQQAXAJALAKQgdgQgwAFQgRABgnAKQgNADgPAAQgOAAgRgDg");
	this.shape_31.setTransform(118.9,73.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAPAYQgngKgRgBQgugFgeAPIAigSQAtgQA1AFQA4AGAWgNQAMgGAAgHIAGACQAHAFgBATQAAASgrAGQgQADgOAAQgQAAgNgDg");
	this.shape_32.setTransform(78.2,73.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhkgOIDJAOQgZAKgnAEIgaABQg7AAg0gdg");
	this.shape_33.setTransform(116.5,83.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AglAOIg/gOIDJgOQg0Adg8AAIgagBg");
	this.shape_34.setTransform(79.8,83.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AghAoQgPgMgDgTQAFANALAIQAMAIAPAAQARAAANgNQAOgOAAgRQAAgSgMgNQgMgMgQgCIAEgBQAVAAAQAQQAPAQAAAUQAAAVgPAQQgQAQgVAAQgSAAgPgNg");
	this.shape_35.setTransform(115.9,104.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAQgQAUAAIAFABQgQACgMAMQgMANAAASQAAARAOAOQANANARAAQAPAAAMgIQALgIAFgNQgDATgPAMQgPANgTAAQgUAAgQgQg");
	this.shape_36.setTransform(82.7,104.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhLAAIgdgaQAnAUAKAEQAhALAjADQAjADAggTQAQgKAJgMQgEANgOANQgcAZgxABIgFABQgrAAglgbg");
	this.shape_37.setTransform(97.6,142.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWAAQhHgRgnAPIAQgHQAVgIAXgCQBFgIAxAwQgegMgmgJg");
	this.shape_38.setTransform(95.3,129.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhMALQgjgMgUgWQAYASAiAJQAkALAlAAQAnAAAjgLQAigJAYgSQgUAWgjAMQgjANgqAAQgoAAgkgNg");
	this.shape_39.setTransform(99.6,106.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(3,0,0,4).p("AHbioQgmgjgIhnQgEh2gHguQgJg4jDgPQhlgIhxAEQhwgEhlAIQjDAPgJA4QgHAugEB2QgIBngmAjQgeAcgVA2QgbBEAMA+QAiCyFBA2IgFApQgCAxALApQAhCFCUAHIAAABIABAAIAAgBQCUgHAhiFQAKgpgCgxIgEgpQFAg2AjiyQAMg9gbhFQgVg2gegcg");
	this.shape_40.setTransform(98.5,112.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ECA26E").s().p("AAAIkIAAgBQiUgHghiFQgLgpACgxIAFgpQlBg2giiyQgMg+AbhEQAVg2AegcQAmgjAIhnQAEh2AHguQAJg4DDgPQBlgIBwAEQBxgEBlAIQDDAPAJA4QAHAuAEB2QAIBnAmAjQAeAcAVA2QAbBFgMA9QgjCylAA2IAEApQACAxgKApQghCFiUAHIAAABg");
	this.shape_41.setTransform(98.5,112.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AFiF/Iilk5IlogUIi8BtIhwC7Ihjh5Qg6i8B7iYQA9hMBJgoQg9gngLhMQgDgYACgYIADgUIAUASQAiAYBEAfQBoAwB3gbQAhgHA/gSQA3gNAsACQB6AFBNAfQBlAnBlBnQBbBcgBCcQAABPgTA9Ih/DNg");
	this.shape_42.setTransform(99.9,57.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgIgBQgSABgTAHIgPAIQAPgXAfgDQAOgBAMADQgBgRgPgMIgRgIQArgMAYA2QAMAYADAdQgQg5g1AHg");
	this.shape_43.setTransform(42.8,92.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B9754B").s().p("AAIBRQgYgIgSgZQgPgZgGgFQgOgPAEgiQAFgsAtgIQApgIAZArQAMAWAEAXIgfBEIACAOQgCAGgJAAQgHAAgMgEg");
	this.shape_44.setTransform(42.2,96.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AACCdQgpgOgbgaQgPgPgSgfIgMgUQgOgVgGglQgIgxAQglQAXg4BEgMQAOgDALAAQBIAAApBLQAVAmAGAqIACAJIgwBpQAGAWgLARQgMAVgdAAQgQAAgXgIgAgbiEQhGANgGBHQgEA0AVAeIAiA1QAWAcApAOQASAGAMAAQASAAAAgPIgFgQIAyhsQgFghgRggQghhBg4AAQgKAAgKACg");
	this.shape_45.setTransform(39.9,94);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#ECA26E").s().p("AAMCBQgpgOgXgcIgig1QgVgeAFg0QAFhHBHgNQBDgMAmBFQAUAiAFAlIgxBsIAEAVQgDAKgPAAQgLAAgSgGg");
	this.shape_46.setTransform(39.9,94);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgugEQAZg2AqAMQgIADgJAFQgOAMgBARIAagCQAfADAPAXQgYgPgbgBQg2gHgQA5QACgdAMgYg");
	this.shape_47.setTransform(154.2,94.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B9754B").s().p("AglBPIACgOIgfhEIAQgtQAYgrAqAIQAtAIAFAsQAEAigPAPQgLASgJAMQgSAZgYAIQgMAEgHAAQgJAAgCgGg");
	this.shape_48.setTransform(154.8,98.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhRCQQgKgQAFgXIgvhpIABgJIAGgbQAIgdANgYQAqhLBHAAQALAAAOADQBEAMAXA4QAQAlgIAxQgGAlgNAVIgNAUQgSAfgPAPQgaAagqAOQgWAIgQAAQgdAAgNgVgAhRhFQgKAUgHAZQgDAMgBAIIAxBsIgEAQQgBAPATAAQAMAAARgGQApgOAXgcQANgQAVglQAUgfgEgzQgFhHhHgNQgJgCgLAAQg4AAghBBg");
	this.shape_49.setTransform(157,96);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#ECA26E").s().p("Ag6B9IAEgVIgxhsIAFgXQAIgbAMgVQAnhFBCAMQBHANAFBHQAEAzgUAfQgVAlgNAQQgXAcgpAOQgSAGgLAAQgPAAgDgKg");
	this.shape_50.setTransform(157.1,96);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(3,0,0,4).p("ALPgYQA3hKgchqQgJghgQghIgPgaQABg/grgZQgOgIgRgCIgNgCQiagjhWjCQgbg8gRhFIgMg5IlEBJIlDhJIgMA5QgRBFgbA8QhWDCiaAjQgWAAgWAMQgrAZABA/IgPAaQgQAhgJAhQgcBqA2BKQgOAPgUAaQgoA2gaA7QhUC7BRCfQBZCsEJBbQDWBKD+ADQD/gDDWhKQEJhbBZisQBRifhUi7Qgbg7gng2g");
	this.shape_51.setTransform(95.5,217.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AnULhQkJhbhZisQhRieBUi8QAag7Aog2QAUgaAOgPQg2hKAchqQAJghAQggIAPgaQgBhAArgZQAWgMAWABQCagkBWjCQAbg8ARhFIAMg5IFDBKIFEhKIAMA5QARBFAbA8QBWDCCaAkIANABQARADAOAHQArAZgBBAIAPAaQAQAgAJAhQAcBqg3BKIAjApQAnA2AbA7QBUC8hRCeQhZCskJBbQjWBKj/ADQj+gDjWhKg");
	this.shape_52.setTransform(95.5,218);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(3,0,0,4).p("AjLJzQghg3gjhZQhHiygKinQgOjpBsi1QCHjiE+iCICHAWIAZGFIiHIug");
	this.shape_53.setTransform(38.5,192.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ECA26E").s().p("AkPHmQhHiygKinQgOjpBsi1QCHjiE+iCICHAWIAZGFIiHIuImnEiQghg3gjhZg");
	this.shape_54.setTransform(38.5,192.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(3,0,0,4).p("ADMJzQAhg3AkhZQBGiyAKinQAPjphsi1QiIjik+iCIiHAWIgZGFICHIug");
	this.shape_55.setTransform(159.7,192.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#ECA26E").s().p("AjbFUIiHouIAZmFICHgWQE+CCCIDiQBsC1gPDpQgKCnhGCyQgkBZghA3g");
	this.shape_56.setTransform(159.7,192.1);

	this.instance = new lib.Path_28();
	this.instance.setTransform(95.1,347.5,1,1,0,0,0,59.8,24.9);
	this.instance.alpha = 0.199;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(3,0,0,4).p("AAAjTQjWhFjAhEQk4hvhUg1IAQB8QAWCYAbCLQBXG8BnCZIAjAKQArAMAqAEQCFAOBAg8QgCg2AFhIQALiPAnhWIBPAMQBZAMAtgBQAvABA1gMQAagFARgHQAnBWALCPQAFBIgCA2QBAA8CFgOQBDgHA1gTQBniZBWm8QAbiLAWiYIARh8QhVA1k3BvQjABEjYBFg");
	this.shape_57.setTransform(95.1,319.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333CDE").s().p("ADnHZQADg3gFhHQgLiPgnhWQgRAGgbAGQg0AMgwgCQgtAChYgMIhQgMQgmBWgLCPQgFBHACA3QhAA7iFgOQgqgEgsgLIgjgKQhmiZhXm8QgbiLgWiZIgQh8QBUA1E4BvQC/BEDXBGQDXhGDBhEQE3hvBVg1IgRB8QgWCYgbCMQhWG8hnCZQg1AThEAGQgZADgXAAQhhAAg0gwg");
	this.shape_58.setTransform(95.1,320.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,0,0,4).p("AhKggIA4ADQA7AMAfAlIgUAMQgTgMgagMQgygVgfADg");
	this.shape_59.setTransform(43,377.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAIAJQgygWgeAEIAAgXIA3AEQA8ALAeAlIgTANQgUgNgagLg");
	this.shape_60.setTransform(42.9,377.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,0,0,4).p("AhKggIA4ADQA8AMAfAlIgUAMQgUgMgagMQgygVgfADg");
	this.shape_61.setTransform(45.2,375.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAIAJQgygWgfAEIAAgXIA4AEQA8ALAfAlIgUANQgUgNgagLg");
	this.shape_62.setTransform(45.1,375.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhpAeQhWgGg/gaIAvADQA4AFAyACQBCACBpgKQB2gMBDgTQgJALgbAMQg1AWhWAKQhLAIg6AAQgcAAgYgCg");
	this.shape_63.setTransform(46.4,389.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(3,0,0,4).p("AD/iRIgBDBQgCARgLAPQgiAxhoAHQiDAJhggIQhWgHgSgRQgSgQgFgPQgGgRAJgTQAKgYAigeQAmglAhgMQAegLALgQQABgBAIgXQADgJAMgPIAMgN");
	this.shape_64.setTransform(46.4,382);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AiiApQg3gFgagcIgOgZQAjAMCcALIDIgTQAwgFAtgQIAfgLIgNAZQgQAWgjAUQgkAUiCADIgxABQhIAAhFgFg");
	this.shape_65.setTransform(46.8,391.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FD2507").s().p("Ah8CLQhWgHgSgQQgSgQgFgPQgGgRAJgUQAKgXAigfQAmglAhgMQAegLALgQIAJgYQADgIAMgPIAMgNIE3AAIgBDAQgCASgLAPQgiAwhoAHQhGAFg6AAQg2AAgtgEg");
	this.shape_66.setTransform(46.4,381.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(1,0,0,4).p("ABLggQgZgCgeAGQg8ALgfAlIAUANIAtgYQAygWAfAEg");
	this.shape_67.setTransform(146.9,377.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhJAVQAgglA8gMQAegFAZACIAAAWQgfgDgyAVIgtAYg");
	this.shape_68.setTransform(147,377.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(1,0,0,4).p("ABLggQgZgCgeAGQg8ALgfAlIAUANIAtgYQAygWAfAEg");
	this.shape_69.setTransform(144.7,375.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AhIAVQAfglA7gMQAfgFAYACIAAAWQgegDgyAVIguAYg");
	this.shape_70.setTransform(144.8,375);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AhPAYQhWgKg1gWIgkgXQBDATB2AMQBpAKBCgCQBQgDBJgHQg/AahVAGQgZACgbAAQg7AAhLgIg");
	this.shape_71.setTransform(143.5,389.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(3,0,0,4).p("Aj+iRIABDBQACARALAPQAiAxBoAHQCDAJBggIQBWgHASgRQASgQAFgPQAGgRgJgTQgKgYgigeQgmglghgMQgegLgLgQQgBgBgIgXQgDgJgMgPIgMgN");
	this.shape_72.setTransform(143.5,382);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgbAtQiCgDglgUQgigUgRgWIgMgZIAeALQAuAQAxAFIDHATQAMAABJgGQBUgJAXgIIgPAZQgZAcg4AFQhFAFhIAAIgxgBg");
	this.shape_73.setTransform(143.2,391.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FD2507").s().p("AhmCKQhogHgigwQgLgPgCgSIgBjAIE3AAIAMANQAMAPADAIIAJAYQALAQAeALQAhAMAmAlQAiAfAKAXQAJAUgGARQgFAPgSAQQgSAQhWAHQgtAEg2AAQg6AAhGgFg");
	this.shape_74.setTransform(143.5,381.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.instance},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.3,216.3,195.7,382.2);


// symbols:
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