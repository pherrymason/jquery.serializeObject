const $ = require('jquery');
module.exports = {
    getPlainForm : function () {
        const $form = $('<form/>');

        $form.append('<input name="name" value="John"/>');
        $form.append('<input name="password" value="123456"/>');
        $form.append('<input name="email" value="john.doe@smith.com"/>');
        $form.append('<input name="gender" type="radio" checked value="male"/>');
        $form.append('<input name="gender" type="radio" value="female"/>');
        $form.append('<input name="_family" value="mechanics"/>');
        $form.append('<input name="_sub-family" value="joints"/>');

        return $form;
    },

    getMultidimensionalForm: function () {
        const $form = $('<form/>');

        $form.append('<input name="formLogin[name]" value="John"/>');
        $form.append('<input name="formLogin[password]" value="123456"/>');
        $form.append('<input name="formLogin[email]" value="john.doe@smith.com"/>');
        $form.append('<input name="formLogin[gender]" type="radio" value="male"/>');
        $form.append('<input name="formLogin[gender]" type="radio" checked value="female"/>');

        return $form;
    }
};
