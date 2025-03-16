const fs = require('fs');
const path = require('path');

// Create build directory if it doesn't exist
if (!fs.existsSync('build')) {
  fs.mkdirSync('build');
}

// Create a simple index.html file
const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#121212" />
  <meta name="description" content="Luxury portfolio showcasing sophisticated design and development work" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
  <title>Raj Nath Singh - Portfolio</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #121212, #1f1f1f);
      color: #e5e5e5;
      line-height: 1.6;
      font-weight: 300;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
    }
    
    h1, h2, h3 {
      font-family: 'Playfair Display', serif;
      margin-bottom: 1rem;
    }
    
    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
      position: relative;
      padding-bottom: 1rem;
    }
    
    h1::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 3px;
      background: linear-gradient(to right, #b29700, #d4b41c);
      border-radius: 3px;
    }
    
    p {
      max-width: 800px;
      margin: 0 auto 2rem;
      font-size: 1.2rem;
    }
    
    .button {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: #b29700;
      color: #121212;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 500;
      margin-top: 2rem;
      transition: all 0.3s ease;
    }
    
    .button:hover {
      background-color: transparent;
      color: #b29700;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      border: 2px solid #b29700;
    }
    
    .social-links {
      display: flex;
      gap: 1.5rem;
      margin-top: 3rem;
      justify-content: center;
    }
    
    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #242424;
      color: #b29700;
      font-size: 1.5rem;
      transition: all 0.3s ease;
    }
    
    .social-links a:hover {
      background-color: #b29700;
      color: #121212;
      transform: translateY(-5px);
    }
  </style>
</head>
<body>
  <h1>Raj Nath Singh</h1>
  <h2>Portfolio</h2>
  <p>
    I am a distinguished designer and developer devoted to crafting exquisite digital experiences that embody sophistication and refinement.
    With an unwavering commitment to excellence and a discerning eye for detail, I create bespoke solutions where elegance meets functionality.
  </p>
  <p>
    My full portfolio site is currently being updated. Please check back soon for the complete experience.
  </p>
  <a href="https://github.com/rajnath01" class="button">View My GitHub</a>
  
  <div class="social-links">
    <a href="https://github.com/rajnath01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <i class="fab fa-twitter"></i>
    </a>
  </div>
  
  <script>
    console.log('Portfolio site loaded successfully');
  </script>
</body>
</html>
`;

// Write the index.html file to the build directory
fs.writeFileSync(path.join('build', 'index.html'), indexHtml);

// Also create a 404.html file with the same content
fs.writeFileSync(path.join('build', '404.html'), indexHtml);

// Create a .nojekyll file to prevent GitHub Pages from using Jekyll
fs.writeFileSync(path.join('build', '.nojekyll'), '');

// Create a CNAME file if you have a custom domain
// fs.writeFileSync(path.join('build', 'CNAME'), 'yourdomain.com');

console.log('Simple build completed successfully!');