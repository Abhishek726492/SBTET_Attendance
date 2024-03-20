document.querySelector('.pin-input').value='';
document.querySelector('.captcha-input').value='';

function generateRandomString()
{
  let result='';
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*';
  for(i=0;i<6;i++)
  {
    let randomIndex=Math.floor(Math.random()*str.length);
    result+=str.charAt(randomIndex);
  }
  return result;
}
const captcha=document.querySelector('.js-captcha');
captcha.innerHTML=generateRandomString();

const buttonElement=document.querySelector('.js-get-button');

buttonElement.addEventListener('click',()=>{markAttendance()});

function markAttendance()
{
  document.querySelector('.error-msg').textContent='';
  if(document.querySelector('.pin-input').value==='1058-22551')
  {
    if(document.querySelector('.captcha-input').value===`${captcha.textContent}`)
    {
      window.location.href="camera-page.html";
    }
    else 
    {
      document.querySelector('.error-msg').innerHTML='Invalid Captcha';
    }
  }
  else
  {
    document.querySelector('.error-msg').innerHTML='Invalid PIN'; 
    document.querySelector('.pin-input').value='';
  }
  document.querySelector('.captcha-input').value='';

  document.querySelector('.js-captcha').textContent=generateRandomString();
}