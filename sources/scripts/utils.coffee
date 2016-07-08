#Backbone.Model.prototype.toJSON = do (toJSON = Backbone.Model.prototype.toJSON) ->
#  (options) ->
#    json = toJSON.call(@, options)
#    for attr of json
#      if (json[attr] instanceof Backbone.Model) or (json[attr] instanceof Backbone.Collection)
#        json[attr] = json[attr].toJSON()
#    json.type = @type
#    json
#
#Backbone.Collection.prototype.toJSON = do (toJSON = Backbone.Collection.prototype.toJSON) ->
#  (options) ->
#    json = toJSON.call(@, options)
#    json.type = @type
#    json
#
#Backbone.Model.prototype.set = do (set = Backbone.Model.prototype.set) ->
#  (key, val, options) ->
#    if typeof key == 'object'
#      attrs = key
#      options = val
#    else
#      attrs = {}
#      attrs[key] = val
#
#    for attrKey, attrValue of attrs
#      if attrValue?.type? and typeof window[attrValue.type] == 'function'
#        attrs[attrKey] = new window[attrValue.type](_.omit(attrValue, 'type'))
#
#    set.call(@, attrs, options)


window.utils =

  random: (min, max) ->
    Math.floor(Math.random() * (max - min + 1)) + min

  capitalize: (str) ->
    str.charAt(0).toUpperCase() + str.slice(1)

  formatNumber: (num, numFractionalDigits) ->
    if numFractionalDigits?
      num = num.toFixed(numFractionalDigits)

    ('' + num).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ').replace('.', ',')