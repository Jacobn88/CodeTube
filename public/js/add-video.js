// A parent div will need to go around the video and its save button so that they're siblings exclusively
// Div called "video"

$(".video").on("click", function() {
    const newVideo = {
        url: $(this).siblings("iframe").attr("src")
    }
    $.post("/api/videos", newVideo)
        .then(function(){
            console.log("Video added to saved vids")
        })
})