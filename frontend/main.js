window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount();
})


const azureFunctionApi ='https://getresumecounterhimanshu.azurewebsites.net/api/GetResumeCounter?code=S3mx2ecQ_HgwlLf5OumTQWfNsrQ5zu7CpKygs3MmsB5uAzFuL_FJLg==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () =>{
    let count = 30;
    fetch(azureFunctionApi).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("The function api is called");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

    
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  