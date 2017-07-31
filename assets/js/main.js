var x = 0;
$(document).ready(function() {

	for (var i = 0; i < 11; i++) {
		var li = document.getElementsByClassName("fondo-random")[i];
		li.classList.add('fondoimg-' + i);
		$('.fondoimg-' + i).css("background", "url(dist/img/" + (i+1) + ".jpg)");
	}
	var titulo, descrp, user, imagen, hashtag, modal, modalBody, iconos;
	function imprimir(com, fin){
		for (var i = com; i < fin; i++) {
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
	}imprimir(0, 20)

	 $(window).scroll(function(){
        x+= 1;
        if (x == 30) {
        	console.log("los otros 20")
        	imprimir(21, 40)
        }
    });
});

/*	$(window).scroll(function() {
		


	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	      for (var i = 21; i < 40; i++) {
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
	   }
	});

	console.log($('#40').length);*/