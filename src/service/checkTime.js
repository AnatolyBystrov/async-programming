import { videoConfig } from "../config/videoConfig.js";

export function checkPlayingTime(time){
    if(time >= videoConfig.minTime && time <= videoConfig.maxTime){
        return true;
    }
    alert(`Playing time should be between from ${videoConfig.minTime} untill ${videoConfig.maxTime}`)
    return false;
}

// import { videoConfig } from "../../config/video_config.js";


// export function checkPlayingTime(time) {    
//     if (time >= videoConfig.minTime && time <= videoConfig.maxTime) {
//         return true;
//     }
//     alert (`Playing time should be between  from ${videoConfig.minTime} until  ${videoConfig.maxTime}.`)
//     return false;
// }