export default async function authCheck(req, res, next) {
  try {
    // check token here

    return next();
  } catch (err) {
    return next(err);
  }
}
