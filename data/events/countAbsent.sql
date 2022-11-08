SELECT
    sum(case when isAttend = 1 then 1 else 0 end ) As attendedcount,
	 sum(case when isAttend = 0 then 1 else 0 end ) As absentcount
FROM SchoolBus.[dbo].attendance where busStudentId=@busStudentId
