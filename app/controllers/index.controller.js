exports.render = function(req, res) {
    res.render('index', {
        title: 'hello', 
        message: 'im jade'
    })
}