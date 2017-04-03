define [
	"jquery"
	"underscore"
	"backbone"
], ($, _, Backbone) ->

	class App extends Backbone.View

		tagName: 'h1'
		id: 'helloworld'

		initialize: () ->
			console.log "Executando app"
		render: () ->
			@$el.html 'Hello World <em>com jQuery</em>'
			@