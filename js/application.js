$(document).ready(function() {	
	var $input = $('#url');
	$input.val('http://routehelperserviceelb-1812164016.us-west-2.elb.amazonaws.com:1212/version/');
	
	var $results = $('#results');
	
	var $button = $('#button');
	$button.on('click', function() {
		$.ajax($input.val()).then(function(json) {
			appendResults($results, JSON.stringify(json, null, 4));
		});
	});
	
	function appendResults($div, val) {
		var $result = $('<div class="result">' + val + '</div>').prependTo($div);
		setTimeout(function() {
			$result.fadeOut(1000, function() {
				$result.remove();
			});
		}, 2000);
	}
});
