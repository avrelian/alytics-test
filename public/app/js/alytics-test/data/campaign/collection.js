(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AlyticsTest.Campaign.Collection = (function(_super) {
    __extends(Collection, _super);

    function Collection() {
      _ref = Collection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Collection.prototype.type = 'AlyticsTest.Campaign.Collection';

    Collection.prototype.model = AlyticsTest.Campaign.Model;

    Collection.prototype.initialize = function(models, options) {};

    Collection.prototype.set = function() {
      Collection.__super__.set.apply(this, arguments);
      return localStorage.setItem('campaigns', JSON.stringify(this.toJSON()));
    };

    Collection.prototype.getTotal = function() {
      var goal, total;
      total = this.models.reduce(function(subTotal, campaign) {
        var campaignCosts;
        campaignCosts = campaign.attributes.costs;
        subTotal.costs.clicks += campaignCosts.clicks;
        subTotal.costs.shows += campaignCosts.shows;
        subTotal.costs.cost += campaignCosts.cost;
        _.each(campaign.attributes.goals, function(goal, i) {
          return subTotal.goals[i].count += goal.count;
        });
        return subTotal;
      }, {
        value: 'Total',
        status: false,
        costs: {
          clicks: 0,
          shows: 0,
          cost: 0
        },
        goals: (function() {
          var _i, _len, _ref1, _results;
          _ref1 = this.models[0].attributes.goals;
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            goal = _ref1[_i];
            _results.push({
              name: goal.name,
              goal_id: goal.goal_id,
              count: 0
            });
          }
          return _results;
        }).call(this)
      }, this);
      total.costs.cpc = total.costs.cost / total.costs.clicks;
      total.costs.ctr = 100 * total.costs.clicks / total.costs.shows;
      _.each(total.goals, function(goal) {
        goal.cpa = total.costs.cost / goal.count;
        return goal.cr = 100 * goal.count / total.costs.clicks;
      });
      return total;
    };

    return Collection;

  })(Backbone.Collection);

}).call(this);
