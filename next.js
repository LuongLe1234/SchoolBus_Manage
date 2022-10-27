const sql=require("msnodesqlv8");
const { rows } = require("mssql");

const connectionString="server=DESKTOP-RIKQFFR;Database=SchoolBus;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query="Select * from dbo.Student";
sql.query(connectionString, query, (err, rows) =>{
    console.log(rows);
});