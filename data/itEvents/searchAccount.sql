SELECT SchoolBus.dbo.users.userId,SchoolBus.dbo.users.name,SchoolBus.dbo.users.email, SchoolBus.dbo.users.phoneNumber, SchoolBus.dbo.users.image, SchoolBus.dbo.users.campusId
FROM (dbo.users INNER JOIN dbo.userRole ON users.userId = userRole.userId)
INNER JOIN dbo.role ON userRole.roleId = role.roleId where role.roleId=@roleId