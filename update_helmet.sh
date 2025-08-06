#!/bin/bash

# Array of page files that need updating
files=(
  "src/pages/Gallery.tsx"
  "src/pages/Blog.tsx"
  "src/pages/BlogPost.tsx"
  "src/pages/ServiceAreas.tsx"
  "src/pages/NotFound.tsx"
)

# Location page files
location_files=(
  "src/pages/Noblesville.tsx"
  "src/pages/Plainfield.tsx"
  "src/pages/Westfield.tsx"
  "src/pages/Danville.tsx"
  "src/pages/Carmel.tsx"
  "src/pages/Avon.tsx"
)

# Township files
township_files=(
  "src/pages/LincolnTownship.tsx"
  "src/pages/BrownTownship.tsx"
  "src/pages/MiddleTownship.tsx"
  "src/pages/WashingtonTownship.tsx"
)

# Service files
service_files=(
  "src/pages/services/HouseWashing.tsx"
  "src/pages/services/RoofCleaning.tsx"
  "src/pages/services/DrivewayCleaning.tsx"
  "src/pages/services/DeckFenceCleaning.tsx"
  "src/pages/services/CommercialCleaning.tsx"
)

echo "Files that need helmet import updates:"
for file in "${files[@]}" "${location_files[@]}" "${township_files[@]}" "${service_files[@]}"; do
  if [[ -f "$file" ]]; then
    echo "$file"
  fi
done
