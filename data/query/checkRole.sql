Select role.roleName from dbo.role 
INNER JOIN dbo.userRole ON role.roleId=userRole.roleId
INNER JOIN dbo.users ON users.userId=userRole.userId
where users.email=@email