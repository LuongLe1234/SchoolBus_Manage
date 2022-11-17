SELECT TOP (10) dbo.busStudent_CurrentSemester.studentCode,dbo.users.fullName
      ,[semesterId]
      ,[busID]
      ,[dateCreate]
  FROM [SchoolBus].[dbo].[busStudent_CurrentSemester]
  INNER JOIN dbo.student ON busStudent_CurrentSemester.studentCode=student.studentCode
  INNER JOIN dbo.users ON student.userId=users.userId
  ORDER BY dateCreate DESC 