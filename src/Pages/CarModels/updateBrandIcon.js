const fs = require('fs');
const path = require('path');
const AllModelsSorted = require('./AllModelsSorted.json');

const logoFolderPath = '/Users/airmilotakmanis/Developer/caretaku/src/Assets/Icons/CarLogo';

for (const brand of AllModelsSorted) {
  const brandLogoPath = path.join(logoFolderPath, `${brand.brandCode}.png`);

  try {
    brand.brandIcon = brandLogoPath;
  } catch (error) {
    console.error(`Error updating brandIcon for ${brand.brandName}: ${error.message}`);
    continue; // Continue to the next brand if there's an error
  }
}

console.log(AllModelsSorted);

// Convert the updated data back to JSON format
const updatedData = JSON.stringify(AllModelsSorted, null, 2);

// Define the path for the new JSON file
const outputPath = './updatedAllModelsSorted.json'; // You can change the file name and path as needed

// Write the updated data to the new JSON file
fs.writeFile(outputPath, updatedData, (err) => {
  if (err) {
    console.error('Error writing the updated data to the file:', err);
  } else {
    console.log(`Updated data saved to ${outputPath}`);
  }
});
