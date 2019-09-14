function Part(){}

Part.prototype.order = function() {
    return {
        ret: -1,
        msg: '发送失败'
    };
};

module.exports = Part;