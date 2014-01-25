(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.spot3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0.451)").s().p("EhY6ASSQtknHAAqDQAAqBNknGQKklkOChMQD6gWEMAAMCdMADNIBhMcMifsAdcQjpArjeARQiGAKiCAAQrTAApLk0g");
	this.shape.setTransform(492.9,-190.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,204,0.456)").s().p("EhWuASsQtam3gWptQAJpzNWnRIAmgVQKJlSNahkQD2gbEHgHIImgEQeDgUdzACUAlLgANAlKgAIIEhAKIGwAVIBWMXMiVtAfsIl7BEQjpAqjdAQQiFAJiAAAQrOABpMkqg");
	this.shape_1.setTransform(501.8,-164);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,204,0.461)").s().p("EhUhAUlQtSmngspXQASplNJncIAmgVQJ5lTNOh9QDxghEBgOQEOgIEOgKQdihRdHgjUAkdgBNAkcgBCIEeAPIGcAiIBNMRMiRtAjDIl5BBQjnAojcAQQiEAJiAAAQrJAApLkfg");
	this.shape_2.setTransform(510.7,-147.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,204,0.466)").s().p("EhSUAWfQtKmYhBpBQAapXM8nnIAlgVQJrlTNAiYQDsgmD9gUQEIgQEJgSQdCiNcZhJUAjxgCMAjtgB8IEbAUIGJAuIBCMMMiNsAmZIl3A/QjmAnjbAPQiCAJh/AAQrEAApLkUg");
	this.shape_3.setTransform(519.6,-130.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,204,0.472)").s().p("EhQHAYYQtCmIhXorQAjpKMvnxIAlgWQJblTM0iyQDngrD3gbQEDgXEEgaQcijJbshuUAjDgDMAi/gC1IEXAYIF2A6IA5MHMiJsApwIl1A8QjkAljaAPQiCAIh+AAQq/AApKkJg");
	this.shape_4.setTransform(528.5,-113.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,204,0.477)").s().p("EhN7AaRQs5l5hsoUQAro8Mjn7IAkgXQJMlUMmjMQDigwDzgiQD8geD/ghQcCkGbAiUUAiVgELAiRgDvIEUAdIFjBGIAuMCMiFqAtGIl0A6QjjAkjZAOQiAAIh9AAQq6AApLj/g");
	this.shape_5.setTransform(537.4,-96.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,204,0.482)").s().p("EhLuAcKQsxlpiCn+QA0ouMWoGIAjgXQI9lVMajlQDdg2DtgpQD3glD6gpQbilCaSi5UAhogFLAhjgEoIERAhIFPBTIAlL8MiBqAwcIlxA4QjiAijYANQiAAIh8AAQq1AApKj0g");
	this.shape_6.setTransform(546.4,-79.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,204,0.487)").s().p("EhJhAeDQsplZiXnoQA8ogMJoTIAjgWQIulVMNj/QDYg7DogwQDxgsD1gxQbBl+ZmjfUAg6gGKAg1gFiIEOAmIE8BfIAaL3Mh9pAzzIlvA1QjgAgjYANQh+AIh7AAQqxAApJjqg");
	this.shape_7.setTransform(555.3,-62.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,204,0.492)").s().p("EhHUAf8QshlJitnSQBFoSL8oeIAjgYQIelTMAkaQDThADjg3QDsgyDwg5Qahm7Y5kEUAgNgHKAgGgGbIEKArIEpBqIARLyMh5pA3JIltAzQjfAfjWAMQh+AHh6AAQqrAApJjfg");
	this.shape_8.setTransform(564.2,-45.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,204,0.497)").s().p("EhFIAh2QsYk6jCm8QBNoELwopIAhgYQIQlULzkzQDOhGDdg9QDng6DqhBQaCn3YLkqQfgoJfXnVIEIAwIEVB2IAHLtMh1oA6gIlrAwQjdAdjVAMQh9AHh5AAQqnAApJjUg");
	this.shape_9.setTransform(573.1,-28.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,204,0.502)").s().p("EhC8AjvQsQkqjYmmQBWn2Lio0IAhgZQIAlWLnlLQDJhLDYhEQDhhBDmhJQZhozXelQQeypIeqoPIEEA1IECCDIgDLnMhxnA92IlpAuQjcAcjVALQh7AHh5AAQqhAApIjKg");
	this.shape_10.setTransform(582.2,-11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,204,0.508)").s().p("EhA1AloQsHkajumPQBfnpLWo/IAggZQHxlXLZllQDEhQDUhLQDbhIDghQQZBpwWyl1QeFqHd7pJIEBA5IDvCPIgOLiMhtmBBMIlnAsQjbAajTALQh6AGh4AAQqcAApJi/g");
	this.shape_11.setTransform(591.6,5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,204,0.513)").s().p("Eg+tAnhQr/kLkDl4QBnnaLJpLIAfgZQHilYLNmBQC/hTDOhSQDWhPDbhYQYhqsWFmbQdXrGdNqDID9A+IDcCbIgXLdMhplBEjIlmApQjZAZjSAKQh6AGh2AAQqYAApIi1g");
	this.shape_12.setTransform(601,21.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,204,0.518)").s().p("Eg8lApaQr3j7kZliQBwnMK8pWIAfgaQHTlXLAmbQC6hbDJhZQDQhUDWhgQYBroVXnAQcqsGceq8ID7BCIDJCoIghLXMhllBH5IlkAnQjYAXjRAKQh4AFh2AAQqSAApIiqg");
	this.shape_13.setTransform(610.4,38.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,204,0.523)").s().p("Eg6dArUQrvjskulMQB4m+KvphIAfgaQHDlYKzm1QC1hgDEhgQDLhdDRhlQXgslUrnmQb8tFbwr2ID4BHIC1C0IgrLSMhhkBLPIlhAlQjXAWjQAJQh3AFh1AAQqOAApHifg");
	this.shape_14.setTransform(619.9,55.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,204,0.528)").s().p("Eg4VAtNQrnjclEk2QCBmwKjpsIAdgaQG1lZKmnPQCwhlC/hnQDFhkDMhvQXAtfT+oLQbOuFbCsvID1BLICiDAIg1LNMhdkBOmIlfAiQjVAUjQAJQh2AEh0AAQqIAApHiUg");
	this.shape_15.setTransform(629.3,72.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,204,0.533)").s().p("Eg2OAvGQrejMlZkgQCJmiKWp2IAdgcQGllZKanoQCrhrC5htQDAhrDGh4QWhubTQoxQaivEaTtpIDxBQICPDMIg/LIMhZjBR8IldAgQjUATjOAIQh1AEhzAAQqEAApHiKg");
	this.shape_16.setTransform(638.7,89.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,204,0.538)").s().p("Eg0GAw/QrWi8lvkKQCSmUKJqBIAdgcQGWlaKMoCQCmhwC1h0QC6hyDBh/QWAvYSkpXQZ0wDZluiIDuBUIB8DZIhJLCMhViBVTIlcAdQjSARjNAHQh1AEhyAAQp+ABpHiAg");
	this.shape_17.setTransform(648.1,106.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,204,0.543)").s().p("Egx+Ay4QrNismFj0QCbmGJ8qMIAbgcQGHlaKAodQChh1Cvh7QC1h5C8iHQVgwUR3p8QZGxDY3vcIDrBZIBoDlIhTK9MhRhBYpIlaAbQjQAQjNAGQhzAEhxAAQp6AApGh1g");
	this.shape_18.setTransform(657.5,123.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,204,0.549)").s().p("Egv2A0xQrFicmbjeQCkl4JvqXIAbgdQF4laJyo3QCch6CriCQCviAC3iPQVAxPRJqjQYZyCYJwWIDoBeIBVDxIhdK5MhNhBb+IlXAZQjQAOjLAGQhyAEhxAAQp0AApGhrg");
	this.shape_19.setTransform(666.9,140.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,204,0.554)").s().p("EgtuA2rQq9iOmwjHQCslpJiqjIAbgdIPOurQCXiACliJQCpiHCziWQUfyMQdrIQXszCXaxPIDkBiIBCD9IhnK0MhJgBfVIlVAWQjOANjLAFQhxADhvAAQpwAApFhfg");
	this.shape_20.setTransform(676.3,157);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,204,0.559)").s().p("EgrnA4kQq0h+nFixQC0lbJVquIAagdQFalcJZpqQCSiGCfiPQCkiOCtieQUAzIPwruQW+0AWsyKIDhBnIAuEKIhwKuMhFfBirIlUATQjNAMjJAFQhwADhvAAQpqAApGhVg");
	this.shape_21.setTransform(685.8,173.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,204,0.564)").s().p("EgpfA6dQqshunbibQC9lNJJq5IAZgdQFKldJMqEQCNiLCbiVQCeiWCoimQTg0EPCsTQWR1AV+zDIDeBrIAbEWIh7KpMhBeBmCIlSAQQjLALjIAEQhvAChuAAQpmAApFhKg");
	this.shape_22.setTransform(695.2,190.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,204,0.569)").s().p("EgnXA8WQqkhenwiFQDFk/I8rEIAZgeQE7lcI/qeIEdktQCZidCjitQS/1BOWs5QVj1/VQz9IDbBwIAHEiIiEKkMg9eBpYIlQAOQjJAJjIAEQhuAChtAAQpgAApFhAg");
	this.shape_23.setTransform(704.6,207.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,204,0.574)").s().p("EglVA+PQqchOoGhvQDOkxIwrPIAYgeQErldIzq4IETk5QCTijCei2QSf19NpteQU22/Uh02IDYB0IgMEuIiOKfMg5dBsuIlOAMQjJAIjGADQhtABhsAAQpcAApEg1g");
	this.shape_24.setTransform(714.6,224.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,204,0.579)").s().p("EgjXBAJQqTg/ochZQDXkjIiraIAYgeQEcleImrSIEJlFQCOiqCYi+QR/25M8uEQUI3+Tz1wIDVB6IgfE6IiYKZMg1dBwFIlMAJQjHAGjFADIjXABQpXAApEgqg");
	this.shape_25.setTransform(725,241.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,204,0.585)").s().p("EghZBCCQqLgvoxhDQDfkVIWrlIAXgfQENleIZrsID/lRQCIixCTjFQRf32MPuqQTb49TE2qIDSB/IgyFGIiiKUMgxcBzbIlKAHQjGAFjEACIjVABQpSAApEggg");
	this.shape_26.setTransform(735.3,258.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,204,0.59)").s().p("EgfbBD7QqCgfpHgtQDokHIIrvIAXggQD+lfIMsFID1leQCCi4COjNQQ/4yLivPQSu59SW3jIDOCDIhFFSIitKPMgtcB2xIlGAFQjFADjDABIjTABQpNAApEgVg");
	this.shape_27.setTransform(745.7,275.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,204,0.595)").s().p("EgdcBF0Qp7gQpcgWQDwj4H8r7IAWggQDvlfH/sgIDqlpIEHmVQQe5uK1v1QSA68Ro4dIDLCIIhZFeIi2KKMgpcB6IIlEACImFACIjSABQpHAApDgLg");
	this.shape_28.setTransform(756.1,292.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,204,0.6)").s().p("EgvCBHtQD+jvH/siQFAn2Nu27QP+6rKIwaQRT78Q55WIDICMMgqHCNNg");
	this.shape_29.setTransform(766.5,309);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(31));

	// Layer 1
	this.instance = new lib.black();
	this.instance.setTransform(514.3,384,1,1,0,0,0,514.3,384);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},29).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(349,45.8,1311.8,1106.2);


// symbols:
(lib.black = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	this.shape.setTransform(512,384);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;