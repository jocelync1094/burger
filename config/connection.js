var mysql = require("mysql");

var connection;
 
if(process.env.JAWSDB_URL)
{ connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
connection = mysql.createConnection({
  host: "hcm4e9frmbwfez47.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "mb3pqwhr3cjze7w8",
  password: "vkvzn1v1g150fthi",
  database: "q0imi12bxharn8pq"
})
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
