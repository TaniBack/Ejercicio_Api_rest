const hasApiKey = (req, res, next) => {

    if (req.query.API_KEY && req.query.API_KEY == "85e1c0eb") {
        next();
    }
    else {
        const data = {
            message: "API KEY no válida o inexistente",
            error: 403
        }
        res.status(403).render("error", { data });
    }
}
module.exports = hasApiKey