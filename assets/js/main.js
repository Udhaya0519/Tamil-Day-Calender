

const formEl = document.querySelector(".input_section")

const dateInputEl = formEl.elements[0]

const calenderBtn = formEl.elements[1]

const calenderImageEl = document.querySelector(".calender-image");



(function displayDefaultCalender(){
    const fullDate = new Date()
    
    let currentDate = fullDate.getDate();
    let currentMonth = fullDate.getMonth() + 1;
    const currentYear = fullDate.getFullYear();

    if(currentDate.toString().length === 1){

        currentDate = "0" + currentDate
        
    }
    if( currentMonth.toString().length === 1){

        currentMonth = "0" + currentMonth

    }


    calenderImageEl.src = `https://srirangaminfo.com/cal/${currentYear}/big/${currentDate}${currentMonth}.jpg`




})();



function displayCalender(){

    let dateReceived = dateInputEl.valueAsDate.getDate()
    let monthReceived = dateInputEl.valueAsDate.getMonth() + 1
    const yearReceived = dateInputEl.valueAsDate.getFullYear()
    

    if(dateReceived.toString().length === 1){

        dateReceived = "0" + dateReceived
        
    }
    if( monthReceived.toString().length === 1){

        monthReceived = "0" + monthReceived

    }

    
    const fullDate = new Date()
    const currentYear = fullDate.getFullYear();



    if(Number(yearReceived) < 2012 || Number(yearReceived) > Number(currentYear)){

        alert(`We only have Calenders from 2012 to ${currentYear}`)
        
    }
    else{

        const loader = document.querySelector("#loader")

        loader.classList.remove("hidden")
    
        calenderImageEl.classList.add("hidden")
        
    
        calenderImageEl.onload = () => {
            loader.classList.add("hidden")
            calenderImageEl.classList.remove("hidden")
            
        }
    
        calenderImageEl.onerror = () => {
            loader.classList.add("hidden")
            
        }
        
        calenderImageEl.src = `https://srirangaminfo.com/cal/${yearReceived}/big/${dateReceived}${monthReceived}.jpg`
        
    }


}


function handleFormSubmit(event){

    event.preventDefault();

    displayCalender();
    
    
}

formEl.addEventListener("submit", handleFormSubmit)
