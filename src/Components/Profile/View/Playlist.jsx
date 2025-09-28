// components/Playlist.js
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp, FaVolumeMute, FaHeart, FaRegHeart, FaRandom, FaRedo } from 'react-icons/fa';

const Playlist = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(0); // 0: off, 1: repeat all, 2: repeat one
  
  const audioRef = useRef(null);
  
  const playlists = [
    {
      id: 1,
      title: "Design Inspiration",
      description: "Curated collection of design talks, tutorials, and case studies that inspire my creative process.",
      itemCount: 24,
      category: "design",
      tracks: [
        { id: 1, title: "The Principles of Good Design", duration: "15:30", artist: "Design Weekly" },
        { id: 2, title: "Color Theory for Digital Products", duration: "22:15", artist: "UI/UX Masters" },
        { id: 3, title: "Minimalism in Modern Design", duration: "18:45", artist: "Design Insights" }
      ]
    },
    {
      id: 2,
      title: "Development Resources",
      description: "Technical tutorials, coding challenges, and best practices for modern web development.",
      itemCount: 18,
      category: "development",
      tracks: [
        { id: 4, title: "JavaScript Best Practices", duration: "25:10", artist: "Code Daily" },
        { id: 5, title: "React Performance Optimization", duration: "30:22", artist: "Frontend Masters" },
        { id: 6, title: "CSS Grid and Flexbox", duration: "20:45", artist: "Web Dev Weekly" }
      ]
    },
    {
      id: 3,
      title: "Creative Process",
      description: "Insights into creative thinking, problem-solving approaches, and innovation methodologies.",
      itemCount: 15,
      category: "creative",
      tracks: [
        { id: 7, title: "Finding Your Creative Voice", duration: "18:30", artist: "Creative Minds" },
        { id: 8, title: "Brainstorming Techniques", duration: "16:20", artist: "Innovation Hub" },
        { id: 9, title: "Overcoming Creative Blocks", duration: "21:15", artist: "Artists Unleashed" }
      ]
    },
    {
      id: 4,
      title: "Industry Trends",
      description: "Analysis of current trends, emerging technologies, and future directions in design and tech.",
      itemCount: 12,
      category: "trends",
      tracks: [
        { id: 10, title: "AI in Design: The Future", duration: "28:40", artist: "Tech Forward" },
        { id: 11, title: "Web3 and the Creator Economy", duration: "24:55", artist: "Digital Frontier" },
        { id: 12, title: "Sustainable Tech Practices", duration: "19:30", artist: "Green Tech" }
      ]
    },
    {
      id: 5,
      title: "Motivational Content",
      description: "Talks and content that inspire personal growth, productivity, and professional development.",
      itemCount: 20,
      category: "motivation",
      tracks: [
        { id: 13, title: "Building Resilience", duration: "22:10", artist: "Mindset Matters" },
        { id: 14, title: "The Power of Habits", duration: "26:45", artist: "Growth Mindset" },
        { id: 15, title: "Finding Your Purpose", duration: "30:15", artist: "Inspire Daily" }
      ]
    },
    {
      id: 6,
      title: "Business Strategy",
      description: "Resources on entrepreneurship, business development, and strategic thinking for creatives.",
      itemCount: 14,
      category: "business",
      tracks: [
        { id: 16, title: "Building a Creative Business", duration: "25:30", artist: "Entrepreneur's Journey" },
        { id: 17, title: "Pricing Your Creative Work", duration: "20:15", artist: "Business of Design" },
        { id: 18, title: "Scaling Your Agency", duration: "28:45", artist: "Agency Growth" }
      ]
    }
  ];

  // Flatten all tracks for the audio player
  const allTracks = playlists.flatMap(playlist => 
    playlist.tracks.map(track => ({
      ...track,
      playlistTitle: playlist.title,
      category: playlist.category
    }))
  );

  // Initialize with first track
  useEffect(() => {
    if (allTracks.length > 0 && !currentTrack) {
      setCurrentTrack(allTracks[0]);
    }
  }, [allTracks, currentTrack]);

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const handleEnded = () => {
      if (repeat === 2) {
        // Repeat one
        audio.play();
      } else {
        // Play next track
        handleNext();
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [repeat]);

  // Handle play/pause
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  // Handle progress bar change
  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    if (audioRef.current) {
      audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    }
  };

  // Toggle favorite
  const toggleFavorite = (trackId) => {
    if (favorites.includes(trackId)) {
      setFavorites(favorites.filter(id => id !== trackId));
    } else {
      setFavorites([...favorites, trackId]);
    }
  };

  // Play a specific track
  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  // Navigate to next track
  const handleNext = () => {
    if (!currentTrack) return;
    
    const currentIndex = allTracks.findIndex(track => track.id === currentTrack.id);
    let nextIndex;
    
    if (shuffle) {
      // Random track
      nextIndex = Math.floor(Math.random() * allTracks.length);
    } else {
      // Next track in order
      nextIndex = (currentIndex + 1) % allTracks.length;
    }
    
    setCurrentTrack(allTracks[nextIndex]);
  };

  // Navigate to previous track
  const handlePrevious = () => {
    if (!currentTrack) return;
    
    const currentIndex = allTracks.findIndex(track => track.id === currentTrack.id);
    let prevIndex;
    
    if (shuffle) {
      // Random track
      prevIndex = Math.floor(Math.random() * allTracks.length);
    } else {
      // Previous track in order
      prevIndex = (currentIndex - 1 + allTracks.length) % allTracks.length;
    }
    
    setCurrentTrack(allTracks[prevIndex]);
  };

  // Toggle shuffle
  const toggleShuffle = () => {
    setShuffle(!shuffle);
  };

  // Toggle repeat
  const toggleRepeat = () => {
    setRepeat((repeat + 1) % 3);
  };

  return (
    <section id="playlist" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" style={{ backgroundImage: 'radial-gradient(circle, #0d9488 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 font-playfair"
          >
            Playlists
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"
          ></motion.div>
        </div>
        
        {/* Audio Player Section */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 font-playfair">Inspiration Audio Collection</h3>
              <p className="font-poppins">Listen to curated audio content from my playlists. Perfect for learning and inspiration on the go.</p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{allTracks.length}</div>
                <div className="text-sm font-poppins">Audio Tracks</div>
              </div>
            </div>
          </div>
          
          {/* Audio Player */}
          {currentTrack && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  <div className="text-2xl">
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-bold font-poppins">{currentTrack.title}</h4>
                  <p className="text-teal-100 font-poppins">{currentTrack.artist} • {currentTrack.playlistTitle}</p>
                </div>
                
                <button 
                  onClick={() => toggleFavorite(currentTrack.id)}
                  className="ml-0 md:ml-4 mt-4 md:mt-0 text-xl"
                >
                  {favorites.includes(currentTrack.id) ? <FaHeart className="text-red-300" /> : <FaRegHeart />}
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={progress} 
                  onChange={handleProgressChange}
                  className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={toggleShuffle}
                    className={`p-2 rounded-full ${shuffle ? 'text-white' : 'text-teal-200'}`}
                  >
                    <FaRandom />
                  </button>
                  
                  <button onClick={handlePrevious} className="p-2 rounded-full">
                    <FaStepBackward />
                  </button>
                  
                  <button 
                    onClick={togglePlayPause}
                    className="w-12 h-12 rounded-full bg-white text-teal-600 flex items-center justify-center"
                  >
                    {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
                  </button>
                  
                  <button onClick={handleNext} className="p-2 rounded-full">
                    <FaStepForward />
                  </button>
                  
                  <button 
                    onClick={toggleRepeat}
                    className={`p-2 rounded-full ${repeat > 0 ? 'text-white' : 'text-teal-200'}`}
                  >
                    <FaRedo />
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button onClick={toggleMute} className="text-teal-200">
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Track List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allTracks.map((track, index) => (
              <motion.div 
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-white/20 ${currentTrack?.id === track.id ? 'ring-2 ring-white' : ''}`}
                onClick={() => playTrack(track)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-400/30 flex items-center justify-center mr-3">
                    {currentTrack?.id === track.id && isPlaying ? <FaPause className="text-sm" /> : <FaPlay className="text-sm ml-0.5" />}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium font-poppins truncate">{track.title}</h5>
                    <p className="text-sm text-teal-100 font-poppins truncate">{track.artist}</p>
                  </div>
                  <div className="text-xs text-teal-200 font-poppins">{track.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Hidden audio element */}
        <audio ref={audioRef} />
      </div>
    </section>
  );
};

export default Playlist;