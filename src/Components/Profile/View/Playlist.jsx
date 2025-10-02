import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const Playlist = () => {
  const [query, setQuery] = useState('Hindi');
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Fetch songs from Deezer API
  const searchSongs = async () => {
    if (!query.trim()) return;
    try {
      debugger
      const res = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${encodeURIComponent(query)}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'd5568ff080msh887bb01ee1c6f29p15d4e0jsn8623efbe9905',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
          }
        }
      );
      debugger
      const data = await res.json();
      setTracks(data.data || []);
    } catch (error) {
      console.error('Error fetching Deezer songs:', error);
      setTracks([]);
    }
  };

  // Play selected track
  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // When currentTrack changes, load and play audio
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.src = currentTrack.preview;
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [currentTrack]);

  // Initial search on mount
  useEffect(() => {
    searchSongs();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Hindi Songs Player (Deezer API)</h1>

      <div className="mb-6 flex">
        <input
          type="text"
          placeholder="Search Hindi songs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow border border-gray-400 rounded-l px-4 py-2 focus:outline-none"
          onKeyDown={(e) => { if (e.key === 'Enter') searchSongs(); }}
        />
        <button
          onClick={searchSongs}
          className="bg-teal-600 text-white px-4 rounded-r hover:bg-teal-700"
        >
          Search
        </button>
      </div>

      <div>
        {tracks.length === 0 && <p className="text-center text-gray-500">No songs found.</p>}
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`flex items-center justify-between p-3 border-b cursor-pointer ${
              currentTrack?.id === track.id ? 'bg-teal-100' : ''
            }`}
            onClick={() => playTrack(track)}
          >
            <div>
              <p className="font-semibold">{track.title}</p>
              <p className="text-sm text-gray-600">{track.artist.name}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                playTrack(track);
              }}
              className="text-teal-700 text-lg"
            >
              {currentTrack?.id === track.id && isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        ))}
      </div>

      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center justify-between shadow-lg">
          <div>
            <p className="font-semibold">{currentTrack.title}</p>
            <p className="text-sm text-gray-600">{currentTrack.artist.name}</p>
          </div>
          <button
            onClick={togglePlayPause}
            className="bg-teal-600 text-white rounded-full p-3"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <audio ref={audioRef} />
        </div>
      )}
    </div>
  );
};

export default Playlist;
