Update dbo.userRole set roleId=@roleId
WHERE userId = @userId
Update dbo.users set name=@name,phoneNumber=@phoneNumber, campusId=@campusId
where userId = @userId
