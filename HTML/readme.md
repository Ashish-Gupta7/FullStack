###### `ALL ABOUT CSS ANIMATION` ######


## `Transition` ##
* transition shorthand - transition: transition-property transition-duration transition-timing-function transition-delay;

* Apply a transition to specific properties
1. transition-property: property1, property2, ...;
2. transition-duration: time;
3. transition-timing-function: timing-function;
4. transition-delay: time;

## `Transform` ##
1. Translate: Moves an element from its current position along the X and Y-axis.
   transform: translate(X, Y);
2. Rotate: Rotates an element clockwise or counterclockwise around a specified point.
   transform: rotate(angle);
3. Scale: Increases or decreases the size of an element.
   transform: scale(X, Y);
4. Skew: Skews an element along the X and Y-axis.
   transform: skew(X, Y);
5. Matrix: A 2D transformation that allows you to combine multiple transformations.
   transform: matrix(scaleX, skewY, skewX, scaleY, translateX, translateY);
6. Perspective: Applies a 3D perspective transformation to an element.
   transform: perspective(n);

    perspective property 3D transformations ko apply karne mein madad karta hai. Ye property sirf 3D transformed elements par asar karta hai. It does not affect 2D transformed elements.
    Is property ko transform-style: preserve-3d; ke saath use karna common hai, jo 3D transformed parent element ke andar ke child elements ka 3D positioning maintain rakhta hai.
    perspective: none|length|initial|inherit;
        none: No perspective is applied.
        length: Specifies the depth of the perspective effect.
        initial: Sets the property to its default value.
        inherit: Inherits the property from its parent element.
    
    Examples:
    perspective: 1000px; sets the perspective point at 1000 pixels from the viewer.

7. `transform-style`
   transform-style property CSS mein 3D transformed elements ke child elements ka 3D positioning ko maintain karne ke liye use hoti hai. Jab hum kisi parent element ko 3D mein transform karte hain, to uske child elements ka bhi 3D mein dikhna chahiye.
        <!-- transform-style: flat|preserve-3d|initial|inherit; -->
            flat: Ye default value hoti hai. Isme 3D transformed elements ke child elements 2D plane par rehte hain. 3D space ka effect nahi hota.
            preserve-3d: Ye value 3D transformed elements ke child elements ko bhi 3D mein rakhta hai. Isse parent element ke 3D transformations child elements par bhi apply hote hain.
            initial: Ye property ko default value par set karta hai.
            inherit: Ye property ko uske parent element se inherit karwata hai.
    
    transform-style property keval 3D transformed elements par asar karta hai.
    Agar aap preserve-3d value ka upyog nahi karte hain, to 3D transformed parent element ke child elements 2D plane par hi dikhenge.
    Ye property 3D transformed elements ke child elements ke saath complex 3D effects aur animations create karne mein madad karta hai.

8. `transform-origin`
   Ye property ek element ke 3D transformations ka origin point set karti hai. Iska matlab hai ki kis point par element ka transformation hoga.

   `transform-origin: x-axis y-axis z-axis;`
        x-axis: X-axis ke liye origin point ka position. Default value 50% hai.
        y-axis: Y-axis ke liye origin point ka position. Default value 50% hai.
        z-axis: Z-axis ke liye origin point ka position. Default value 0 hai.
    
    * X-axis aur Y-axis ke liye origin point center mein set kiya gaya hai.
        <!-- transform-origin: center center; -->
    * X-axis ke liye origin point left side par aur Y-axis ke liye center mein set kiya gaya hai.
        <!-- transform-origin: left center; -->
    * X-axis aur Y-axis ke liye origin point top left corner mein set kiya gaya hai.
        <!-- transform-origin: top left; -->

9. `transform-box`
    Ye property define karta hai ki transform property ke functions ka kis reference box ke liye apply karna hai.
    `transform-box: content-box | border-box | fill-box | view-box;`
        content-box: Default value. transform property ke functions content box ke liye apply honge.
        border-box: transform property ke functions border box ke liye apply honge.
        fill-box: transform property ke functions fill box ke liye apply honge. Fill box, background-image, background-color, aur border box ke area ko cover karta hai.
        view-box: transform property ke functions view box ke liye apply honge.
    



* You can also use the negative value in traslate, rotate, scale, skew...

* You can combine multiple transform functions by separating them with spaces. example =>
    transform: translate(50px, 50px) rotate(45deg) scale(1.5, 1.5);

* The transform property is often used in combination with the transition property to create smooth animations.exmaple =>
    div {
        transition: transform 0.5s ease;
    }
    div:hover {
        transform: scale(1.5);
    }