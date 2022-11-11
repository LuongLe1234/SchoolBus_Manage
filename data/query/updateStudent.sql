UPDATE [dbo].[Student]
SET [pickUpId]=@pickUpId,
    [parentPhoneNumber]=@parentPhoneNumber,
    [semester]=@semester,
    [codeStudent]=@codeStudent

WHERE [codeStudent]=@codeStudent

SELECT [email]
      ,[pickUpId]
      ,[parentPhoneNumber]
      ,[semester]
      ,[codeStudent]
  FROM [dbo].[Student]
  WHERE [codeStudent]=@codeStudent