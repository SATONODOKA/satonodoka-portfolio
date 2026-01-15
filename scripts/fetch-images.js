const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function fetchImages() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // プロジェクト1のスクリーンショット
  console.log('Fetching project1 images...');
  await page.goto('https://shokuninboshu.netlify.app/', { waitUntil: 'networkidle' });
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.screenshot({ path: 'public/images/project1-thumbnail.png', fullPage: false });
  await page.screenshot({ path: 'public/images/hero-project1.png', fullPage: false });
  await page.screenshot({ path: 'public/images/project1-1.png', fullPage: false });
  
  // プロジェクト3のスクリーンショット
  console.log('Fetching project3 images...');
  await page.goto('https://job-seiri.netlify.app/', { waitUntil: 'networkidle' });
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.screenshot({ path: 'public/images/project3-thumbnail.png', fullPage: false });
  await page.screenshot({ path: 'public/images/hero-project3.png', fullPage: false });
  await page.screenshot({ path: 'public/images/project3-1.png', fullPage: false });
  
  // RPA概念図は既に存在するので、hero-project2.pngはRPA概念図のスクリーンショット
  console.log('Creating hero-project2 from RPA concept...');
  await page.goto('file://' + path.resolve('public/images/rpa-concept.svg'), { waitUntil: 'networkidle' });
  await page.setViewportSize({ width: 1200, height: 800 });
  await page.screenshot({ path: 'public/images/hero-project2.png', fullPage: false });
  
  await browser.close();
  console.log('All images fetched successfully!');
}

fetchImages().catch(console.error);
