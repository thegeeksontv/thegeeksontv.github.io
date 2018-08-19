$(document).ready(function(){
	$(document).on('submit', '#newsletterForm', function() {
		var email = $('#inputEmail').val();

		firebase.database().ref('mailing_list/').set({
			email: email 
		}, function(error) {
			if (error) {
				toastr.error('An error occured!')
			} else {
				toastr.success('The write was successful');
			}
		})
		
		return false;
		/*
			check if email exist
			if email exist tell user they already subscried 
			else 
				thank user for subscribing
		*/
		
	});
});