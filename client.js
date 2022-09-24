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
    for(let worker of workers){
        $('#listEmployee').append(`
            <tr>
                <td>${worker.firstName}</td>
                <td>${worker.lastName}</td>
                <td>${worker.iD}</td>
                <td>${worker.title}</td>
                <td>${worker.annualSalary}</td>
                <td><button class="delete" type="button">Delete</button></td>
            </tr>
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