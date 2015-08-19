Clientes = new Mongo.Collection('clientes');

Meteor.methods({

});

DireccionSchema = new SimpleSchema({
	pais: {
		type: String,
		label: "País",
		max: 100
	},
	poblacion: {
		type: String,
		label: "Población",
		max: 100
	},
	ccpp: {
		type: String,
		regEx: SimpleSchema.RegEx.PostalCode,
		label: "Código postal"
	},
	calle: {
		type: String,
		label: "Calle"
	},
	numero: {
		type: Number,
		optional: true,
		label: "Nº"
	},
	piso: {
		type: String,
		optional: true,
		label: "Piso"
	},
	facturacion:
	{
		type: Boolean,
		label: "Dirección de facturación"
	},
	comercial:
	{
		type: Boolean,
		label: "Dirección comercial"
	},
	tecnico:
	{
		type: Boolean,
		label: "Dirección técnica"
	}
});

ContactoSchema = new SimpleSchema({
	nombre: {
		type: String,
		label: "Nombre",
		max: 100
	},
	apellidos: {
		type: String,
		label: "Apellidos",
		max: 100,
		optional: true
	},
	movil: {
		type: String,
		label: "Teléfono Móvil",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "tel"
			}
		}
	},
	telefono: {
		type: String,
		label: "Teléfono fijo",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "tel"
			}
		}
	},
	email: {
		type: String,
		label: "Correo electrónico",
		regEx: SimpleSchema.RegEx.Email,
		autoform: {
			afFieldInput: {
				type: "email"
			}
		}
	},
	facturacion:
	{
		type: Boolean,
		label: "Dirección de facturación"
	},
	comercial:
	{
		type: Boolean,
		label: "Dirección comercial"
	},
	tecnico:
	{
		type: Boolean,
		label: "Dirección técnica"
	}
});

Clientes.attachSchema(new SimpleSchema({
	razonSocial: {
		type: String,
		label: "Razón social",
		max: 100
	},
	nombre: {
		type: String,
		label: "Nombre corto",
		max: 50,
		index: 1
	},
	NIF: {
		type: String,
		label: "NIF",
		min: 0,
	},
	fechaUltimoContacto:
	{
		type: Date,
		label: "Fecha último contacto",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "bootstrap-datetimepicker"
			}
		}
	},
	fechaCreacion: {
		type: Date,
		label: "Fecha alta",
		autoValue: function() {
			if (this.isInsert) {
				return new Date;
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date};
			} else {
				this.unset();
			}
		}
	},
	fechaModificacion: {
		type: Date,
		label: "Fecha actualización",
		autoValue: function() {
			if (this.isUpdate) {
				return new Date();
			}
		},
		denyInsert: true,
		optional: true
	},
	detalles: {
		type: String,
		label: "Información detallada",
		optional: true
	},
	direcciones: {
		type: [DireccionSchema]
	},
	contactos:
	{
		type: [ContactoSchema],
		minCount: 1
	}
}));