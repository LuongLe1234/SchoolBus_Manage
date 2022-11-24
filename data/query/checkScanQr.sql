IF   
(Select distinct dbo.busRouter.qrCode from dbo.busRouter INNER JOIN dbo.busStudent_CurrentSemester ON dbo.busRouter.busId=dbo.busStudent_CurrentSemester.busID
INNER JOIN dbo.student ON student.studentCode=busStudent_CurrentSemester.studentCode INNER JOIN dbo.users ON student.userId=(Select users.userId from 
dbo.users where users.email=@email)
) like @qrCode
IF (substring(CONVERT(varchar,CAST(GETDATE() as datetime),108),1,2)>='05' and substring(CONVERT(varchar,CAST(GETDATE() as datetime),108),1,2)<='11')
Begin
UPDATE dbo.attendance 
SET isAttend = 1
where dbo.attendance.studentCode=(Select student.studentCode from dbo.student INNER JOIN dbo.users ON student.userId=(Select users.userId from dbo.users where users.email=@email))
and dateAttendance=CAST(GETDATE() as DATE) and isMorning=1
PRINT N'Điểm danh thành công'
End
ELSE IF(substring(CONVERT(varchar,CAST(GETDATE() as datetime),108),1,2)>=12 and substring(CONVERT(varchar,CAST(GETDATE() as datetime),108),1,2)<=16)
Begin
UPDATE dbo.attendance 
SET isAttend = 1
where dbo.attendance.studentCode=(Select distinct student.studentCode from dbo.student INNER JOIN dbo.users ON student.userId=
(Select users.userId from dbo.users where users.email=@email)) and dateAttendance=CAST(GETDATE() as DATE) and isMorning=0
PRINT N'Điểm danh thành công'
End

Select distinct dbo.busRouter.qrCode from dbo.busRouter INNER JOIN dbo.busStudent_CurrentSemester ON dbo.busRouter.busId=dbo.busStudent_CurrentSemester.busID
INNER JOIN dbo.student ON student.studentCode=busStudent_CurrentSemester.studentCode INNER JOIN dbo.users ON student.userId=(Select users.userId from 
dbo.users where users.email=@email)