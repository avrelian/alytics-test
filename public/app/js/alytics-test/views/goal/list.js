(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AlyticsTest.Views.Goal.List = (function(_super) {
    __extends(List, _super);

    function List() {
      this.appendOne = __bind(this.appendOne, this);
      _ref = List.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    List.prototype.type = 'AlyticsTest.Views.Goal.List';

    List.prototype.template = JST['alytics-test/goal/list'];

    List.prototype.initialize = function() {
      this.render();
      this.cacheUI();
      return this.appendItems();
    };

    List.prototype.render = function() {
      return this;
    };

    List.prototype.appendItems = function() {
      return this.collection.each(this.appendOne);
    };

    List.prototype.serializeData = function() {
      var data;
      data = this.collection.toJSON();
      return data;
    };

    List.prototype.cacheUI = function() {};

    List.prototype.appendOne = function(level) {
      var goalView;
      goalView = new AlyticsTest.Views.Goal.Item({
        model: level,
        parentView: this
      });
      return this.$el.append(goalView.$el);
    };

    return List;

  })(Backbone.View);

}).call(this);
