class AlyticsTest.Views.Campaign.Item extends Backbone.View

  type: 'AlyticsTest.Views.Campaign.Item'

  template: JST['alytics-test/campaign/item']

  numFractionalDigits:
    cpc: 0
    ctr: 0
    cpa: 0
    cr: 0

  events:
    'mouseover .campaign-value-link': 'onMouseOver'
    'mouseleave .campaign-value-link': 'onMouseLeave'

  initialize: ->
    @render()
    @cacheUI()

  render: ->
    outerEl = $(@template(@serializeData()))
    @$el.replaceWith(outerEl)
    @setElement(outerEl)
    @

  serializeData: ->
    data = @model.toJSON()

    blocks_visibility = alyticsTestDB.user.get('campaign_blocks_visibility')

    costs =
      cpc: utils.formatNumber(data.costs.cpc, @numFractionalDigits.cpc)
      ctr: utils.formatNumber(data.costs.ctr, @numFractionalDigits.ctr)
      cost: utils.formatNumber(data.costs.cost)
      shows: utils.formatNumber(data.costs.shows)
      clicks: utils.formatNumber(data.costs.clicks)

    data.costs = costs

    goals = []
    for goal in data.goals
      goals.push(
        cpa: utils.formatNumber(goal.cr, @numFractionalDigits.cpa)
        cr: utils.formatNumber(goal.cr, @numFractionalDigits.cr)
        count: utils.formatNumber(goal.count)
        visible: blocks_visibility.goals[goal.goal_id]
      )

    data.goals = goals

    data.statusVisible = blocks_visibility.status
    data.costsVisible = blocks_visibility.costs

    data.total = if data.value == 'Total' then 'total' else ''

    data

  cacheUI: ->

  onMouseOver: =>
    @$el.addClass('show-edit-button')

  onMouseLeave: =>
    # TODO: если редактирование начинается по клику на ссылке, то все ок. Если нет - то нужно сделать задержку.
    @$el.removeClass('show-edit-button')
