const input = document.querySelector('input');
const btn = document.querySelector('.addtask > button');
 btn.addEventListener('click',addList);
function addList(e)
{
    const notcompleted = document.querySelector('.notcompleted');
    const completed = document.querySelector('.completed');

    const newli = document.createElement('li');
    const checkbtn  = document.createElement('button');
    const delbtn = document.createElement('button');

    checkbtn.innerHTML = '<i class = "fa fa-check"></i>';
    delbtn.innerHTML = '<i class = "fa fa-trash"></i>';
    
    input.addEventListener('keyup',(e)=>
    {
        (e.keycode==13? addList(e) :  null);
    })
    if(input.value != '')
    {
        newli.textContent = input.value;
        input.value = '';
        notcompleted.appendChild(newli);
        newli.appendChild(checkbtn);
        newli.appendChild(delbtn);
    } 
    checkbtn.addEventListener('click',function()
    {
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkbtn.style.display = 'none';
    }) 
    delbtn.addEventListener('click',function()
    {
        const parent = this.parentNode;
        parent.remove();
       
    })

}



