const url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyB5DSWuaRUJg-eTmANM4tA8Scauz4vtLSg&maxResults=24`
// AIzaSyB0nijAw0nOkDEX0aui5DU9rUqtaPe
let videoContainer= document.getElementById("videoContainer");
let apiObj =[];

async function getData(){
   try {
    let response = await fetch(url,{
        method: "get"})
    let data = await response.json()
   const arr = data.items
   buildData(arr)
    
   } catch (error) {
    alert( "unabe to fetch data ,"+ error.message)
   }

}

getData()

function buildData(s){

   s.forEach(itm => {
const obj =  {
        videoId:itm.id,
        varified:itm.contentDetails.caption,
        videoTitle:itm.snippet.localized.title,
        description:itm.snippet.description,
        channelName:itm.snippet.channelTitle,
        channelId:itm.snippet.channelId,
        publishDate:itm.snippet.publishedAt,
        thumbnail:itm.snippet.thumbnails.medium.url,
        commentCount:itm.statistics.commentCount,
        likeCount:itm.statistics.likeCount,
        viewCount:itm.statistics.viewCount
    }
    apiObj.push(obj)
});

render(apiObj)

 
}

// console.log(apiObj)


function render(apiObj){

    apiObj.forEach((item)=>{

     
 let videoCard =document.createElement("div");
        videoCard.className="videoCard"
        videoCard.innerHTML=` <img onclick="infoShow('${item.videoId}')" class="thumbnail" src="${item.thumbnail}" alt="">
                            <div class="videoInfo">
                                <img style="width: 40px; height: 40px;" src="icons/profileBlue.png" alt="..." class="dp">
                                <div onclick="infoShow('${item.videoId}')" class="info">
                                    <p  id="title">${item.videoTitle}</p>
                                    <p class="channelName">${item.channelName} </p>
                                    <span>${item.viewCount} </span><span>&bullet;</span><span>${item.publishedAt} </span>
                                </div>
                            </div>
        `
        
        
        videoContainer.appendChild(videoCard)
        
        
        
        
        })
}




function infoShow(vdata) {
    localStorage.setItem("videoId", vdata);
    window.open("content.html");
  }



// search results



let query = ""

function searchData(){
query =document.getElementById("search").value;

localStorage.setItem("searchTerm", query);
window.open("searchresults.html");
}



        




// click rendering api 

// let videoParameter = `YpRinf33fBE`
// //(id)

// // let query = `udd ja kaa
// async function Data(){
//     let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoParameter}&key=AIzaSyB0nijAw0nOkDEX0aui5DU9rUqtaPe0nXE`)
//     let data = await response.json()
//    const arr = data.items
//    console.log(arr)



// }
// Data()
