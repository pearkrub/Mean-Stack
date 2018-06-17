exports.render = function(req, res) {
    res.render('index', {
        title: 'hellow', 
        message: 'im jade'
    })
}