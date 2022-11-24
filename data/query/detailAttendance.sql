SELECT  SchoolBus.dbo.busStudent_CurrentSemester.studentCode,SchoolBus.dbo.users.fullName,SchoolBus.dbo.users.email, SchoolBus.dbo.users.phoneNumber, SchoolBus.dbo.users.campusId,SchoolBus.dbo.attendance.dateAttendance,SchoolBus.dbo.attendance.isAttend,SchoolBus.dbo.attendance.isMorning
FROM dbo.attendance INNER JOIN dbo.busStudent_CurrentSemester ON attendance.studentCode = busStudent_CurrentSemester.studentCode
INNER JOIN dbo.student ON busStudent_CurrentSemester.studentCode = student.studentCode 
INNER join dbo.users on users.userId=student.userId
where busStudent_CurrentSemester.studentCode=@studentCode