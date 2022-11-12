Select m.busId, m.campusId,m.plateNumber, p1.address Address1, p2.address Address2  ,p3.address Address3, dbo.driver.driverName,dbo.driver.driverPhoneNumber
FROM dbo.busRouter m 
INNER JOIN dbo.busStop p1 ON m.pickUpId1 = p1.pickUpId
INNER JOIN dbo.busStop p2 ON m.pickUpId2 = p2.pickUpId
INNER JOIN dbo.busStop p3 ON m.pickUpId3 = p3.pickUpId
INNER JOIN dbo.routerDriver ON m.busId=routerDriver.busId
INNER JOIN dbo.driver ON routerDriver.driverId=driver.driverId 
where m.busId like '%'+@busId+'%'