#!/usr/bin/env bash
set -euo pipefail

convert_image() {
  local input="$1"
  local output="$2"
  local quality="$3"
  if [[ ! -f "$input" ]]; then
    echo "Missing source image: $input" >&2
    exit 1
  fi
  cwebp -quiet -mt -m 6 -q "$quality" "$input" -o "$output"
  local before after saved
  before=$(stat -c%s "$input")
  after=$(stat -c%s "$output")
  saved=$((100 - (after * 100 / before)))
  echo "Generated $output: $before -> $after bytes ($saved% smaller)"
}

convert_image "public/hero-home.png" "public/hero-home.webp" 84
convert_image "public/Image ChatGPT 22 oct. 2026 à 16_24_33-1.png" "public/beauty-skincare-packaging.webp" 82
convert_image "public/Image ChatGPT 22 oct. 2026 à 16_24_35-2.png" "public/packaging-sourcing-coordination.webp" 82

convert_image "public/Image ChatGPT 22 oct. 2026 à 17_16_14.png" "public/skincare-primary-packaging.webp" 82
convert_image "public/Image ChatGPT 22 oct. 2026 à 17_15_26.png" "public/fragrance-packaging-category.webp" 82
convert_image "public/Nature morte cosmétique en lumière naturelle.png" "public/tubes-dispensing-packaging.webp" 82
convert_image "public/Image ChatGPT 22 oct. 2026 à 17_16_00.png" "public/mask-sachet-packaging.webp" 82
convert_image "public/Image ChatGPT 22 oct. 2026 à 17_15_40.png" "public/secondary-packaging.webp" 82
convert_image "public/Cosmétiques écoresponsables sous lumière naturelle.png" "public/sustainable-packaging-options.webp" 82

convert_image "public/compliance-hero.png" "public/compliance-packaging.webp" 82

convert_image "public/1.png" "public/fragrance-packaging-01.webp" 82
convert_image "public/2.png" "public/fragrance-packaging-02.webp" 82
convert_image "public/3.png" "public/fragrance-packaging-03.webp" 82
convert_image "public/4.png" "public/fragrance-packaging-04.webp" 82
convert_image "public/5.png" "public/fragrance-packaging-05.webp" 82
convert_image "public/6.png" "public/fragrance-packaging-06.webp" 82
convert_image "public/7.png" "public/fragrance-packaging-07.webp" 82
convert_image "public/8.png" "public/fragrance-packaging-08.webp" 82
