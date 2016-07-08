(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AlyticsTest.Views.Goal.Item = (function(_super) {
    __extends(Item, _super);

    function Item() {
      _ref = Item.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Item.prototype.type = 'AlyticsTest.Views.Goal.Item';

    Item.prototype.template = JST['alytics-test/goal/item'];

    Item.prototype.initialize = function() {
      this.render();
      return this.cacheUI();
    };

    Item.prototype.render = function() {
      var outerEl;
      outerEl = $(this.template(this.serializeData()));
      this.$el.replaceWith(outerEl);
      this.setElement(outerEl);
      return this;
    };

    Item.prototype.serializeData = function() {
      var data;
      data = this.model.toJSON();
      return data;
    };

    Item.prototype.cacheUI = function() {};

    return Item;

  })(Backbone.View);

}).call(this);
