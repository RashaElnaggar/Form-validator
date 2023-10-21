const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


//functions

//function to get input Id with  capitalized first letter
function getInputId(input){
  return input.id.charAt(0).toUpperCase(input)+ input.id.slice(1);;
}


// fuctioon when validation succeed

function showSuccess(input){
const formControl = input.parentElement;
formControl.className="form-control success";

}

// function when validation fail

function  showError(input,message){
  const formControl = input.parentElement;
  formControl.className="form-control error";
  const small= formControl.querySelector('small');
  small.innerText=message;
}

//function  to check email format

function checkEmail(email){
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   // const re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(re.test(email.value.trim())){
            showSuccess(email);
          }
          else {
            
            showError(email,' Enter correct E-mail  format');
          }          }
    
  // function to check length of input data

function checklength(input,min,max){
   if(input.value.length<min){
        showError(input,`${getInputId(input)} should be at least ${min} `);
    }
    else if(input.value.length>max){
       showError(input,`${getInputId(input)} should be less than ${max} `);
     }
    else
    showSuccess(input);
    }
    // function to check password confirm
    function checkPassConfirm(input1,input2){
      if(input1.value.toLowerCase()===input2.value.toLowerCase()){
        showSuccess(input2);
      }
      else{
        showError(input2,`${getInputId(input2)} should be the same as  first password `)
      }
    }

//function to check field is entered

function checkEntries(entries){
  entries.forEach(function(input){
console.log(input.id);
    if(input.value.trim()){
     showSuccess(input);
    }

    else{
     showError(input,`${getInputId(input)} format is not accepted`);
    }
  });

}
form.addEventListener('submit',function(e){
   e.preventDefault();
   checkEntries([username,email,password,password2]);
   checkEmail(email);
   checklength(username,8,20);
   checklength(password,6,15);
   checkPassConfirm(password,password2);

  // if(username.value==='')
  // {
  // showError(username,'username  is required');
  // }
  // else
  // {
  // showSuccess(username);
  // }
  // if(email.value==='')
  // {
  // showError(email,'E-mail  is required');
  // }
  // else if(!checkEmail(email.value)){
  //    showError(email,' Enter correct E-mail  format');
  //  }
  //  else {
  //    showSuccess(email);
  //  }
  // if(password.value===''){
  // showError(password,'Password  is required');
  // }
  // else{
  // showSuccess(password);
  // }
  // if(password2.value===''){
  // showError(password2,'Retype password  is required');
  // }
  // else{
  // showSuccess(password2);
  // }

});