//Script part to populate display with stars of different size and speed

const space = document.querySelector(".space");

function stars()
{   
    let starcount = 35;
    let i = 0;

    while (i < starcount)
    {
        let star = document.createElement("div");
        star.classList.add("star");
        star.innerHTML = "";
        let horizontal = Math.floor(Math.random() * (window.innerWidth / 2)) + 100;
        let vertical = Math.floor(Math.random() * 100);
        let duration = 0.25 + Math.random() * 1;

        star.style.left = horizontal + 'px';
        star.style.height = vertical + 'px';
        star.style.width = "1px";
        star.style.animationDuration = duration + 's';
        space.appendChild(star);
        i ++;
        
    }
}

stars();

//Script part to manage form validation errors 

const phone = document.getElementById("phone");
const phonetxt = document.getElementById("phonetxt");
const mail = document.getElementById("mail");
const mailtxt = document.getElementById("mailtxt");
const pw = document.getElementById("pw");
const pwtxt = document.getElementById("pwtxt");
const cpw = document.getElementById("cpw");
const cpwtxt = document.getElementById("cpwtxt");

phone.addEventListener("input", function(event)
{
    if (phone.validity.patternMismatch)
    {
        phonetxt.textContent = "PLEASE ENTER A 10 DIGIT NUMBER";
    }
    else
    {
        phonetxt.textContent = "";
    }
}
)

mail.addEventListener("input", function(event)
{
    if (mail.validity.typeMismatch)
    {
        mailtxt.textContent = "PLEASE ENTER A VALID EMAIL";
    }
    else
    {
        mailtxt.textContent = "";
    }
}
)

let pwcont;
let result = '';

function checkLetters ()
{
    let i = 0;
    while (i < pwcont.length)
    {
        if ((pwcont[i] >= 'A'  && pwcont[i] <= 'Z') ||  (pwcont[i] >= 'a'  && pwcont[i] <= 'z'))
        {
            return true;
        }
        i ++;
    }
    return false;
}

function checkNum ()
{
    let i = 0;
    while (i < pwcont.length)
    {
        if (pwcont[i] >= '0' && pwcont[i] <= '9')
        {
            return true;
        }
        i ++;
    }
    return false;
}
pw.addEventListener("input", function(event)
{
    pwcont = pw.value;
    result = '';
    if (pw.value)
    {
        if (!checkNum())
        {
            result = result + "Must contain numbers";
            result = result + '<br>';
        
        }
        if (!checkLetters())
        {
            result = result + "Must contain letters";
            result = result + '<br>';
        }
        if (pwcont.length < 5)
        {
            result = result + "Minimum 5 characters";
        }
    }
    pwtxt.innerHTML = result;
}
)

cpw.addEventListener("input", function(event)
{
    cpwtxt.innerHTML = '';
    if (cpw.value)
    {   
        if (cpw.value == pwcont)
        {
            cpwtxt.innerHTML = '';
        }
        else
        {
            cpwtxt.innerHTML = "PASSWORDS DO NOT MATCH";
        }
    }
}
)