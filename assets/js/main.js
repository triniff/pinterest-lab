$(document).ready(function() {
	for (var i = 0; i < 20; i++) {
		console.log(data[i].title);
		$('.cont-img').append('<div class="item-pint"><img src="dist/img/'+ data[i].image_url+'"><h1>' + data[i].title + '</h1></div>');
	}
});

