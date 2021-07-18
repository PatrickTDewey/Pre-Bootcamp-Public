/*The Story: We want an app that once it measures a kid's height, can display whether the child is tall enough to ride the rollercoaster. We're tasked with building the function that will display the right message to the child.*/

function heightCheck(height){
    if(height > 52){
        console.log(`Hop on the ride, kiddo!`);
    } 
    else {
        console.log(`Sorry bud, maybe next year :)`);
    }
}
heightCheck(23);
heightCheck(53);