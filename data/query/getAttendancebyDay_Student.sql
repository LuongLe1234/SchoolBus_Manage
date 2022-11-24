SELECT dbo.attendance.studentCode
      ,[dateAttendance]
      ,[isMorning]
      ,[isAttend]
      ,[busRouterId]
  FROM [SchoolBus].[dbo].[attendance] 
  INNER JOIn dbo.busStudent_CurrentSemester ON busStudent_CurrentSemester.studentCode=attendance.studentCode
  INNER JOIN dbo.student ON student.studentCode=busStudent_CurrentSemester.studentCode
  INNER JOIN dbo.users ON users.userId=student.userId
  WHERE dateAttendance= @dateAttendance  AND users.email=@email