/**
 * Created by Alexandra.Soare on 6/27/2017.
 */
var employeeList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500,
        euroValue: null
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500,
        euroValue: null
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500,
        euroValue: null
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500,
        euroValue: null
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500,
        euroValue: null
    }
];
var ifshow = false;
var ifsalary = false;
var salInEuro = false;

function showList() {
    var myTable = '<table class = "table table-hover"><tr><th>First Name</th> <th>Last Name</th> <th>Phone</th>' +
        '<th>Salary</th><th>    </th><th>   </th></tr>';

        for(var i in employeeList) {

        if(salInEuro)
            myTable += '<tr><td>' +employeeList[i].firstName + '</td><td>'
                +employeeList[i].lastName + '</td><td>'
                +employeeList[i].phone + '</td><td>'
                +employeeList[i].euroValue.toFixed(2) + '</td><td>'
                + '<p> <button onclick=\"visRow(' + i + ')\"> Vizualizare </button></p>' + '</td><td>'
                + '<p> <button onclick=\"delRow(' + i + ')\"> Stergere </button></p>' + '</td></tr>';
        else
            myTable += '<tr><td>' +employeeList[i].firstName + '</td><td>'
                    +employeeList[i].lastName + '</td><td>'
                    +employeeList[i].phone + '</td><td>'
                    +employeeList[i].salary  + '</td><td>'
                + '<p> <button onclick=\"visRow(' + i + ')\"> Vizualizare </button></p>' + '</td><td>'
                + '<p> <button onclick=\"delRow(' + i + ')\"> Stergere </button></p>' + '</td></tr>';

    }

    myTable += '<tr><td>'+ mostCommonName() +'</td><td>'+ getNrUniqueNames() +'</td><td>'+ mostCommonNumbers()
        +'</td><td>'+ getAvg() +'</td><td>   </td><td>    </td></tr></table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
    ifshow = true;
}

function convertSalary(){
    for(var i in employeeList) {
        employeeList[i].euroValue = parseInt(employeeList[i].salary)/4.57;
    }
    salInEuro = true;
    if(ifshow)
        showList();
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
};

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;

    employeeList.push(new Employee(firstName, lastName, phone, salary));
    if(ifshow)
        showList();
    if(ifsalary)
        totalSalary();
}

function totalSalary() {

    var sal = 0;
    for(var i in employeeList) {
        sal += parseInt(employeeList[i].salary);
    }
    var command = '<p>Salary total: ' + sal + '</p>';
    var container = document.getElementById('salarycontainer');
    container.innerHTML = command;
    ifsalary = true;
}

function delLastEmployee() {
    employeeList.pop();
    if(ifshow)
        showList();
    if(ifsalary)
        totalSalary();

}

function visRow(i) {
    var msg ="";
    if(salInEuro)
        msg += employeeList[i].firstName +"\    "
            +employeeList[i].lastName + "\  "
            +employeeList[i].phone + "\ "
            +employeeList[i].euroValue.toFixed(2) ;
    else
        msg += employeeList[i].firstName +"\    "
            +employeeList[i].lastName + "\  "
            +employeeList[i].phone + "\ "
            +employeeList[i].salary ;
    alert(msg);
}

function delRow(i) {
    employeeList.splice(i,1);
    if(ifshow)
        showList();
    if(ifsalary)
        totalSalary();
}

function getAvg(){
    var sal = 0;
    for(var i in employeeList) {
        sal += parseInt(employeeList[i].salary);
    }
    sal = sal/employeeList.length;
    return sal.toFixed(2);
}

function mostCommonName() {
    var max = 0;
    var ind = -1;
    for(var i in employeeList) {
        var count=0;
        for(var j in employeeList) {
            if(employeeList[i].firstName == employeeList[j].firstName)
                count++;
        }
        if(count > max){
            max= count;
            ind = i;
        }
    }
    return employeeList[ind].firstName;
}

function matComp(a,b) {
    return b[1]-a[1];
}

function mostCommonNumbers() {
    var numbers = [[0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0], [8,0], [9,0]];
    for(var i in employeeList) {
        var telnr = employeeList[i].phone;
        for(var j in telnr){
            numbers[parseInt(telnr[j])][1]++;
        }
    }
    numbers.sort(matComp);
    var lista =""+ numbers[0][0] + ", " + numbers[1][0] + ", " +numbers[2][0] + ", " + numbers[3][0]+", " + numbers[4][0];
    return lista;
}

function getNrUniqueNames() {
    var nr = 0;
    for(var i in employeeList) {
        var count=0;
        for(var j in employeeList) {
            if(employeeList[i].lastName == employeeList[j].lastName)
                count++;
        }
        if(count == 1)
            nr++;
    }
    return nr;
}