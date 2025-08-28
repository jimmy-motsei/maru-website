#!/usr/bin/env python3
"""
Generate optimized versions of the ChatGPT smartphone image
Creates multiple sizes and formats (WebP, AVIF, PNG) for responsive design
"""

from PIL import Image
import os

def optimize_image():
    # Open the original image
    original_path = "img/photo/ChatGPT_Smartphone_1400_2099.png"
    if not os.path.exists(original_path):
        print(f"Original image not found: {original_path}")
        return
    
    img = Image.open(original_path)
    
    # Create optimized directory if it doesn't exist
    optimized_dir = "img/optimized/photo"
    os.makedirs(optimized_dir, exist_ok=True)
    
    # Define sizes for responsive design
    sizes = [
        (320, 480),   # Small mobile
        (640, 960),   # Medium mobile
        (960, 1440),  # Tablet
        (1280, 1920)  # Desktop
    ]
    
    base_name = "ChatGPT_Smartphone_1400_2099"
    
    for width, height in sizes:
        # Resize image maintaining aspect ratio
        resized = img.resize((width, height), Image.Resampling.LANCZOS)
        
        # Save PNG version
        png_path = f"{optimized_dir}/{base_name}-{width}.png"
        resized.save(png_path, "PNG", optimize=True)
        print(f"Generated: {png_path}")
        
        # Save WebP version
        webp_path = f"{optimized_dir}/{base_name}-{width}.webp"
        resized.save(webp_path, "WEBP", quality=85, method=6)
        print(f"Generated: {webp_path}")
        
        # Save AVIF version (if supported)
        try:
            avif_path = f"{optimized_dir}/{base_name}-{width}.avif"
            resized.save(avif_path, "AVIF", quality=85)
            print(f"Generated: {avif_path}")
        except Exception as e:
            print(f"AVIF not supported: {e}")
    
    print("Optimization complete!")

if __name__ == "__main__":
    optimize_image()


