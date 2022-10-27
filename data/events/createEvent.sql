SET IDENTITY_INSERT dbo.Users ON;
Insert INTO dbo.Users
(
       [user_id]
      ,[role_id]
      ,[email]
      ,[name]
      ,[status]
)
VALUES 
    (    1,
	     3,
        'luonglthe784@fpt.edu.vn',
        'cuong',
         1
    )
INSERT INTO [dbo].[Student]
    (
      [email]
      ,[pickUpId]
      ,[parentPhoneNumber]
      ,[semester]
      ,[codeStudent]
    )
VALUES 
    (
    'luonglthe784@fpt.edu.vn',
        1,
        '038283',
        '1',
        'HE1242'
    )

/* INSERT INTO [dbo].[Student]
    (
      [email]
      ,[pickUpId]
      ,[parentPhoneNumber]
      ,[semester]
      ,[codeStudent]
    )
VALUES 
    (
        @email,
        @pickUpId,
        @parentPhoneNumber,
        @semester,
        @codeStudent
    ) */

