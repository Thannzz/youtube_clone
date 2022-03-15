/* https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=motivation&key=[YOUR_API_KEY] 

    AIzaSyD4ocUU34-6jUbiBAdp2xeCcvZIm4iFmxM


*/

const searchVideos = async ()=>{
    try{
        let inp = document.getElementById("search").value;

        let res = await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyD4ocUU34-6jUbiBAdp2xeCcvZIm4iFmxM&maxResults=50`)

        // console.log(res)

        let data =  await res.json()

        let videos = data.items;



        appendvideos(videos);

        console.log("data :",videos)
    }

    catch (error)  {
        // console.log("error :",error);
    }
}

const searchResultsDiv = document.getElementById("searchresults")


const appendvideos = (elem) =>{


    searchResultsDiv.innerHTML = null ;

        elem.map(({snippet :{title,channelTitle},id :{ videoId} })=>{
            let div = document.createElement('div');
            div.setAttribute("class","box")
   
   
            let name  = document.createElement("p");
            name.innerHTML=title
            name.setAttribute("class","name")
   
            let channelName = document.createElement("p");
            channelName.innerHTML=channelTitle
   
            let iframe = document.createElement("iframe");
            iframe.src=`https://www.youtube.com/embed/${videoId}`;
            // iframe.src=thumbnails.default;
            iframe.setAttribute("class","view")
            iframe.allow = "fullscreen";
            
            div.append(iframe,name,channelName)
            searchResultsDiv.append(div);

            div.onclick = ()=> {
                console.log("on")
                video(videoId)
                    }
    });

}

if(localStorage.getItem("videoPage")===null)
{
    localStorage.setItem("videoPage",JSON.stringify([]))
}


function video(p) {

    
    console.log(p)

    var videopage = JSON.parse(localStorage.getItem("videoPage"));
    
    videopage = [];
    
    videopage.push(p);

    // console.log(videopage)
    
    var qunat = 1 ;
    
    localStorage.setItem("videoPage", JSON.stringify(videopage));
    
    window.location.href = "video.html";
    }


