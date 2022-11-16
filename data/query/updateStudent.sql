UPDATE [dbo].[Student]
SET 
    [parentPhoneNumber]=@parentPhoneNumber,
    [birthday]=@birthday

WHERE [codeStudent]=@codeStudent

SELECT [email]
      ,[pickUpId]
      ,[parentPhoneNumber]
      ,[semester]
      ,[codeStudent]
  FROM [dbo].[Student]
  WHERE [codeStudent]=@codeStudent