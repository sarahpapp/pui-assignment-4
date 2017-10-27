/*** Object Constructor ***/
function cartBun(name, image, description, price, pack) {
  this.name = name;
  this.image = image;
  this.description = description;
  this.price = price;
  this.pack = pack;
}

/*** Global Variables: product array, itemCount for cart counter, and atcQuantity or add to cart (atc) 
quantity to track quantity selection***/
var product = [];
var itemCount = product.length;
var atcNum = $("#qty").val();
var name = "Carrot Cake Bun";
var image = "images/carrot_pdp.png";
var description = "Single bun!";
var pack = "single";



/*** Document Load ****/
$(document).ready(function() {

    $("#packoptions").hide();

    $("#carousel-panel-2").hide();

    /* Product page options and image/info updates. Note that twelve pack image is from Hopeless Housewive 
    (http://www.thehopelesshousewife.com/?hhw_recipes=apple-pie-cinnamon-rolls#.WfKmwBNSyfU) and the six 
    pack image is from Paula Deen (http://www.foodnetwork.com/recipes/paula-deen/cinnamon-rolls-recipe-1946030)*/
    $('input:radio[name="boxsize"]').change(function(){
            if (this.checked && this.value == 'Six-er (6)') {
              $("#packoptions").show();
              $("#product-name").text("Carrot Cake Bun - Six Pack");
              $("#description").text("Six delicious buns!");
              $("#price").text("$24.99");
              $("#product-img").attr("src", 'images/sixbuns.jpg');
            }

            else if (this.checked && this.value == 'Doz-er (12)'){
              $("#packoptions").show();
              $("#product-name").text("Carrot Cake Bun - Twelve Pack");
              $("#description").text("Twelve delicious buns!");
              $("#price").text("$44.99");
              $("#product-img").attr("src", 'images/twelvebuns.jpg');  
            }

            else {
              $("#packoptions").hide();
              $("#product-name").text("Carrot Cake Bun");
              $("#description").text("One delicious bun!");
              $("#price").text("$4.99");
              $("#product-img").attr("src", 'images/carrot_pdp.png');  
              }
          });
    
    /*Carousel controls */
    $("#carousel-next").click(function() {
      $("#carousel-panel-1").toggle();
      $("#carousel-panel-2").toggle();
    });

    $("#carousel-prev").click(function() {
      $("#carousel-panel-1").toggle();
      $("#carousel-panel-2").toggle();
    });

    /*Local storage for product page*/
    $("#intro-content").click(function() {
    // add new product to product array
        var currentItem = new cartBun(name, image, description, price, pack);
        product.push(currentItem);
        localStorage.setItem("savedProduct", JSON.stringify(product));
        // cart counter 
        $('#itemCount').html(itemCount).css('display', 'block');
        var numCart = product.length;
        $("#itemCount").text(numCart);

      });

  });


  





    
 
 
      
