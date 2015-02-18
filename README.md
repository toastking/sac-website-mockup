# Student Activites and SB Union Facilites Operations Website

Spring 2015 Website Redesign for the Stony Brook Student Activities Center.

Uses [JQuery](http://jquery.com/) and [Bootstrap](http://getbootstrap.com/).

## What Does Each File Do?

 - **index.html** : the homepage of the website
 - **main.css** : the main [css stylsheet](http://www.w3schools.com/css/),contains styles for the main content div, body, header, and footer
 - **nav.css** : the stylesheet for the [navbar](http://getbootstrap.com/components/#navbar), overrides Bootstrap's *.navbar-default* class.  Also includes the styles for the reservations button in the navbar.
 - **panels.css** : the stylesheet for the [panels](http://getbootstrap.com/components/#panels) on the homepage. Copies the style of the sections on the [Student Affairs Website](http://studentaffairs.stonybrook.edu/stu/).
 - **search.css** : the stylesheet for the search button.  Uses [css floats](http://www.w3schools.com/css/css_float.asp) to position it on the right.
 - **Gruntfile.js** : used by [Grunt](http://gruntjs.com/), a Javascript automation library.  Includes scripts for automating the validation of the HTML and Boostrap framework (using [BootLint](https://github.com/zacechola/grunt-bootlint)).
 - **./bower_components** : includes the jQuery library and other things installed using [Bower](http://bower.io/), a Javascript [package manager](http://en.wikipedia.org/wiki/Package_manager).
 - **./assets** : folder containing all the images and other multimedia assets used by the website
 - **./stylesheets** : folder containing all the stylesheets for the website


## FAQ

### What is Bootstrap?
[Bootstrap](http://getbootstrap.com/) is a [responsive](http://alistapart.com/article/responsive-web-design) frontend web design framework.  It allows for websites to be designed quickly and work on a multitude of devices.  The main idea of Bootstrap is applying it's classes to different html elements to style them.  Bootstrap using a [grid system](http://getbootstrap.com/css/#grid), with div's for rows and div's for columns.  By doing something like:

    <div class = "row>
        <div class = "col-sm-12 col-md-6">
            <p> First column </p>
        </div>
        <div class = "col-sm-12 col-md-6">
            <p> Second column </p>
        </div>
    </div>

Will make a row, and then two columns.  On a mobile device ("sm") the columns with be stacked one on top of the other.  This is because by default Bootstrap has 12 columns per row.  On a computer ("md) or higher resolution (such s as tv) it will put the collumns one next to the other, because the class for medium displays is "col-md-6".  Each collumn will take up half of the row, since a row can have a total of 12 columns.

The ".main" *<div>* of the website is a [container](http://getbootstrap.com/css/#overview-container).  The *container* that surrounds all our content allows it to be responsive, it allows it to scale with different screen sizes.  The ".main" css has *margin-left:auto* and *margin-right:auto*, this centers the main content.  It also uses [relative sizing](http://www.w3schools.com/cssref/css_units.asp), **ex:** *width: 80%* , this also allows the content to change it's size relative to the screen the user is using to view the website.

### What is Jquery?
