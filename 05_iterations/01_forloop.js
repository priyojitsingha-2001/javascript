// for loop
for (let index = 0; index < 20; index++) {
    console.log(index);
}

// break
for (let index = 0; index < 20; index++) {

    if (index == 5) {
        console.log(`indx is 5`);
        break;
    }
    else
        console.log(`index is ${index}`);

}

// continue
for (let index = 0; index < 20; index++) {

    if (index == 5) {
        console.log(`indx is 5 CONTINUE`);
        continue;
    }
    else
        console.log(`index is ${index}`);

}