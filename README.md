# TechSmart Image Importer

The **TechSmart Image Importer** is a powerful tool that consists of two main parts: 

1. **The Translator** (written in HTML)
2. **The Importer** (written in Python)

This tool allows users to upload image files and convert them into raw color data, which can then be imported into the **TechSmart** image-importing script. It enables seamless integration of custom images from the web into the TechSmart project.

## Features

- **Image Upload**: Upload image files from your local machine or web sources.
- **Color Data Extraction**: Extracts raw color data from the uploaded image.
- **TechSmart Integration**: Converts the extracted color data into a format compatible with the TechSmart script.
- **Custom Image Support**: Easily integrate custom images into your project.

## How It Works

1. **Upload Image**: The user uploads an image through the HTML-based Translator interface.
2. **Color Data Extraction**: The image is processed, and its raw color data is extracted.
3. **Data Import**: The color data is ready to be used within the **TechSmart** project, compatible with the Python-based Importer script.

### The Translator (HTML)

The **Translator** is responsible for providing a user-friendly interface for uploading and processing images. It allows users to upload an image and view the corresponding color data.

- Built with HTML, it serves as the front-end interface.
- Users can easily select an image file to convert to color data.

### The Importer (Python)

The **Importer** is the back-end component written in Python. Once the image is processed by the Translator, the extracted color data is converted into a format suitable for integration with the **TechSmart** image-importing script.

- Written in Python to handle color data processing.
- Allows seamless integration with TechSmart.

## Installation

1. Clone the repository:
  ```bash
  cd TechSmart-Image-Importer
