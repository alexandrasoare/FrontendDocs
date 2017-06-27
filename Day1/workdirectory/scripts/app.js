/**
 * Created by Alexandra.Soare on 6/27/2017.
 */
var employeeList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
var ifshow = false;

function showList() {
    var myTable = '<table border="1"><tr><th>First Name</th> <th>Last Name</th> <th>Phone</th>' +
        '<th>Salary</th> </tr>';

    for(var i in employeeList) {
        myTable += '<tr><td>' +employeeList[i].firstName + '</td><td>'
                +employeeList[i].lastName + '</td><td>'
                +employeeList[i].phone + '</td><td>'
                +employeeList[i].salary + '</td></tr>';
    }

    myTable += '</table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
    ifshow = true;
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
}