
Insert INTO dbo.users
    (
    userId
    ,email
    ,status
    ,image
    ,phoneNumber
    ,campusId
    ,name
    )
VALUES
    (   @userid,
        @email,
        @status,
        @image,
        @phoneNumber,
        @campusId,
        @name
    )
Insert INTO dbo.userRole
(
    userId
    ,roleId
)
VALUES(
    @userId,
    @roleId
)