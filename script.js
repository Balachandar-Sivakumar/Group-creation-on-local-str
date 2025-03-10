let add_btn = document.getElementById('add-email'),
    add_inp = document.getElementById('add_email'),
     members = [];
let local = JSON.parse(localStorage.getItem('data')) || []; 
let adderr = document.querySelectorAll('span');    


    add_btn.addEventListener('click', () => {

        if (add_inp.value === '' || !add_inp.value.includes('@gmail.com')) {
           
            return adderr[0].style.display = 'block';
        }
        if (members.includes(add_inp.value)) {
            return adderr[1].style.display = 'block';
        }
        adderr.forEach(n=> n.style.display='none')
        start(add_inp.value);
    });


function start(n){
   
    members.push(add_inp.value)

    let li = document.createElement('li'),
        para = document.createElement('input');
        para.value=n
        para.setAttribute('readonly','adder');
    let icon = document.createElement('i');
        icon.className="fa-solid fa-xmark";
    
        li.append(para,icon);

        icon.addEventListener('click',()=>{
            li.remove();
            members=members.filter(n=> n!== para.textContent)

        })

    let ul = document.querySelector('.add_member');
    
    ul.append(li);

    add_inp.value='';
}

let full_name = document.querySelector('#full-name'),
    email = document.querySelector('#email'),
    pass = document.querySelector('#password'),
    cnpass = document.querySelector('#confirm-password'),
    phone = document.querySelector('#phone'),
    date = document.querySelector('#dob'),
    gender = document.querySelector('#gender'),
    address = document.querySelector('#address'),
    submit = document.querySelector('#submitt'),
    arr = []


    submit.addEventListener('click',(event)=>{

        event.preventDefault();

        let error = document.querySelectorAll('small');

        if(full_name.value.trim()=='') return error[0].classList.add('error'),error[0].scrollIntoView({block:"center"});
        if(email.value.trim()=="" || !email.value.includes('@gmail.com')) return error[1].classList.add('error'),error[1].scrollIntoView({block:"center"});
        if(pass.value.trim()=='' || pass.value !== cnpass.value) return error[2].classList.add('error'),error[2].scrollIntoView({block:"center"});
        if(pass.value.length<8) return error[3].classList.add('error'),error[3].scrollIntoView({block:"center"});
        if(gender == '') return error[4].classList.add('error'),error[4].scrollIntoView({block:"center"});
        let patrn = /^[6-9][0-9]{9}$/;
        let check = patrn.test(phone.value.trim());
        if (!check) return error[5].classList.add('error'),error[5].scrollIntoView({block:"center"}); 
        if(gender.value=='')return error[6].classList.add('error'),error[6].scrollIntoView({block:"center"});
        if(address.value.trim()=='') return error[7].classList.add('error'),error[7].scrollIntoView({block:"center"}) ;

        error.forEach(n=> n.classList.remove('error'));

        console.log(address.value);
        
    
        let datas =  {
            names : full_name.value,
            email : email.value,
            email_mem : members,
            password : pass.value,
            phone : phone.value,
            date : date.value,
            gender : gender.value,
            address : address.value
            }
    
           let localdatas = JSON.parse(localStorage.getItem('data')) || [];

           localdatas.push(datas)
    
            localStorage.setItem('data',JSON.stringify(localdatas));
        full_name.value=email.value=pass.value=phone.value=date.value=gender.value=address.value=add_inp.value=cnpass.value='';

        let ul = document.querySelector('.add_member');

        ul.innerHTML = ''

        
            adderr.forEach(n=> n.style.display='none')
        
        
    })



