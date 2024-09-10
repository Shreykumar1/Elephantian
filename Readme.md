# Preloader with Fog Effect

This project demonstrates a preloader animation with a foggy background effect. It includes a ripple animation triggered by clicking on a logo and transitions to the main content of the website.

![image](https://github.com/user-attachments/assets/17e6eb45-b793-4422-82a4-c00d66d3ad41)
![image](https://github.com/user-attachments/assets/4a56ffb8-2d77-4e20-a4fc-b15dfc9ca3fd)

## Features

- **Preloader with Fog Effect**: Displays a preloader with a foggy background behind a centered logo.
- **Ripple Animation**: The logo animates with a ripple effect upon click.
- **Smooth Transition**: The preloader fades out and transitions smoothly to the homepage content.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Shreykumar1/Elephantian.git
   ```
2. **Open the Project**

   Open the `index.html` file in your preferred browser to view the preloader and its effects.

## How It Works

1. **Preloader**: The preloader covers the entire viewport with a translucent white background. It contains a logo that triggers a ripple effect upon click.
2. **Fog Effect**: A fog-like effect is achieved using CSS animations. The `fog-container` contains multiple `fog` elements that move across the screen, creating a misty background.
3. **Ripple Animation**: When the logo is clicked, a ripple animation is triggered, expanding outward and fading away.
4. **Transition to Homepage**: After the ripple effect completes, the preloader fades out and is removed from the viewport. The main content of the website (homepage) is then displayed.

## Code Explanation

- **CSS Styles**: Defines the styles and animations for the preloader, fog effect, logo, and homepage content.
- **HTML Structure**: Contains the preloader and homepage content. The preloader includes a fog container and logo.
- **JavaScript**: Handles the click event on the logo to trigger the ripple effect and transition from the preloader to the homepage.

## Customization

- **Logo**: Modify the `.logo` class in the CSS to change the logo's appearance or text.
- **Fog Effect**: Adjust the `fog` class properties and animations to change the appearance and behavior of the fog effect.
- **Colors and Sizes**: Customize the background colors, sizes, and animations by editing the relevant CSS properties.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

[Shrey Kumar Tamrakar](https://github.com/ShreyKumar1)

---

Feel free to adjust any sections as needed to better fit your project specifics!