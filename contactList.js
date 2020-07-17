// const a= Array.from(document.querySelectorAll('#contact-form input')).reduce((acc,input)=>({
// ...acc,
// [input.id]:input.value
// }),{})

// console.log(a)


const addContact = (e)=>{
    let contactData=[];
    let oldData = JSON.parse(localStorage.getItem('contact'));
    if(oldData){
        contactData = oldData;
    }
    console.log(contactData);
    let firstname = document.getElementById('FirstName').value
    let lastname = document.getElementById('LastName').value
    let countrycode = document.getElementById('CountryCode').value
    let mob= document.getElementById('Mobile').value
    let email= document.getElementById('Email').value
    let errorElement = document.getElementById('error');
    let contactType = document.getElementById('ContactType').value;
    let stringCountryCode= countrycode.toString()
    let stringContact = mob.toString()
    let date = document.getElementById('birthday').value
    let stringDate = date.toString()

  

    let message = ""
    if(firstname.length===0){
        message='Firstname is required'
        e.preventDefault()
        errorElement.innerHTML= message
        document.querySelector('.error').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector(".error").classList.add("hidden")}, 4000)
    }
    else if(firstname.length > 25){
        message='Firstname can\'t be larger than 25 characters'
        e.preventDefault()
        errorElement.innerHTML = message
        document.querySelector('.error').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector(".error").classList.add("hidden")}, 4000)
    }else
    if(lastname.length===0){
        message='Lastname is required'
        e.preventDefault()
        errorElement.innerHTML= message
        document.querySelector('.error').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector(".error").classList.add("hidden")}, 4000)
    }
    else if(lastname.length>25){
        message='Lastname can\'t be longer than 25 characters'
        e.preventDefault()
        errorElement.innerHTML = message
        document.querySelector('.error').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector(".error").classList.add("hidden")}, 4000)
    }
    else if(stringCountryCode.length===0){
        message='CountryCode is required'
        e.preventDefault()
        errorElement.innerHTML= message
        document.querySelector('.error').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector(".error").classList.add("hidden")}, 4000)    
    }
     else if(stringCountryCode.length >3){
        message='Please Enter a Valid Country Code'
        e.preventDefault()
        errorElement.innerHTML = message
        document.querySelector('.error').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector(".error").classList.add("hidden")}, 4000)
    }
    else if(stringContact.length===0){
        message='Mobile number is required'
        e.preventDefault()
        errorElement.innerHTML= message
        document.querySelector('.error').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector(".error").classList.add("hidden")}, 4000)
    }
    else if(stringContact.length>10||stringContact.length<10){
        message='Please Enter a Valid Mobile Number'
        e.preventDefault()
        errorElement.innerHTML = message
        document.querySelector('.error').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector(".error").classList.add("hidden")}, 4000)    
    }else if(stringDate.length===0){
        message='Please fill your Date of Birth'
        e.preventDefault()
        errorElement.innerHTML= message
        document.querySelector('.error').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector(".error").classList.add("hidden")}, 4000)    
    }
    else if(email.length===0){
        message='email is required'
        e.preventDefault()
        errorElement.innerHTML= message
        document.querySelector('.error').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector(".error").classList.add("hidden")}, 4000)
    }
    else if(email.length>30){
        message='email can\'t be longer than 30 characters'
        e.preventDefault()
        errorElement.innerHTML = message
        document.querySelector('.error').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector(".error").classList.add("hidden")}, 4000) 
    }
    
    // if(message.length >0){
    //     e.preventDefault()
        
    // }

    e.preventDefault();
    
    if(message.length===0){
        let id= Math.floor((Math.random() * 10000) + 1);
        let contact={
            FirstName :  firstname,
            LastName : lastname ,
            Mobile: mob,
            Email: email,
            ContactType: contactType,
            countrycode: countrycode,
            birthday: date,
            id: id
        }
        contactData.push(contact);
        let contactObjToString= JSON.stringify(contactData)
    
        localStorage.setItem('contact', contactObjToString)
    
        console.log(contactObjToString)
        document.forms[0].reset();
        //or
        // document.querySelector('.contact-form').reset();
        console.warn('added',{contactData});
        document.querySelector('.validated').classList.remove('hidden')
        // document.querySelector('.error').classList.add('fade')
        setTimeout(function(){document.querySelector('.validated').classList.add('hidden')}, 4000)
        
    }
    
}
    
    document.getElementById('save').addEventListener('click',addContact)
    

    

    