const videoElement=document.getElementById('student-video');
navigator.mediaDevices.getUserMedia({video: true})
  .then(stream=>{
    document.querySelector('.camera-heading').textContent='Look into the Camera';
    videoElement.srcObject=stream;
    console.log('working');
    let lat,lon;
    const loc=document.querySelector('.student-location');
    navigator.geolocation.getCurrentPosition((position)=>{
      lat=position.coords.latitude;
      lon=position.coords.longitude;
      loc.innerHTML=`
    Student Current Location<br>
    Latitude= ${lat}, Longitude= ${lon}<br>
    Your are not in the range to give Biometric`;
    });
  })
  .catch(error=>{
    document.querySelector('.error-msg').textContent='Something went wrong! Please check the camera access';
  })