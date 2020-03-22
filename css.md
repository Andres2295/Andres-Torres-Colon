---
layout: default
---

[back](./codes_page.html)

# CSS

## What is CSS?

**CSS** stands for **C**ascading **S**tyle **S**heets. It also describes the style of an **HTML** document.

## Basic CSS Structure

> Syntax example

```css
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
```

CSS can be written in any text editor such as Notes, Notepad, Sublime Text, VS Code, ect. And it also must be saved with the file extension of `.css`
> In the example above the `body`, `h1` and `p` sections are called **selectors** and inside the **curly braces** `{}` must lie the **declaration** of the style properties for these **selectors**.

## CSS Selectors
  
CSS selectors are used to "select" an HTML element for styling.

Selectors can be devided into five categories:
  - Simple selectors (select elemets based on name, id or class)
  - Combinator selectors (select elements based on specific relationship between them)
  - Pseudo-class selectors (select elements based on a certain state)
  - Pseudo-elements selectors (select and style part of an element)
  - Attribute selectors (select elements based on an attribute value)

## Selector examples

### Simple selectors

  - #### Element selectors

    The element selector selects HTML elements by the element `tag` name.

> Example
```css
p {
  font-family: verdana;
  font-size: 20px;
}
```

  - #### Id selectors

    The id selector selects HTML elements by the element `id="value"` property value.

> Example
```css
#value {
  font-family: verdana;
  font-size: 20px;
}
```

  - #### Class selectors

    The id selector selects HTML elements by the element `class="value"` property value.

> Example
```css
.value {
  font-family: verdana;
  font-size: 20px;
}
```

  - #### Combined selectors

    CSS elements can also be combined as displayed in the example below:

> Example - note that `p` is refering to an **element** `.value` is refering to an element `class="value"` property value.
> This specify wich HTML element will be affected by the class.
```css
p.value {
  font-family: verdana;
  font-size: 20px;
}
```

  - #### CSS multiple classes in HTML

    HTML documents can also refer to more than one document.
    
> Example
```html
<p class="center large">Refering to classes.</p>
```


[back](./codes_page.html)
