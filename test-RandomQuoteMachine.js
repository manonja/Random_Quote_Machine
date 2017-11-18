import test from 'ava';
import Random_Quote_Machine from "../../index";

test('quote', t => {
	t.is(newQuoteGenerated);
});
test('bar', async t => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});
