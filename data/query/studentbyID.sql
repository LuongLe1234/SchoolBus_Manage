SELECT SchoolBus.dbo.busStudent_CurrentSemester.studentCode,SchoolBus.dbo.users.fullName,SchoolBus.dbo.student.birthday,SchoolBus.dbo.student.gender,SchoolBus.dbo.users.email, SchoolBus.dbo.users.phoneNumber, SchoolBus.dbo.users.campusId,SchoolBus.dbo.users.image,dbo.busStudent_CurrentSemester.busID,dbo.student.parentPhoneNumber
FROM dbo.student INNER JOIN dbo.busStudent_CurrentSemester ON student.studentCode = busStudent_CurrentSemester.studentCode 
INNER join dbo.users on users.userId=student.userId 
where dbo.busStudent_CurrentSemester.studentCode like '%'+@studentCode+'%'