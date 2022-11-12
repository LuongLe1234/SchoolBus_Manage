Select dbo.driver.driverId, dbo.driver.driverName, dbo.driver.driverPhoneNumber,dbo.busRouter.busId,dbo.busRouter.campusId,dbo.campus.campusName,dbo.campus.province,dbo.campus.address
from dbo.driver INNER JOIN dbo.routerDriver ON dbo.driver.driverId=dbo.routerDriver.driverId
INNER JOIN dbo.busRouter ON dbo.routerDriver.busId=dbo.busRouter.busId
INNER JOIN dbo.campus ON dbo.busRouter.campusId=dbo.campus.campusId