/* --------------------------------------------------------------------
 *	easyslideshow
 *	This script is part of Onlinetools 
 *  http://www.onlinetools.org/easyslideshow/
 *  for technical info contact Chris (info@onlinetools.org)
 *	free of use with these lines included!  
 *
 *  Version 1.0 initial                                      
 * --------------------------------------------------------------------*/

/* --------------------------------------------------------------------
 *	Setting up the data.
 * --------------------------------------------------------------------*/
rotator=true; 	// needed for initialising the rotator
n=0;			// initialising the first image 
// The images, add and delete yours here...
theImages="http://www.law.widener.edu/i/home/home443x261_j.jpg, http://www.law.widener.edu/i/home/home443x261_e.jpg, http://www.law.widener.edu/i/home/home443x261_b.jpg, http://www.law.widener.edu/i/home/home443x261_c.jpg, http://www.law.widener.edu/i/home/home443x261_d.jpg, http://www.law.widener.edu/i/home/home443x261_e.jpg, http://www.law.widener.edu/i/home/home443x261_f.jpg, http://www.law.widener.edu/i/home/home443x261_g.jpg, http://www.law.widener.edu/i/home/home443x261_h.jpg, http://www.law.widener.edu/i/home/home443x261_i.jpg".split(", ");
allImages=theImages.length;
// Creating the needed image objects => preloading
imgObjects=new Array();
for (i in theImages){
	imgObjects[i]=new Image();
	imgObjects[i].src=theImages[i];
	}
/* --------------------------------------------------------------------
 *	function autoplay() 
 *  Allows to automatically change the images.
 *  Options:
 *    run - can be 1 or 0, 1 starts the play, 0 ends it 
 *    srcimage - defines the image that will be replaced by the others
 *    direction - 1 forward -1 backward
 *    speed - speed in milliseconds
 *  requires the function rotate()
 * --------------------------------------------------------------------*/
function autoplay(run,srcimage,direction,speed){
	// delete old settings
	clearInterval(rotator)
	if (run != 0){rotator=setInterval("rotate('"+srcimage+"',"+direction+")",speed)}
	else{clearInterval(rotator)}
	}

/* --------------------------------------------------------------------
 *	function rotate() 
 *  Allows to change the source image to the next or last in the list.
 *  Options:
 *    srcimage - defines the image that will be replaced by the others
 *    direction - 1 forward -1 backward
 * --------------------------------------------------------------------*/
function rotate(srcimage,direction){
n=n+direction;
if (n==allImages) n=0;
if (n==-1) n=allImages-1;
document.images[srcimage].src=imgObjects[n].src;
}
