// (function() {
//   angular.module('q3', [])
//     .component('classifieds', {
//       controller: controller,
//       templateUrl: '../views/ads.html'
//     })
//   controller.$inject = ['AdService']
//     function controller(AdService) {
//       const vm = this;
//       vm.form = {};
//
//       vm.createAd = (function(){
//         const newObj = {
//           title: vm.form.title,
//           description: vm.form.description,
//           price: vm.form.price,
//           item_image: vm.form.item_image
//         };
//
//       vm.$onInit = function(){
//         AdService.getAd()
//           .then(function(data) {
//             vm.ads = data;
//           })
//
//           AdService.postAd(newObj)
//             .then(function(data){
//               console.log("hi");
//               AdService.getAd()
//                 .then(function(data2){
//                   vm.ads = data2;
//                 })
//             })
//         })
//         vm.deleteAd = (function(gads){
//           var id = gads.params.id;
//           AdService.deleteAd(id)
//             .then(function() {
//               AdService.getAd()
//                 .then(function(data2){
//                   vm.ads = data2;
//                 })
//             })
//         })
//         vm.editAd = (function(id, title, price, description, item_image){
//
//           const formObj = {
//             id: id,
//             title: title,
//             price: price,
//             description: description,
//             item_image: item_image
//           }
//
//           AdService.patchAd(formObj)
//             .then(function() {
//               AdService.getAd()
//                 .then(function(data2) {
//                   vm.ads = data2;
//                 })
//             })
//         })
//       }
//     }
// })()

(function() {
  angular.module('q3', [])
    .component('classifieds', {
      controller: controller,
      templateUrl: '../views/ads.html'
    })

  controller.$inject = ['AdService']

  function controller(AdService) {
    const vm = this;

    vm.form = {};
    vm.createAd = createAd;
    vm.$onInit = onInit;
    vm.deleteAd = deleteAd;
    vm.editAd = editAd;

    function onInit() {
      AdService.getAd()
        .then(function(data) {
          vm.ads = data;
        })
    }

    function deleteAd() {
      var id = gads.params.id;
      AdService.deleteAd(id)
        .then(function() {
          AdService.getAd()
            .then(function(data2) {
              vm.ads = data2;
            })
        })
    }

    function createAd() {
      const newObj = {
        title: vm.form.title,
        description: vm.form.description,
        price: vm.form.price,
        item_image: vm.form.item_image
      };

      AdService.postAd(newObj)
        .then(function(data) {
          console.log("hi");
          AdService.getAd()
            .then(function(data2) {
              vm.ads = data2;
            })
        })
    }

    function editAd() {
      const formObj = {
        id: id,
        title: title,
        price: price,
        description: description,
        item_image: item_image
      }

      AdService.patchAd(formObj)
        .then(function() {
          AdService.getAd()
            .then(function(data2) {
              vm.ads = data2;
            })
        })
    }
  }
})()
