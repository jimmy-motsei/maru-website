#!/usr/bin/env python3
"""
Save and resize the provided ChatGPT smartphone image to fit the website requirements
"""

from PIL import Image
import os

def save_and_resize_image():
    # Since we can't directly access the provided image, we'll create a placeholder
    # that represents the image you want to use
    # You'll need to manually save your image as 'provided_chatgpt_image.jpg' or similar
    
    # Check if the provided image exists
    possible_names = [
        'provided_chatgpt_image.jpg',
        'provided_chatgpt_image.png',
        'chatgpt_image.jpg',
        'chatgpt_image.png',
        'smartphone_chatgpt.jpg',
        'smartphone_chatgpt.png'
    ]
    
    input_path = None
    for name in possible_names:
        if os.path.exists(name):
            input_path = name
            break
    
    if not input_path:
        print("Please save your ChatGPT smartphone image as one of these names:")
        for name in possible_names:
            print(f"  - {name}")
        print("\nThen run this script again.")
        return
    
    # Open the provided image
    img = Image.open(input_path)
    print(f"Original image size: {img.size[0]}x{img.size[1]} pixels")
    
    # Target dimensions (same as the original drone image)
    target_width, target_height = 1400, 2099
    
    # Resize image to fit the target dimensions while maintaining aspect ratio
    # Calculate the scaling factor to fit within the target dimensions
    width_ratio = target_width / img.size[0]
    height_ratio = target_height / img.size[1]
    scale_factor = min(width_ratio, height_ratio)
    
    new_width = int(img.size[0] * scale_factor)
    new_height = int(img.size[1] * scale_factor)
    
    # Resize the image
    resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    # Create a new image with the target dimensions and paste the resized image
    final_img = Image.new('RGB', (target_width, target_height), (64, 128, 128))  # Teal background
    
    # Center the resized image
    x_offset = (target_width - new_width) // 2
    y_offset = (target_height - new_height) // 2
    final_img.paste(resized_img, (x_offset, y_offset))
    
    # Save the final image
    output_path = "img/photo/ChatGPT_Smartphone_1400_2099.png"
    final_img.save(output_path, "PNG", quality=95)
    
    print(f"Resized and saved image: {output_path}")
    print(f"Final dimensions: {final_img.size[0]}x{final_img.size[1]} pixels")
    
    return output_path

if __name__ == "__main__":
    save_and_resize_image()


