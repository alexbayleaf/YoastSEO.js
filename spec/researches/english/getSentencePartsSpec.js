var getSentenceParts = require( "../../../js/researches/english/getSentenceParts.js");

describe( "splits English sentences into parts", function() {
	it ( "returns all sentence parts from the auxiliary to the end of the sentence", function() {
		var sentence =  "The English are still having a party.";
		expect( getSentenceParts( sentence )[ 0 ].getSentencePartText() ).toBe( "are still" );
		expect( getSentenceParts( sentence )[ 1 ].getSentencePartText() ).toBe( "having a party." );
		expect( getSentenceParts( sentence ).length ).toBe( 2 );
	} );
	it ( "filters out sentence parts without auxiliary", function() {
		var sentence =  "The English are always throwing parties.";
		expect( getSentenceParts( sentence )[ 0 ].getSentencePartText() ).toBe( "are always" );
		expect( getSentenceParts( sentence ).length ).toBe( 1 );
	} );
} );
