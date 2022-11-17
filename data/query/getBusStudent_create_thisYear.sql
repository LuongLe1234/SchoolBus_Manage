SELECT TOP (1000) [studentCode]
      ,[semesterId]
      ,[busID]
      ,[dateCreate]
  FROM [SchoolBus].[dbo].[busStudent_CurrentSemester]
  where YEAR(dateCreate)=YEAR(CAST(GETDATE() as DATE))