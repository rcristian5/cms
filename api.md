# CMS Server
Es un sistema de gestor de contenido para viajeros


## Metodos HTTP permitidos

|  Método  |              Descripción               |
| -------- | -------------------------------------- |
| `GET`    | Obtener un recurso o lista de recursos |
| `POST`   | Crear un recurso                       |
| `PUT`    | Actualizar un recurso                  |
| `DELETE` | Eliminar un recurso                    |


## Códigos de Respuesta

| Código |                         Descripción                          |
| ------ | ------------------------------------------------------------ |
| `200`  | Success                                                      |
| `201`  | Success - nuevo recurso creado.                              |
| `204`  | Success - no hay contenido para responder                    |
| `400`  | Bad Request - i.e. su solicitud no se pudo evaluar           |
| `401`  | Unauthorized - usuario no esta autenticado para este recurso |
| `404`  | Not Found - recurso no existe                                |
| `422`  | Unprocessable Entity - i.e. errores de validación            |
| `429`  | Limite de uso excedido, intente mas tarde                    |
| `500`  | Error de servidor                                            |

## Solicitudes

### Obtener todos los posts
_Solicitud [GET] /api/posts_



###### Respuesta

Success

> Status: 200

```json
	[
		{
			"_id": "586c28e8d99d07054e123f81",
			"updatedAt": "2017-01-03T23:26:54.029Z",
			"createdAt": "2017-01-03T22:42:48.245Z",
			"title": "titulo1",
			"body": "Contenido1",
			"categoryId": [],
			"tagId": [],
			"images": [
				"image1.png",
			],
			"hidden": true
		},
		{
			"_id": "586c28fcd99d07054e123f82",
			"updatedAt": "2017-01-03T22:43:08.034Z",
			"createdAt": "2017-01-03T22:43:08.034Z",
			"title": "Titulo2",
			"body": "Content2",
			"__v": 0,
			"categoryId": [],
			"tagId": [],
			"images": [],
			"hidden": false
		}
	]
```

Error

> Status: 500

```json
{
	"name": "Error",
	"message": "An error occurred",
	"errors": []
}
```

### Obtener un posts
_Solicitud [GET] /api/posts/586c28fcd99d07054e123f82_

###### Respuesta

Success

> Status: 200

```json
{
	"_id": "586c28fcd99d07054e123f82",
	"updatedAt": "2017-01-03T22:43:08.034Z",
	"createdAt": "2017-01-03T22:43:08.034Z",
	"title": "Titulo2",
	"body": "Content2",
	"__v": 0,
	"categoryId": [],
	"tagId": [],
	"images": [],
	"hidden": false
}
```

Error

> Status: 404

```json
{
	"name": "Error not found",
	"message": "Resource '586c28fcd99d07054e123f82' not found",
	"errors": []
}
```

### Crear un nuevo posts
_Solicitud [POST] /api/posts_

###### Body

```json
{
	"id": "586c28fcd99d07054e123f82",
	"title": "Titulo Actualizado",
	"body": "Content Actualizado",
	"categoryId": [],
	"tagId": [],
	"images": [],
	"hidden": false
}
```

###### Respuesta

Success

> Status: 201

```json
{
	"id": "586c28fcd99d07054e123f82",
	"title": "Titulo Actualizado",
	"body": "Content Actualizado",
	"categoryId": [],
	"tagId": [],
	"images": [],
	"hidden": false
}
```

Error

> Status: 422

```json
{
	"name": "ValidationError",
	"message": "posts validation failed",
	"errors": {
		"body": {
			"message": "Path `body` is required.",
			"name": "ValidatorError",
			"properties": {
				"type": "required",
				"message": "Path `{PATH}` is required.",
				"path": "body"
			},
			"kind": "required",
			"path": "body"
		},
		"title": {
			"message": "Uso de title es requerido",
			"name": "ValidatorError",
			"properties": {
				"type": "required",
				"message": "Uso de title es requerido",
				"path": "title"
			},
			"kind": "required",
			"path": "title"
		}
	}
}
```


### Actualizar un posts
_Solicitud [PUT] /api/posts_

###### Body

```json
{
	"id": "586c28fcd99d07054e123f82",
	"title": "Titulo Actualizado",
	"body": "Content Actualizado",
	"categoryId": [],
	"tagId": [],
	"images": [],
	"hidden": false
}
```

###### Respuesta

Success

> Status: 200

```json
{
	"id": "586c28fcd99d07054e123f82",
	"title": "Titulo Actualizado",
	"body": "Content Actualizado",
	"categoryId": [],
	"tagId": [],
	"images": [],
	"hidden": false
}
```

Error

> Status: 400

```json
{
	"name": "Bad request",
	"message": "Could not find id property",
	"errors": []
}
```

> Status: 404

```json
{
	"name": "Error not found",
	"message": "Resource '586c28fcd99d07054e123f82' not found",
	"errors": []
}
```


### Eliminar un posts
_Solicitud [DELETE] /api/posts_

###### Body

```json
{
	"id": "586c28fcd99d07054e123f82"
}
```

###### Respuesta

Success

> Status: 200

```json
{
	"id": "586c28fcd99d07054e123f82",
	"title": "Titulo Actualizado",
	"body": "Content Actualizado",
	"categoryId": [],
	"tagId": [],
	"images": [],
	"hidden": false
}
```

Error

> Status: 400

```json
{
	"name": "Bad request",
	"message": "Could not find id property",
	"errors": []
}
```

> Status: 404

```json
{
	"name": "Error not found",
	"message": "Resource '123' not found",
	"errors": []
}
```
