const phoneRegexp = /^(\+\d{3})?\d{9}$/;

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


checkNullValue = (req, res, next) => {

    console.log(req.body)
    if (req.body.firstname.length < 1 &&
        req.body.lastname.length < 1  &&
        req.body.email.length < 1  &&
        req.body.phonenumber.length < 1  &&
        req.body.message.length < 1) {
        res.status(400).send({ message: "Failed! Question is not Empty!" });
        return;
    }

    if (req.body.lastname.length < 1  &&
        req.body.email.length < 1  &&
        req.body.phonenumber.length < 1  &&
        req.body.message.length < 1) {
        res.status(400).send({ message: "Failed! Question is not Empty!" });
        return;
    }

    if (req.body.firstname.length < 1 &&
        req.body.email.length < 1  &&
        req.body.phonenumber.length < 1  &&
        req.body.message.length < 1) {
        res.status(400).send({ message: "Failed! Question is not Empty!" });
        return;
    }

    if (req.body.firstname.length < 1 &&
        req.body.lastname.length < 1  &&
        req.body.phonenumber.length < 1  &&
        req.body.message.length < 1) {
        res.status(400).send({ message: "Failed! Question is not Empty!" });
        return;
    }

    if (req.body.firstname.length < 1 &&
        req.body.lastname.length < 1  &&
        req.body.email.length < 1  &&
        req.body.phonenumber.length < 1 ) {
        res.status(400).send({ message: "Failed! Question is not Empty!" });
        return;
    }

    if (req.body.firstname.length < 1 &&
        req.body.lastname.length < 1 ) {
        res.status(400).send({ message: "Failed! firstname && lastname is not Empty!" });
        return;
    }

    if (req.body.firstname.length < 1 ) {
        res.status(400).send({ message: "Failed! firstname is not Empty!" });
        return;
    }

    if (req.body.phonenumber.length < 1 ) {
        res.status(400).send({ message: "Failed! phonenumber is not Empty!" });
        return;
    }

    if (req.body.message.length < 1 ) {
        res.status(400).send({ message: "Failed! message is not Empty!" });
        return;
    }
    // console.log(emailRegexp.test(req.body.email));

    if(!emailRegexp.test(req.body.email)){
        res.status(400).send({ message: "Failed! email is not valid" });
        return;
    }

    if(!phoneRegexp.test(req.body.phonenumber)){
        res.status(400).send({ message: "Failed! phonenumber is not valid" });
        return;
    }
    next();
}

const contactVal = {
    checkNullValue
};

module.exports = contactVal;