$(function () {
    $(".eat-btn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed state to", newDevour);
                location.reload();
            }
        );
    });

    $("#submit-btn").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $('#ca').val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log('New Burger Added');
                location.reload();
            }
        );

        // var newBurger = {
        //   name: $("#ca").val().trim(),
        //   devoured: false
        // };

        // $.ajax("/api/burgers", {
        //   type: "POST",
        //   data: newBurger
        // }).then(
        //   function() {
        //     console.log("created new burger");
        //     location.reload();
        //   }
        // );
    });



});

// function eatBurger() {
//     let id = $(this).data("id")
//     let eaten = { devoured: 1 }
//     $.ajax("/api/burgers/" + id, {
//         method: "PUT",
//         data: eaten
//     }).then(function () {
//         console.log("Burger status changed")
//         location.reload()
//     })
// }
// function cookBurger() {
//     let id = $(this).data("id")
//     let eaten = { devoured: 0 }
//     $.ajax("/api/burgers/" + id, {
//         method: "POST",
//         data: eaten
//     }).then(function () {
//         console.log("Burger status changed")
//         location.reload()
//     })
// }
// function deleteBurger() {
//     let id = $(this).data("id")
//     $.ajax("/api/burgers/" + id, {
//         method: "DELETE"
//     }).then(function () {
//         console.log("Burger deleted")
//         location.reload();
//     })
// }