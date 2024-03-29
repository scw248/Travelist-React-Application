export const fetchDestinations = () => {
  let destinations;
  return (dispatch) => {
    dispatch({ type: 'LOADING_Destinations' });
    return fetch('http://localhost:3000/db')
      .then(response => response.json())
      .then(responseJSON => {
        destinations = responseJSON.images.map(image => ({ url: image.url }))
        dispatch({
          type: 'FETCH_DESTINATIONS',
          payload: destinations
        })
      });
  };
}

export const loadingDestinations = () => {
  return {
    type: 'LOADING_DESTINATIONS'
  }
}