module.exports = {
  basePath: '/Portfolio', 
  quality: 100,
  sharpOptions: {  
    webp: {  
      lossless: true,  
      effort: 6  // Higher effort for better compression  
    },
    png: {  
      compressionLevel: 9, // Maximum compression  
      quality: 100        // Lossless quality  
    }
  }
}