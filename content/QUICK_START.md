# Quick Start Guide - Adding New Insurance Products

## TL;DR - Create a New Product Page

```bash
# 1. Create folder
mkdir content/blogs/your-product-slug

# 2. Create files
touch content/blogs/your-product-slug/vi.md
touch content/blogs/your-product-slug/en.md

# 3. Add image
# Place image in public/images/your-product-slug.svg

# 4. Update navbar
# Edit src/components/Navbar/index.tsx

# 5. Test
npm run dev
# Visit: http://localhost:3000/san-pham/your-product-slug
```

## Current Blog Structure

```
content/blogs/
├── bao-viet-an-gia/
│   ├── vi.md (Vietnamese)
│   └── en.md (English)
└── bao-viet-intercare/
    ├── vi.md (Vietnamese)
    └── en.md (English)
```

## Template Files

### Vietnamese Template (vi.md)

```markdown
---
title: "Product Name - Vietnamese"
slug: "product-slug"
description: "Product description in Vietnamese"
image: "/images/product-slug.svg"
category: "Sức khỏe"
lang: "vi"
date: "2025-02-02"
author: "IBaoHiem"
---

## Giới thiệu sản phẩm

Your content here...
```

### English Template (en.md)

```markdown
---
title: "Product Name - English"
slug: "product-slug"
description: "Product description in English"
image: "/images/product-slug.svg"
category: "Health"
lang: "en"
date: "2025-02-02"
author: "IBaoHiem"
---

## Product Introduction

Your content here...
```

## Common Categories

- **Vietnamese**: "Sức khỏe", "Xe cơ giới", "Du lịch", "Tai nạn", "Nhân thọ", "Bảo hiểm khác"
- **English**: "Health", "Vehicle", "Travel", "Accident", "Life", "Other Insurance"

## Available Routes

- `/san-pham/bao-viet-an-gia` - Bảo Việt An Gia health insurance
- `/san-pham/bao-viet-intercare` - Bảo Việt InterCare international insurance
- `/san-pham/[your-slug]` - Your new product

## Testing Checklist

- [ ] Folder created with correct slug name
- [ ] Both `vi.md` and `en.md` files exist
- [ ] Frontmatter filled in correctly
- [ ] Image added to `public/images/`
- [ ] Image path correct in frontmatter
- [ ] Navbar updated with link
- [ ] Tested `/san-pham/your-slug`
- [ ] Tested `/san-pham/your-slug?lang=en`
- [ ] Language switcher works
- [ ] Mobile view works
- [ ] Content displays correctly

## Need More Help?

See [README.md](./README.md) for detailed documentation.
