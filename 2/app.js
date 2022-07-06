$(document).ready(function () {
    $("#btn").click(function hide() {

        $("p").hide();
        $("#btn").html("Show");
        $("#btn").attr("class", "bt rounded");
        $(".bt").click(function show() {
        $("p").show();
        $(".bt").html("Hide");
        })

    })

})

// $(document).ready(function () {
//     $("#btn").click(function hide() {

//         $("p").toggle();
//         $("#btn").html("Hide/Show");
       
//     })

// })