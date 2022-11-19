SELECT [studentCode]
,CONVERT(CHAR(10),dateAttendance,120) as date
	  ,(CASE WHEN [isAttend]=1 THEN N'Điểm danh' ELSE N'Vắng Mặt' END)[Status]
  FROM [SchoolBus].[dbo].[attendance]
  WHERE DATEDIFF(day,dateAttendance,GETDATE()) between 0 and 30 