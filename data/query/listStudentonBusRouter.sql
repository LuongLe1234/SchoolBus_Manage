SELECT SchoolBus.dbo.student.userId,SchoolBus.dbo.student.studentCode,dbo.users.fullName,dbo.users.status, SchoolBus.dbo.student.birthday,dbo.busStudent_CurrentSemester.busId, SchoolBus.dbo.student.gender, SchoolBus.dbo.users.email,SchoolBus.dbo.users.phoneNumber,dbo.student.parentPhoneNumber
FROM dbo.busRouter m INNER JOIN dbo.busStudent_CurrentSemester ON dbo.busStudent_CurrentSemester.busId=m.busId
INNER JOIN SchoolBus.dbo.student ON SchoolBus.dbo.busStudent_CurrentSemester.studentCode=SchoolBus.dbo.student.studentCode
INNER JOIN SchoolBus.dbo.users ON SchoolBus.dbo.student.userId = SchoolBus.dbo.users.userId
where dbo.users.status=1 and dbo.busStudent_CurrentSemester.busID like  '%'+@busID+'%'
