$(document).ready(function() {
	var titulo, descrp, user, imagen, hashtag, modal, modalBody, iconos;
	for (var i = 0; i < 20; i++) {
		titulo = '<h1>' + data[i].title + '</h1>';
		descrp = '<p>'+ data[i].description +'</p>';
		iconos = '<div class="iconos"><i class="fa fa-upload" aria-hidden="true"></i><i class="fa fa-check" aria-hidden="true"></i><i class="fa fa-ellipsis-h" aria-hidden="true"></i><button type="button" class="btn btn-default btn-save"><i class="fa fa-thumb-tack" aria-hidden="true"></i> Guardar</button></div>';
		userHash = '<div class="hashtag-user"><h6>M</h6><h4>' + data[i].user + '</h4><a href="#">#' + data[i].hashtag + '</a></div>';
		imagen = '<img src="dist/img/'+ data[i].image_url+'">';

		$('.cont-img').append('<div class="item-pint" data-toggle="modal" data-target="#'+ data[i].id +'">'+ imagen +'<div class="text-desc">'+ titulo + descrp + userHash +'</div></div>');
		modalBody =  '<div class="modal-body">' + titulo + imagen + iconos + userHash + '<button type="button" class="btn btn-default btn-read">Leerlo</button>' + descrp + '</div>';
		modal = '<div class="modal fade" id="'+ data[i].id +'" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">' + iconos + '</div>'+ modalBody+'</div></div></div>';
		$('.modalBody>.hashtag-user').append('Holi');
		$('.cont-img').append(modal);
	}

});

/*$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
      for (var i = 21; i < 40; i++) {
		titulo = '<h1>' + data[i].title + '</h1>';
		descrp = '<p>'+ data[i].description +'</p>';
		userHash = '<div><h4>' + data[i].user + '</h4><a href="#">' + data[i].hashtag+ '</a></div>';
		imagen = '<img src="dist/img/'+ data[i].image_url+'">';
		$('.cont-img').append('<div class="item-pint">'+ imagen +'<div class="text-desc">'+ titulo + descrp + userHash +'</div></div>');
	}
   }
});*/