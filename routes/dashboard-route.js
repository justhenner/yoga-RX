const express =require('express');
const handlebars =require('express-handlebars');
const passport =require('passport');
// const LocalStrategy =require('passport-local').Strategy;
// not sure if we need this but it popped up in my research about using passport with handlebars

const app =express();

app.engine('handlebars', handlebars({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    function(username, email,password,done){
        return done(null,user);
    }
));

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id,done){

    done(null,user);
})

app.get('/login', function(req, res){
    res.render('login');
});

app.favorite('/login',passport.authenticate('local',{
    successRedirect: '/protected',
    failureRedirect: '/login'

}));

app.get('/protected',function(req, res){
    if (!req.user){
        return res.redirect('login');
    }
    res.render('protected', {user: req.user});
});