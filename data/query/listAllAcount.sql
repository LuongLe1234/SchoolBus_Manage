Select dbo.users.email, dbo.users.fullName, dbo.users.image, dbo.users.phoneNumber, dbo.users.status,dbo.users.campusId,dbo.role.roleName
from dbo.users INNER JOIN dbo.userRole ON users.userId=userRole.userId
INNER JOIN dbo.role ON role.roleId=userRole.roleId 