import {distanceInKmBetweenCoordinates} from '../../../src/services/hooks/useDistance';

describe('useDistance', () => {
    test('returns correct distance', () => {
        const userLat = 51.5; 
        const userLon = 0;
        const locationLat = 38.8;
        const locationLon = -77.1;
        const result = distanceInKmBetweenCoordinates(userLat, userLon, locationLat, locationLon);
        expect(result).toEqual(5918.19)
    })
})