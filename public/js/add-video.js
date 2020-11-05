
$(".saveplaylist").on("click", function() {
    console.log("Saving...")
    const saveEl = $(this);
    $.get("/api/user_data").then(function(data){
        const newVideo = {
        url: saveEl.siblings().children("iframe").attr("src"),
        user: data.id
    }
    return newVideo;
    }).then(function (newVideo){
        $.post("/api/videos", newVideo);
    })
    
})