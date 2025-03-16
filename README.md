# Personal Portfolio Website

A modern, responsive portfolio website built with React to showcase my projects and skills.

## Live Demo

Visit the live site: [https://rajnath01.github.io/personal-portfolio/](https://rajnath01.github.io/personal-portfolio/)

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Project showcase section
- Contact form
- About me section with skills
- Social media links

## Technologies Used

- React.js
- CSS3 with custom animations
- GitHub Pages for hosting
- GitHub Actions for CI/CD

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/rajnath01/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions. When you push changes to the `main` branch, the workflow will:

1. Build the project
2. Deploy it to the `gh-pages` branch

To manually deploy:

```
npm run build
npm run deploy
```

## Troubleshooting

If images or assets aren't displaying correctly:
- Ensure all image paths are correct
- Add a `.nojekyll` file in the `public` directory to prevent GitHub Pages from ignoring files that start with an underscore
- Check that the `homepage` field in `package.json` is set correctly

## License

MIT

## Contact

Feel free to reach out if you have any questions or suggestions:
- Email: rajnathsingh.dev@gmail.com
- GitHub: [rajnath01](https://github.com/rajnath01)
- LinkedIn: [rajnathsingh01](https://linkedin.com/in/rajnathsingh01)