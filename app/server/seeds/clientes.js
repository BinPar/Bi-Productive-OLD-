Meteor.startup(function() {
	Factory.define('cliente', Clientes, {
		Nombre: function () {
			return Fake.sentence(3);
		},
		Alias: function () {
			return Fake.word();
		},
		NIF: function () {
			return Fake.fromArray(["A", "B", "C", "D", "E", "F", "G", "H", "I"]) + _.random(10000000, 99999999);
		},
		FechaCreacion: function()
		{
			var d = new Date();
			d.setDate(d.getDate() - _.random(0, 2000));
			return d;
		},
		Direcciones: [
			{
				País: "España",
				Población: "Madrid",
				CódigoPostal: "28050",
				Calle: "Quintanapalla",
				Número: "8",
				Piso: "4º B",
				Facturación: true, Comercial: true, Técnico: true
			}
		],
		Contactos: [
			{
				Nombre: "Manolo",
				Apellidos: "Galán",
				Teléfono: "+34 91 121 75 00",
				Móvil: "607 45 65 45",
				CorreoElectrónico: "xjgalan@medicapanamericana.es",
				Facturación: false, Comercial: true, Técnico: false
			},
			{
				Nombre: "José",
				Apellidos: "Rico",
				Teléfono: "+34 91 121 75 00",
				Móvil: "607 45 65 45",
				CorreoElectrónico: "jxrico@medicapanamericana.es",
				Facturación: false, Comercial: false, Técnico: true
			},
			{
				Nombre: "Pedro",
				Apellidos: "Iñigo",
				Móvil: "607 45 65 45",
				Teléfono: "+34 91 121 75 00",
				CorreoElectrónico: "asxas@medicapanamericana.es",
				Facturación: true, Comercial: false, Técnico: false
			}
		]
	});

	if (Clientes.find({}).count() === 0)
	{
		_(1544).times(function (n) {
			Factory.create('cliente');
		});
	}
});