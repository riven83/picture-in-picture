const video = document.getElementById("video"),
      button = document.getElementById("button");

button.addEventListener("click", async () => {
  button.disabled = true;

  try {
    if (document.pictureInPictureElement === video) {
      await document.exitPictureInPicture();
      button.innerText = "Attiva picture-in-picture";
    } else {
      await video.requestPictureInPicture();
      button.innerText = "Disattiva picture-in-picture";
    }
  } catch (error) {
    console.log(`Si è verificato un errore: ${error}`);
  } finally {
    button.disabled = false;
  }
});

video.addEventListener("enterpictureinpicture", function(event) { 
  console.log(event);
 });

 video.addEventListener("leavepictureinpicture", function(event) {
   console.log(event);
 });
