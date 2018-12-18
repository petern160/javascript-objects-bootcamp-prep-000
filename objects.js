var playlist = {
<<<<<<< HEAD

  ACDC: 'Back In Black'
}

function updatePlaylist(playlist, artistName, songTitle) {

  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}

updatePlaylist(playlist,"ACDC","Highway to Hell");
removeFromPlaylist(playlist,'')
=======
  artist1: "song1",
  artist2: "song2",
  artist3: "song3"
};

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}

updatePlaylist(playlist, "artist4", "song4");

function removeFromPlaylist(thePlaylist, artistName) {
  delete thePlaylist[artistName];
  return thePlaylist;
}

removeFromPlaylist(playlist, "artist2");
>>>>>>> ad6dbac5f2d75e4dfb03cf982df848236a6bc69e
