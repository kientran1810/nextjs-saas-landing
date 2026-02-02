# Blog/Product Pages - Multilingual Setup

## Overview
This setup provides a scalable, multilingual blog/product page system for IBaoHiem. Each blog post can have multiple language versions, and users can switch between languages seamlessly using the language switcher in the navbar.

## Folder Structure

```
content/
  blogs/
    bao-viet-an-gia/          # Each blog has its own folder
      vi.md                   # Vietnamese version
      en.md                   # English version
    bao-viet-intercare/       # Another blog example
      vi.md
      en.md
    insurance-product-name/   # Add more blogs here
      vi.md
      en.md
public/
  images/
    bao-viet-an-gia.svg       # Blog images
    bao-viet-intercare.svg
```

### Structure Explanation
- **Folder Name = URL Slug**: Each blog folder name becomes the URL path
  - Example: `bao-viet-an-gia` folder → `/san-pham/bao-viet-an-gia`
- **Language Files**: Each folder contains `vi.md` and `en.md` for bilingual content
- **Consistent Structure**: All blogs follow the same pattern for easy management

## How It Works

### 1. Content Organization
- Each blog post has its own folder named after the URL slug
- Inside each folder, create separate `.md` files for each language:
  - `vi.md` - Vietnamese content
  - `en.md` - English content
- You can add more languages by creating additional files (e.g., `ja.md`, `zh.md`)

### 2. URL Structure
- Vietnamese (default): `/san-pham/bao-viet-an-gia` or `/san-pham/bao-viet-an-gia?lang=vi`
- English: `/san-pham/bao-viet-an-gia?lang=en`
- Language switcher in navbar updates the `?lang=` parameter

### 3. Markdown Frontmatter Template
Each markdown file **must** include frontmatter metadata at the top:

```markdown
---
title: "Blog Title"                    # Required: Page title
slug: "blog-slug"                      # Required: URL slug (should match folder name)
description: "Blog description"        # Required: Meta description for SEO
image: "/images/blog-image.svg"        # Required: Featured image path
category: "Category Name"              # Required: Category (e.g., "Sức khỏe", "Xe cơ giới")
lang: "vi"                             # Required: Language code (vi, en)
date: "2025-01-15"                     # Required: Publication date (YYYY-MM-DD)
author: "Author Name"                  # Optional: Author name
---

## Your Content Here

Write your markdown content below the frontmatter...
```

## Adding a New Blog Post

Follow these steps to create a new insurance product page:

### Step 1: Create the blog folder
Create a new folder under `content/blogs/` with a descriptive slug name:
```bash
content/blogs/bao-hiem-o-to/
```
**Naming Convention:**
- Use lowercase letters
- Use hyphens (-) instead of spaces
- Use Vietnamese without diacritics for consistency
- Keep it short and descriptive

### Step 2: Create language files
Create both `vi.md` and `en.md` files in your new folder:

**vi.md** (Vietnamese):
```markdown
---
title: "Bảo hiểm ô tô – Bảo vệ xe của bạn"
slug: "bao-hiem-o-to"
description: "Bảo hiểm ô tô toàn diện với quyền lợi vượt trội"
image: "/images/bao-hiem-o-to.svg"
category: "Xe cơ giới"
lang: "vi"
date: "2025-02-02"
author: "IBaoHiem"
---

## Giới thiệu sản phẩm
[Your Vietnamese content here...]
```

**en.md** (English):
```markdown
---
title: "Car Insurance – Protect Your Vehicle"
slug: "bao-hiem-o-to"
description: "Comprehensive car insurance with outstanding benefits"
image: "/images/bao-hiem-o-to.svg"
category: "Vehicle"
lang: "en"
date: "2025-02-02"
author: "IBaoHiem"
---

## Product Introduction
[Your English content here...]
```

### Step 3: Add featured image
Create or add an image in `public/images/`:
```bash
public/images/bao-hiem-o-to.svg  # or .jpg, .png
```
Then reference it in frontmatter:
```yaml
image: "/images/bao-hiem-o-to.svg"
```

### Step 4: Add to navbar navigation
Update [src/components/Navbar/index.tsx](../src/components/Navbar/index.tsx):

```typescript
const NavItems = [
  { 
    name: "Xe cơ giới", 
    href: "/#product",
    dropdown: [
      { name: "Bảo hiểm ô tô", href: "/san-pham/bao-hiem-o-to" }, // Add this
      { name: "Bảo hiểm xe máy", href: "/#motorcycle" }
    ]
  },
  // ... other items
];
```

### Step 5: Test your new page
Start the dev server and visit:
```
http://localhost:3000/san-pham/bao-hiem-o-to
http://localhost:3000/san-pham/bao-hiem-o-to?lang=en
```

## Existing Blog Examples

The repository includes two example blogs to help you get started:

### 1. Bảo Việt An Gia
- **Folder**: `content/blogs/bao-viet-an-gia/`
- **URL**: `/san-pham/bao-viet-an-gia`
- **Category**: Sức khỏe (Health)
- **Description**: Premium family health insurance package

### 2. Bảo Việt InterCare
- **Folder**: `content/blogs/bao-viet-intercare/`
- **URL**: `/san-pham/bao-viet-intercare`
- **Category**: Sức khỏe (Health)
- **Description**: International health insurance with global coverage

Use these as templates when creating new insurance product pages.

## Components

### BlogLayout
The main layout component that wraps all blog pages. It includes:
- Navbar (with integrated language switcher)
- Hero section with title, description, metadata
- Featured image
- Content area with styled markdown
- Footer

### LanguageSwitcher
A UI component integrated into the Navbar that allows users to switch between languages. It:
- Updates the `lang` query parameter in the URL
- Adapts its styling based on navbar scroll state (transparent vs solid background)
- Appears in both desktop and mobile navigation menus

## Customization

### Styling the Content
Edit [BlogLayout.tsx](../src/components/BlogLayout.tsx) to customize the styling of markdown elements (headings, paragraphs, tables, etc.).

### Adding More Languages
1. Create additional `.md` files (e.g., `ja.md`, `zh.md`)
2. Update the LanguageSwitcher component to include the new languages

### Changing the URL Structure
If you want to use path-based routing (e.g., `/vi/san-pham/blog-slug`), you'll need to:
1. Configure Next.js i18n in `next.config.js`
2. Update the dynamic route structure
3. Modify the language switching logic

## Development

### Run the dev server
```bash
npm run dev
```

### Access the blog page
Navigate to: `http://localhost:3000/san-pham/bao-viet-an-gia`

### Switch languages
Click the VI/EN buttons at the top of the page, or add `?lang=en` to the URL.

## Best Practices

1. **Keep translations in sync**: Ensure all language versions have the same structure and sections
2. **Use descriptive slugs**: Slugs should be meaningful and SEO-friendly (e.g., `bao-viet-an-gia` not `product-1`)
3. **Optimize images**: Compress images before adding them to `public/images/`
4. **SEO metadata**: Always fill in title and description in frontmatter for better SEO
5. **Consistent categories**: Use the same category names across all blogs for better organization
6. **Common structure**: All blogs follow the same folder pattern for easy maintenance
7. **Test both languages**: Always verify both VI and EN versions before publishing

## Content Guidelines

### Writing Blog Content

1. **Use proper markdown**: Utilize headers (##, ###), lists, tables, and bold/italic text
2. **Structure your content**:
   - Start with an introduction
   - Use clear section headings
   - Include tables for structured data (product info, pricing)
   - End with contact information or CTA
3. **Keep it readable**: Break long paragraphs into smaller chunks
4. **Use Vietnamese correctly**: Maintain proper diacritics in Vietnamese content
5. **Maintain consistency**: Use the same terminology across all product pages

### Image Guidelines

1. **File formats**: Use SVG for graphics, WebP/JPEG for photos
2. **Naming**: Use descriptive names matching the blog slug (e.g., `bao-viet-an-gia.svg`)
3. **Size**: Keep images under 500KB for fast loading
4. **Dimensions**: Featured images should be 1200x600px or similar ratio
5. **Accessibility**: Ensure good contrast for text on images

## Folder Structure Reference

Your complete content structure should look like this:

```
content/
  blogs/
    bao-viet-an-gia/
      vi.md
      en.md
    bao-viet-intercare/
      vi.md
      en.md
    [your-product-slug]/
      vi.md
      en.md
  README.md (this file)

public/
  images/
    bao-viet-an-gia.svg
    bao-viet-intercare.svg
    [your-product-slug].svg
```

## Troubleshooting

### Blog page not showing?
1. Check folder name matches URL slug
2. Verify `vi.md` and `en.md` files exist
3. Ensure frontmatter is properly formatted
4. Check image path is correct

### Language switching not working?
1. Verify LanguageSwitcher is imported in Navbar
2. Check both language files exist
3. Ensure `lang` field in frontmatter matches file name

### Styling issues?
1. Check markdown syntax is correct
2. Verify BlogLayout styles are applied
3. Clear browser cache and restart dev server

## Next Steps & Future Enhancements

Consider implementing:
- **Full i18n routing**: Path-based URLs like `/vi/san-pham/slug` and `/en/products/slug`
- **CMS integration**: Use Contentful, Sanity, or Strapi for easier content management
- **Search functionality**: Add full-text search across all blogs
- **Related posts**: Show similar insurance products
- **Social sharing**: Add share buttons for social media
- **Comments section**: Enable customer feedback
- **Analytics**: Track page views and user engagement
- **Breadcrumbs**: Improve navigation with breadcrumb trails
- **Table of contents**: Auto-generate TOC for long articles
