SimpleSchema.messages({
	"required": "[label] es obligatorio",
	"minString": "[label] tiene que tener por lo menos [min] caracteres",
	"maxString": "[label] no puede tener más de [max] caracteres",
	"minNumber": "[label] tiene que ser por lo menos [min]",
	"maxNumber": "[label] no puede exceder [max]",
	"minNumberExclusive": "[label] tiene que ser más grande que [min]",
	"maxNumberExclusive": "[label] tiene que ser más chico que [max]",
	"minDate": "[label] tiene que ser anterior [min]",
	"maxDate": "[label] no puede ser posterior a[max]",
	"badDate": "[label] no es una fecha válida",
	"minCount": "No puede ser menor que [minCount]",
	"maxCount": "No puede ser mayor que [maxCount]",
	"noDecimal": "[label] tiene que ser un numero entero",
	"notAllowed": "[value] no es un valor permitido",
	"expectedString": "[label] tiene que ser una cadena de caracteres",
	"expectedNumber": "[label] tiene que ser un número",
	"expectedBoolean": "[label] tiene que ser de tipo 'si/no'",
	"expectedArray": "[label] tiene que ser una lista",
	"expectedObject": "[label] tiene que ser un objeto",
	"expectedConstructor": "[label] tiene que ser de tipo [type]",
	"keyNotInSchema": "[key] no esta permitido por el esquema",
	"regEx": {
		"0": {
			"msg": "[label] falló la validación por Expresión Regular (Regex)"
		},
		"1": {
			"exp": "SimpleSchema.RegEx.Email",
			"msg": "[label] tiene que ser una dirección de correo electrónico válida"
		},
		"2": {
			"exp": "SimpleSchema.RegEx.WeakEmail",
			"msg": "[label] tiene que ser una dirección de correo electrónico válida"
		},
		"3": {
			"exp": "SimpleSchema.RegEx.Domain",
			"msg": "[label] tiene que ser un nombre de dominio válido"
		},
		"4": {
			"exp": "SimpleSchema.RegEx.WeakDomain",
			"msg": "[label] tiene que ser un nombre de dominio válido"
		},
		"5": {
			"exp": "SimpleSchema.RegEx.IP",
			"msg": "[label] tiene que ser una dirección de IPv4 o IPv6 válida"
		},
		"6": {
			"exp": "SimpleSchema.RegEx.IPv4",
			"msg": "[label] tiene que ser una dirección de IPv4 válida"
		},
		"7": {
			"exp": "SimpleSchema.RegEx.IPv6",
			"msg": "[label] tiene que ser una dirección de IPv6 válida"
		},
		"8": {
			"exp": "SimpleSchema.RegEx.Url",
			"msg": "[label] tiene que ser una URL válida"
		},
		"9": {
			"exp": "SimpleSchema.RegEx.Id",
			"msg": "[label] tiene que ser un ID alfanumérico"
		}
	}
});