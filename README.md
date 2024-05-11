# poolfixer-pro

# PoolFixPro

This website is the digital front for PoolFixPro, a pool repair and maintenance service. The primary goal is to provide customers with information on services offered, facilitate easy booking, and showcase testimonials and expert tips.

## Screens

### Home Page
Serves as the main landing page for PoolFixPro, highlighting services, booking options, and customer testimonials.

- **Behavior:** 
  - Auto-updates with seasonal promotions and maintenance tips.
  - Features underlying dynamic elements like customer testimonial sliders.
- **Layout:** 
  - Composed of a 'Header', 'Services Section', 'Booking Form', 'Testimonials', 'Tips Section', and 'Footer'.

## Components

### Header
Shows the PoolFixPro logo, primary navigation links, and a prominent contact button.

- **Behavior:** 
  - Stays fixed on top as users scroll.
  - On smaller screens, collapses into a hamburger menu for space efficiency.
- **Design:** 
  - Logo is left-aligned.
  - Navigation links are center-aligned with a strong CTA contact button on the right.
  - Utilizes a light background with the logo and navigation links in black or dark grey for clarity.

### Services Section
Describes the various services offered such as regular maintenance, emergency repairs, and seasonal check-ups.

- **Behavior:** 
  - Each service description expands on hover or tap to show more detailed information without leaving the home page.
- **Design:** 
  - Uses vibrant accent colors for icons related to each service to facilitate quick visual recognition.
  - Presented in a card format, each with an image or icon, service title, and brief description.

### Booking Form
Allows users to quickly book a consultation or service.

- **Behavior:** 
  - Includes input fields for user details, desired service, and preferred date/time.
  - Validates entered information in real time and prompts users if additional details are needed.
- **Design:** 
  - Situated prominently, possibly using a standout color for the section background to draw attention.
  - Simple, minimalist input fields and a prominent 'Submit' button.

### Testimonials
Features customer reviews and before/after photos of completed work.

- **Behavior:** 
  - Auto-scrolls through testimonials; users can also manually navigate through them.
- **Design:**
  - Uses light background.
  - Text is displayed in a simple, readable format with customer photos in a small, rounded style to ensure focus remains on the text.

### Tips Section
Offers expert pool maintenance tips and news about upcoming promotions.

- **Behavior:** 
  - Regularly updated with new tips and articles.
- **Design:**
  - Visually distinguished from other sections using background shading or a different texture.
  - Employs vibrant color highlights to draw attention to important points or tips.

### Footer
Includes contact information, additional navigation links, social media icons, and legal disclaimers.

- **Behavior:** 
  - Static across all pages for consistent access.
- **Design:** 
  - Organizes information in cleanly divided columns.
  - Uses a lighter type shade on a slightly darker background to maintain readability and visual separation from the main content.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/poolfixer-pro.git
cd poolfixer-pro
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
