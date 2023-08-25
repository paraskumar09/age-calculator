let todayDate=new Date();
let currentMonth=todayDate.getMonth()+1;
let currentYear=todayDate.getFullYear();
let currentDate=todayDate.getDate();
var userMonth;
var userDate;
var userYear;
const daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];

document.getElementById("btn").addEventListener("click",findAge);

function findAge()
{
     userMonth=document.getElementById("months").value;
     userDate=document.getElementById("date").value;
     userYear=document.getElementById("years").value;
     validDate();
     
}


function validDate()
{
    var f=0;
    if(userYear<1 || userYear>currentYear)
    {
        document.querySelectorAll(".hidden")[2].style.visibility="visible";
        document.getElementsByClassName("datepart")[2].classList.add("error");
        document.querySelectorAll("input")[2].classList.add("error");
        f++;
    }
    if(userMonth <1 || userMonth>12)
    {
        document.querySelectorAll(".hidden")[1].style.visibility="visible";
        document.getElementsByClassName("datepart")[1].classList.add("error");
        document.querySelectorAll("input")[1].classList.add("error");
       f++;
    }
    if(userDate <1 || userDate>31)
    {
        document.querySelectorAll(".hidden")[0].style.visibility="visible";
        document.getElementsByClassName("datepart")[0].classList.add("error");
        document.querySelectorAll("input")[0].classList.add("error");
        f++;
    }

    if(userMonth==2 && userDate>28)
    {
        document.querySelectorAll(".hidden")[0].style.visibility="visible";
        document.getElementsByClassName("datepart")[0].classList.add("error");
        document.querySelectorAll("input")[0].classList.add("error");
        f++;
    }

    if(f>0)
    {
        return;
    }
   
        for(var i=0;i<3;i++)
        {
            document.querySelectorAll(".hidden")[i].style.visibility="hidden";
            document.getElementsByClassName("datepart")[i].classList.remove("error");
            document.querySelectorAll("input")[i].classList.remove("error");
        }

        age();
    
}


function age()
{
    var year=currentYear-userYear;
    let month=currentMonth-userMonth;
    let days=currentDate-userDate;
    if(days<0)
    {  
        month--;    
    }
    if(month<0)
    {
        year--;
        month=12+month;  
    }
    if(days<0)
    {
        days=daysInMonth[month-1]+days;
    }
    
    document.querySelectorAll(".num")[0].innerHTML=year;
    document.querySelectorAll(".num")[1].innerHTML=month;
    document.querySelectorAll(".num")[2].innerHTML=days;

}



