document.querySelector('.cross').style.display='none';

document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('navigation');
    if(document.querySelector('.sidebar').classList.contains('navigation')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline'
},750);
        document.querySelector('.ham').style.display='none'
    }
})
