# Content Structure Overview

## 📁 Complete Folder Structure

```
content/
├── README.md              # Full documentation
├── QUICK_START.md         # Quick reference guide
└── blogs/                 # All insurance product pages
    ├── bao-viet-an-gia/
    │   ├── vi.md         # Vietnamese content
    │   └── en.md         # English content
    └── bao-viet-intercare/
        ├── vi.md         # Vietnamese content
        └── en.md         # English content

public/
└── images/
    ├── bao-viet-an-gia.svg      # Featured image
    └── bao-viet-intercare.svg   # Featured image

src/
├── app/
│   └── san-pham/
│       └── [slug]/
│           └── page.tsx          # Dynamic route handler
└── components/
    ├── BlogLayout.tsx            # Blog page template
    ├── LanguageSwitcher.tsx      # Language toggle (in navbar)
    └── Navbar/
        └── index.tsx             # Navigation with links
```

## 🔗 URL Mapping

| Folder Name | Vietnamese URL | English URL |
|-------------|----------------|-------------|
| `bao-viet-an-gia` | `/san-pham/bao-viet-an-gia` | `/san-pham/bao-viet-an-gia?lang=en` |
| `bao-viet-intercare` | `/san-pham/bao-viet-intercare` | `/san-pham/bao-viet-intercare?lang=en` |
| `[your-slug]` | `/san-pham/[your-slug]` | `/san-pham/[your-slug]?lang=en` |

## 🎯 Key Features

✅ **Scalable Structure**: Each product has its own folder  
✅ **Multilingual**: Easy VI/EN switching via navbar  
✅ **Template-based**: All blogs use BlogLayout component  
✅ **SEO Optimized**: Metadata generation for each page  
✅ **Markdown Powered**: Write content in markdown with frontmatter  
✅ **Responsive**: Works on all devices  
✅ **Easy to Extend**: Add new products by creating folders  

## 📝 Content Files

### Example Structure

**Folder**: `content/blogs/bao-viet-an-gia/`

**vi.md** (Vietnamese):
- Title: "Bảo Việt An Gia – Bảo Hiểm Sức Khỏe Tốt Nhất Hiện Nay"
- Category: "Sức khỏe"
- Language: "vi"

**en.md** (English):
- Title: "Bao Viet An Gia - The Best Health Insurance Available"
- Category: "Health"
- Language: "en"

## 🚀 How It Works

1. **User visits**: `/san-pham/bao-viet-an-gia`
2. **Next.js reads**: `content/blogs/bao-viet-an-gia/vi.md` (default lang)
3. **Parses frontmatter**: Extracts title, description, image, etc.
4. **Renders with BlogLayout**: Wraps content in template
5. **User clicks VI/EN**: URL updates to `?lang=en`
6. **Next.js reads**: `content/blogs/bao-viet-an-gia/en.md`
7. **Re-renders**: Same layout, different language content

## 🔧 Components

### BlogLayout
- **Purpose**: Reusable template for all blog pages
- **Features**: Hero section, featured image, styled markdown
- **Location**: `src/components/BlogLayout.tsx`

### LanguageSwitcher
- **Purpose**: Toggle between VI/EN
- **Location**: Integrated in Navbar
- **Behavior**: Updates `?lang=` query parameter
- **File**: `src/components/LanguageSwitcher.tsx`

### Dynamic Route
- **Purpose**: Handle all `/san-pham/[slug]` URLs
- **Features**: Static generation, metadata, 404 handling
- **Location**: `src/app/san-pham/[slug]/page.tsx`

## 📚 Documentation

- **[README.md](./README.md)**: Complete documentation with examples
- **[QUICK_START.md](./QUICK_START.md)**: Quick reference for adding products
- **This file**: High-level overview of the structure

## ✨ Next Steps

To add your first product:
1. Copy `bao-viet-an-gia` folder structure
2. Rename folder to your product slug
3. Edit `vi.md` and `en.md` files
4. Add image to `public/images/`
5. Update navbar in `src/components/Navbar/index.tsx`
6. Test at `http://localhost:3000/san-pham/your-slug`

---

**Last Updated**: February 2, 2026  
**Maintained By**: IBaoHiem Development Team
