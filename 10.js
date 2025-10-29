/**
 Create a list representing parking spots, where 1 means occupied and 0 means empty.

Start checking each spot in order from the beginning.

Look for the first empty spot (the first 0).

When you find it, record its position (index).

Stop checking further spots after finding the first empty one.

Output the position of that first empty spot.
 */

let park = [1,1,1,1,0,1,1,1,1,0]

for (let i = 0; i < park.length; i++) {
    if (park[i] === 0) {
        console.log(i);
        break
    }
}

