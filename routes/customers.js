/**
 * Created by jude on 1/9/16.
 */

exports.list = function (req, res) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM customer', function (err, rows) {
            if (err) {
                console.log("Error Displaying the data : %s " + err);
            } else {
                res.render('customers', {page_title: "Customer - NodeJS", data: rows});
            }
        });
    });
};
exports.add = function (req, res) {
    res.render('add_customers', {page_title: "Add Customers-Node.js"});
}
exports.save = function (req, res) {

}
exports.delete = function (req, res) {
    var id = req.params.id;
    req.getConnection(function(err,connection){
        connection.query("DELETE FROM customer WHERE id = ? ",[id], function (err,rows) {
            if(err){
                console.log("Error Deleting the Row with id: "+id);
            }else{
                res.redirect('/customers')
            }
        });
    });
};
exports.edit = function (req, res) {

}
exports.save_edit = function (req, res) {

}