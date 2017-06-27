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

var facts = [
"Chuck Norris threw a grenade and killed 50 people, then it exploded.",
"Chuck Norris counted to infinity. Twice.",
"Chuck Norris can kill two stones with one bird.",
"Chuck Norris can hear sign language."
];

var factind =0;

var ifshow = false;
var ifsalary = false;
var salInEuro = false;

function showList() {
    var myTable = '<table id = "empTable" class = "table table-hover"><tr><th>First Name</th> <th>Last Name</th> <th>Phone</th>' +
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

function alphabeticFirstCmp(a, b) {
    var lna = a.firstName.length;
    var lnb = b.firstName.length;
    var i=0;
    while(i < lna && i < lnb){
        if(a.firstName[i]>b.firstName[i])
            return 1;
        else if(a.firstName[i]<b.firstName[i])
            return -1;
        else
            i++;
    }
    if(lna >= i) return 1;
    if(lnb >= i) return -1;
    return 0;
}

function alphabeticLastCmp(a, b) {
    var lna = a.lastName.length;
    var lnb = b.lastName.length;
    var i=0;
    while(i < lna && i < lnb){
        if(a.lastName[i]>b.lastName[i])
            return 1;
        else if(a.lastName[i]<b.lastName[i])
            return -1;
        else
            i++;
    }
    if(lna >= i) return 1;
    if(lnb >= i) return -1;
    return 0;
}

function phoneCmp(a, b) {
    var lna = a.phone.length;
    var lnb = b.phone.length;
    var i=0;
    while(i < lna && i < lnb){
        if(a.phone[i]>b.phone[i])
            return 1;
        else if(a.phone[i]<b.phone[i])
            return -1;
        else
            i++;
    }
    if(lna >= i) return 1;
    if(lnb >= i) return -1;
    return 0;
}

function salaryCmp(a, b) {
    return a.salary - b.salary;
}

function sort() {
    var choose = document.getElementById("inputSort").value;
    switch (parseInt(choose)) {
        case 1:
            employeeList.sort(alphabeticFirstCmp);
            break;

        case 2:
            employeeList.sort(alphabeticLastCmp);
            break;

        case 3:
            employeeList.sort(phoneCmp);
            break;

        case 4:
            employeeList.sort(salaryCmp);
            break;

        default: break;
    }

    if(ifshow)
        showList();
}

function filter() {
    var choose = document.getElementById("inputFilter").value;
    /*var myTable = '<table id = "empTable" class = "table table-hover"><tr><th>First Name</th> <th>Last Name</th> <th>Phone</th>' +
        '<th>Salary</th><th>    </th><th>   </th></tr>';

    for(var i in employeeList) {

        if(choose == employeeList[i].firstName || choose == employeeList[i].lastName
            || choose == employeeList[i].phone || choose == String(employeeList[i].salary))
            if(salInEuro)
                myTable += '<tr><td>' + employeeList[i].firstName + '</td><td>'
                    + employeeList[i].lastName + '</td><td>'
                    + employeeList[i].phone + '</td><td>'
                    + employeeList[i].euroValue.toFixed(2) + '</td><td>'
                    + '<p> <button onclick=\"visRow(' + i + ')\"> Vizualizare </button></p>' + '</td><td>'
                    + '<p> <button onclick=\"delRow(' + i + ')\"> Stergere </button></p>' + '</td></tr>';

            else
                myTable += '<tr><td>' + employeeList[i].firstName + '</td><td>'
                    + employeeList[i].lastName + '</td><td>'
                    + employeeList[i].phone + '</td><td>'
                    + employeeList[i].salary + '</td><td>'
                    + '<p> <button onclick=\"visRow(' + i + ')\"> Vizualizare </button></p>' + '</td><td>'
                    + '<p> <button onclick=\"delRow(' + i + ')\"> Stergere </button></p>' + '</td></tr>';

    }

    myTable += '<tr><td>'+ mostCommonName() +'</td><td>'+ getNrUniqueNames() +'</td><td>'+ mostCommonNumbers()
        +'</td><td>'+ getAvg() +'</td><td>   </td><td>    </td></tr></table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
    */
    console.log(choose);
    var tb = document.getElementById("empTable");
    var tbRows = tb.getElementsByTagName("tr");
    console.log(tbRows.length);
    var index = 1;
    for(var i in employeeList){
        if(choose != employeeList[i].firstName && choose != employeeList[i].lastName
            && choose != employeeList[i].phone && choose != String(employeeList[i].salary)) {
            tbRows[index].style.display = 'none';
        }
        else{
            tbRows[index].style.display = 'table-row';
        }
        index++;
    }


}

function hideBack() {

    document.getElementById("backg").style.display = 'none';

}
var isImg = false;

function showBack() {
    document.getElementById("backg").style.display='block';
    if(isImg) {
        var code = '<img id = "chuckpic" src="../chuck.jpg" alt="CN" >';
        var container = document.getElementById('pic');
        container.innerHTML = code;
        isImg = false;
    }
}

function showF() {
    isImg = true;
    console.log("dsads");
    var code = '<p>' + facts[factind]+'</p>';
    factind = (factind + 1) % facts.length;
    var container = document.getElementById('pic');
    container.innerHTML = code;

}