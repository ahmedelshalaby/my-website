# بورتفوليو مونتير فيديو — Ahmed Wagdy

موقع شخصي (صفحة واحدة) لعرض شغل المونتاج، بتصميم سينمائي داكن، ثنائي اللغة (عربي / إنجليزي) مع سويتش، وبدون أي مكتبات خارجية.

## الملفات

```
index.html          ← الصفحة كلها (المحتوى)
assets/styles.css   ← كل التصميم والألوان
assets/app.js        ← الترجمة + الفلاتر + نافذة الفيديو + الفورم
assets/og-cover.png ← صورة المشاركة على السوشيال ميديا
assets/og-cover.svg ← نفس الصورة بس قابلة للتعديل
```

## تشغيل الموقع

- أسهل طريقة: دوس دبل كليك على `index.html`.
- أو سيرفر محلي (أفضل للتجربة):

```powershell
cd "C:\Users\Ahmed wagdy\Documents\Default Project"
python -m http.server 5173
```

بعدين افتح `http://127.0.0.1:5173`.

---

## 1) تغيير الاسم والإيميل واللينكات

**الاسم:** في `index.html` دوّر على `AHMED WAGDY` واستبدلها (موجودة في الهيدر والفوتر، وكمان في `assets/app.js` جوه الترجمة لو عايز تغيّر عنوان التاب).

**الإيميل:** في `assets/app.js` غيّر السطر:

```js
const MAIL = "hello@ahmedwagdy.com";
```

وغيّره كمان في `index.html` في اللينك `mailto:` والنص الظاهر.

**السوشيال:** في `index.html` تحت `class="socials"` بدّل `href="#"` بلينك كل حساب.

**صورة البروفايل:** في قسم About فيه بلوك `.portrait`. أسهل طريقة إنك تحط صورتك جنب `index.html` (مثلاً `assets/me.jpg`) وتضيف في أول `styles.css`:

```css
.portrait { background-image: url("me.jpg"); background-size: cover; background-position: center; }
```

وبعدين تشيل السطر `<span class="portrait__initials">AW</span>` أو تسيبه (هيظهر فوق الصورة).

---

## 2) إضافة فيديوهاتك (أهم جزء)

كل كارت في قسم Work عنده زرار بالشكل ده:

```html
<button class="card__media p1" type="button"
        data-open-video
        data-video=""
        data-title-key="w1.title"
        data-cat-key="w1.cat"
        data-duration="0:45">
```

- حط لينك الفيديو في `data-video`:

```html
data-video="https://youtu.be/XXXXXXXXXXX"
```

بيدعم تلقائيًا: **YouTube** (عادي أو Shorts)، **Vimeo**، **Google Drive**، وأي لينك Embed جاهز.
سيبها فاضية `""` وهيظهر الـ Placeholder.

- **العنوان والتصنيف** بيتغيّروا من الترجمة في `assets/app.js`:

```js
"w1.title": "Nike — Run Beyond",
"w1.cat": "Ad campaign",
```

نفس المفاتيح موجودة في القسم العربي `ar` تحت — عدّل الاتنين.

- **مدة الفيديو** الظاهرة على الكارت: غيّر `data-duration` و `<span class="card__time">0:45</span>`.

- **الفلاتر** بتشتغل بالـ `data-cat` على `<article>`: `ads` / `music` / `pod` / `short`.

- **إضافة مشروع جديد:** انسخ أي `<article class="card">` كاملة، وغيّر:
  `data-cat` + `p1` (خلفية) + المفاتيح `w7.title` و `w7.cat` (وتضيفهم في الترجمتين).

- **بدل الخلفية الملونة بصورة حقيقية (Thumbnail):** غيّر `class="card__media p1"` لـ `class="card__media"` وزوّد ستايل إنلاين:

```html
style="background:url('assets/thumb1.jpg') center/cover"
```

---

## 3) تغيير الألوان

كل حاجة في `:root` أول `assets/styles.css`:

```css
--accent: #ff5a1f;   /* النيون الأساسي */
--cyan: #35e6ff;     /* اللون المساعد */
--bg: #07070a;       /* الخلفية */
```

غيّر `--accent` بس وهتلاقي الموقع كله اتغيّر (الأزرار، الحدود، التدرجات، الـ glow).

---

## 4) الفورم

الفورم بيبعت عن طريق برنامج الإيميل (`mailto`) — يعني مش محتاج سيرفر ولا اشتراك.
لو عايزه يبعت من الموقع نفسه من غير ما يفتح الإيميل، استخدم خدمة مجانية زي **Formspree**:

1. اعمل فورم على formspree.io وخد الـ endpoint.
2. في `index.html` غيّر `<form id="contactForm" ...>` لـ:

```html
<form id="contactForm" action="https://formspree.io/f/XXXXXX" method="POST">
```

وشيل `e.preventDefault()` من `assets/app.js` (أو سيبها، هتمنع الإرسال — فالأفضل تشيلها).

---

## 5) النشر (مجانًا)

**Netlify Drop (الأسرع):** افتح [app.netlify.com/drop](https://app.netlify.com/drop) واسحب فولدر المشروع كله. خلاص، هيبقى عندك لينك.

**GitHub Pages:**
1. اعمل ريبو جديد وارفع الملفات.
2. Settings → Pages → Branch: `main` / root → Save.

**Vercel:** `npx vercel` من فولدر المشروع واختار الافتراضي.

> بعد النشر: غيّر `og:image` في `index.html` للينك كامل (`https://your-site.com/assets/og-cover.png`) عشان صورة المشاركة تظهر صح.

---

## ملاحظات

- الخطوط (Space Grotesk + Cairo) بتيجي من Google Fonts — محتاجة إنترنت. لو النت قطع، الموقع بيستخدم خطوط النظام عادي.
- اللغة بتتخزن في المتصفح (`localStorage`)، ولو متصفح الزائر عربي بيفتح عربي تلقائيًا.
- الموقع متوافق مع الموبايل، وبيحترم إعداد "تقليل الحركة" في نظام التشغيل.
