# What I've learned from this project: 
1. aspcet-ratio
2. '@use' in SCSS
3. grid-templates-areas & grid-area
4. grid-auto-row 
5. grid-area (grid-area: 2 / 1 / 3 / 2;)
6. Hover-effect that makes image bigger, without causing any overflow
7. Each loop in SCSS
8. Short way of svg writing in html.
9. Regex: 
    1. global match 
    2. sensitive & insensitive
    3. character sets
    4. ranges 
    5. repeating characters
    6. meta characters
    7. special characters
    8. starting & snding patterns
    9. alternative characters (or)
    10. two ways of saving regular expressions in JavaScript
    11. practical example of REGEX
    <br><br><br><br><br>
## 1. aspect-ratio 
 which helps us to define height respectively:
 ~~~ 
li{
    min-height: 100px;
    aspect-ratio: 1/0.5;
  } 
  // which return element with 100px width and 50 px height
~~~
## 2. Using '@use' like an object call:
1. as simple import
~~~
  @use "../colors"; 
~~~
2.  as variable-object
~~~
  @use "../colors" as colors; 
  ...
  background-color: colors.$black-voile;
~~~
3. as default-object
~~~
 @use "../colors" as *; 
  ...
 background-color: $black-voile;
~~~

## 3. Following about css grids:
- grid-templates-areas & grid-area:
```
.grids{
  display: grid;
  grid-template-areas: 
 "a a a "
 "b b c";
  grid-template-rows: minmax(300px, auto) minmax(300px, auto);
}

.grids li:nth-child(1){
  grid-area: a;
}
.grids li:nth-child(2){
  grid-area: b;
}
.grids li:nth-child(3){
  grid-area: c;
}
```
## 4. Grid-auto-row 
(using this we can give the same height to all of rows, even if the number of row is not defined):
~~~
.grids{
  display: grid;
  grid-template-columns:50% 10% 40%;
  grid-auto-rows: minmax(100px, auto);
}
~~~

## 5. "Grid-area" helps us to define the order of grid-item for its row/column (2/2):
~~~
.grids li:nth-child(1){
  background-color: lightcoral;
  grid-area: 2/2;
}
~~~

## 6. Hover-effect that makes image bigger, without causing any overflow:
~~~
.img-wrapper{
  width: 400px;
  height: 450px;
  overflow: hidden;
}
.img-wrapper img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s;
}
img:hover{
  transform: scale(1.2);
}
~~~

## 7. Each loop in SCSS: 
~~~
$font-sizes: (
  h1: clamp(40px, 6vw, 60px),
  h2: clamp(30px, 4vw, 50px),
  h3: clamp(20px, 3vw, 40px),
  p: clamp(16px, 2vw, 18px)
);

@each $tag, $size in $font-sizes {
  #{$tag}{
    font-size: $size;
  }
}
~~~
## 8. Short way of svg writing in html.
1. First we make svg parent element that contains all svgs
~~~
  <svg style="display: none">...<svg/>
~~~
2. Inside that svg parent-element we add all our icons in symbol tags, which contain svg paths:
~~~
<svg style="display: none">
  <symbol id="github" width="24" height="24">...<symbol/>
  <symbol id="github" width="24" height="24">...<symbol/>
<svg/>
~~~
3. Then we call those symbols based on their id , using following syntax:
~~~
<svg>
  <use xlink:href="#github"></use>
</svg>
~~~
## 9. Regex 
 "https://regex101.com/" website for testing nad practicing your Regular Expression. To make it visibly appealing and understandable, please read md file in local VS-Code or some other platform.
1. Reqular expressions start with '/' and end with '/'. For example this **/ninja/** will math this:
-<p>
<mark>ninja</mark>ninja
</p>

#### 9.1. Global match 
 is when we look for all elements with the same pattern we have defined. To make REGEX global we add letter **g** after **/** charachter. For example this **/ninja/g** will result in:
-<p>
<mark>ninja</mark><mark>ninja</mark>
</p> 

#### 9.2. REGEX by default is 
- case-**sensitive** which means it will match only the exact charchter with exact letters (capital or small letter). For example this **/ninja/g** will result in:
-<p>
<mark>ninja</mark>Ninja
</p> 

- To make REGEX **insensitive** we add **i** after **/**. For example this **/ninja/i** will result in:
-<p>
<mark>Ninja</mark>ninja
</p> 

- To make REGEX **global-insensitive** we add **i** after **/**. For example this **/ninja/gi** will result in:
-<p>
<mark>Ninja</mark><mark>ninja</mark><mark>niNJa</mark>
</p> 

#### 9.3. Character Sets 
 we use them to match variety of different charachters within the same position. For example this **/[gj9]inja/g** will match all:
-<p>
<mark>ninja</mark> or <mark>jinja</mark> or <mark>9inja</mark>
</p>

#### 9.4. Ranges 
 instead of including all charachters inside square brackets in **Character Sets**, we can use Ranges to range from something to something:
 - This ``/[a-z]inja/gi`` will result in: 
   - <mark>ninja</mark>
     <mark>jinja</mark> 9inja 
     <mark>Ninja</mark>
- This ``/[a-z]inja/g`` will result in: 
   - <mark>ninja</mark>
     <mark>jinja</mark> 9inja Ninja
- This ``/[a-zA-Z]inja/g`` will result in: 
   - <mark>ninja</mark>
     <mark>jinja</mark> 9inja 
     <mark>Ninja</mark>
- This ``/[a-zA-Z0-9]inja/g`` will result in: 
   - <mark>ninja</mark>
     <mark>jinja</mark> 
     <mark>9inja</mark>
     <mark>Ninja</mark>
- This ``/[a-zA-Z0-9]inja/g`` will result in: 
   - <mark>ninja</mark>
     <mark>jinja</mark> 
     <mark>9inja</mark>
     <mark>Ninja</mark> sas343

#### 9.5. Repeating characters
- Notice ``[0-9]`` matches each digits individually, only with plus ``[0-9]+`` matches all digits (charachters) all together.
- These nine charachters ``/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g`` will match only first nine charachters of the phone-number (**[0-9][0-9]...**):
  - <mark>989155768</mark>999 

- These  charachters ``/[0-9]+/g`` will match infinite amount of nummbers that user inputs (**+**):
  - <mark>989155768999...</mark>


- These  charachters ``/[0-9a-z]{9}/g`` will match specified amount of nummbers that user inputs (**
{specified-number}**):
  - <mark>989155768</mark>999
  - <mark>asygcnbtp</mark>
- These  charachters ``/[0-9]{5,9}/g`` will match from specified to spceified amount of nummbers that user inputs (
{**from** specified-number, **to** specified-number}):
  - <mark>989155768</mark>999
  or
  - <mark>98915</mark>
- These  charachters ``/[0-9a-z]{5,}/g`` will match from specified to **infinite** amount of nummbers that user inputs ({from **specified-number**, to **infinite**}):
  - <mark>989155768w2323asas</mark>

#### 9.6. Meta characters
are charachters combined with backslash that have special abilities:
- **\d** (digits) is equal to **[0-9]**
- **\w** (words) is equal to **[a-zA-Z0-9_]**
- **\s** matches any whitespace (space, tab-space) characters

  - This ``/\d{3}\s\w{3}/g`` will result in:
    - <mark>123 sds</mark> - one space
    - 123  sds - two or more spaces

#### 9.7. Special characters
Special characters would not usually be acting the way you have expcted because they serve different purposes:

 **'+'** - The one or more quantifier <br>
 **' \ '** - The escape character ``(we put it before the charchter we want to escape reading as a special charachter)``:
  - This */\+[0-9]{9}/g* will result in:
    - <mark>+992989155768</mark> <br>
      <mark>+992989155768</mark>

 **'[ ]'** - The charachter set ``(the result will match to whatever we put inside this charachter)``<br>
 **'[^]'** - The negate symbol in a character set <br> 
 **'?'** - The zero-or-one quantifier ``(makes a preceding char optional)`` <br>
 **'.'** - Matches any character (except for a newline character i.e. it matches if the newline is there) :
  - This */c.t/g* will match (with any single-charachter between **c** and **t**):
    - <mark>cat</mark>
      <mark>cot</mark>...
  - The number of charachters between the two depends on number of dots. This */f..t/g* will match:
    - <mark>fart</mark>
      <mark>fort</mark>...

 **'*'** - The zero-or-more quantifier ``(is like + but optional like ?)``.
  - The first character here */a[a-z]*/g* is not optional but the last is:
    - <mark>a</mark>
      <mark>adfdfd</mark>... dsds
  
**'.'** - Matches anything:
  - <mark>dadad2323./?</mark>...

#### 9.8. Starting & Ending patterns
- If we do like this */[0-9]{4}/g* it will match each four amount of numbers: <br>
 <mark>1234</mark> <mark>1234</mark> <br>
 <mark>12341252</mark>
- But what if we want specified amount to be the maximum  matching we do this **/^[0-9]{4}$/g** and it won't match repeating amount (the end and the start should be 4 numbers): <br>
<mark>1234</mark> <br>
12345381

#### 9.9. Alternative characters
- **" | "** - compared to JavaScript we should have one "|", which means or. For example this */[a|b]/g* will math 'a' or 'b': <br>
  - <mark>ab</mark>
  - <mark>a</mark> <mark>b<mark>

 - **" (..|..) "** - for example if for this "/p|tyre/g" we type bellow, it will not match while it is compares not *p* and *t*, but ``p`` and ``tyre`` , Therefore we use paranthesis **'()'** to chose one of two characters : 
   - pyre <mark>p</mark> <mark>tyre</mark> // "/p|tyre/g"
   - <mark>pyre</mark> <mark>tyre</mark> // /(t|p)yre/g

#### 9.10. Two ways of saving regular expressions in JavaScript: 
1. let reg = /[a-z]/gi;
2. let reg = new RegExp(/[a-z]/, 'gi');

#### 9.11. Practical example of REGEX:
- entire form project-example:
```
// selectors
const inputs = document.querySelectorAll("input");
// patterns
const patterns = {
  telephone: /^/d{11}$/,
  username: /^[a-z\d]{5,10}$/i,
  password: /^[\w@-]{8,20}$/i,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/
}
// validation function
const isValid = (field, pattern) => {
field.value.test(pattern) ? field.classList.add('valid') : field.classList.remove('valid');
}
// inputs events
inputs.forEach((input) => {
  input.oninput = (e) => {
    isvalid(e.target, patterns[input.getAttribute("name")]);
  }
})
```
1. Phone number (UK telephone number ``only 11 digits``) 2 ways: 
   - /^[0-9]{11}$/
   - /^/d{11}$/

2. User-name (alphanumeric or just text between 5 - 20):
   - /^[a-z\d]{5,10}$/i
   - /^[a-z0-9]{5,10}$/i

3. Password (must be alphanumeric and [@-and also _ is allowed] between 8 - 20 characters):
    - /^[\w@-]{8,20}$/i
    - /^[a-z\d@_-]{8,20}$/i

4. Profile slug (must contain only lowercase letters, numbers, hyphens and be between 8-20 charachters):
    - /^[a-z\d-]{8,20}$/

5. Email - name@domain.extension.again (theboss@theninja.co.uk)(email must be a valid address, e.g. me@mydomain.com):
      - /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/
      1. name - any letters, numbers, dots and/or hyphens in small charachters
      2. domain - any letters, numbers and/or hyphens
      3. extension - any letters
      4. again - a dot then any letters