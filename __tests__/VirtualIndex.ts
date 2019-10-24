// import virtualIndex from '../src/lib/VirtualIndex';
import { readModule } from '../src/lib/VirtualIndex';


describe('VirtualIndex', () => {
    it('Should return an import', () => {
        expect(readModule('C:/dev/virtual-index/test/fixtures/example1.js')).toEqual({
            example1a: 'a',
            example1b: 'b'
        });
    });
});
