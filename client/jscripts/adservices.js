(function() {
  angular.module('q3')
    .service('AdService', function($http){
      return {
        getAd: function(){
          return $http.get('/classifieds')
          .then(function(payload){
            return payload.data;
          })
        },
        postAd: function(formObj){
          console.log("hi2");
          return $http.post('/classifieds', formObj)
          .then(function(payload){
            console.log('POST came back with payload');
            return payload.data;
          })
        },
        deleteAd: function(items){
          return $http.delete(`/classifieds/${items}`, items)
          .then(function(data){
            return data.data
          })
        },
        patchAd: function(formObj){
          return $http.patch(`/classifieds/${formObj.id}`, formObj)
        }
      }
    })
})()
