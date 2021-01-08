export const mapStateToProps = ({
  payload,
  location,
  accommodation,
  allRooms,
}) => ({
  accommodation: payload.accommodation,
  accommodations: payload.accommodations,
  pending: payload.pending,
  error: payload.error,
  locations: location.locations,
  message: accommodation.message,
  updateError: accommodation.error,
  createRoomRequest: allRooms.pending,
  createRoom: allRooms.roomMessage,
  createRoomError: allRooms.error,
});

export const accommodation = ({ accommodation, location }) => ({
  pending: accommodation.pending,
  error: accommodation.error,
  accommodations: accommodation.accommodations,
  message: accommodation.message,
  locations: location.locations,
});
