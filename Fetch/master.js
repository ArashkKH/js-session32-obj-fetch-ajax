{
    let i = 1
    function logDiv() {
        console.log('------------'+i+'------------')
        i++
    }
}

function getLog(log){
    console.log(log)
}
//----------------------------------------//

async function getFun(){
    // alert('')
    let response = await fetch ('/Fetch/message1.txt').then((answer)=>{
        answer.text().then((data)=>{
            document.getElementById('target').innerHTML = data
        })
    })
}


document.getElementById('click1').addEventListener('click',()=>{
    getFun()
    //why cant i get the text???

})
