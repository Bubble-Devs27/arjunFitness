"use client"
import React, { useState } from 'react'
import { Camera, Video, Play, Heart, Share } from 'lucide-react';
const Page = () => {
    const [activeTab, setActiveTab] = useState('photos');
    const photos = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486084/IMG-20250418-WA0097_c6fxnm.jpg',
      title: 'Push. Pull. Repeat',
      likes: 124
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486081/IMG-20250418-WA0099_lfvmsn.jpg',
      title: 'Beast Mode On',
      likes: 89
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486081/IMG-20250418-WA0095_efi63g.jpg',
      title: 'No Pain, Glory',
      likes: 156
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486081/IMG-20250418-WA0093_ffhnll.jpg',
      title: 'Lift. Sweat. Grow',
      likes: 203
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486080/IMG-20250418-WA0089_x8xlig.jpg',
      title: 'Muscles Loading Up',
      likes: 178
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486080/IMG-20250418-WA0091_b6drk5.jpg',
      title: 'Stronger Every Day',
      likes: 92
    },
    {
      id: 7,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486079/IMG-20250418-WA0087_tuvvq0.jpg',
      title: 'Built With Grit',
      likes: 92
    },
    {
      id: 8,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486078/IMG-20250418-WA0085_gzfx0p.jpg',
      title: 'Train Like Hell',
      likes: 92
    },
    {
      id: 9,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486078/IMG-20250418-WA0079_zc6u3k.jpg',
      title: 'Grind. Gain. Repeat',
      likes: 92
    }, 
    {
      id: 10,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486078/IMG-20250418-WA0083_mjmhxy.jpg',
      title: 'Chasing Heavy Gains',
      likes: 92
    },
    {
      id: 11,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486078/IMG-20250418-WA0085_gzfx0p.jpg',
      title: 'Power. Passion. Progress',
      likes: 92
    },
    {
      id: 12,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486078/IMG-20250418-WA0083_mjmhxy.jpg',
      title: 'Fuel The Fire',
      likes: 92
    },
    {
      id: 13,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486077/IMG-20250418-WA0073_uljgpd.jpg',
      title: 'Iron Never Lies',
      likes: 92
    },
    {
      id: 14,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486076/IMG-20250418-WA0075_d0z8cx.jpg',
      title: 'Desert Dunes',
      likes: 92
    },
    {
      id: 15,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486074/IMG-20250418-WA0069_emis2h.jpg',
      title: 'Deadlifts And Dedication',
      likes: 92
    },
    {
      id: 16,
      src: 'https://res.cloudinary.com/dlcoyxwco/image/upload/v1745486076/IMG-20250418-WA0071_a4jz3f.jpg',
      title: 'Discipline Builds Strength',
      likes: 92
    },
   ];

  
  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop',
      title: 'Mountain Timelapse',
      duration: '2:34',
      views: 1200
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      title: 'City Night Drive',
      duration: '4:12',
      views: 856
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      title: 'Nature Documentary',
      duration: '8:45',
      views: 2341
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
      title: 'Aerial Footage',
      duration: '3:21',
      views: 967
    }
  ];
  return (
     <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">Gallery</h1>
        <p className="text-gray-400 text-lg">Pictures speak louder than the words</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-gray-900 rounded-full p-2">
          <button
            onClick={() => setActiveTab('photos')}
            className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'photos'
                ? 'bg-white text-black font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Camera className="w-5 h-5 mr-2" />
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-white text-black font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Video className="w-5 h-5 mr-2" />
            Videos
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 pb-16">
        {activeTab === 'photos' ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">{photo.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-1 text-white/80 hover:text-red-400 transition-colors">
                           
                        </button>
                        <button className="text-white/80 hover:text-white transition-colors">
                          
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* {videos.map((video, index) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  
               
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
                    {video.duration}
                  </div>
                </div>
                
                
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-gray-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{video.views.toLocaleString()} views</p>
                </div>
              </div>
            ))} */}
          </div>
        )}
      </div>

      {/* Loading animation for tab switch */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .grid > * {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Page