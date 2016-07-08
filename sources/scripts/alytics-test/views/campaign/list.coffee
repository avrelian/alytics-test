class AlyticsTest.Views.Campaign.List extends Backbone.View

  type: 'AlyticsTest.Views.Campaign.List'

  template: JST['alytics-test/campaign/list']

  initialize: ->
    @render()
    @cacheUI()
    @appendItems()

    new AlyticsTest.Views.Campaign.Item(
      el: @$total,
      model: new AlyticsTest.Campaign.Model(@collection.getTotal())
    )

  render: ->
    outerEl = $(@template(@serializeData()))
    @$el.replaceWith(outerEl)
    @setElement(outerEl)
    @

  appendItems: ->
    @collection.each(@appendOne)

  serializeData: ->
    data = @collection.toJSON()

    data.goals = data[0].goals.slice(0)
    for goal, i in data.goals
      numParams = -1 # количество невыводимых в таблицу параметров
      for param of goal
        numParams += 1
      goal.numParams = numParams
      # TODO: убрать
      if goal.name != window.alyticsTestDB.goals.models[i].attributes.name
        throw new Error('')
      goal.goal_id = window.alyticsTestDB.goals.models[i].attributes.goal_id

    data

  cacheUI: ->
    @$items = @$('.items')
    @$goals = @$('.goals')
    @$total = @$('.total')

  appendOne: (level) =>
    campaignView = new AlyticsTest.Views.Campaign.Item(
      model: level
      parentView: @
    )

    @$items.append(campaignView.$el)
