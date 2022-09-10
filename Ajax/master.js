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

document.getElementsByTagName('button')[0].addEventListener('click',()=>{
    const myReq = new XMLHttpRequest()
    myReq.onload = function(){
        document.getElementById('target').innerHTML = this.responseText;
    }

    myReq.open('get','test.txt')
    myReq.send()
})

document.getElementsByTagName('button')[1].addEventListener('click',()=>{
    const myReq2 = new XMLHttpRequest()
    let inp = document.getElementById('testInp').value
    if(inp == null || inp ==''){
        document.getElementById('target2').innerHTML = 'Please Enter a Value'
    }else{
        myReq2.onload = function(){
            document.getElementById('target2').innerHTML = myReq2.responseText
        }
        myReq2.open('GET','sample.php?inputvar='+inp)
        myReq2.send()
    }
})