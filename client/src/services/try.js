export const tryAction = async (callback) => {
  try {
    callback();
  } catch (err) {
    console.error(err);
  }
}