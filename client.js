console.log('hello workers!');

$(document).ready(onReady);

let workers = [];

function onReady(){
    $('#addEmployee').on('submit', sendData);
    $('#listEmployee').on('click','.delete', onDelete);
   
    console.log('inOnready');
}
function onDelete(){
    console.log('in onDelete');

    $(this).parent().parent().remove();
}

function sendData(event){
    event.preventDefault();
    console.log('testing sendData');

    let workerInfo = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        iD: $('#iD').val(),
        title: $('#position').val(),
        annualSalary: $('#annualSalary').val()
    }

    cleanUp();

    workers.push(workerInfo);

    console.log(workers);

    render();

}



function render(){
    $('#listEmployee').empty();
    let reportedMoney = 0;
    for(let worker of workers){
        $('#listEmployee').append(`
            <tr>
                <label for="firstN">First Name</lable>
                <td class="firstN">${worker.firstName}</td>
                <label for="lastN">Last Name</lable>
                <td class="lastN">${worker.lastName}</td>
                <label for ="idNumber">ID</label>
                <td class="idNumber">${worker.iD}</td>
                <label for="jobTitle">Title</lable>
                <td class="jobTitle">${worker.title}</td>
                <label for="annulSalary">Annual Salary</label>
                <td for="annulSalary">${worker.annualSalary}</td>
                <td><button class="delete" type="button">Delete</button></td>
            </tr>
        `)
        reportedMoney += (worker.annualSalary/1);
        $('#totalReported').empty();
        $('#totalReported').append(`
            Reported total: ${reportedMoney}
        `)
    }
}


function cleanUp(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iD').val('');
    $('#position').val('');
    $('#annualSalary').val('');
}