
$("#chatPopover").popover({
	title: `How can we help you?<button id="popoverClose" type="button" class="ml-auto close" aria-label="Close">
		<span aria-hidden="true">&times;</span>
	  </button>`,
	content: `
		  <form>
			<label for="question">Ask a question.</label>
			<input type="text" class="form-control" id="question">
			<button style="margin-top: 0.5rem;" type="submit" class="btn">Submit</button>
		  </form>
		  `,
	html: true,
	placement: "top",
	trigger: "manual"
  }).popover("show");
  
  
  $("body").on("click", "#popoverClose", function() {
	$("#chatPopover").popover("toggle");
	$(".chat").toggleClass("closed-state");
  });
  
  
  $(".chat").click(function() {
	$("#chatPopover").popover("toggle");
	$(this).toggleClass("closed-state");
  });
  

  $("#signUpBtn").click(function() {
  

	var name = $("#firstName").val();
	var name = $("#lastName").val();
	var email = $("#eMail").val();
  
	
	if (email !== "" && name !== "") {
	  $(".modal-title").html("Many thanks for signing up " + name + "-Egg!");
	  $(".modal-body").html("Lazy eggs are on the way!");
	  $(".modal-footer").hide();
	}
	else {
	
	  $("#emailAlert").hide();
	  $("#firstnameAlert").hide();
	  $("#lastnameAlert").hide();
	  
	  if (email === "") {
		$("#emailAlert").show();
	  }
	  if (name === "") {
		$("#firstnameAlert").show();
		$("#lastnameAlert").show();
	  }
	}
  });
  
 
  var cartNumber = 0;
  
  
  $("#addToCart").click(function() {
  
	
	event.preventDefault();
  

	var additionalValue = $("#quantity").val();
  
	
	cartNumber = cartNumber + parseInt(additionalValue);
  
	
	$("#cartItems").html(cartNumber);
  
	
	$("#cartItems").show();
  });
	
 
$('.btn').css({
	'box-shadow': '0 0 3px 3px orange';
	'background-color': 'orangered';
	'color': 'white';
	'border-radius':'50%';
});

$('.product-info').css({
	'border': '0px';
	'border-top': '3px solid orangered';
	'transform': 'scale(1.5)';
	'transition': '1s ease';
	'border-radius': '0';
});


$(".rec-item").click(function() {
	$(this).toggleClass("clicked");
});
 