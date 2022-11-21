SELECT SchoolBus.dbo.users.email,SchoolBus.dbo.role.roleId 
FROM (dbo.users INNER JOIN dbo.userRole ON users.userId = userRole.userId)
INNER JOIN dbo.role ON userRole.roleId = role.roleId  where  users.status=1