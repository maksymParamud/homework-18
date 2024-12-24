$.ajax({
    type: "GET",
    url: "http://numbersapi.com/14",
    dataType: "text",
})
.done(function(data){
    console.log(data);
}
).fail(function(data){
    console.log("ERROR");
}
).always(
    console.log("AJAX request ENDED")
);