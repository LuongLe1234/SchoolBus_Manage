SELECT busId, STRING_AGG(address, '- ') AS AllPickUpId
FROM dbo.busRouterStop INNER Join dbo.busStop ON dbo.busRouterStop.pickUpId=dbo.busStop.pickUpId
GROUP BY busId