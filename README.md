# מגזין הכלה, בלוג על שמלות כלה

אתר סטטי בעברית (RTL) שנבנה עם Eleventy. אין מסד נתונים, אין שרת, אין תשלום: הקבצים נבנים לתיקייה `_site` ומתארחים בחינם.

## מה יש כאן

- 8 מדריכים ב־`src/posts/` (גזרות, בוהו, בדים, לוח זמנים, שאלות לפני רכישה, אביזרים, מדידות, מבנה גוף)
- עמוד אודות, עמוד 404
- sitemap.xml, feed.xml (RSS), robots.txt, llms.txt
- סכמת BlogPosting ו־FAQPage בכל פוסט, תגי Open Graph, canonical
- עיצוב רספונסיבי, פונטים Heebo ו־Frank Ruhl Libre

## עבודה מקומית

```bash
npm install
npm run serve
```

ואז פותחים http://localhost:8080. כל שינוי בקבצים מתעדכן מיד.

בנייה חד־פעמית (יוצר את `_site`):

```bash
npm run build
```

## איך מוסיפים פוסט

יוצרים קובץ חדש ב־`src/posts/`, למשל `src/posts/winter-wedding-dress.md`. שם הקובץ הופך לכתובת: `/posts/winter-wedding-dress/`.

בראש הקובץ:

```md
---
title: "כותרת הפוסט"
description: "משפט או שניים שיופיעו בגוגל ובדף הבית."
date: 2026-09-15
category: "סגנון"
faq:
  - q: "שאלה נפוצה?"
    a: "תשובה קצרה."
---

כאן גוף הפוסט ב־Markdown. כותרות משנה עם ##, רשימות עם -, קישורים כרגיל.
```

החלק `faq` הוא רשות. אם הוא קיים, הוא מוצג בסוף הפוסט וגם נכנס לסכמת FAQPage לגוגל.

## הגדרות האתר

`src/_data/site.json`: שם האתר, סלוגן, תיאור, וכתובת האתר (`url`). את הכתובת צריך לעדכן אחרי הפרסום, כי ממנה נבנים ה־canonical, ה־sitemap וה־RSS.

## פרסום בחינם, עם דומיין חינמי

### אפשרות 1: GitHub Pages (מומלץ, דומיין `שם.github.io`)

1. פותחים חשבון ב־github.com (אם אין).
2. יוצרים ריפוזיטורי חדש בשם `<שם-המשתמש>.github.io` (ציבורי). השם הזה נותן את הכתובת הקצרה ביותר, בלי תת־תיקייה.
3. מהתיקייה הזאת, בטרמינל:

```bash
git remote add origin https://github.com/<שם-המשתמש>/<שם-המשתמש>.github.io.git
git push -u origin main
```

4. בריפוזיטורי: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
5. ה־workflow שבתיקייה `.github/workflows/deploy.yml` בונה ומפרסם אוטומטית בכל push. תוך דקה או שתיים האתר חי ב־`https://<שם-המשתמש>.github.io`.
6. מעדכנים את `url` ב־`src/_data/site.json` לכתובת האמיתית ועושים push שוב.

### אפשרות 2: Netlify Drop (בלי git, דומיין `שם.netlify.app`)

1. מריצים `npm run build`.
2. נכנסים ל־app.netlify.com/drop וגוררים את התיקייה `_site`.
3. מקבלים כתובת מיידית. אפשר לשנות את השם ב־Site settings → Change site name.

### אפשרות 3: Cloudflare Pages (דומיין `שם.pages.dev`)

מחברים את הריפוזיטורי ב־dash.cloudflare.com → Pages, פקודת build: `npm run build`, תיקיית output: `_site`.

## אחרי הפרסום

- Google Search Console: מוסיפים את הכתובת ושולחים את `/sitemap.xml`.
- לוודא ש־`url` ב־`site.json` מעודכן (אחרת ה־canonical מצביע לכתובת הלא נכונה).
- לחבר דומיין משלך בעתיד: כל שלושת השירותים תומכים בזה בחינם, רק הדומיין עצמו עולה כסף.
