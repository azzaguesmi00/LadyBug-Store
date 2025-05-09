import jwt from 'jsonwebtoken';
const Auth = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token)
        { return res.status(401).json({ message: 'Auth Error' });}
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: 'Invalid Token' });
}
};
export default Auth;
