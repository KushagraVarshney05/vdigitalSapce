# Website Content Management Guide

This guide will help you easily update all the content on your VdigitalSpace website without any technical knowledge.

## 📁 Where to Find Content Files

All website content is stored in the `src/mock-data/` folder:

```
mock-data/
├── content.js     ← ALL page text, headings, buttons
├── company.js     ← Company name, contact info
├── services.js    ← Services offered
├── portfolio.js   ← Project case studies
├── blog.js        ← Blog posts
├── team.js        ← Team member info
├── stats.js       ← Company statistics
└── faq.js         ← FAQ questions & answers
```

## 🎯 Quick Content Changes

### 1. **Page Headlines & Text** → `content.js`
- Hero titles and subtitles
- Button text
- Form labels
- Section headings
- Error messages

### 2. **Company Information** → `company.js`
- Company name
- Tagline
- Phone number
- Email addresses
- Office address

### 3. **Services** → `services.js`
- Service names
- Service descriptions
- Service features

### 4. **Team Members** → `team.js`
- Names, roles, bios

### 5. **Portfolio Projects** → `portfolio.js`
- Project names
- Results achieved
- Project descriptions

## 📝 How to Edit Content

### Step 1: Open the File
Navigate to the file you want to edit (e.g., `content.js` for page text)

### Step 2: Find the Content
Look for the text you want to change. For example:

```javascript
contact: {
  hero: {
    title: "Let's Work Together",  ← Change this text
    subtitle: "Have a project in mind? We'd love to hear from you."  ← Or this
  }
}
```

### Step 3: Update the Text
Simply change the text between the quotes:

```javascript
contact: {
  hero: {
    title: "Contact Our Team Today",  ← New text
    subtitle: "Ready to grow your business? Get in touch!"  ← New text
  }
}
```

### Step 4: Save the File
Save the file and the website will automatically update!

## 🔧 Common Changes

### Change Contact Page Title
**File:** `content.js`
**Location:** `contentData.contact.hero.title`
```javascript
title: "Your New Title Here"
```

### Update Company Phone Number
**File:** `company.js`
**Location:** `companyData.contact.phone.number`
```javascript
number: '+1 (800) 123-4567'
```

### Add New FAQ
**File:** `faq.js`
**Add at the end:**
```javascript
{
  id: 5,
  question: 'Your new question?',
  answer: 'Your detailed answer here.'
}
```

### Change Button Text
**File:** `content.js`
**Location:** `contentData.common.buttons`
```javascript
getStarted: "Start Now"  // Instead of "Get Started"
```

## ⚠️ Important Rules

1. **Keep the Structure:** Don't change `{`, `}`, `[`, `]` symbols
2. **Keep Quotes:** Always keep text in quotes `"like this"`
3. **Keep Commas:** Don't remove commas `,` at the end of lines
4. **Test Changes:** Save and check the website after each change

## 🆘 Need Help?

If something breaks:
1. Undo your last change
2. Check you didn't remove any quotes or commas
3. Compare with the original structure
4. Contact your developer if needed

## 📋 Content Checklist

Before publishing changes, verify:
- [ ] All text is in quotes
- [ ] All commas are in place
- [ ] No extra characters added
- [ ] Content makes sense and is professional
- [ ] Contact information is correct
- [ ] All links and emails work

---
**Remember:** Small changes are safer. Test one change at a time!
