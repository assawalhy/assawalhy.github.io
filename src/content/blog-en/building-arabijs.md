---
title: "Building Arabi.js — Arabizing JavaScript"
date: 2024-06-10T14:00:00+02:00
draft: false
tags: ["javascript", "open-source", "arabization"]
categories: ["projects"]
description: "The story behind building Arabi.js, a tool that allows developers to write JavaScript using Arabic keywords."
---

One of my most ambitious projects was Arabi.js — a tool that transforms JavaScript syntax to support Arabic keywords. The idea was simple but powerful: **what if you could write JavaScript in Arabic?**

## The Motivation

As someone who grew up in Egypt, I noticed that many beginner programmers struggle with the English-centric nature of programming languages. While English proficiency is important in tech, the initial barrier of learning programming concepts AND a foreign language simultaneously can be overwhelming.

## Technical Approach

Arabi.js works by leveraging the Babel.js parser. Here's the high-level approach:

1. **Parsing:** We use a modified PEG.js grammar to recognize Arabic keywords
2. **Transformation:** The Arabic tokens are mapped to their English JavaScript equivalents
3. **Code Generation:** Standard JavaScript is generated that can run in any environment

### Example

```javascript
// Arabic
دالة مرحبا(اسم) {
    اطبع("مرحباً يا " + اسم);
}

// Translates to:
function hello(name) {
    console.log("مرحباً يا " + name);
}
```

## Challenges

The biggest challenge was handling bidirectional text (BiDi). Arabic is written right-to-left, but code structure is inherently left-to-right (brackets, operators, etc.). Finding the right balance was tricky.

## Impact

While Arabi.js is primarily an educational tool, it demonstrates an important principle: programming should be accessible to everyone, regardless of their native language.

The project received positive feedback from the Arabic developer community and sparked interesting discussions about programming language localization.
