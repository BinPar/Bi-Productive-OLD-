
SimpleSchema.RegEx.PostalCode = /^[0-9]{5}$/;

SimpleSchema.messages({
	required: "El campo [label] es obligatorio",
	minString: "El campo [label] debe tener al menos [min] caracteres",
	maxString: "El campo [label] no puede exceder los [max] caracteres",
	minNumber: "El campo [label] debe de ser al menos [min]",
	maxNumber: "El campo [label] no puede exceder [max]",
	minDate: "El campo [label] debe ser posterior a [min]",
	maxDate: "El campo [label] debe ser anterior a [max]",
	badDate: "El campo [label] no es una fecha válida",
	minCount: "Es necesario especificar al menos [minCount] valores",
	maxCount: "No se pueden especificar más de [maxCount] valores",
	noDecimal: "El campo [label] debe de ser un entero",
	notAllowed: "El campo [value] no tiene el valor permitido",
	expectedString: "El campo [label] debe de ser una cadena",
	expectedNumber: "El campo [label] debe de ser un número",
	expectedBoolean: "El campo [label] debe de ser booleano",
	expectedArray: "El campo [label] debe de ser una lista",
	expectedObject: "El campo [label] debe de ser un objeto",
	expectedConstructor: "El campo [label] debe de ser un [type]",
	regEx: [
		{msg: "El campo [label] no tiene el formato correcto"},
		{exp: SimpleSchema.RegEx.Email, msg: "El campo [label] debe contener una dirección de coorreo electrónico válida"},
		{exp: SimpleSchema.RegEx.WeakEmail, msg: "El campo [label] debe contener una dirección de coorreo electrónico válida"},
		{exp: SimpleSchema.RegEx.Domain, msg: "El campo [label] debe contener un dominio válido"},
		{exp: SimpleSchema.RegEx.WeakDomain, msg: "El campo [label] debe contener un dominio válido"},
		{exp: SimpleSchema.RegEx.IP, msg: "El campo [label] debe contener una dirección IPv4 o IPv6 válida"},
		{exp: SimpleSchema.RegEx.IPv4, msg: "El campo [label] debe contener una dirección IPv4 válida"},
		{exp: SimpleSchema.RegEx.IPv6, msg: "El campo [label] debe contener una dirección IPv6 válida"},
		{exp: SimpleSchema.RegEx.Url, msg: "El campo [label] debe contener una dirección URL válida"},
		{exp: SimpleSchema.RegEx.Id, msg: "El campo [label] debe contener una código alfanumérico válido"},
		{exp: SimpleSchema.RegEx.PostalCode, msg: "El campo [label] debe contener un código postal válido"},
	],
	keyNotInSchema: "La clave [key] no está permitida por el esquema"
});
