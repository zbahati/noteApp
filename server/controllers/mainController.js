
exports.homePage = async(req, res) =>{
    const locals = {
        title: "NotesApp"
    }
    res.render('index', {
        locals,
        layout: 'layouts/front-page'
    })
}

exports.aboutPage = async(req, res) =>{
    const locals = {
        title: "About NotesApp"
    }
    res.render('about', locals)
}


// Route handlers 

exports.pageNotFound = async(req, res) => {
    const locals = {
        title: "NotesApp"
    }
    res.status(404).render('404', locals )
}