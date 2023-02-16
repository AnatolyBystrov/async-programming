export class Jopa
{
    constructor(parentClassforvideo)
    {
        this.createVideoPlayer(parentClassforvideo)
    }
    createVideoPlayer(parentClassforvideo)
    {
        const parentElementforvideo = document.querySelector(parentClassforvideo);
        parentElementforvideo.innerHTML =`<video class = video src"" controls widht ="600" height ="400"></video>`;
        this.player = document.querySelector(".video");
    }
    setUrl(url)
    {
        if(!this.player || !url){return;}
        this.player.src =url;
        this.player.style.display = "block";
    }
    async start()
    { try{
       await this.player.play()
    } catch(e){
        alert(`Wrong link ${this.player.play} message: ${e}`)
    }
    stop()
    {
        this.player.pause();
        this.player.style.display = "none";
    }
}
}
