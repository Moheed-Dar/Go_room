'use client';
import React, { useState } from 'react';
import PhotoModal from './PhotoModal';

const PhotoGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const photos = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      alt: 'Main featured photo'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg',
      alt: 'Gallery photo 1'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/4784507/pexels-photo-4784507.jpeg',
      alt: 'Gallery photo 2'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg',
      alt: 'Gallery photo 3'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/19107581/pexels-photo-19107581.jpeg',
      alt: 'Gallery photo 4'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/787871/pexels-photo-787871.jpeg',
      alt: 'Gallery photo 5'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg',
      alt: 'Gallery photo 5'
    }
  ];

  const additionalPhotos = [
    {
      id: 7,
      url: 'https://images.pexels.com/photos/32119102/pexels-photo-32119102.jpeg',
      alt: 'Additional photo 1'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/322154/pexels-photo-322154.jpeg',
      alt: 'Additional photo 2'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg',
      alt: 'Additional photo 3'
    },
    {
      id: 10,
      url: 'https://images.pexels.com/photos/1977342/pexels-photo-1977342.jpeg',
      alt: 'Additional photo 4'
    },
    {
      id: 11,
      url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Additional photo 5'
    },
    {
      id: 12,
      url: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Additional photo 6'
    },
    {
      id: 13,
      url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Additional photo 7'
    },
    {
      id: 14,
      url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Additional photo 8'
    },
    {
      id: 15,
      url: 'https://images.pexels.com/photos/322154/pexels-photo-322154.jpeg',
      alt: 'Additional photo 9'
    },
    {
      id: 16,
      url: 'https://images.pexels.com/photos/1181624/pexels-photo-1181624.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Additional photo 10'
    },
    {
      id: 17,
      url: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Additional photo 11'
    },
    {
      id: 18,
      url: 'https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Additional photo 12'
    }
  ];

  const user = {
    name: 'John Dobermann',
    title: 'Listed By:',
    followers: 'For: $1000 - $5000',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  };

  const gridPhotos = photos.slice(1);
  const allPhotos = [...photos, ...additionalPhotos];

  const getGridItemClasses = (index) => {
    const classes = [];
    if (index < 6) {
      classes.push('lg:border-b lg:border-gray-200');
    }
    if (index === 0 ||index === 1 || index === 3 || index === 4 || index === 5) {
      classes.push('lg:border-l lg:border-gray-200');
    }
    if (index === 2 ) {
      classes.push('lg:border-l lg:border-r lg:border-gray-200');
    }
    
    return classes.join(' ');
  };

  return (
    <div className=" mb-15 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row h-auto lg:h-96">
            <div className="relative lg:w-2/3 h-64 lg:h-full overflow-hidden group cursor-pointer">
              <img 
                src={photos[0].url} 
                alt={photos[0].alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 fade-in"
              />

              <div className="absolute bottom-4 left-4 flex items-center space-x-3 bg-black/20 backdrop-blur-sm rounded-lg p-3">
                <div className="relative">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div className="text-white">
                  
                  <p className="text-xs opacity-90">{user.title}</p>
                  <h3 className="font-semibold text-sm">{user.name}</h3>
                  <p className="text-xs opacity-75">{user.followers}</p>
                </div>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-0">
              {gridPhotos.map((photo, index) => {
                const isLast = index === gridPhotos.length - 1;
                
                return (
                  <div 
                    key={photo.id}
                    className={`relative aspect-square overflow-hidden group cursor-pointer ${getGridItemClasses(index)}`}
                    onClick={isLast ? () => setIsModalOpen(true) : undefined}
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.alt}
                      className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 fade-in ${
                        isLast ? 'brightness-50' : 'group-hover:brightness-110'
                      }`}
                    />
                    
                    {isLast && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <div className="text-center text-white">
                          <div className="text-2xl font-bold">+{additionalPhotos.length}</div>
                          <div className="text-sm opacity-90">More Photos</div>
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>


      <PhotoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        photos={allPhotos}
      />
    </div>
  );
};

export default PhotoGrid;