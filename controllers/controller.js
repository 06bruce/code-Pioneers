const Ann = require('../models/model');

const display_form = (req, res) => {
    res.render('index');
}

const form_post = (req, res) => {
    const newAnn = new Ann(req.body);
    newAnn.save()
        .then(() => {
            res.redirect('/')
        })
        .catch((error) => {
            console.log(`Saving new announcement error: ${error}`);
        })
}

module.exports = { display_form, form_post }