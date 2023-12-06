# What I've learned from this project: 

## 1. aspect-ratio - which helps us to define height respectively:
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
## 4. Grid-auto-row (using this we can give the same height to all of rows, even if the number of row is not defined):
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
## 9. Regex - "https://regex101.com/" website for practicing your Regular Expression
1. Reqular expressions start with '/' and end with '/'. For example this **/ninja/** will math this:
-<p>
<mark style="background-color: yellow">ninja</mark>ninja
</p>

2. Global match - is when we look for all elements with the same pattern we have defined. To make REGEX global we add letter **g** after **/** charachter. For example this **/ninja/g** will result in:
-<p>
<mark>ninja</mark><mark>ninja</mark>
</p> 

3. REGEX by default is 
- **sensitive** which means it will match only the exact charchter with exact letters (capital or small letter). For example this **/ninja/g** will result in:
-<p>
<mark>ninja</mark>Ninja
</p> 

- To make REGEX **insensitive** we add **i** after **/**. For example this **/ninja/i** will result in:
-<p>
<mark>Ninja</mark>ninja
</p> 

- To make REGEX **global-insensitive** we add **i** after **/**. For example this **/ninja/gi** will result in:
-<p>
<mark>Ninja</mark><mark>ninja</mark>
</p> 

4. Character Sets - we use them to match variety of different charachters within the same position

