/**
 * Created by IgnacioFerro on 07/09/2015.
 */
SyncedCron.add({
	name: 'Verificar el estado de las páginas web',
	schedule: function(parser) {
		// parser is a later.parse object
		return parser.text('every 2 minutes');
	},
	job: function() {
		return "Evento invocado";
	}
});

SyncedCron.config({
	// Log job run details to console
	log: true,
	// Use a custom logger function (defaults to Meteor's logging package)
	logger: null,
	// Name of collection to use for synchronisation and logging
	collectionName: 'cronHistory',
	// Default to using localTime
	utc: false
});

SyncedCron.start();