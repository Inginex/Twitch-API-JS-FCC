$(function (){

	var streamers = [
    "FreeCodeCamp", 
			"storbeck", 
			"terakilobyte", 
			"Habathcx",
			"RobotCaleb",
			"thomasballinger",
			"noobs2ninjas",
			"Beohoff",
			"brunofin",
			"comster404",
			"Test_channel",
			"cretetion",
			"sheevergaming",
			"TR7K",
			"OgamingSC2",
			"ESL_SC2"
  ];
	var link = 'https://api.twitch.tv/kraken/channels/';

	for(var i = 0; i < streamers.length; i++){
		var links = streamers[i];

		$.ajax({
		url: ''+ link +''+ links +'',
		type: 'GET',
		success: function(data){

			var user = data.display_name;
			if (data.logo === null){
				var img = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png";
			} else {
				var img = data.logo;
			}
			
			var url = data.url;
			if(data.status === null){
				var status = "Offline";
				var state = "Offline";
			} else {
				var status = data.status;
				var state = "Online";
			}

			if (data.status !== null){
				var led = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/2000px-Ski_trail_rating_symbol-green_circle.svg.png";
			} else {
				var led = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Disc_Plain_red.svg/2000px-Disc_Plain_red.svg.png"; 
			} 


			$("#users").append('<li class="user '+ state + ' '+ user +'"><img src="'+ img +'"><img id="state" src="'+ led +'"><div id="info"><a href="'+ url +'">'+ user +'</a><div id="status">'+ status +'</div></div></li>');
			
			// Seleciona Offline - Online - All
			$("#online").click(function(){
				$(".Offline").hide();
				$(".Online").show();

			});
			$("#offline").click(function(){
				$(".Online").hide();
				$(".Offline").show();
			});
			$("#all").click(function(){
				$(".Offline").show();
				$(".Online").show();
			});

			$(function(){
		$("#tags").autocomplete({
			source: streamers
		});
		$("input").keypress(function(e){
			if (e.which == 13){
        var search = $("input").val();
        $(".user").hide();
        $(".user:contains('"+search+"')").show();				
			}

		});   
  
	});  
		}
	});
	}
});
