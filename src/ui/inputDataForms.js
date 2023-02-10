import { videoConfig } from "../config/videoConfig.js";
import { checkPlayingTime } from "../service/checkTime.js";
import { sleep } from "../utils/sleep.js";
import { Jopa } from "./video_player.js";

export class DataForm
{
   submitButton;
    select;
    constructor(parentElementClass)
    {
        this.creatForm(parentElementClass);
        this.creatLinksForSelect();
        this.player = new Jopa (".video-player");
        
    }
    creatForm(parentClassforinput)
    {
        const parentElementforinput = document.querySelector(parentClassforinput);
        parentElementforinput.innerHTML=`
        <div class="form-select-group"><label>Select video</label><select name="video" id="select-video" class="form-select"><option value="uuuu"></option></select></div>
        <input type="number" id="Video-playback-time" placeholder="Video playback time (seconds)">
        <button class = "submit" type="submit">Submit</button>`;  
    }
    creatLinksForSelect()
    {
        this.select = document.getElementById("select-video");
        this.select.innerHTML = videoConfig.videoLinks.map((video, index) =>
        `<option value="${video}">Link-${index+1}</option>`)
    }
    addHandler()
    {
        this.timeInput=document.getElementById("Video-playback-time");
        this.submitButton = document.querySelector(".submit");
        this.submitButton.addEventListener("click",async()=>
        {
        if(!checkPlayingTime(this.timeInput.value)){return;}
        const link = this.select.value;
        this.player.setUrl(link);
        this.player.start();
        await sleep(this.timeInput.value*1000)
        this.player.stop()
        })
    }
  
}