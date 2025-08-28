#!/usr/bin/env python3
"""
Optimize all new images and create responsive versions for the website
"""

from PIL import Image
import os
import glob

def optimize_image(input_path, output_dir, base_name, sizes):
    """Optimize a single image and create multiple sizes"""
    if not os.path.exists(input_path):
        print(f"Input image not found: {input_path}")
        return
    
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

def optimize_all_images():
    """Optimize all new images"""
    
    # Define responsive sizes
    sizes = [
        (320, 480),   # Small mobile
        (640, 960),   # Medium mobile
        (960, 1440),  # Tablet
        (1280, 1920)  # Desktop
    ]
    
    # Photo images (main hero images)
    photo_images = [
        ("img/photo/chat_gpt-image.png", "img/optimized/photo", "ChatGPT_Smartphone_1400_2099"),
        ("img/photo/the_matrix_image provided.png", "img/optimized/photo", "Matrix_866_536")
    ]
    
    # Blog images
    blog_images = [
        ("img/blog/code_ethical_behavior.png", "img/optimized/blog", "code_ethical_behavior"),
        ("img/blog/nodes_network.jpg", "img/optimized/blog", "nodes_network"),
        ("img/blog/code_projected_woman.jpg", "img/optimized/blog", "code_projected_woman"),
        ("img/blog/sparkles.jpg", "img/optimized/blog", "sparkles"),
        ("img/blog/google_deep_mind.jpg", "img/optimized/blog", "google_deep_mind"),
        ("img/blog/charts.jpg", "img/optimized/blog", "charts"),
        ("img/blog/woman_blue_suit.jpg", "img/optimized/blog", "woman_blue_suit"),
        ("img/blog/hi_five_table.png", "img/optimized/blog", "hi_five_table")
    ]
    
    # Works images
    works_images = [
        ("img/works/brainstorm_female.png", "img/optimized/works", "brainstorm_female"),
        ("img/works/brainstorm_male.png", "img/optimized/works", "brainstorm_male"),
        ("img/works/nodes_network.png", "img/optimized/works", "nodes_network"),
        ("img/works/pin_board_discussion.png", "img/optimized/works", "pin_board_discussion"),
        ("img/works/ai_chat_app.png", "img/optimized/works", "ai_chat_app"),
        ("img/works/robot_hand_network.png", "img/optimized/works", "robot_hand_network"),
        ("img/works/boardroom_table_top.png", "img/optimized/works", "boardroom_table_top")
    ]
    
    # Customer faces (smaller sizes for profile images)
    face_sizes = [
        (100, 140),   # Small
        (200, 280),   # Medium
        (300, 420)    # Large
    ]
    
    face_images = [
        ("img/faces/customers/business_face_1.png", "img/optimized/faces", "business_face_1"),
        ("img/faces/customers/business_face_2.png", "img/optimized/faces", "business_face_2"),
        ("img/faces/customers/business_face_3.png", "img/optimized/faces", "business_face_3"),
        ("img/faces/customers/business_face_4.png", "img/optimized/faces", "business_face_4"),
        ("img/faces/customers/business_face_5.png", "img/optimized/faces", "business_face_5"),
        ("img/faces/customers/business_face_6.png", "img/optimized/faces", "business_face_6"),
        ("img/faces/customers/business_face_7.png", "img/optimized/faces", "business_face_7")
    ]
    
    print("Optimizing photo images...")
    for input_path, output_dir, base_name in photo_images:
        optimize_image(input_path, output_dir, base_name, sizes)
    
    print("\nOptimizing blog images...")
    for input_path, output_dir, base_name in blog_images:
        optimize_image(input_path, output_dir, base_name, sizes)
    
    print("\nOptimizing works images...")
    for input_path, output_dir, base_name in works_images:
        optimize_image(input_path, output_dir, base_name, sizes)
    
    print("\nOptimizing customer face images...")
    for input_path, output_dir, base_name in face_images:
        optimize_image(input_path, output_dir, base_name, face_sizes)
    
    print("\nAll images optimized successfully!")

if __name__ == "__main__":
    optimize_all_images()
