Meteor.startup(function() {

	CodeVersions.remove({Version: '0.12'});
	CodeVersions.remove({Version: '0.13'});


	if (CodeVersions.find({Version: '0.13'}).count() === 0) {
		CodeVersions.insert({
			Version: '0.13',
			Type: 'info',
			Icon: 'edit',
			Title: 'Mantenimientos generales: Clientes',
			Creation: new Date(2015, 8, 11, 12, 00, 0, 0),
			Users: [
				{Name: 'DRNachio', Email: 'nacho@binpar.com'}
			],
			Description: '<p>Se incorpora la funcionalidad necesaria para matenimientos generales.</p>',
			Details: '<p>Algo de sufrimiento para configurar correctamente <a href="https://atmospherejs.com/aldeed/autoform">aldeed:autoform</a>. Tengo la sensación de que <strong>Eric Dobbertin</strong> es un genio, pero la responsabilidad de mantener tantos paquetes simultáneamente le supera y es incompatible con el trabajo del que vive. Tal vez sea el primera debilidad clara del contexto de código abierto. Un sistema como este acelera mucho la velocidad en la que se crea el código, pero si nadie cobra por ello, es difícil exigir que funcione correctamente.</p>' +
			'<p>El ejemplo más claro de esto serian los temas de validación de duplicados en servidor y como genera el efecto desagradable del error desapareciendo solo en el cliente (reconocido desde hace meses, pero sin fecha de solución) y el de un error de validación en un formulario que al salir del mismo (sin corregirlo) y volver a cualquier otro registro del mismo formulario sigue mostrando (aunque el registro este bien)… este último es especialmente llamativo y hace meses que se conoce.</p>' +
			'<p>DataTables responsivas (una odisea).</p>' +
			'<p>Añadido módulo de DataTables <a href="https://atmospherejs.com/aldeed/tabular">aldeed:tabular</a>.</p>' +
			'<p>Localización de datatables mediante el fichero de configuración <strong>lib/config/traduccionDataTables.js</strong>.</p>' +
			'<p>Añadido módulo de AutoForm <a href="https://atmospherejs.com/aldeed/autoform">aldeed:autoform</a>.</p>' +
			'<p>Añadido módulo de Moment <a href="https://atmospherejs.com/momentjs/moment">momentjs:moment</a>.</p>' +
			'<p>Localizado el módulo de Moment mediante el fichero situado en <strong>lib/config/moment_es.js</strong>.</p>' +
			'<p>Incorporado sistema de animación a la home en la lista de <strong>los logros más valorados<strong> al reordenar.'
		});
	}

	if (CodeVersions.find({Version: '0.12'}).count() === 0) {
		CodeVersions.insert({
			Version: '0.12',
			Type: 'info',
			Icon: 'user',
			Title: 'Registro de usuarios',
			Creation: new Date(2015, 8, 9, 12, 00, 0, 0),
			Users: [
				{Name:'DRNachio', Email:'nacho@binpar.com'}
			],
			Description:'<p>Se incorpora la funcionalidad de usuarios y roles.</p>',
			Details:    '<p>Tras la versión <strong>0.11</strong> identifico muchos problemas de base con el desarrollo en <a href="http://www.meteor.com">Meteor</a>, realizo el tutorial de <a href="http://es.discovermeteor.com/">discovermeteor.com</a> y re-estudio la <a href="http://docs.meteor.com/#/full/">documentación</a> para mejorar mi dominio de la plataforma.</p>' +
									'<p>El <a href="http://github.differential.com/meteor-boilerplate/">Boilerplate</a> de <a href="http://differential.com/">Diferencial</a> ha acelerado el proceso, pero tengo la sensación de no controlar los entresijos de como esta funcionando (como si llegase a un proyecto ya construido sin conocerlo).</p>'+
									'<p>Añadida demo reactiva y compensación de latencia.</p>' +
									'<p>Localización del sistema de autenticación mediante <strong>both/accounts/config.js</strong>.</p>' +
									'<p>Se añade también la explicación sobre <a href="#tecnologiasReactivas">tecnologías reactivas</a> así como el ejemplo páctico basado en <strong>los logros más valorados</strong>.</p>'
		});
	}

	if (CodeVersions.find({Version: '0.11'}).count() === 0) {
		CodeVersions.insert({
			Version: '0.11',
			Type: 'info',
			Icon: 'calendar',
			Title: 'Historial de versiones del sistema',
			Creation: new Date(2015, 8, 6, 9, 57, 0, 0),
			Users: [
				{Name:'DRNachio', Email:'nacho@binpar.com'}
			],
			Description:'<p>Esto que estas viendo (el historial de versiones del sistema), fue añadido en esta fase como modelo inicial para la conexión con la BBDDs de <a href="https://www.mongodb.org/">MongoDB</a>.</p>',
			Details:    '<p>En esta versión he tenido muchísimos problemas para identificar donde se ejecuta cada parte: Cliente / Servidor / Ambos.</p>' +
									'<p>Añadida la funcionalidad de crear un usuario por defecto.</p>' +
									'<p>Añadido el sistema interno de perfiles.</p>' +
									'<p>Por el momento me parece más claro el sistema estándar de <a href="http://www.meteor.com/">Meteor</a>  que el <a href="http://github.differential.com/meteor-boilerplate/">Boilerplate</a> de <a href="http://differential.com/">Diferencial</a>.</p>' +
									'<p>Se añade la licencia <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional License</a>.</p>'+
									'<p>Temas pendientes:</p>' +
									'<ul><li>Encontrar el modo de publicar una <strong>collection</strong> en un <strong>template</strong> sin tocar el <strong>controller</strong>.</li></ul>'

		});
	}

	if (CodeVersions.find({Version: '0.01'}).count() === 0) {
		CodeVersions.insert({
			Version: '0.01',
			Type: 'success',
			Icon: 'home',
			Title: 'Se inicia el proyecto de desarrollo',
			Creation: new Date(2015, 8, 5, 16, 33, 0, 0),
			Users: [
				{Name:'DRNachio', Email:'nacho@binpar.com'}
			],
			Description:  '<p>Con más miedo que vergüenza (sobre todo debido a la cantidad de tecnologías nuevas aplicadas) inicio el desarrollo de Bi-Productive.</p>',
			Details:      '<p>Lo creo como un proyecto de código abierto (por si alguna otra empresa pudiera necesitarlo), aunque en las fases iniciales se centrará en las necesidades de producción de <a href="http://www.binpar.com">BinPar</a>.</p>' +
										'<p>Esta primera versión pone el foco en evolucionar el <a href="http://github.differential.com/meteor-boilerplate/">Boilerplate</a> de <a href="http://www.meteor.com/">Meteor</a> desarrollado por <a href="http://differential.com/">Diferencial</a> incorporando las necesidades básicas de BinPar.</p>' +
										'<p>El estilo visual estará absolutamente basado en la vestión <a href="http://lesscss.org/">less</a> de <a href="http://getbootstrap.com/">Boostrap</a> y, de cara a permitir su personalización a futuro para otras empresas y para no necesitar adaptarlo a futuras versiones de <a href="http://getbootstrap.com/">Boostrap</a> ha sido personalizado ajustando las variables less definidas para este proposito mediante <a href="http://bootstrap-live-customizer.com/">Boostrap Live Customizer</a>.</p>'
		});
	}
});
