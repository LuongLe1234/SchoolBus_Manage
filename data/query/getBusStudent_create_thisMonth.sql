SELECT TOP (1000) [studentCode]
      ,[semesterId]
      ,[busID]
      ,[dateCreate]
  FROM [SchoolBus].[dbo].[busStudent_CurrentSemester]
  where MONTH(dateCreate)=MONTH(CAST(GETDATE() as DATE))