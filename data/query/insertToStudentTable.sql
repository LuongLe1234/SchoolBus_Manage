
Insert INTO dbo.student
    (
    studentCode
    ,userId
    ,birthday
    ,parentPhoneNumber
    ,gender
    )
VALUES
    (   @studentCode,
        @userId,
        @birthday,
        @parentPhoneNumber,
        @gender
    )
Insert INTO dbo.busStudent_CurrentSemester
(
    studentCode,
    semesterId,
    busId
)
VALUES(
    @studentCode,
    @semesterId,
    @busId
)

SELECT [studentCode]
  FROM [SchoolBus].[dbo].[busStudent_CurrentSemester]
  where studentCode=@studentCode

