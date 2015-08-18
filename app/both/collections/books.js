Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Título",
		max: 20
	},
	author: {
		type: String,
		label: "Autor"
	},
	copies: {
		type: Number,
		label: "Nº de copias",
		min: 0
	},
	lastCheckedOut: {
		type: Date,
		label: "Fecha de publicación",
		optional: true
	},
	summary: {
		type: String,
		label: "Sumario",
		optional: true,
		max: 1000
	}
}));
