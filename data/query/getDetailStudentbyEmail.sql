Select users.email, users.fullName,users.phoneNumber, student.parentPhoneNumber
from dbo.users INNER JOIN dbo.student ON users.userId=student.userId
where users.email=@email