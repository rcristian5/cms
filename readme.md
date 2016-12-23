# CMS Server

## Posts

#### Create Posts [POST]
{
	title:  'Titulo del posts',
	body:   'Contenido del posts',
	hidden: false,
	votes: 8,
	categories: [ 'cat1', 'cat2' ],
	tags: [ 'tag1', 'tags2' ]
}


Success

{
	message: 'OK',
	data: {
		<!-- POST RESULTATE -->
	},
	error: {}
}



Error

{
	message: 'Error',
	data: {},
	error: {
		menssage: 'Campos invalidos',
		errors: [{
			field: 'title',
			menssage: 'Es requerido'
		}]
	}
}

{
	message: 'Error',
	data: {},
	error: {
		menssage: 'Algo salio mal, vuelve a intentarlo',
	}
}
