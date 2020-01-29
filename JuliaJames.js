/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x < 21) {
    // check divisibility
    if (x % 3 === 0 && x % 5 === 0) {
        // print Julia, James, or JuliaJames
        console.log("JuliaJames")
    } else if (x % 3 === 0) {
        console.log("Julia");
    } else if (x % 5 === 0) {
        console.log("James");
    } else {
        console.log(x);
    }
    // increment x
    x+=1;
}
