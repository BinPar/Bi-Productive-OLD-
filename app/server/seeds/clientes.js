Meteor.startup(function() {
	Factory.define('cliente', Clientes, {
		razonSocial: function () {
			return Fake.sentence(3);
		},
		nombre: function () {
			return Fake.word();
		},
		NIF: function () {
			return Fake.fromArray(["A", "B", "C", "D", "E", "F", "G", "H", "I"]) + _.random(10000000, 99999999);
		},
		fechaCreacion: function()
		{
			var d = new Date();
			d.setDate(d.getDate() - _.random(0, 2000));
			return d;
		},
		direcciones: [
			{
				pais: "España",
				poblacion: "Madrid",
				ccpp: "28050",
				calle: "Quintanapalla",
				numero: "8",
				piso: "4º B",
				facturacion: true, comercial: true, tecnico: true
			}
		],
		contactos: [
			{
				nombre: "Manolo",
				apellidos: "Galán",
				telefono: "+34 91 121 75 00",
				movil: "607 45 65 45",
				email: "xjgalan@medicapanamericana.es",
				facturacion: false, comercial: true, tecnico: false
			}
		]
});


	if (Clientes.find({}).count() === 0)
	{
		_(1544).times(function (n) {
			try {
				Factory.create('cliente');
			} catch(e)
			{
				console.log("Error creando empresa demo:");
				console.log(e);
			}
		});
	}
});