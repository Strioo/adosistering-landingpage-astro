# Design Tokens — ADOSISTERING Landing Page

This document maps the visual design to Tailwind CSS configuration values.

## Colors

| Token        | Usage                     | Tailwind Class        | Hex       |
| ------------ | ------------------------- | --------------------- | --------- |
| Primary 50   | Light backgrounds         | `bg-primary-50`       | `#f0fdf4` |
| Primary 100  | Badges, light fills       | `bg-primary-100`      | `#dcfce7` |
| Primary 200  | Hover states              | `bg-primary-200`      | `#bbf7d0` |
| Primary 500  | Icons, links              | `text-primary-500`    | `#22c55e` |
| Primary 600  | Buttons, CTAs             | `bg-primary-600`      | `#16a34a` |
| Primary 700  | Hero gradient             | `from-primary-700`    | `#15803d` |
| Primary 800  | Header, dark sections     | `bg-primary-800`      | `#166534` |
| Primary 900  | Footer                    | `bg-primary-900`      | `#14532d` |
| Accent 300   | Highlight text            | `text-accent-300`     | `#fcd34d` |
| Accent 500   | Accent buttons            | `bg-accent-500`       | `#f59e0b` |
| Accent 600   | Accent hover              | `bg-accent-600`       | `#d97706` |
| Neutral 50   | Section backgrounds       | `bg-neutral-50`       | `#fafafa` |
| Neutral 600  | Body text                 | `text-neutral-600`    | `#525252` |
| Neutral 800  | Default body text         | `text-neutral-800`    | `#262626` |
| Neutral 900  | Headings                  | `text-neutral-900`    | `#171717` |

## Typography

| Token        | Usage            | Tailwind Class      | Size / Weight       |
| ------------ | ---------------- | ------------------- | ------------------- |
| Display XL   | Not used (page)  | `text-display-xl`   | 4.5rem / 800        |
| Display LG   | Hero H1          | `text-display-lg`   | 3.75rem / 800       |
| Display MD   | Section H2 (lg)  | `text-display-md`   | 3rem / 700          |
| Display SM   | Section H2 (sm)  | `text-display-sm`   | 2.25rem / 700       |
| Heading LG   | Sub-headings     | `text-heading-lg`   | 1.875rem / 700      |
| Heading MD   | Card titles      | `text-heading-md`   | 1.5rem / 600        |
| Heading SM   | Small headings   | `text-heading-sm`   | 1.25rem / 600       |
| Body LG      | Lead paragraphs  | `text-body-lg`      | 1.125rem / 400      |
| Body MD      | Body text        | `text-body-md`      | 1rem / 400          |
| Body SM      | Small text       | `text-body-sm`      | 0.875rem / 400      |

**Font Family:** Plus Jakarta Sans (Google Fonts)

## Spacing

| Token | Usage                | Value   |
| ----- | -------------------- | ------- |
| 18    | Custom spacing       | 4.5rem  |
| 22    | Custom spacing       | 5.5rem  |
| 30    | Large section gap    | 7.5rem  |

## Border Radius

| Token | Usage        | Value  |
| ----- | ------------ | ------ |
| 4xl   | Large cards  | 2rem   |

## Shadows

| Token    | Usage                 | Definition                                                                                    |
| -------- | --------------------- | --------------------------------------------------------------------------------------------- |
| soft     | Images, subtle cards  | `0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)`                        |
| card     | Cards default         | `0 4px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)`                         |
| elevated | Cards hover, hero img | `0 20px 50px -12px rgba(0,0,0,0.15), 0 10px 20px -5px rgba(0,0,0,0.08)`                      |

## Breakpoints (Tailwind defaults)

| Token | Width  |
| ----- | ------ |
| sm    | 640px  |
| md    | 768px  |
| lg    | 1024px |
| xl    | 1280px |
| 2xl   | 1536px |
