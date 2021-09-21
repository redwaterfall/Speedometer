

let speedText = document.querySelector('.speed');
let latText = document.querySelector('.lat');
let lonText = document.querySelector('.lon');

navigator.geolocation.watchPosition(
    position => {
        if(position.speed == undefined){
            speedText.innerHTML = `${0}`;
        }
        else{
            speedText.innerHTML = `${position.speed}`;
        }
        latText.innerHTML = `${position.coords.latitude.toFixed(2)}`;
        lonText.innerHTML = `${position.coords.longitude.toFixed(2)}`;
    }
    
  )
