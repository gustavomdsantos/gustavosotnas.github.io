###
define [
	"jquery"
	"underscore"
	"backbone"
], ($, _, Backbone) ->
###
class App extends Backbone.View

	tagName: 'h1'
	id: 'helloworld'

	initialize: () ->
		console.log "Executando app"
		@$el.html 'Hello World <em>com jQuery</em>'
		@render
	render: () ->
		@$el.html 'Hello World <em>com jQuery</em>'
return new App() # cria uma classe e executa ela mesma