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
    var input = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function (err, connection) {
        var data = {
            name: input.name,
            address: input.address,
            email: input.email,
            phone: input.phone

        };
        var query = connection.query("INSERT INTO customer set ? ", data, function (err, rows) {
            if (err) {
                console.log("Not able to insert the record")
            } else {
                res.redirect("/customers")
            }
        })
    });
}
exports.delete = function (req, res) {
    var id = req.params.id;
    req.getConnection(function (err, connection) {
        connection.query("DELETE FROM customer WHERE id = ? ", [id], function (err, rows) {
            if (err) {
                console.log("Error Deleting the Row with id: " + id);
            } else {
                res.redirect('/customers')
            }
        });
    });
};
exports.edit = function (req, res) {

}
exports.save_edit = function (req, res) {

}