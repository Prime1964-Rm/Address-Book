
// document.addEventListener('DOMContentLoaded', ()=>{
    
// })

document.querySelector(".findbtn").addEventListener("click",function(){
    document.querySelector(".findbox").classList.toggle("active")
    
})


// finding contact
// document.getElementById('findcontact').onchange = function () {
//     let searchData
//     searchData= (this.value).toString()
//     console.log(searchData)
//     document.getElementById("findcontbtn").addEventListener('click',(searchData)=>{
//    let stringData=localStorage.getItem('contact')
//     let data= JSON.parse(stringData)
//     let filterdata= data.filter((dataItem)=>{
//     dataItem.LastName.includes(searchData)
//    })
//    console.log(filterdata)
// })
// }
// let stringData=localStorage.getItem('contact')
// let data= JSON.parse(stringData)
