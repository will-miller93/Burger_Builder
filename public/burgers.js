// all of the event handlers for the handlebars
$(function() {
    $('.devour').on('click', function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        var isDevoured = {
            devoured: true
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: isDevoured
        }).then(function() {
            location.reload();
        });
    });

    $('.create-form').on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            location.reload();
        });
    });
});ß