require('dotenv').config();

// whatever the container is that will hold all the vids
const bodyEl = $("#searches");

// whatever the class of the search buttons is
const searchButton = $(".search-button");

async function generateSearch(search) {
    const searchResults = $.ajax({
        method: "GET",
        url: "https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + search + "&type=video&videoDefinition=high&key=" +  process.env.KEY
    })

    const result = await searchResults;
    bodyEl.clear;

    result.items.forEach(video => {
        const videoEmbed = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + video.id.videoId + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        bodyEl.append(videoEmbed);
    })
}

//Event listener that calls generateSearch when a search is clicked

searchButton.on("click", () =>{
    const query = $(this).text();
    generateSearch(query);
})