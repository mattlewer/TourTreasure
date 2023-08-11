import {generateInitials} from '../../src/services/generateInitals';

describe('useDistance', () => {
    test('returns correct distance', () => {
        const testName = 'Matthew Lewer'; 
        const result = generateInitials(testName)
        expect(result).toEqual('ML')
    })
})