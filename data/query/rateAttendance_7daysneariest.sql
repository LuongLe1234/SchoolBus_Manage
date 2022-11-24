SELECT  sum(case when isAttend = 1 then 1 else 0 end ) As N'ĐI xe',
 sum(case when isAttend = 0 then 1 else 0 end ) As N'Không đi xe'
  FROM [SchoolBus].[dbo].[attendance] 
  INNER JOIn dbo.busStudent_CurrentSemester ON busStudent_CurrentSemester.studentCode=attendance.studentCode
  INNER JOIN dbo.student ON student.studentCode=busStudent_CurrentSemester.studentCode
  INNER JOIN dbo.users ON users.userId=student.userId
  WHERE dateAttendance>=DATEADD(DAY,-7,GETDATE()) AND users.email=@email