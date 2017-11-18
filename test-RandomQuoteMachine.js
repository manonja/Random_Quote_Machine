import test from 'ava';
import Random_Quote_Machine from "../../assets/index";

test('random quote is generated', t => {
	t.is(index.getRandomQuote(quotes), quotes[Math.floor((Math.random() * (quotes.length)))]);
});
