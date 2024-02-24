import joi from 'joi';

export const signinSchema = joi.object({
    userName: joi.string().required().messages({
        "string.base": 'Tên đăng nhập phải là kiểu chữ',
        "string.empty": "Tên đăng nhập không được bỏ trống",
        "any.required": "Tên đăng nhập là bắt buộc"
    }),
    password: joi.string().required().messages({
        "string.base": `"password" phải là kiểu "text"`,
        "string.empty": `"password" không được bỏ trống`,
        "any.required": `"password" là trường bắt buộc`,
    })
})