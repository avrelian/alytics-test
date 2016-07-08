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

    console.log(window.alyticsTestDB.campaigns)
    console.log(window.alyticsTestDB.goals)

  cacheUI: ->
    @$campaigns = $('.campaigns.placeholder')

  initRouter: ->
    new AlyticsTest.Router
    Backbone.history.start()