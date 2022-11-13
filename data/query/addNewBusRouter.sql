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
    @pickUpId1,
    @campusId,
    @plateNumber,
    @pickUpId2,
    @pickUpId3
)