// HELPER FUNCTION #1:
function searchForTallestDinosaur(dinosaurs) {
    // Accumulator Pattern to determine tallest
    // Height of first dinosaur
    let highestDino = dinosaurs[0];
    // Iterate through `dinosaurs` array
    for (let i = 1; i < dinosaurs.length; i++) {
      let dino = dinosaurs[i];
      if (dino.length_in_meters > highestDino.length_in_meters) {
        // Tallest dinosaur
        highestDino = dino;
      }
    }
    // Return `highestDino` when found
    return highestDino;
  }

  export default searchForTallestDinosaur;