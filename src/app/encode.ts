/**
 A function for converting hex <-> dec w/o loss of precision.
 *
 The problem is that parseInt("0x12345...") isn't precise enough to convert
 64-bit integers correctly.
 *
 Internally, this uses arrays to encode decimal digits starting with the least
 significant:
 8 = [8]
 16 = [6, 1]
 1024 = [4, 2, 0, 1]
 We can implement a general add(x, y) function for these arrays of digits. This turns out to be all we need to do the base conversion.

Since 2x = x + x, an add function lets you compute all the powers of two:

2^0 = [1]
2^1 = add(2^0, 2^0) = add([1], [1]) = [2]
2^2 = add(2^1, 2^1) = add([2], [2]) = [4]
2^3 = add(2^2, 2^2) = add([4], [4]) = [8]
2^4 = add(2^3, 2^3) = add([8], [8]) = [6, 1]
2^5 = add(2^4, 2^4) = add([6, 1], [6, 1]) = [2, 3]
…
Now, given a hex string, we can easily break it down into binary digits. Each hex digit corresponds to four binary digits. These binary digits tell us how to form the number by adding together powers of two. We already have an add function and the powers of two, so we're all set!

For example, to convert 0x123 from hex to decimal, we:

Convert 0x123 → (binary) 0001 0010 0011
Compute powers of two:
 2^0 = [1]
 2^1 = [2]
 2^5 = [2, 3]
 2^8 = [6, 5, 2]
Add them up: add([1], add([2], add([2, 3], [6, 5, 2]))) = [1, 9, 2]
Convert back to a string: [1, 9, 2] → "291".
 */

/**
 * baseConvert converts a given string with a given encoding alphabet
 * into another base with another given encoding alphabet.  
 * Base is assumed from character sizes. (eg 'abcd' = base 4)
 * @param  {string} string The string to be encoded into another base.  
 * @param  {string} inputCharacters The characters of the input alphabet (i.e. 0123456789ABCDEF)
 * @param  {string} outputCharacters The characters of the output alphabet (i.e. ABCDEFGHJKLMNPQRSTUVWXYZ234567)
 * 
 * Change {boolean} isPadding to enable/disable padding of first character in input/output string
 */
export function baseConvert(stringToEncode:string, inputCharacters: string, outputCharacters: string) {
    if (stringToEncode == "" || inputCharacters == "" || outputCharacters == "") {
		return null;
	}

    var isPadding = true
    // Adds two arrays for the given base, returning the result.
    const add = (x:number[], y:number[], base:number) => {
        let z = [];
		const n = Math.max(x.length, y.length);
		let carry = 0;
		let i = 0;
		while (i < n || carry) {
			const xi = i < x.length ? x[i] : 0;
			const yi = i < y.length ? y[i] : 0;
			const zi = carry + xi + yi;
			z.push(zi % base);
			carry = Math.floor(zi / base);
			i++;
		}
		return z;
    }

    // Returns a*x, where x is an array of decimal digits and a is an ordinary
    // JavaScript number. base is the number base of the array x.
    const multiplyByNumber = (num: number, power: number[], base: number) => {
		//if (num < 0) return null;
		if (num === 0) return [];

		let result: number[] = [];
		while (true) {
			num & 1 && (result = add(result, power, base));
			num = num >> 1;
			if (num === 0) break;
			power = add(power, power, base);
		}

		return result;
	}

    // decodeInput finds the position of each character in alphabet, thus decoding
	// the input string into a useful array.  
	const decodeInput = (string: string) => {
		const digits = string.split('');
		let arr = [];
		for (let i = digits.length - 1; i >= 0; i--) {
			const n = inputCharacters.indexOf(digits[i])
			// Continue even if character is not found (possibly a padding character.)
			if (n == -1) continue;
			// Alternatively, fail on bad character
			// if (n == -1) return null;
			arr.push(n);
		}
		return arr;
	}

    const fromBase = inputCharacters.length;
	const toBase = outputCharacters.length;
	// TODO support Base 1 decoding.  
	if (toBase == 1) return;
	const digits = decodeInput(stringToEncode);
	if (digits === null) return null;

    // Get an array of what each position of character should be. 
	let outArray:number[] = [];
	let power = [1];
	for (let i = 0; i < digits.length; i++) {
		outArray = add(outArray, multiplyByNumber(digits[i], power, toBase), toBase);
		power = multiplyByNumber(fromBase, power, toBase);
	}

    // Finally, decode array into characters.  
	let out = '';

	// Preceding padding characters - Add back in preceeding padding characters.
	if(isPadding){
		let inPad = inputCharacters.charAt(0);
		let outPad = outputCharacters.charAt(0);
		let i=0;
		while(i<stringToEncode.length){
			if (stringToEncode.charAt(i) !== inPad) break;
			out += outPad;
			i++;
		}
	}


	for (let i = outArray.length - 1; i >= 0; i--) {
		out += outputCharacters[outArray[i]];
	}


	return out;
}