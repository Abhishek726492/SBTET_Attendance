document.querySelector('.pin-input').value='';
document.querySelector('.captcha-input').value='';

const tablesElement=document.querySelector('.all-tables-data');

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

buttonElement.addEventListener('click',()=>{displayAllTables()});

function displayAllTables()
{
  if(document.querySelector('.pin-input').value==='22001-CS-111')
  {
    if(document.querySelector('.captcha-input').value===`${captcha.textContent}`)
    {

        tablesElement.innerHTML=`
    <div class="attendance-details-heading">Student Attendance Summary</div>
        <table class="student-details">
          <thead>
            <tr>
              <th>PIN</th>
              <th>NAME</th>
              <th>ATTENDEEID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22001-CS-111</td>
              <td>THOKALA ABHISHEK</td>
              <td>1058-22551</td>
            </tr>
          </tbody>
        </table>

        <table class="college-details">
          <thead>
            <tr>
              <th>COLLEGE CODE</th>
              <th>BRANCH CODE</th>
              <th>SEMESTER</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>CS</td>
              <td>4SEM</td>
            </tr>
          </tbody>
        </table>

        <table class="present-attendance-details">
          <thead>
            <tr>
              <th>WORKING DAYS</th>
              <th>NUMBER OF DAYS PRESENT</th>
              <th>ATTENDANCE PERCENTAGE(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>68</td>
              <td>60</td>
              <td>88</td>
            </tr>
          </tbody>
        </table>

        <table class="total-attendance-details">
          <thead>
            <tr>
              <th>TOTAL WORKING DAYS CONSIDERED FOR EXAMS</th>
              <th>ACTUAL WORKING DAYS PRESENT</th>
              <th>ATTENDANCE % TO BE CONSIDERED FOR EXAMINATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>90</td>
              <td>60</td>
              <td>67</td>
            </tr>
          </tbody>
        </table>

        <div class="main-container">
          <table class="main-attendance-table">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
    `;
    let table=document.querySelector('.main-attendance-table');
    let headerRow=table.rows[0];

    for(let i=3;i<=33;i++)
    {
      let th=document.createElement('th');
      th.textContent=i-2;
      headerRow.appendChild(th);
    }

    let s=1;
    const months=['December','January','February','March'];
    let tbody=table.getElementsByTagName('tbody')[0];
      for(let j=0;j<4;j++)
      {
        let row=tbody.insertRow(j);
        for(let k=0;k<33;k++)
        {
          let cell=row.insertCell(k);
          cell.textContent="-";
          if(k===0)
          cell.textContent=s++;
          if(k===1)
          cell.textContent=months[s-2];
        }
      }

    }
    else 
    {
      document.querySelector('.all-tables-data').innerHTML='Invalid Captcha';
    }
  }
  else
  {
    document.querySelector('.all-tables-data').innerHTML='Invalid PIN'; 
    document.querySelector('.pin-input').value='';
  }
  document.querySelector('.captcha-input').value='';

  document.querySelector('.js-captcha').textContent=generateRandomString();

}

