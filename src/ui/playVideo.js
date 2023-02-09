const res = document.querySelector(".video-player");
const video = document.querySelector(".video");
const submitButton = document.querySelector(".submit");
const linkInput = document.getElementById("link-of-video");
const seconds = document.getElementById("Video-playback-time");

export function event() {
  submitButton.addEventListener("click", function () {
    const link = linkInput.value;
    video.style.display = 'block';
    res.style.display = 'block';
    video.src = link;
    video.play();

    const playTime = seconds.value;
    fun(playTime);
    result(".video-player", playTime);
  });
}

const fun = async (playTime) => {
  await sleep(playTime * 1000);
  seconds.value = "";
  video.pause();
  video.style.display = 'none';
  res.style.display = 'none';
};

function result (parentClass, playTime) {
  const parentElement = document.querySelector(parentClass);
  parentElement.innerHTML = `<div class="result">You will be shown a video lasting ${playTime} seconds</div>`;
}