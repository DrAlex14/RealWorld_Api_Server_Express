const { validationResult, buildCheckFunction } = require("express-validator");
const {isValidObjectId} = require('mongoose')

// parallel processing 并行处理
// 暴露一个函数，函数接收验证规则，返回一个函数
exports = module.exports = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);  // 处理验证结果
        if (errors.isEmpty()) {
        return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};

exports.isValidObjectId = (location, fields) => { // location数据位置, field数据字段
    return buildCheckFunction(location)(fields).custom(async (value) => {
        if (!isValidObjectId(value)) {
            return Promise.reject('ID 不是一个有效的ObjectId')
        }
    })
}