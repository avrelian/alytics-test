class AlyticsTest.Views.Campaign.List extends Backbone.View

  type: 'AlyticsTest.Views.Campaign.List'

  template: JST['alytics-test/campaign/list']

  events:
    'click .plus-sign': 'onPlusSignClick'
    'click .minus-sign': 'onMinusSignClick'

  initialize: ->
    @render()

  render: =>
    outerEl = $(@template(@serializeData()))
    @$el.replaceWith(outerEl)
    @setElement(outerEl)

    @cacheUI()
    @appendItems()

    new AlyticsTest.Views.Campaign.Item(
      el: @$total,
      model: new AlyticsTest.Campaign.Model(@collection.getTotal())
    )

    @

  appendItems: ->
    @collection.each(@appendOne)

  serializeData: ->
    blocks_visibility = alyticsTestDB.user.get('campaign_blocks_visibility')

    data = @collection.toJSON()

    data.goals = data[0].goals.slice(0)
    for goal, i in data.goals
      # TODO: если число параметров на цель постоянно - то все ок. Если меняется динамически, нужно вычислять.
      goal.numParams = 3
      goal.goal_id = window.alyticsTestDB.goals.models[i].attributes.goal_id
      goal.visible = blocks_visibility.goals[goal.goal_id]

    data.statusVisible = blocks_visibility.status
    data.costsVisible = blocks_visibility.costs

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

  onPlusSignClick: (event) =>
    visibility = alyticsTestDB.user.get('campaign_blocks_visibility')

    for prop of window.bootstrapData.campaign_blocks_visibility
      if event.target.classList.contains("#{prop}-block")
        visibility[prop] = true

    for goal of window.bootstrapData.campaign_blocks_visibility.goals
      if event.target.classList.contains("block-#{goal}")
        visibility.goals[goal] = true

    alyticsTestDB.user.set('campaign_blocks_visibility', visibility, trigger: true)

    @render()

  onMinusSignClick: (event) =>
    visibility = alyticsTestDB.user.get('campaign_blocks_visibility')

    for prop of window.bootstrapData.campaign_blocks_visibility
      if event.target.classList.contains("#{prop}-block")
        visibility[prop] = false

    for goal of window.bootstrapData.campaign_blocks_visibility.goals
      if event.target.classList.contains("block-#{goal}")
        visibility.goals[goal] = false

    alyticsTestDB.user.set('campaign_blocks_visibility', visibility, trigger: true)

    @render()
