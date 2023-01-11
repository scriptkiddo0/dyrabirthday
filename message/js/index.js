this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Semoga panjang umur, sehat selalu, di beri kelancaran buat semuanya, apapun yg kamu inginkan segera tercapai. jaga kesehatan. kurangin minum esnya tuh wkwkw. gaboleh telat mam lagiiii. makin sayang sama keluarga, sama aku juga deng hehe. i love uuuuu";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
