/**
 * Serializes data from a Form element into JSON object.
 *
 * Based on `Yann` code. I just commented the `fixed` check so everything converts into object.
 * @author http://css-tricks.com/snippets/jquery/serialize-form-to-json/#comment-210474
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if(typeof exports==='object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        //Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.serializeObject = function (options) {
		options = $.extend({}, options);

        var self = this,
        json = {},
        push_counters = {},
        patterns = {
            "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
            "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
            "push":     /^$/,
            "fixed":    /^\d+$/,
            "named":    /^[a-zA-Z0-9_]+$/
        };

        this.build = function (base, key, value) {
            base[key] = value;
            return base;
        };

        this.push_counter = function(key) {
            if(push_counters[key] === undefined) {
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function () {

            // Skip invalid keys
            if(!patterns.validate.test(this.name)) {
                return;
            }

            var
            k,
            keys = this.name.match(patterns.key),
            merge= this.value,
            reverse_key = this.name;

            while (( k = keys.pop() )!==undefined ) {
                // adjust reverse key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if (k.match(patterns.push)) {
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }
                // named
                else if (k.match(patterns.named)) {
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
}));
