function printMsg() {
    console.log("This is a message from the npm-module");
}

function form(res, res, action, method) {
    var formHtml = `<form action ="` + action + `" method = "` + method + `"></form>`;
    return res.write(formHtml);
}

module.exports.printMsg = printMsg;
module.exports.form = form;