
SELECT SchoolBus.dbo.student.userId,SchoolBus.dbo.student.studentCode, SchoolBus.dbo.student.birthday, SchoolBus.dbo.student.gender, SchoolBus.dbo.users.email,SchoolBus.dbo.users.phoneNumber,SchoolBus.dbo.users.image
FROM SchoolBus.dbo.student
INNER JOIN SchoolBus.dbo.users
ON SchoolBus.dbo.student.userId = SchoolBus.dbo.users.userId WHERE SchoolBus.dbo.student.studentCode like  '%'+@studentCode+'%'