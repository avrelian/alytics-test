class AlyticsTest.App extends Backbone.View

  type: 'AlyticsTest.App'

  initialize: ->
    @initData()
    @cacheUI()
    @initRouter()

    new AlyticsTest.Views.Campaign.List(
      el: @$campaigns
      collection: window.alyticsTestDB.campaigns
    )

  initData: ->
    window.alyticsTestDB.campaigns = new AlyticsTest.Campaign.Collection
    window.alyticsTestDB.campaigns.reset(window.bootstrapData.content)

    window.alyticsTestDB.goals = new AlyticsTest.Goal.Collection
    window.alyticsTestDB.goals.reset(window.bootstrapData.goals_list)

    window.alyticsTestDB.user = new AlyticsTest.User.Model(
      if localStorage.getItem('user')?
        JSON.parse(localStorage.getItem('user'))
      else
        campaign_blocks_visibility: window.bootstrapData.campaign_blocks_visibility
        campaign_fields_visibility: window.bootstrapData.campaign_fields_visibility
    )

  cacheUI: ->
    @$campaigns = $('.campaigns.placeholder')

  initRouter: ->
    new AlyticsTest.Router
    Backbone.history.start()