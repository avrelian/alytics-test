class AlyticsTest.User.Model extends Backbone.Model

  type: 'AlyticsTest.User.Model'

  set: ->
    super

    localStorage.setItem('user', JSON.stringify(@toJSON()))