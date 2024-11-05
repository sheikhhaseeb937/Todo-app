// Todo App
// var input = document.getElementById('inp')
// var parent = document.getElementById('parent')
// console.log(parent, input)
// function addTodo(){
//    console.log(input.value)
//    // create li element
//    var li = document.createElement('li')
//    //create li text
//    var liTxt = document.createTextNode(input.value)
//    //set class li
//    li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
//    // relation li parent to li text
//    li.appendChild(liTxt)
//    var div = document.createElement('div')
//    div.setAttribute('class', 'd-flex gap-4')
//    //create edit button
//    var editBtn = document.createElement('button')
//    //create edit button text
//    var editBtnTxt = document.createTextNode('Edit Todo')
//    editBtn.setAttribute('class', "btn btn-info")
//    editBtn.setAttribute('onclick', "editbutton(this)")
//    editBtn.appendChild(editBtnTxt)
//    div.appendChild(editBtn)
 
//    var delBtn = document.createElement('button')
//    var delBtnTxt = document.createTextNode("Delete todo")
//    delBtn.setAttribute('class', 'btn btn-danger')
//    delBtn.setAttribute('onclick', "deleteTodo(this)")
//    delBtn.appendChild(delBtnTxt)
//    div.appendChild(delBtn)
  
//    li.appendChild(div)
//    parent.appendChild(li)
// }
// function deleteAll(){
//     parent.remove()
// }
// function deleteTodo(ele){
//     var liRem = ele.parentNode.parentNode
//     console.log(liRem)
//     liRem.remove()
// }

// // function editbutton (editbutton){
// //    var btnedit =editbutton.parentNode.parentNode
// //    console.log(btnedit)
// // var inp = prompt("eb")
// // console.log(inp)
// // btnedit.value= inp

// // }
var day = document.getElementById('top')
console.log(day)
var h1 = document.createElement('h1')
h1.setAttribute('class','h1')
var date = new Date()
var time = date.getDay()
var week_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
var NameDay = week_days[time]
var texth1= document.createTextNode(NameDay)
h1.appendChild(texth1)
day.appendChild(h1)

var fulldate = new Date()
var fulltime = date.toDateString()
var p = document.createElement('p')
var textp= document.createTextNode(fulltime)
 p.appendChild(textp)
 day.appendChild(p)
 p.setAttribute('class','p')



// day.appendChild(h1)
// h1 = time
// console.log(time)
   
console.log(texth1)

// var day = date.getDay()
// console.log(day)



var input = document.getElementById('inp')
var listparsent = document.getElementById("listP")
console.log(input,listparsent)
function addTodo(){
    console.log(input.value)


    if(!input.value){
     alert('field are required')
        return
           }
    // create li element
   var li = document.createElement('li')

//    //create li text
   var liTxt = document.createTextNode(input.value)
//    //set class li
   li.setAttribute('class', 'list-group-item  d-flex justify-content-between align-items-center')
 
//    relation li parent to li text
   li.appendChild(liTxt)

  









var div = document.createElement('div')

div.setAttribute('class', 'd-flex gap-4')

var checkBox = document.createElement('input')
checkBox.setAttribute('type','checkbox')
checkBox.setAttribute('onclick' , 'done(this)')

div.appendChild(checkBox)
var fulldate = new Date()
var fulltime = date.toDateString()
var p = document.createElement('p')
var textp= document.createTextNode(fulltime)
p.appendChild(textp)
div.appendChild(p)
 p.setAttribute('class','timelitext')

var editBtn = document.createElement('img')
//    //create edit button text
//    var editBtnTxt = document.createTextNode('Edit Todo')
   editBtn.setAttribute('src', "./edit button.png")
   editBtn.setAttribute('width','30px')
   editBtn.setAttribute('height','30px')

   editBtn.setAttribute('onclick', "edit(this)")
//    editBtn.appendChild(editBtnTxt)
   div.appendChild(editBtn)


      var delBtn = document.createElement('img')
//    var delBtnTxt = document.createTextNode("Delete todo")
   delBtn.setAttribute('src', './close_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.png')
   delBtn.setAttribute('width','30px')
   delBtn.setAttribute('height','30px')
   delBtn.setAttribute('onclick', "deleteTodo(this)")
//    delBtn.appendChild(delBtnTxt)
   div.appendChild(delBtn)


      li.appendChild(div)
   listparsent.appendChild(li)

   input.value = ""

 
  
}
function alldel(){
   listparsent.remove()
   }
   function deleteTodo(ele){
        var liRem = ele.parentNode.parentNode
        console.log(liRem)
        liRem.remove()
    }
    function edit(ele){
var editlist = ele.parentNode.parentNode.firstChild.nodeValue
console.log(editlist)
var inp = prompt("enter edit todo",editlist)
console.log(inp)
ele.parentNode.parentNode.firstChild.nodeValue = inp
    }

function done(ele){
var check = ele.parentNode.parentNode
console.log(check)
check.setAttribute("class","done")


}






