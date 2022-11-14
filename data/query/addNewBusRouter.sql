Insert InTO dbo.busRouter 
(
    [busId]
      ,[pickUpId1]
      ,[campusId]
      ,[plateNumber]
      ,[pickUpId2]
      ,[pickUpId3]
)
VALUES(
    @busId,
    (Select pickUpId from dbo.busStop where dbo.busStop.address=@pickUpId1),
    @campusId,
    @plateNumber,
    (Select pickUpId from dbo.busStop where dbo.busStop.address=@pickUpId2),
    (Select pickUpId from dbo.busStop where dbo.busStop.address=@pickUpId3)
)