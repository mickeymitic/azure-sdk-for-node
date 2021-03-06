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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the MAMPolicyAppIdOrGroupIdPayload class.
 * @constructor
 * MAM Policy request body for properties Intune MAM.
 *
 * @member {object} [properties]
 *
 * @member {string} [properties.url]
 *
 */
class MAMPolicyAppIdOrGroupIdPayload {
  constructor() {
  }

  /**
   * Defines the metadata of MAMPolicyAppIdOrGroupIdPayload
   *
   * @returns {object} metadata of MAMPolicyAppIdOrGroupIdPayload
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MAMPolicyAppIdOrGroupIdPayload',
      type: {
        name: 'Composite',
        className: 'MAMPolicyAppIdOrGroupIdPayload',
        modelProperties: {
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'MAMPolicyAppOrGroupIdProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = MAMPolicyAppIdOrGroupIdPayload;
