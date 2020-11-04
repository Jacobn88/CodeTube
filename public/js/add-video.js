
$(".saveplaylist").on("click", function() {
    const newVideo = {
        url: $(this).siblings().children("iframe").attr("src")
    }
    $.post("/api/videos", newVideo)
        .then(function(){
            console.log("Video added to saved vids")
        })
})