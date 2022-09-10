{
    let i = 1

    function logDiv() {
        console.log('------------' + i + '------------')
        i++
    }
}

function getLog(log) {
    console.log(log)
}
//----------------------------------------//

async function myReq() {
    let x = await fetch('https://random-data-api.com/api/v2/users?size=100')
        .then(function (x) {
            
            x.json().then(function(data){
                getLog(data)
                data.forEach((element,index) => {
                    let result = document.createElement('div')
                    result.setAttribute('class','user')
                    result.innerHTML = `
                    <div>Id = ${data[index].id}</div><br>
                    <span>Name:${data[index].first_name}</span><br>
                    <span>last name:${data[index].last_name}</span><br>
                    <span>Email:${data[index].email}</span><br>
                    <hr>    
                    `
                    document.getElementById('target').appendChild(result)
                });
            })
        }
        )
        
}

document.getElementsByTagName('button')[0].addEventListener('click', myReq)





