export const addUserId = (req, res, next) => {
  req.body.userId = req.user.id;
  next();
};
