# מגזין הכלה

קוד המקור של [kala-magazine.github.io](https://kala-magazine.github.io), מגזין בעברית על שמלות כלה בשיתוף הסטודיו של שני ששון.

נבנה עם [Eleventy](https://www.11ty.dev/). מתפרסם ל-GitHub Pages אוטומטית בכל push ל-`main` דרך `.github/workflows/deploy.yml`.

## עבודה מקומית

```bash
npm install
npm run serve
```

## הוספת מדריך

יוצרים קובץ `src/posts/<slug>.md` עם front matter (`title`, `description`, `date`, `category`, ואופציונלית `faq`) וגוף ב-Markdown. הגדרות האתר בקובץ `src/_data/site.json`.
