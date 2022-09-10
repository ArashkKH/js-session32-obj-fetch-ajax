{
    let i = 1
    function logDiv() {
        console.log('------------'+i+'------------')
        i++
    }
}

function getLog(log) {
    console.log(log)
}
//----------------------------------------//


// import chalk from 'chalk';


const me = {
    name: 'arash',
    lastName: 'kheirollahi',
    father: 'Mehrdad',
    brother: 'Armin',
    numbers: [1, 2, 3, 4, 5],
    fullname: function () {
        getLog(this.name + '-' + this.lastName)
    }
}

getLog(me.name)
logDiv()

Object.keys(me).map(function (key, index) {
    getLog(key + ':' + me[key] + '-' + index)
})
logDiv()

for (key in me) {
    getLog(key + ':' + me[key])
}
logDiv()

getLog(me.numbers[0])
logDiv()

const me2 = new Object()
getLog(me2)
logDiv()

me2.id = 213
getLog(me2)
logDiv()

// getLog('hello')
// getLog(chalk.blue(123456789))

me.fullname()

me.lastOnly = function () {
    getLog(this.lastName)
}

me.lastOnly()
logDiv()

delete me.name
me.fullname()
logDiv()

getLog(me.name)

Object.defineProperty(me, 'name', {
    value: 'Arash'
})

getLog(me.name) //yay :D
logDiv()


getLog(me.test)

Object.defineProperty(me, 'test', {
    get: function () {
        this.name = 'ali';
        getLog(this.name)
    }
})

me.test
logDiv()

//defining object with function

function me3Function(name, lname, age) {
    this.name = name
    this.lname = lname
    this.age = age
}

const me3 = new me3Function('Arash', 'Kheirollahi', '21')

getLog(me3);

for(key in me3){
    getLog(key + ':'+ me3[key])
}
logDiv()

me3Function.prototype.id = 4684984
getLog(me3)
const Armin = new me3Function('Armin','Kheirollahi','15')
getLog(Armin)
for(key in Armin){
    getLog(Armin[key])
}

//prototype doesn't actually add an argument to the object but you will be able to access that temporarly object!!
logDiv()

const numSet = {
    // firstNum:42,
    // secNum:24,
    // thirdNum:11
}
Object.defineProperties(numSet,{
    firstNum:{
        value: 42
    },
    secNum:{
        value: 24
    },
    thirdNum:{
        value:11
    }
})
getLog(numSet)

const addSet = {
    sumall:function(){
        return (this.firstNum + this.secNum + this.thirdNum)
    }
}
// Object.defineProperty(addSet,'sumall',{
//     get: function(){
//         return this.firstNum
//     }
// })
getLog(addSet.sumall.call(numSet))
//⚠⚠ you cant use 'call' method on Defined function properties !!
logDiv()

getLog(
    `
    _____End of Object Exercises_____
    `
)