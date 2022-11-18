Select m.busId, m.campusId,m.plateNumber, dbo.driver.driverName,dbo.driver.driverPhoneNumber
FROM dbo.busRouter m 
INNER JOIN dbo.routerDriver ON m.busId=routerDriver.busId
INNER JOIN dbo.driver ON routerDriver.driverId=driver.driverId