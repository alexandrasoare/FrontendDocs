/**
 * Created by Alexandra.Soare on 6/29/2017.
 */

hrApp.service("UserService", function() {
    this.userList = [];
    this.save = function (user) {

            this.userList.push(user);
        };
});

