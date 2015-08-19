Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/clientes', {
  name: 'clientes',
  controller: 'ClientesController'
});

Router.route('/nuevoCliente',{
  name: 'cliente.nuevo',
  controller: 'NuevoClienteController'
});

Router.route('/cliente/:_id',{
  name: 'cliente.detalles',
  controller: 'ClienteController'
});

Router.route('/books', {
  name: 'books',
  controller: 'BooksController'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});

Router.onBeforeAction(function(){
  if (!Meteor.user() || !Roles.userIsInRole(Meteor.user(), 'administración')) {
    this.render('accessDenied');
  }else {
    this.next();
  }},
  {only: 'cliente.nuevo'}
);

Router.onBeforeAction(function(){
    if (!Meteor.user() || !Roles.userIsInRole(Meteor.user(), ['administración','producción','comercial'])) {
      this.render('accessDenied');
    }else {
      this.next();
    }},
  {only: ['clientes','cliente.detalles']}
);