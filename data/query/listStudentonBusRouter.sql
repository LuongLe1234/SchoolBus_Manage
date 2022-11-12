SELECT SchoolBus.dbo.student.userId,SchoolBus.dbo.student.studentCode,dbo.users.name,dbo.users.status, SchoolBus.dbo.student.birthday,dbo.busStudent.busId, SchoolBus.dbo.student.gender, SchoolBus.dbo.users.email,SchoolBus.dbo.users.phoneNumber,dbo.student.parentPhoneNumber,p1.address Address1, p2.address Address2  ,p3.address Address3,dbo.users.image
FROM dbo.busRouter m INNER JOIN dbo.busStudent ON dbo.busStudent.busId=m.busId
INNER JOIN dbo.busStop p1 ON m.pickUpId1 = p1.pickUpId
INNER JOIN dbo.busStop p2 ON m.pickUpId2 = p2.pickUpId
INNER JOIN dbo.busStop p3 ON m.pickUpId3 = p3.pickUpId
INNER JOIN SchoolBus.dbo.student ON SchoolBus.dbo.busStudent.studentCode=SchoolBus.dbo.student.studentCode
INNER JOIN SchoolBus.dbo.users ON SchoolBus.dbo.student.userId = SchoolBus.dbo.users.userId
where dbo.users.status=1 and dbo.busStudent.busID like  '%'+@busID+'%'
