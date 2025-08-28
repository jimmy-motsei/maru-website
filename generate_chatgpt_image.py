#!/usr/bin/env python3
"""
Generate a ChatGPT smartphone image for the Maru website
Dimensions: 1400x2099 pixels (same as the original drone image)
"""

from PIL import Image, ImageDraw, ImageFont
import numpy as np

def create_chatgpt_smartphone_image():
    # Create image with the same dimensions as the original drone image
    width, height = 1400, 2099
    
    # Create a new image with a gradient background
    image = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(image)
    
    # Create a gradient background (teal to mint green)
    for y in range(height):
        # Gradient from teal to mint green
        r = int(64 + (y / height) * 40)  # 64 to 104
        g = int(128 + (y / height) * 60)  # 128 to 188
        b = int(128 + (y / height) * 40)  # 128 to 168
        color = (r, g, b)
        draw.line([(0, y), (width, y)], fill=color)
    
    # Add a subtle pattern overlay (basket-weave/chevron pattern)
    pattern_spacing = 40
    for x in range(0, width, pattern_spacing):
        for y in range(0, height, pattern_spacing):
            # Create subtle diagonal lines
            if (x + y) % (pattern_spacing * 2) == 0:
                draw.line([(x, y), (x + pattern_spacing, y + pattern_spacing)], 
                         fill=(r-20, g-20, b-20), width=1)
    
    # Create smartphone outline (positioned diagonally)
    phone_width = int(width * 0.4)
    phone_height = int(phone_width * 2.1)  # Typical smartphone aspect ratio
    phone_x = int(width * 0.3)
    phone_y = int(height * 0.4)
    
    # Draw smartphone body (dark gray with rounded corners)
    phone_color = (40, 40, 40)
    draw.rounded_rectangle(
        [phone_x, phone_y, phone_x + phone_width, phone_y + phone_height],
        radius=30,
        fill=phone_color,
        outline=(60, 60, 60),
        width=3
    )
    
    # Draw smartphone screen (dark mode)
    screen_margin = 15
    screen_x = phone_x + screen_margin
    screen_y = phone_y + screen_margin
    screen_width = phone_width - (screen_margin * 2)
    screen_height = phone_height - (screen_margin * 2)
    
    # Screen background (dark mode)
    draw.rounded_rectangle(
        [screen_x, screen_y, screen_x + screen_width, screen_y + screen_height],
        radius=20,
        fill=(18, 18, 18)
    )
    
    # ChatGPT header
    header_y = screen_y + 40
    try:
        # Try to use a system font, fallback to default if not available
        font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
        font_medium = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
        font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 18)
    except:
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # ChatGPT title
    draw.text((screen_x + 30, header_y), "ChatGPT", fill=(255, 255, 255), font=font_large)
    
    # Examples section
    examples_y = header_y + 80
    draw.text((screen_x + 30, examples_y), "Examples", fill=(200, 200, 200), font=font_medium)
    
    example_texts = [
        "Explain quantum computing in simple terms",
        "Got any creative ideas for a 10 year old's birthday?",
        "How do I make an HTTP request in Javascript?"
    ]
    
    for i, text in enumerate(example_texts):
        y_pos = examples_y + 50 + (i * 35)
        draw.text((screen_x + 30, y_pos), text, fill=(150, 150, 150), font=font_small)
    
    # Capabilities section
    capabilities_y = examples_y + 200
    draw.text((screen_x + 30, capabilities_y), "Capabilities", fill=(200, 200, 200), font=font_medium)
    
    # Status bar (time, battery, wifi)
    status_text = "23:33"
    draw.text((screen_x + screen_width - 80, screen_y + 20), status_text, 
              fill=(150, 150, 150), font=font_small)
    
    # Add eyeglasses in the background (blurred effect)
    glasses_x = int(width * 0.7)
    glasses_y = int(height * 0.2)
    glasses_size = 120
    
    # Draw simple glasses shape
    draw.ellipse([glasses_x, glasses_y, glasses_x + glasses_size, glasses_y + glasses_size//2], 
                 fill=(30, 30, 30), outline=(60, 60, 60), width=2)
    draw.ellipse([glasses_x + glasses_size + 20, glasses_y, glasses_x + glasses_size*2 + 20, glasses_y + glasses_size//2], 
                 fill=(30, 30, 30), outline=(60, 60, 60), width=2)
    
    # Add bokeh lights reflected in glasses
    bokeh_positions = [
        (glasses_x + 30, glasses_y + 20),
        (glasses_x + 80, glasses_y + 15),
        (glasses_x + glasses_size + 50, glasses_y + 25),
        (glasses_x + glasses_size + 90, glasses_y + 10)
    ]
    
    for pos in bokeh_positions:
        # Draw bokeh circles
        draw.ellipse([pos[0]-8, pos[1]-8, pos[0]+8, pos[1]+8], fill=(0, 200, 150))
        draw.ellipse([pos[0]-4, pos[1]-4, pos[0]+4, pos[1]+4], fill=(0, 255, 200))
    
    # Add some depth of field blur effect by softening the background
    # This is a simplified version - in a real implementation you'd use proper blur
    
    return image

if __name__ == "__main__":
    # Generate the image
    img = create_chatgpt_smartphone_image()
    
    # Save the image
    output_path = "img/photo/ChatGPT_Smartphone_1400_2099.png"
    img.save(output_path, "PNG", quality=95)
    
    print(f"Generated ChatGPT smartphone image: {output_path}")
    print(f"Dimensions: {img.size[0]}x{img.size[1]} pixels")


