
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
Insert INTO dbo.busStudent
(
    semesterId
    ,studentCode,
    busId,
    studentBusId
)
VALUES(
    @semesterId,
    @studentCode,
    @busId,
    @studentBusId
)