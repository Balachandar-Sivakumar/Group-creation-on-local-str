let add_btn = document.getElementById('add-email'),
    add_inp = document.getElementById('add_email'),
     members = [];
let local = JSON.parse(localStorage.getItem('data')) || []; 
let adderr = document.querySelectorAll('span');    

if (add_btn) { 
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
}

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

if(submit){
    submit.addEventListener('click',()=>{

        let error = document.querySelectorAll('small');

        if(full_name.value=='') return error[0].style.display='block';
        if(email.value=="" || !email.value.includes('@gmail.com')) return error[1].style.display='block';
        if(pass.value=='' || pass.value !== cnpass.value) return error[2].style.display='block';
        if(gender == '') return error[3].style.display='block';
        if(phone.value=='') return error[4].style.display='block';
        if(gender.value=='')return error[5].style.display='block';
        if(address.value=='') return error[6].style.display='block';

        error.forEach(n=> n.style.display='none');

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

        if(adderr){
            adderr.forEach(n=> n.style.display='none')
        }
        
    })
}

addEventListener('DOMContentLoaded',()=>{

   local.forEach(n=>{
         tablelist(n)
    })    
});

function tablelist(n){

    let tbody = document.querySelector('tbody');
  if(tbody){
    let tr = document.createElement('tr'),
    admin = document.createElement('td'),
    email = document.createElement('td'),
    members = document.createElement('td'),
    pass = document.createElement('td'),
    phone = document.createElement('td'),
    dob = document.createElement('td'),
    addr = document.createElement('td'),
    del = document.createElement('td'),
    remove = document.createElement('button'); remove.textContent='Delete';

    admin.append(n.names)
    email.append(n.email)
    members.append(n.email_mem == "" ? 'No invites' : n.email_mem.join(', '))
    pass.append(n.password)
    phone.append(n.phone)
    dob.append(n.date)
    addr.append(n.address)
    del.append(remove)

    del.addEventListener('click',()=>{
        tr.remove()
        
        local=local.filter(x=> x.names!==n.names)

        localStorage.setItem('data', JSON.stringify(local))
    })
    
   
    tr.append(admin,email,members,pass,phone,dob,addr,del)
   
    tbody.append(tr)
  }

}

