export const mapStateToProps = ({ payload }) => ({
  accommodation: payload.accommodation,
  accommodations: payload.accommodations,
  pending: payload.pending,
  error: payload.error,
});