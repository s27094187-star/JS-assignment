//------Q1-------
 let marks = [70,80,65,90,85]  
 let total = 0 
 for(var i = 0; i < marks.length; i++) {
 total = total + marks[i]
 }
 alert(total)
//------Q2-------
let arr = [12,45,2,99,35,4]
let max = arr[0]
let min = arr[0]
for( var i = 0; i < arr.length; i++) {
if (arr[i] > max)
    max = arr[i]
if (arr[i] < min)
    min = arr[i]
}
alert(max)
alert(min)
//-------Q3---------
let names = ['Ali','Ahmed','Sara','Fatima']
let newnm = []
for( var i = names.length - 1; i >= 0; i--)
newnm.push(names[i])
alert(newnm)
//------Q4----------
let students = ['zaid','hania','umer','hania','aiman']
let count = 0
for( var i = 0; i < students.length; i++) {
    if ( students[i] == 'hania' )
        count = count + 1
}
alert(count)
//---------Q5----------
let fruits = ['apple','banana','guava']
fruits.push('mango')
fruits.pop()
alert(fruits)
//---------Q6---------
let cities = ['karachi','lahore','islamabad']
cities.unshift('quetta')
cities.shift()
//--------Q7---------
let colors = ['red','blue','yellow','green','black']
colors.splice(2,1,'white','purple')
alert(colors)
//--------Q8----------
let items = ['pen','book','copy','pencil','eraser','sharpner']
items.slice(1,5)
items.splice(3,2,'marker')
alert(items)


