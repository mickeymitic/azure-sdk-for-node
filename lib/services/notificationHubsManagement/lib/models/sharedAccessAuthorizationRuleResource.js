/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the SharedAccessAuthorizationRuleResource class.
 * @constructor
 * Description of a Namespace AuthorizationRules.
 *
 * @member {array} [rights] The rights associated with the rule.
 * 
 */
function SharedAccessAuthorizationRuleResource() {
  SharedAccessAuthorizationRuleResource['super_'].call(this);
}

util.inherits(SharedAccessAuthorizationRuleResource, models['Resource']);

/**
 * Defines the metadata of SharedAccessAuthorizationRuleResource
 *
 * @returns {object} metadata of SharedAccessAuthorizationRuleResource
 *
 */
SharedAccessAuthorizationRuleResource.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SharedAccessAuthorizationRuleResource',
    type: {
      name: 'Composite',
      className: 'SharedAccessAuthorizationRuleResource',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        rights: {
          required: false,
          serializedName: 'properties.rights',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'AccessRightsElementType',
                type: {
                  name: 'Enum',
                  allowedValues: [ 'Manage', 'Send', 'Listen' ]
                }
            }
          }
        }
      }
    }
  };
};

module.exports = SharedAccessAuthorizationRuleResource;