        function beget(obj) {
            var F = function() {};
            F.prototype = obj;
            return new F();
        }

        function empty() {};
        Function.prototype.bind = function(context) {
            var args = Array.prototype.slice.call(arguments, 1),
                self = this;
            var innerArgs = Array.prototype.slice.call(arguments);
            var finalArgs = args.concat(innerArgs);
            return self.apply(context, finalArgs);
        };

        var IS_SUPPORT_CONSOLE = window.console;
        var assert = function(wranning, fn) {
            if (fn && fn()) {
                try {
                    throw wranning;
                } catch (e) {
                    IS_SUPPORT_CONSOLE && console.log(e);
                }
            }
        }
        var checkType = function(data, type) {
            if (typeof(type) !== "string") {
                throw new Error("类型错误!!!");
            }
            var typeFirst = type.substr(0, 1).toUpperCase();
            var typeNext = type.substr(1).toLowerCase();
            type = typeFirst + typeNext;
            return Object.prototype.toString.call(data) === "[object " + type + "]";
        }

        var dataType = {
                isArray: function(data) {
                    return checkType(data, "Array");
                },
                isObject: function(data) {
                    return checkType(data, "Object");
                },
                isString: function(data) {
                    return checkType(data, "String");
                },
                isNull: function(data) {
                    return checkType(data, "Null");
                },
                isUndefined: function(data) {
                    return checkType(data, "Undefined");
                },
                isFunction: function(data) {
                    return checkType(data, "Function");
                },
                isNumber: function(data) {
                    return checkType(data, "Number");
                },
                isEmptyObject: function(data) {
                    if (this.isObject(data)) {
                        var i,
                            isEmpty = true;
                        for (i in data) {
                            if (data.hasOwnProperty(i)) {
                                return false;
                            }
                        }
                        return isEmpty;
                    }
                    return false;
                }
            }
