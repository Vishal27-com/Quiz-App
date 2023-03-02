const jwt=require("jsonwebtoken")
export const authmiddleware = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).send({message:"You are not authenticated" ,error:true});
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.status(403).send({message:"Token is not valid" ,error:true});
    next();
  });
};
