/* jshint node: true, strict: true */
const FormBuilder = require('./helpers/formBuilder');
require('./../jquery.serializeobject');


describe('Serialize test', function () {
    it('obtains a json object from a plain form in non strict mode', function () {
        const $form = FormBuilder.getPlainForm();
        const data = $form.serializeObject();

        expect(data.name).toBeDefined();
        expect(data.password).toBeDefined();
        expect(data.email).toBeDefined();
        expect(data.gender).toBeDefined();
        expect(data['_family']).toBeDefined();
        expect(data['_sub-family']).toBeDefined();

        expect(data.name).toBe('John');
        expect(data.password).toBe('123456');
        expect(data.email).toBe('john.doe@smith.com');
        expect(data.gender).toBe('male');
    });

    it('obtains a json object from a multidimensional form in non strict mode', function () {
        const $form = FormBuilder.getMultidimensionalForm();
        const data = $form.serializeObject();

        expect(data.formLogin.name).toBeDefined();
        expect(data.formLogin.password).toBeDefined();
        expect(data.formLogin.email).toBeDefined();
        expect(data.formLogin.gender).toBeDefined();

        expect(data.formLogin.name).toBe('John');
        expect(data.formLogin.password).toBe('123456');
        expect(data.formLogin.email).toBe('john.doe@smith.com');
        expect(data.formLogin.gender).toBe('female');
    });
});

