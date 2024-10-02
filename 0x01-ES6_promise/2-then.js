export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a reponse from the API');

    return {
      status: 200,
      body: 'success',
    };
  }).catch(() => {
    console.log('Got a reponse from the API');

    return new Error({});
  });
}
