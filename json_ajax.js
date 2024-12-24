$("#fact_div").hide().html(data);

$.ajax({
    type: "GET",
    url: "http://numbersapi.com/14",
    dataType: "text",
})
.done(function(data){
    console.log(data);
    $("#fact_div").show().html(data);
}
).fail(function(data){
    console.log("ERROR");
}
).always(function(){
    console.log("AJAX request ENDED")
}
);

parseInt($("#title").val(), function(){
    alert("будь ласка введіть правильне число");
});