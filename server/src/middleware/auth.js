import jwt from 'jsonwebtoken';
export const verifyToken = (req, res)=>{
    try {
        const authHeader = req.headers['authorization'];
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            return res.send({
                status: 401,
                message: 'Unauthorized'
            });
        }
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        return true;
    } catch (error) {
        return res.send({   
            status: 403,
            message: 'Invalid or expired token',
        });
    }
}