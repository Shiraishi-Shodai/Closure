function makeFunction() {
    let x = 123; // myFunction() から参照できる

    function myFunction() {
        x += 1;
        console.log("xの値は%dです。", x);
    };

    return myFunction; // 関数を戻り値にする
}


let x = 456; // myFunction() から参照できない

const f = makeFunction();
f();
