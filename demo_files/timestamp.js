app.get("/api/timestamp/:date_string?", function(req, res) {
    console.log("get stamp");
    let params_date = req.params.date_string;
    var date;
    var responseJson;

    if (!isNaN(params_date)) {
        params_date = parseInt(params_date, 10);
        console.log("got the number:" + params_date);
    }

    if (params_date == undefined || params_date.length === 0) {
        date = new Date();
    } else {
        date = new Date(params_date);
    }

    if (date == undefined) {
        responseJson = { "error": "Invalid Date" };
    } else {
        responseJson = {
            "unix": date.getTime(),
            "utc": date.toUTCString()
        };
    }

    res.json(responseJson);
});