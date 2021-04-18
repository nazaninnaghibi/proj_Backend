const { validationResult } = require('express-validator/check');

checkNullQuestion = (req, res, next) => {
    console.log("66666666666");
    console.log(req.body);
    // const errors = validationResult(req);

    if (req.body.question.length < 1) {
        console.log("7777777777777777");
        res.status(400).send({ message: "Failed! Question is not Empty!" });
        return;
    }


    next();
}

checkNullResponseAndQ = (req, res, next) => {
    console.log("66666666666");
    console.log(req.body);
    if (req.body.answer.length < 1) {
        console.log("7777777777777777");
        res.status(400).send({ message: "Failed! Answer is not Empty!" });
        return;
    }
    next();
}

const faqVal = {
    checkNullQuestion,
    checkNullResponseAndQ
};


module.exports = faqVal;