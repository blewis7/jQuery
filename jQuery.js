console.log("Let's get ready to party with jQuery!");

$("article img").addClass('image-center');

$('p').get(5).remove();

$('#title').css('font-size', Math.random() * 100);

$('ol').append('<li>New list item!!!</li>');

$('aside').empty().append("<p>Sorry about that list's esistence!</p>");

$(".form-control").on("change", function(){
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
});

$('img').on('click', function(e){
    $(e.target).remove();
});




