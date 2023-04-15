// variables
const pi ="3.14";
console.log(pi);
var a = "something";
console.log(a);
console.log(b);
//console.log(c)
var b ="hello world";
//let c ="hi everyone";
//javascript executes line by line if there is any error, For example line no 7 as error it will stop execution on line 7
//line 12 and 13 will not  be executed
const pii ="3.14";
console.log(pii);
//cannot redeclare the variable which are defined using let keyword
//let d="256";
//let d=257;

//variables declared using var keyword
var e = "259"
e=260
console.log(e)

//variables declared using const keyword
//const f=261;
//const f =262;
//console.log()
//Assignment operators
let x=5;
let y=6;
console.log(x+y)
console.log(x-y)
console.log(x/y)
console.log(x%y)
console.log(x--)
console.log(x++)
let p =2
let q=3;
let r =q+=p;
console.log(r)
console.log(q+=p)
console.log(q*=p)
console.log(q/=p)
console.log(q%=p)
console.log(q**=p)
//shift assignment operators
g=12
h=15
console.log(g<<=h)
console.log(g>>=h)
console.log(g>>>=h)
//logical operators
// m=0;
// n=1;
// console.log(m&&n)
// console.log(m||n)
// let x1=2;
// let y1="abc";
// let z1=2;
// console.log(x1==z1)
// console.log(x1===z1)
// console.log(z1==y1)
// console.log(x1==y1)
// console.log(x1===y1)

//pre-increment
x=3
y=++x;
console.log(y)
//postincrement
x1=4
y=x1++
console.log(y)
y=x1
console.log(y)
//strict comparsion
x5=5;
x6='5';
console.log(x5==x6)
console.log(x5===x6)

//logical operators And 
j=1;
k=1;
console.log(j&&=k)
//or
j1=1;
k1=0;
console.log(j1||=k1)
j2=0;
k2=1;
console.log(j2??=k2)
j3=0
k3=1
console.log(j3!=k3)

const person ={
    firstName:"John",
    lastName:"Doe",
    id :5566,
    occupation:"Engineer",
    work: function(){
        console.log(this.firstName +" "+this.lastName+" "+this.occupation)
    },
    Employee_id:function(){
        console.log(this.occupation+" "+this.id)
    },
    Change_of_newjob:function(){
       this.occupation="sr.software Engineer"
       console.log(this.occupation)
    },
    change_of_newid:function(){
        console.log(this.id);
        this.id=5745;
        console.log(this.id);

    }

}
person.Change_of_newjob();
person.change_of_newid();
person.Employee_id()
person.work()
console.log(Math.ceil(Math.random()))