# Angular Map
<p align="center">
    <img src="img/mapa-app.png" />
</p>

Para crear el proyecto:
* `ng new app_name`

Para instalar leaftlet:
* `npm install leaflet --save`

En angular.json añadir:
```
"styles": [
	....., 
	{
	   "input": "./node_modules/leaflet/dist/leaflet.css"
	}
],
```