import React, { useEffect } from 'react';

const PhotoModal = ({ isOpen, onClose, photos }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">All Photos</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            ×
          </button>
        </div>
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)] custom-scrollbar">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div 
                key={photo.id}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 fade-in"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;