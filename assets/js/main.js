$(document).ready(function() {
	var titulo, descrp, user, imagen, hashtag;
	for (var i = 0; i < 20; i++) {
		titulo = '<h1>' + data[i].title + '</h1>';
		descrp = '<p>'+ data[i].description +'</p>';
		userHash = '<div><h4>' + data[i].user + '</h4><a href="#">' + data[i].hashtag+ '</a></div>';
		imagen = '<img src="dist/img/'+ data[i].image_url+'">';
		$('.cont-img').append('<div class="item-pint">'+ imagen +'<div class="text-desc">'+ titulo + descrp + userHash +'</div></div>');
	}
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
      for (var i = 21; i < 40; i++) {
		titulo = '<h1>' + data[i].title + '</h1>';
		descrp = '<p>'+ data[i].description +'</p>';
		userHash = '<div><h4>' + data[i].user + '</h4><a href="#">' + data[i].hashtag+ '</a></div>';
		imagen = '<img src="dist/img/'+ data[i].image_url+'">';
		$('.cont-img').append('<div class="item-pint">'+ imagen +'<div class="text-desc">'+ titulo + descrp + userHash +'</div></div>');
	}
   }
});