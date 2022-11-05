
Insert INTO dbo.users
    (
    userId
    ,email
    ,status
    ,image
    ,phoneNumber
    ,campusId
    )
VALUES
    (   @userid,
        @email,
        @status,
        @image,
        @phoneNumber,
        @campusId
    )