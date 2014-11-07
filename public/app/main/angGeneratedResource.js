/**
 * Created by AntonyBaasan on 14-11-07.
 *
 * Resource to call number generator API
 */

angular.module('app').factory('angGeneratedResource', function($resource){
    var GeneratorResource = $resource('/api/generator/:from/:to',
        {from: "@from", to: "@to"},
        {get: {method:'GET',isArray:true}}
    );

    return GeneratorResource;
});