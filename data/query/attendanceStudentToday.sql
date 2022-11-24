SELECT distinct SchoolBus.dbo.busStudent_CurrentSemester.studentCode,SchoolBus.dbo.users.fullName,SchoolBus.dbo.users.email, SchoolBus.dbo.users.phoneNumber, SchoolBus.dbo.users.campusId,SchoolBus.dbo.attendance.dateAttendance,SchoolBus.dbo.attendance.isAttend,SchoolBus.dbo.attendance.isMorning,SchoolBus.dbo.users.image,busStudent_CurrentSemester.busID
FROM dbo.attendance INNER JOIN dbo.busStudent_CurrentSemester ON attendance.studentCode = busStudent_CurrentSemester.studentCode
INNER JOIN dbo.student ON busStudent_CurrentSemester.studentCode = student.studentCode 
INNER join dbo.users on users.userId=student.userId
where dateAttendance= CAST(GETDATE() as DATE) and busId=@busId
ORDER by SchoolBus.dbo.busStudent_CurrentSemester.studentCode