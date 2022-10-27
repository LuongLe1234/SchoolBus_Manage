Select * from dbo.Student as KH

Join dbo.Users as OD on KH.email= OD.email and KH.codeStudent=@codeStudent