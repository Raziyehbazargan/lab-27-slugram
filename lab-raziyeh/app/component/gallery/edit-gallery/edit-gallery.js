'use strict';

module.exports = {
  template: require('./edit-gallery.html'),
  controller: ['$log', 'galleryService', EditGalleryController],
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<',
  },
};

function EditGalleryController($log, galleryService){
  $log.debug('init editGalleryCtrl');

  this.updateGallery = function(){
    galleryService.updateGallery(this.gallery._id, this.gallery)
    .catch( () => {
      $log.debug('error in editGalleryCtrl');
    });
  };
}