Clientes.permit(['insert', 'update', 'remove']).ifHasRole('administración').apply();
