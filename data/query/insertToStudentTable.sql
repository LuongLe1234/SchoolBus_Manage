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
        (Select userId from dbo.users where email=@email),
        @birthday,
        @parentPhoneNumber,
        @gender
    )
Insert INTO dbo.busStudent_CurrentSemester
(
    studentCode,
    semesterId,
    busId,
	dateCreate
)
VALUES(
    @studentCode,
    @semesterId,
    @busId,
    GETDATE()

)
Select busStudent_CurrentSemester.studentCode from dbo.busStudent_CurrentSemester
where busStudent_CurrentSemester.studentCode=@studentCode
