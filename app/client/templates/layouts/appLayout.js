Template.layout.rendered = function() {
  $('#login-sign-in-link').text('Login ▾');
  $('.login-close-text').text('Fechar');
  $('#login-username-or-email-label').text('Nome de usuário ou e-mail');
  $('#login-password-label').text('Senha');
  $('#signup-link').text('Criar uma conta');
  $('#forgot-password-link').text('Esqueceu a senha?');
  $('#login-buttons-forgot-password').text('Recuperar');
  $('#back-to-login-link').text('Login');
  $('#login-username-label').text('Usuário para login');
  $('#login-buttons-open-change-password').text('Alterar senha');
  $('#login-buttons-logout').text('Logout');
  if ($('#login-buttons-password').text().indexOf('Sign in') != -1) {
    $('#login-buttons-password').text('Login');
  } else {
    $('#login-buttons-password').text('Criar conta');
  }
  $('.login-button').addClass('btn btn-warning');
  $('.login-button').removeClass('login-button login-button-form-submit');
  if ($('.message.error-message').text().indexOf('Username must be at least 3 characters long') != -1) {
    $('.message.error-message').text('Usuário deve ter pelo menos 3 caracteres');
  } else if ($('.message.error-message').text().indexOf('Incorrect password') != -1 || $('.message.error-message').text().indexOf('User not found') != -1) {
    $('.message.error-message').text('Usuário/senha errado(s)');
  }
  $('#login-old-password-label').text('Senha atual');
  $('#login-buttons-do-change-password').text('Alterar a senha');
  $('#reset-password-new-password-label').text('Nova senha');
  $('#login-buttons-reset-password-button').text('Alterar');
  if ($('.message.info-message').text().indexOf('Email sent') != -1) $('.message.info-message').text('E-mail enviado');
  $('#just-verified-dismiss-button').parent().html('Email verificado <div class="btn btn-warning" id="just-verified-dismiss-button">Ocultar</div>');
  alert("OK");
};