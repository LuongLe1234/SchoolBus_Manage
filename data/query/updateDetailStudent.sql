BEGIN TRANSACTION;

UPDATE dbo.users
SET fullName = @fullName,  
    phoneNumber = @phoneNumber
WHERE users.email=@email;

UPDATE dbo.student
SET parentPhoneNumber=@parentPhoneNumber
WHERE student.userId=(Select users.userId from dbo.users where users.email=@email)

COMMIT;
