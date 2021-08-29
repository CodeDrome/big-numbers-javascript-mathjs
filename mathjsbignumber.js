

"use strict"


window.onload = function()
{
    // safeIntegers();

    // BigInts();

    BigNumbers();
}


function output(text)
{
    const p = document.createElement("p");
    p.innerHTML = text;
    document.body.appendChild(p);
}


function safeIntegers()
{
    output("Safe Integers<br>-------------<br><br>");

    output(`Number.MAX_SAFE_INTEGER = ${Number.MAX_SAFE_INTEGER}`);
    output(`Number.MIN_SAFE_INTEGER = ${Number.MIN_SAFE_INTEGER}`);

    const safePos = Math.pow(2, 53) - 1;
    const unsafePos = Math.pow(2, 53);
    const safeNeg = -(Math.pow(2, 53) - 1);
    const unsafeNeg = -(Math.pow(2, 53));

    output("<br>");

    output(`safePos = ${safePos}`);
    output(`Number.isSafeInteger(safePos) = ${Number.isSafeInteger(safePos)}`);

    output("<br>");

    output(`unsafePos = ${unsafePos}`);
    output(`Number.isSafeInteger(unsafePos) = ${Number.isSafeInteger(unsafePos)}`);

    output("<br>");

    output(`safeNeg = ${safeNeg}`);
    output(`Number.isSafeInteger(safeNeg) = ${Number.isSafeInteger(safeNeg)}`);

    output("<br>");

    output(`unsafeNeg = ${unsafeNeg}`);
    output(`Number.isSafeInteger(unsafeNeg) = ${Number.isSafeInteger(unsafeNeg)}`);
}


function BigInts()
{
    output("BigInt<br>------<br><br>");

    const big1 = 9007199254740992n; // 9,007,199,254,740,992
    const big2 = 9007199254740993n; // 9,007,199,254,740,993

    output(`typeof(big1) = ${typeof(big1)}`);

    output(`<br>big1 = ${big1}`);
    output(`big2 = ${big2}`);

    const r = 3n / 2n;
    output(`<br>3n / 2n = ${3n / 2n}`);

    try
    {
        output("<br>Math.min(3n, 5n, 7n, 9n)");
        output(Math.min(3n, 5n, 7n, 9n));
    }
    catch (e)
    {
        output(e);
    }

    try
    {
        output("<br>Math.sign(64n)");
        output(Math.sign(64n));
    }
    catch (e)
    {
        output(e);
    }
}


function BigNumbers()
{
    output("MathJS Big Numbers<br>==================<br><br>");

    output(`Size of observable universe in kilometres:
            ${math.format(math.bignumber(880000000000000000000000000),
            {notation: 'fixed'})}
            (880,000,000,000,000,000,000,000,000)`);

    output(`<br>math.add(math.bignumber(10), math.bignumber(13)) = ${math.add(math.bignumber(10), math.bignumber(13))}`);
    output(`math.abs(math.bignumber(-128)) = ${math.abs(math.bignumber(-128))}`);
    output(`math.floor(math.bignumber(12.5589)) = ${math.floor(math.bignumber(12.5589))}`);
    output(`math.ceil(math.bignumber(12.5589)) = ${math.ceil(math.bignumber(12.5589))}`);
    output(`math.mod(math.bignumber(22), math.bignumber(10)) = ${math.mod(math.bignumber(22), math.bignumber(10))}`);

    output(`<br>math.sqrt(math.bignumber(2)) [default precision 64] = ${math.sqrt(math.bignumber(2))}`);
    math.config({ precision: 32 });
    output(`math.sqrt(math.bignumber(2)) [precision 32] = ${math.sqrt(math.bignumber(2))}`);
    math.config({ precision: 128 });
    output(`math.sqrt(math.bignumber(2)) [precision 128] = ${math.sqrt(math.bignumber(2))}`);

    const PlanckLength = math.bignumber(0.000000000000000000000000000000000016);
    output("<br>Planck Length<br>-------------");
    output(PlanckLength);
    output(math.format(PlanckLength, {notation: 'fixed'}));

    const atomsInUniverse = math.bignumber(1e+80);
    output("<br>Atoms in universe<br>-----------------");
    output(atomsInUniverse);
    output(math.format(atomsInUniverse, {notation: 'fixed'}));
}
