Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/clientes', {
  name: 'clientes',
  controller: 'ClientesController'
});

Router.route('/cliente/:_id', function () {
  this.render('cliente');
}, {
  name: 'cliente.detalles'
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
