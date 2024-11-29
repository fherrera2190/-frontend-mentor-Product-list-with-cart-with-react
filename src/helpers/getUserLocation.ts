export const getUserLocation = (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      (err) => {
        alert(
          "No se pudo obterner la ubicación. Por favor, activa tu ubicación"
        );
        console.log(err);
        reject();
      }
    );
  });
};
