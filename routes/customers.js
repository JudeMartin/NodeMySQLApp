/**
 * Created by jude on 1/9/16.
 */

exports.list = function (req, res) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM customer',function(err,rows){
            if (err) {
                console.log("Error Displaying the data : %s " + err);
            } else {
                res.render('customers',{page_title:"Customer - NodeJS",data:rows});
            }
        });
    });
}
exports.add = function (req, res) {

}
exports.save = function (req, res) {

}
exports.delete_customer = function (req, res) {

}
exports.edit = function (req, res) {

}
exports.save_edit = function (req, res) {

}