$(document).ready(function() {

	var jsonData = [
		{
			"img":"https://i1.sndcdn.com/artworks-000264172859-x1stci-t67x67.jpg",
			"title":"MICROLOGUE - Melodays 2017 @ 320.FM // 24.11.-26.11.2017",
			"author":"MicroV3rsum",
			"extras":"",
			"fullTime":"1:58:30",
			"listen":"1466",
			"like":"203",
			"retweet":"304",
			"comment":"5",
			"styleMusic":"Tehno",
			"datePublic":"2 days ago"
		},
		{
			"img":"https://i1.sndcdn.com/artworks-000248094920-uxavsx-t67x67.jpg",
			"title":"Britta unders | sunrise ZERO Kater Blau Takeover 2017",
			"author":"ZERO (Official)",
			"extras":"",
			"fullTime":"3:45:24",
			"listen":"2999",
			"like":"3",
			"retweet":"304",
			"comment":"5",
			"styleMusic":"Tehno",
			"datePublic":"2 days ago"
		},
		{
			"img":"https://i1.sndcdn.com/artworks-000249461987-2bp74m-t67x67.jpg",
			"title":"PREMIERE - Cabaret Nocturne - Occult Spells",
			"author":"Sinchi Collective",
			"extras":"Nein Records",
			"fullTime":"8:04",
			"listen":"5699",
			"like":"262",
			"retweet":"71",
			"comment":"18",
			"styleMusic":"Electrohic",
			"datePublic":"Oct 30, 2017"
		},
		{
			"img":"https://i1.sndcdn.com/artworks-000227185864-305qbj-t67x67.jpg",
			"title":"Wice - Star Fighter",
			"author":"NewRetroWave Records",
			"extras":"",
			"fullTime":"4:24",
			"listen":"35699",
			"like":"1155",
			"retweet":"170",
			"comment":"35",
			"styleMusic":"Retrowave",
			"datePublic":"May 24, 2017"
		},
		{
			"img":"https://i1.sndcdn.com/artworks-000233235639-v1o9d4-t67x67.jpg",
			"title":"The Magic Ray - The Tuning of the Road",
			"author":"Dischi Autunno",
			"extras":"",
			"fullTime":"5:34",
			"listen":"3489",
			"like":"55",
			"retweet":"9",
			"comment":"1",
			"styleMusic":"Electronic",
			"datePublic":"Jul 12, 2017"
		},
		{
			"img":"https://i1.sndcdn.com/artworks-000245826552-ckfmre-t67x67.jpg",
			"title":"Flight Facilities - Arty Boy",
			"author":"Ninajirachi",
			"extras":"Ninajirachi Remix",
			"fullTime":"3:47",
			"listen":"45589",
			"like":"754",
			"retweet":"185",
			"comment":"16",
			"styleMusic":"Electronic",
			"datePublic":"Oct 06, 2017"
		}

	];


	function eachList(jsonData){
		//Обработка данных и создание списка Start

		$(".list_item").empty();

		$.each( jsonData, function( key, val ) {
			var html = "<div class='item'>";
			html += "<img src='"+val.img+"' class='img_album'>";

			html += "\
			<div class='info_title'>\
				<a class='title' href='#'>"+val.title+"</a>\
				<div class='author'> by <a type='user' >"+val.author+"</a>\
					<div class='extrasWrap'>\
						<span class='extras t1'>"+val.extras+"</span>\
					</div>\
				</div>\
				<div class='actwrap'></div>\
			</div>";

			html += "\
				<div class='stats'>\
					<span class='duration'>"+val.fullTime+"</span>\
					<span class=''><i class='fa fa-headphones'></i>"+val.listen+"</span>\
					<span class='false'><i class='fa fa-heart-o'></i>"+val.like+"</span>\
					<span class='false'><i class='fa fa-retweet'></i>"+val.retweet+"</span>\
					<span><i class='fa fa-comment-o'></i>"+val.comment+"</span>\
					<span class='hdbtns'>\
						<a class='genre'>"+val.styleMusic+"</a>\
					</span>\
					<span class='date hdbtns'>"+val.datePublic+"</span>\
				</div>\
			";

			html += "<div>";

			$(html).appendTo(".list_item");

	  });
	  //Обработка данных и создание списка End
	}

	eachList(jsonData);

	//Выбор по сортировке
	$("#sortSelect option").on("click",function(){


		$("div.list_item").on(function(){
			$($this).empty();
		});

		var nameSort = $(this).val();

		
		var list;

		switch(nameSort){

			case 'title' 	:
			list = jsonData.sort(function(obj1, obj2) {
		  	return obj1.title>obj2.title;
			});
			eachList(list); break;

			case 'listen' 	:
			list = jsonData.sort(function(obj1, obj2) {
		  	return obj2.listen-obj1.listen;
			});
			eachList(list); break;

			case 'like' 	:
			list = jsonData.sort(function(obj1, obj2) {
		  	return obj2.like-obj1.like;
			});
			eachList(list); break;

			default				: break;

		}

	});



});