export const tryAction = async (callback) => {
  try {
    await callback();
  } catch (err) {
    console.error(err);
  }
}