const $ = require('jquery');
module.exports = {
    getPlainForm : function () {
        const $form = $('<form/>');

        $form.append('<input name="name" value="John"/>');
        $form.append('<input name="password" value="123456"/>');
        $form.append('<input name="email" value="john.doe@smith.com"/>');

        return $form;
    },

    getMultidimensionalForm: function () {
        const $form = $('<form/>');

        $form.append('<input name="formLogin[name]" value="John"/>');
        $form.append('<input name="formLogin[password]" value="123456"/>');
        $form.append('<input name="formLogin[email]" value="john.doe@smith.com"/>');

        return $form;
    }
};
