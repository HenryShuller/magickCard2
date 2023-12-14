const router = require('express').Router()


const Rega = require('../../components/Rega')
const Login = require('../../components/Login')


router.get('/rega', (req,res) => {
    const html = res.renderComponent(Rega)
    res.send(html)
})

router.get('/login', (req,res)=> {
    const html = res.renderComponent(Login)
    res.send(html)
})


router.get("/logout", (req, res) => {
    res.clearCookie("refresh").clearCookie("access");
    res.locals.user = undefined;
    res.redirect("/auth/login");
  });




module.exports = router