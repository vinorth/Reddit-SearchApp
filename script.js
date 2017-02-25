$( document ).ready(function() {
  
    $('.bttn').click(function(){
      
      var query = $('.input').val()

      $.ajax({
        type: "GET",
        url: "https://www.reddit.com/search.json?q=" + query,
        success: function(response){

                console.log("Success");

                $('.content').html(response.data.children.length);

                for(var i = 0; i < response.data.children.length; i++){
                    var rtitle = response.data.children[i].data.title + "</br>";
                    $('.content').append(rtitle );
                }
        }
      
        });
    });
});