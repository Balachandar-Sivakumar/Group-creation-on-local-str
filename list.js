let local = JSON.parse(localStorage.getItem('data')) || []; 

addEventListener('DOMContentLoaded',()=>{

    local.forEach(n=>{
          tablelist(n)
     })    
 });
 
 function tablelist(n){
 
     let tbody = document.querySelector('tbody');
   
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
   
 
 };
 


