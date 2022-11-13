SELECT distinct SchoolBus.dbo.busStudent.studentCode,SchoolBus.dbo.users.name,SchoolBus.dbo.users.email, SchoolBus.dbo.users.phoneNumber, SchoolBus.dbo.users.campusId,SchoolBus.dbo.attendance.date,SchoolBus.dbo.attendance.isAttend,SchoolBus.dbo.attendance.isMorning,SchoolBus.dbo.users.image,SchoolBus.dbo.users.userId,dbo.student.parentPhoneNumber
FROM dbo.attendance INNER JOIN dbo.busStudent ON attendance.busStudentId = busStudent.studentBusId
INNER JOIN dbo.student ON busStudent.studentCode = student.studentCode 
INNER join dbo.users on users.userId=student.userId
where date= CAST(GETDATE() as DATE) and dbo.attendance.isAttend=0