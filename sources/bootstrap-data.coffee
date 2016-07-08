numGoals = 5
numCampaigns = 10

bounds =
  cost:
    min: 10
    max: 10000
  clicks:
    min: 10
    max: 1000
  shows:
    min: 10
    max: 10000
  count:
    min: 10
    max: 100

random = (min, max) ->
  Math.floor(Math.random() * (max - min + 1)) + min

generateCost = ->
  random(bounds.cost.min, bounds.cost.max)

generateClicks = ->
  random(bounds.clicks.min, bounds.clicks.max)

generateShows = ->
  random(bounds.shows.min, bounds.shows.max)

generateCount = ->
  random(bounds.count.min, bounds.count.max)

generateGoal = (id) ->
  goal_id: id
  name: "Цель #{id}"

generateCampaignGoalInfo = (goal, cost, clicks) ->
  count = generateCount()

  count: count
  cpa: cost / count
  cr: 100 * count / clicks
  name: goal.name
  goal_id: goal.goal_id

generateCosts = (cost, clicks) ->
  shows = generateShows()

  cost: cost
  clicks: clicks
  shows: shows
  cpc: cost / clicks
  ctr: 100 * clicks / shows

generateCampaign = (id, cost, clicks) ->
  value: "Кампания про продажу #{id}"
  status: if random(0, 1) then 'active' else 'stopped'
  costs: generateCosts(cost, clicks)
  goals: (generateCampaignGoalInfo(goal, cost, clicks) for goal in window.bootstrapData.goals_list)

window.bootstrapData = {}
window.bootstrapData.goals_list = (generateGoal(id) for id in [0...numGoals])
window.bootstrapData.content = (generateCampaign(id, generateCost(), generateClicks()) for id in [0...numCampaigns])
window.bootstrapData.campaign_blocks_visibility =
  status: true
  costs: true
  goals:
    0: true
    1: true
    2: true
    3: true
    4: true
window.bootstrapData.campaign_fields_visibility =
  "content-stat":
    shows: true
    clicks: true
    ctr: true
    cpc: true
    cost: true
    bounce_rate: false
    average_time: false
    pages_per_visit: false
    new_visits: false
    sessions: false
  "goal-0":
    count: true
    cpa: true
    cr: true
  "goal-1":
    count: true
    cpa: true
    cr: true
  "goal-2":
    count: true
    cpa: true
    cr: true
  "goal-3":
    count: true
    cpa: true
    cr: true
  "goal-4":
    count: true
    cpa: true
    cr: true

console.log(window.bootstrapData)
