#!/usr/bin/env python3
"""
Optimize the new blog images that have been resized to 1280x720
"""

from PIL import Image
import os

def optimize_new_blog_images():
    """Optimize the new blog images"""
    
    # Define responsive sizes for blog images
    sizes = [
        (320, 180),   # Small mobile (16:9)
        (640, 360),   # Medium mobile (16:9)
        (960, 540),   # Tablet (16:9)
        (1280, 720)   # Desktop (16:9)
    ]
    
    # New blog images to optimize
    blog_images = [
        ("img/blog/ai_agents.png", "img/optimized/blog", "ai_agents"),
        ("img/blog/charts.png", "img/optimized/blog", "charts"),
        ("img/blog/code_projected_woman.png", "img/optimized/blog", "code_projected_woman"),
        ("img/blog/electric_eye.png", "img/optimized/blog", "electric_eye"),
        ("img/blog/high_five_table.png", "img/optimized/blog", "high_five_table"),
        ("img/blog/nodes_network.png", "img/optimized/blog", "nodes_network"),
        ("img/blog/sparkles.png", "img/optimized/blog", "sparkles"),
        ("img/blog/woman_blue_suit.png", "img/optimized/blog", "woman_blue_suit")
    ]
    
    print("Optimizing new blog images...")
    
    for input_path, output_dir, base_name in blog_images:
        if not os.path.exists(input_path):
            print(f"Input image not found: {input_path}")
            continue
        
        img = Image.open(input_path)
        print(f"Processing: {input_path} ({img.size[0]}x{img.size[1]} pixels)")
        
        # Create output directory
        os.makedirs(output_dir, exist_ok=True)
        
        for width, height in sizes:
            # Resize image maintaining aspect ratio
            resized = img.resize((width, height), Image.Resampling.LANCZOS)
            
            # Save PNG version
            png_path = f"{output_dir}/{base_name}-{width}.png"
            resized.save(png_path, "PNG", optimize=True)
            
            # Save WebP version
            webp_path = f"{output_dir}/{base_name}-{width}.webp"
            resized.save(webp_path, "WEBP", quality=85, method=6)
            
            # Save AVIF version (if supported)
            try:
                avif_path = f"{output_dir}/{base_name}-{width}.avif"
                resized.save(avif_path, "AVIF", quality=85)
            except Exception as e:
                print(f"AVIF not supported for {base_name}: {e}")
        
        print(f"Optimized: {base_name}")
    
    print("\nAll new blog images optimized successfully!")

if __name__ == "__main__":
    optimize_new_blog_images()
