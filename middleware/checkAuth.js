const { verifyToken } = require("../utils");

const authCheck = async (req, res, next) => {
  const authToken = req.headers.token;
  if (!authToken) {
    return res.status(401).json({
      data: "NOT AUTHORIZED",
    });
  }

  if (!authToken) {
    return res.status(401).json({
      data: "NOT AUTHORIZED",
    });
  }

  let decodedToken;

  try {
    decodedToken = await verifyToken(authToken);
    req.userId = decodedToken.userId
  } catch (err) {
    return res.status(401).json({
      data: "NOT AUTHORIZED",
    });
  }
  
  next();
};

module.exports = authCheck;