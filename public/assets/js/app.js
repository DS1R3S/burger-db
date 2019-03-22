$(document).ready(function () {
    
    $(".eat-btn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax(  {
            type: "PUT",
            data: newDevourState,
            url: "/burgers/" + id
        }).then(
            function () {
                console.log("changed state to", newDevour);
                location.reload();
            }
        );
    });

    $(".submit-btn").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $('#burger-name').val().trim(),
            // devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax( {
            type: "POST",
            data: newBurger,
            url: '/burgers'
        }).then(
            function () {
                console.log('New Burger Added');
                location.reload();
            }
        );


    });

});
