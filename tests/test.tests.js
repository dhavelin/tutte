

describe('Service: converters', function() {
describe('Converting numbers to bit patterns', function() {

    var convertersService;

    beforeEach(module('tutte'));

    // Wrap the parameter in underscores
    beforeEach( inject( function(_converters_){
      convertersService = _converters_;
    }));

    it('3 converts to bit pattern ddd', function() {
      expect( convertersService.num2char(3) ).toEqual('O');
    });

  });

});