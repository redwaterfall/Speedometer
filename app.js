

let speedText = document.querySelector('.speed');
let latText = document.querySelector('.lat');
let lonText = document.querySelector('.lon');



navigator.geolocation.watchPosition(
    position => {
        if(position.coords.speed == null){
            speedText.innerHTML = `${0}`;
        }
        else{
            speedText.innerHTML = `${(position.coords.speed*3.6).toFixed(2)}`;
        }
        latText.innerHTML = `${position.coords.latitude.toFixed(2)}`;
        lonText.innerHTML = `${position.coords.longitude.toFixed(2)}`;
    }
    
  )
