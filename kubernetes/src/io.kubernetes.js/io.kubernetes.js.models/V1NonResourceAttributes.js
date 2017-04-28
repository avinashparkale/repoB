/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1NonResourceAttributes = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1NonResourceAttributes model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1NonResourceAttributes
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1NonResourceAttributes</code>.
   * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1NonResourceAttributes
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1NonResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1NonResourceAttributes} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1NonResourceAttributes} The populated <code>V1NonResourceAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('verb')) {
        obj['verb'] = ApiClient.convertToType(data['verb'], 'String');
      }
    }
    return obj;
  }

  /**
   * Path is the URL path of the request
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * Verb is the standard HTTP verb
   * @member {String} verb
   */
  exports.prototype['verb'] = undefined;



  return exports;
}));

