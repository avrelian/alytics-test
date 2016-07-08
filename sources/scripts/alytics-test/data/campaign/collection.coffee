class AlyticsTest.Campaign.Collection extends Backbone.Collection

  type: 'AlyticsTest.Campaign.Collection'

  model: AlyticsTest.Campaign.Model

  initialize: (models, options) ->

  getTotal: ->
    total = @models.reduce( (subTotal, campaign) ->
      campaignCosts = campaign.attributes.costs
      subTotal.costs.clicks += campaignCosts.clicks
      subTotal.costs.shows += campaignCosts.shows
      subTotal.costs.cost += campaignCosts.cost

      _.each(campaign.attributes.goals, (goal, i) ->
        subTotal.goals[i].count += goal.count
      )

      subTotal
    ,
      value: 'Total'
      status: false
      costs:
        clicks: 0
        shows: 0
        cost: 0
      goals: ({name: goal.name, goal_id: goal.goal_id, count: 0} for goal in @models[0].attributes.goals)
    , @)

    total.costs.cpc = total.costs.cost / total.costs.clicks
    total.costs.ctr = 100 * total.costs.clicks / total.costs.shows

    _.each(total.goals, (goal) ->
      goal.cpa = total.costs.cost / goal.count
      goal.cr = 100 * goal.count / total.costs.clicks
    )

    total
