// contacts.map((contact)=>{
//     var tile= document.createElement('div')
//     tile.className="tile";
//     tile.innerHTML=`<h6 ><div class="name float-left"></div>${contact.FirstName} ${contact.LastName}</h6><h6><div class="mobile float-left"></div>${contact.Mobile}</h6><h6><div class="email float-left"></div>${contact.Email}</h6>`
//     document.querySelector('.tiles').appendChild(tile);
// })
let clicked = 0;
let tileClicked =0;
//Card View
document.querySelector(".list-view").addEventListener("click",()=>{

    let parentList = document.querySelector('.tiles')
    let childrenList = parentList.children
    console.log(childrenList.length)
    if(childrenList.length>0){
        n= childrenList.length
        for(let i = 0; i<n; i++){
        let parent = document.querySelector('.tiles')
        let child = document.querySelector('.tile')
        parent.removeChild(child)
        }
    }
    tileClicked=0
    document.querySelector('.tile-view').classList.remove('selected')


    let stringContact = localStorage.getItem('contact')
    let contacts = JSON.parse(stringContact)
    if(clicked===0){
    contacts.map((contact)=>{
        //Tile
        var tile = document.createElement('div')
        tile.className="list";
        //Left
        let leftContainer= document.createElement('div');
        leftContainer.className='left-container'
        //Right
        let rightContainer= document.createElement('div');
        rightContainer.className='right-container'
        //Name
        let name = document.createElement('h6')
        name.textContent = `${contact.FirstName} ${contact.LastName}`
        name.className="contactname"
        //Mobile
        let mobile = document.createElement('h6')
        mobile.textContent = `${contact.Mobile}`
        mobile.className="mobile"
        //Email
        let email = document.createElement('h6')
        email.textContent = `${contact.Email}`
        email.className="email"
        //adding to left
        leftContainer.append(name,mobile,email)
        //container for contact via call email etc
        let connectWrap= document.createElement('div')
        connectWrap.className="connect-wrap"
        //view contact 
        let viewContact = document.createElement('div')
        viewContact.className="view-contact"
        viewContact.innerHTML='<i class="fa fa-eye" aria-hidden="true"></i>'
        //send email button
        let emailContact = document.createElement('div')
        emailContact.className='email-contact'
        emailContact.innerHTML='<i class="fa fa-envelope" aria-hidden="true"></i>'
        //Call button
        let callContact = document.createElement('div')
        callContact.className="call-contact"
        callContact.innerHTML='<i class="fa fa-phone" aria-hidden="true"></i>'
        connectWrap.append(viewContact,emailContact,callContact)
        //Modifying contact
        let mod = document.createElement('div')
        mod.className='mod'
        //edit
        let editContact=document.createElement('div')
        editContact.className='edit-contact'
        editContact.innerHTML='Edit'
        //delete
        let deleteContact= document.createElement('div')
        deleteContact.className="delete-contact"
        deleteContact.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'
        //adding to mod
        mod.append(editContact,deleteContact)
        //Add to Right container
        rightContainer.append(mod,connectWrap)
        tile.append(leftContainer,rightContainer)
        document.querySelector('.tiles').append(tile);

    })
    clicked++
    document.querySelector('.list-view').classList.add('selected')
}else{
    return false;
}
    document.querySelector('.contact-form').classList.add('hidden')
    document.querySelector('.tiles').classList.remove('hidden')
    document.querySelector(".addnew").classList.remove("hidden")

})

// Tile View

document.querySelector('.tile-view').addEventListener('click',()=>{

    let parentList = document.querySelector('.tiles')
    let childrenList = parentList.children
    console.log(childrenList.length)
    if(childrenList.length>0){
        n= childrenList.length
        for(let i = 0; i<n; i++){
        let parent = document.querySelector('.tiles')
        let child = document.querySelector('.list')
        parent.removeChild(child)
        }
    }
    clicked=0
    document.querySelector('.list-view').classList.remove('selected')

    let stringContact = localStorage.getItem('contact')
    let contacts = JSON.parse(stringContact)
    if(clicked===0){
    contacts.map((contact)=>{
        //Tile
        var tile = document.createElement('div')
        tile.className="tile";
        //Left
        let leftContainer= document.createElement('div');
        leftContainer.className='tile-left-container'
        //Right
        let rightContainer= document.createElement('div');
        rightContainer.className='tile-right-container'
        //Name
        let name = document.createElement('h6')
        name.textContent = `${contact.FirstName} ${contact.LastName}`
        name.className="tile-contactname"
        //Mobile
        let mobile = document.createElement('h6')
        mobile.textContent = `${contact.Mobile}`
        mobile.className="tile-mobile"
        //Email
        let email = document.createElement('h6')
        email.textContent = `${contact.Email}`
        email.className="tile-email"
        //adding to left
        leftContainer.append(name,mobile,email)
        //container for contact via call email etc
        let connectWrap= document.createElement('div')
        connectWrap.className="tile-connect-wrap"
        //view contact 
        let viewContact = document.createElement('div')
        viewContact.className="tile-view-contact"
        viewContact.innerHTML='<i class="fa fa-eye" aria-hidden="true"></i>'
        //send email button
        let emailContact = document.createElement('div')
        emailContact.className='tile-email-contact'
        emailContact.innerHTML='<i class="fa fa-envelope" aria-hidden="true"></i>'
        //Call button
        let callContact = document.createElement('div')
        callContact.className="tile-call-contact"
        callContact.innerHTML='<i class="fa fa-phone" aria-hidden="true"></i>'
        connectWrap.append(viewContact,emailContact,callContact)
        //Modifying contact
        let mod = document.createElement('div')
        mod.className='tile-mod'
        //edit
        let editContact=document.createElement('div')
        editContact.className='tile-edit-contact'
        editContact.innerHTML='Edit'
        //delete
        let deleteContact= document.createElement('div')
        deleteContact.className="tile-delete-contact"
        deleteContact.innerHTML='Delete'
        //adding to mod
        mod.append(editContact,deleteContact)
        //Add to Right container
        rightContainer.append(connectWrap,mod)
        tile.append(leftContainer,rightContainer)
        document.querySelector('.tiles').append(tile);

    })
    tileClicked++
    document.querySelector('.tile-view').classList.add('selected')
}else{
    return false;
}
    document.querySelector('.contact-form').classList.add('hidden')
    document.querySelector('.tiles').classList.remove('hidden')
    document.querySelector(".addnew").classList.remove("hidden")
})




document.querySelector(".addnew").addEventListener("click",()=>{

    document.querySelector('.tiles').innerHTML=''

    // let parentList = document.querySelector('.tiles')
    // let childrenList = parentList.children
    // console.log(childrenList.length)
    // if(childrenList.length>0){
    //     n= childrenList.length
    //     for(let i = 0; i<n; i++){
    //     let parent = document.querySelector('.tiles')
    //     let child = document.querySelector('.list')
    //     let child2 = document.querySelector('.tile')
    //     parent.removeChild(child)
    //     }
    // }
    
//     let parentTile = document.querySelector('.tiles')
//     let childrenTile = parentTile.children
// if(childrenTile.length>0){
//     n= childrenTile.length
//     for(let i = 0; i<n; i++){
//     let parent = document.querySelector('.tiles')
//     let child = document.querySelector('.tile')
//     parent.removeChild(child)
//     }
// }

// let newparent= document.querySelector('.tiles')
// let newchild = newparent.children;
// console.log(newchild.length)
    clicked=0
    tileClicked=0
    document.querySelector('.tile-view').classList.remove('selected')
    document.querySelector('.list-view').classList.remove('selected')
    document.querySelector(".tiles").classList.add("hidden")
    document.querySelector(".addnew").classList.add("hidden")
    document.querySelector(".contact-form").classList.remove("hidden")
})


//Find Contacts Functionality


let filterInput = document.getElementById('findcontact');
filterInput.addEventListener('keyup', filterData);

function filterData(){
    document.querySelector('.tiles').innerHTML=''
    let filterValue= document.getElementById('findcontact').value.toLowerCase();
    console.log(filterValue)
    let stringData=localStorage.getItem('contact')
    let data= JSON.parse(stringData)
    let FilteredList;
    if(filterValue){
    FilteredList= data.filter(dataItem=>{
       return (dataItem.FirstName.toLowerCase()+dataItem.LastName.toLowerCase()).includes(filterValue)
    })}
    else{
        return ;
    }
    console.log(FilteredList)
     
}
