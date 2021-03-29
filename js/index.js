setInterval(setClock, 1000);

const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");
function setClock(){
    let d = new Date();

    const secondsRatio = d.getSeconds() /60;
    const minutesRatio = (secondsRatio + d.getMinutes())/60;
    const hoursRatio = (minutesRatio + d.getHours())/12;

      setRotation(secondHand , secondsRatio);
        setRotation(minuteHand , minutesRatio);
          setRotation(hourHand , hoursRatio);
}

function setRotation(element , rotationRatio){
  element.style.transform = `rotate(${rotationRatio*360}deg)`;
}
