class AlyticsTest.Router extends Backbone.Router

  routes:
    '!': 'showCampaigns'
    '': 'showCampaigns'

  showCampaigns: ->