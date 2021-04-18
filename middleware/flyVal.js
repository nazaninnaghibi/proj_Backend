checkDateValue= (req, res, next) => {

    console.log("66666666666");
    console.log(req.body);
    var d1 = Date.parse(req.body.from);
    var d2 = Date.parse(req.body.to);
    if (d1 < d2) {
            console.log("7777777777777777");
            res.status(400).send({ message: "Failed! Date not valid!" });
            return;
    }

    // if (req.body.question.length < 1) {
    //     console.log("7777777777777777");
    //     res.status(400).send({ message: "Failed! Question is not Empty!" });
    //     return;
    // }


    next();
}

const flyVal = {
    checkDateValue
}

module.exports = flyVal;