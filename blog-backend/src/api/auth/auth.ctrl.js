import Joi from 'joi';
import User from '../../models/user';

/*
    POST /api/auth/register
    {
        username: 'solsol',
        password: '111111'
    }
 */
export const register = async ctx => {
    // 회원가입
    // Request Body 검증
    const schema = Joi.object().keys({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(20)
            .required(),
        password: Joi.string().required(),
    });
    const result = Joi.validate(ctx.request.body, schema);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const {username, password} = ctx.request.body;
    try {
        // username이 이미 존재하는지 확인
        const exists = await User.findByUsername(username);
        if (exists) {
            ctx.status = 409;
            return;
        }

        const user = new User({
            username,
        });
        await user.setPassword(password);
        await user.save();
        ctx.body = user.serialize();

        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
            httpOnly: true,
        });

    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    POST /api/auth/login
    {
        username: 'solsol',
        password: '1111'
    }
 */
export const login = async ctx => {
    console.log("### login");

    // 로그인
    const {username, password} = ctx.request.body;

    // username, password가 없으면 에러처리
    if (!username || !password) {
        ctx.status = 401; // Unauthorized
        return;
    }

    try {
        const user = await User.findByUsername(username);
        if(!user) {
            ctx.status = 401;
            return;
        }
        const valid = await user.checkPassword(password);
        // 잘못된 비밀번호
        if (!valid) {
            ctx.status = 401;
            return;
        }
        ctx.body = user.serialize();
        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
            httpOnly: true,
        });
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    GET /api/auth/check
 */
export const check = async ctx => {
    // 로그인 상태 확인
    const {user} = ctx.state;
    if (!user) {
        // 로그인 중 아님
        ctx.status = 401;
        return;
    }
    ctx.body = user;
};

/*
    POST /api/auth/logout
 */
export const logout = async ctx => {
    console.log("### logout ");
    // 로그아웃
    ctx.cookies.set('access_token');
    ctx.status = 204; // No Content
};