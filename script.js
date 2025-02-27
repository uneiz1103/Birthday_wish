// // Navigation functions for page transitions

// function goToCelebration() {
//     // Attempt to play background music on user interaction
//     var bgMusic = document.getElementById("bg-music");
//     if (bgMusic) {
//       bgMusic.play().catch(function(error) {
//         console.log("Background music play error:", error);
//       });
//     }
//     window.location.href = "celebration.html";
//   }
  
//   function goToPhotos() {
//     window.location.href = "photos.html";
//   }
  
//   function goToThoughts() {
//     window.location.href = "thoughts.html";
//   }
  
//   function goToLanding() {
//     window.location.href = "index.html";
//   }
  
//   // Photos page reveal functionality
//   function revealPhotos() {
//     const overlay = document.getElementById("photos-overlay");
//     overlay.style.opacity = "0";
//     setTimeout(() => {
//       overlay.style.display = "none";
//       document.getElementById("photo-gallery").classList.add("revealed");
//     }, 800);
//   }
  
//   // Attach the revealPhotos function only if the overlay exists (i.e., on photos.html)
//   document.addEventListener("DOMContentLoaded", () => {
//     const overlay = document.getElementById("photos-overlay");
//     if (overlay) {
//       overlay.addEventListener("click", revealPhotos);
//     }
//   });

// Function to play music and reveal the "enter" button
function playMusicAndShowEnter() {
    var bgMusic = document.getElementById("bg-music");
    // Try to play the music on user interaction
    bgMusic.play().then(() => {
      console.log("Music is playing.");
    }).catch((error) => {
      console.error("Error playing music:", error);
    });
    
    // Reveal the "enter" button after a short delay (500ms)
    setTimeout(function() {
      document.getElementById("enter-btn").style.display = "block";
    }, 500);
  }
  
  // Navigation function for entering the celebration page
  function goToCelebration() {
    window.location.href = "celebration.html";
  }
  
  // Other navigation functions (if needed)
  function goToPhotos() {
    window.location.href = "photos.html";
  }
  
  function goToThoughts() {
    window.location.href = "thoughts.html";
  }
  
  function goToLanding() {
    window.location.href = "index.html";
  }
  
  // (Optional) Photos page reveal functionality remains as before...
  function revealPhotos() {
    const overlay = document.getElementById("photos-overlay");
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
      document.getElementById("photo-gallery").classList.add("revealed");
    }, 800);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("photos-overlay");
    if (overlay) {
      overlay.addEventListener("click", revealPhotos);
    }
  });
  
  